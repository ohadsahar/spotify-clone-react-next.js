import { API_URL, SPOTIFY_CLIENT_ID } from '@/config/index';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import SpotifyWebApi from 'spotify-web-api-node';
import {
    DashboardWrapper, MainLayoutWrapper
} from './StyledDashboard';

const spotifyApi = new SpotifyWebApi({
    clientId: SPOTIFY_CLIENT_ID
})

const Dashboard = () => {

    const accessToken = useSelector(state => state.auth.accessToken);
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
    }, [search, accessToken]);


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
            <p>Last Invites</p>
            <MainLayoutWrapper>
                {/* <TracksWrapper>
                    {searchResults.map(track => (
                        <TrackItem chooseTrack={chooseTrack} track={track} key={track.uri} />
                    ))}
                </TracksWrapper> */}
                {/* <LyricsWrapper>
                    {searchResults.length === 0 && lyrics && (
                        <p className="lyrics">{lyrics}</p>
                    )}
                </LyricsWrapper>
                 <PlayerWrapper>
                    <Player accessToken={accessToken} trackUri={playingTrack?.uri} />
                </PlayerWrapper> 
                 */}
            </MainLayoutWrapper>
        </DashboardWrapper>
    )
}

export default Dashboard
