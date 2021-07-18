import { API_URL, SPOTIFY_CLIENT_ID } from '@/config/index';
import { useEffect, useState } from 'react';
import SpotifyWebApi from 'spotify-web-api-node';
import useAuth from 'utils/useAuth';
import {
    DashboardWrapper, LyricsWrapper, PlayerWrapper, MainLayoutWrapper, TracksWrapper,
    SideBarWrapper, SidebarItem
} from './StyledDashboard';
import TrackItem from '@/components/TrackItem/TrackItem';
import Player from '@/components/Player/Player';
import axios from 'axios';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';

const spotifyApi = new SpotifyWebApi({
    clientId: SPOTIFY_CLIENT_ID
})

const Dashboard = ({ code }) => {

    const accessToken = useAuth(code);
    const [search, setSearch] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [playingTrack, setPlayingTrack] = useState();
    const [lyrics, setLyrics] = useState();

    useEffect(() => {
        if (!accessToken) return;
        spotifyApi.setAccessToken(accessToken);
    }, [accessToken]);

    useEffect(async () => {
        let cancel = false;
        if (cancel) return;
        if (!search) return setSearchResults([]);
        if (!accessToken) return;
        const result = await spotifyApi.searchTracks(search);
        setSearchResults(result.body.tracks.items.map((track) => {
            const smallestImage = track.album.images.reduce((smallest, image) => {
                if (image.height < smallest.height) return image
                return smallest;
            }, track.album.images[0])
            return {
                artist: track.artists[0].name,
                title: track.name,
                uri: track.uri,
                albumUrl: smallestImage.url
            }
        }));
        return () => cancel = true;
    }, [search, accessToken])


    useEffect(async () => {
        if (!playingTrack) return;
        const result = await axios.get(`${API_URL}track/lyrics`, {
            params: {
                track: playingTrack.title,
                artist: playingTrack.artist
            }
        });
        setLyrics(result.data.data);

    }, [playingTrack])

    const chooseTrack = (track) => {
        setPlayingTrack(track);
        setSearch('');
        setLyrics('');
    }
    return (
        <DashboardWrapper>
            {/* <SideBarWrapper>
                <SidebarItem>
                    <HomeIcon className="home-icon" />
                    <p>Home</p>
                </SidebarItem>
                <SidebarItem >
                    <SearchIcon className="search-icon" />
                    <p>Search</p>
                    <input type="text" placeholder="Search songs" onChange={(e) => setSearch(e.target.value)} />
                </SidebarItem>
            </SideBarWrapper> */}

            <MainLayoutWrapper>
                <TracksWrapper>
                    {searchResults.map(track => (
                        <TrackItem chooseTrack={chooseTrack} track={track} key={track.uri} />
                    ))}
                </TracksWrapper>
                <LyricsWrapper>
                    {searchResults.length === 0 && lyrics && (
                        <p className="lyrics">{lyrics}</p>
                    )}
                </LyricsWrapper>
                <PlayerWrapper>
                    <Player accessToken={accessToken} trackUri={playingTrack?.uri} />
                </PlayerWrapper>
            </MainLayoutWrapper>


        </DashboardWrapper>
    )
}

export default Dashboard
