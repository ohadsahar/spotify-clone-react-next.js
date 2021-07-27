import PlayListPageItem from '@/components/PlayListPageItem/PlayListPageItem';
import { setCurrentTrack } from '@/store/actions/player.actions';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSmallestImage } from 'utils/util.service';
import BackButton from '../BackButton/BackButton';
import Loading from '../Loading/loading';
import { ArtistPlayListWrapper, PlaylistPageWrapper } from './StyledPlaylistPage';

const PlaylistPage = () => {
    const dispatch = useDispatch();
    const [playlistTracksToShow, setPlaylistTracks] = useState();
    const playlistTracks = useSelector(state => state.playlist.playlistTracks);
    const currentPlaylist = useSelector(state => state.playlist.currentPlaylist);
    const isLoading = useSelector(state => state.loading.loading);

    useEffect(() => {

        if (!playlistTracks || currentPlaylist.name === undefined) {
            window.location = '/dashboard';
        };

        const tracks = playlistTracks.map(({ track }) => {
            const smallestImage = getSmallestImage(track.album);
            return {
                name: track.name,
                duration: track.duration_ms,
                uri: track.uri,
                image: smallestImage.url
            }
        });
        setPlaylistTracks(tracks);
    }, [playlistTracks]);

    const chooseTrack = (track) => {
        dispatch(setCurrentTrack(track));
    }

    return (
        <div>
            {!isLoading ?
                <PlaylistPageWrapper>
                    <ArtistPlayListWrapper backgroundColor={currentPlaylist.backgroundColor}>
                        <p className="title">{currentPlaylist.name}</p>
                        <img src={currentPlaylist.playlistImage} />
                        <BackButton />
                    </ArtistPlayListWrapper>
                    {playlistTracksToShow && playlistTracksToShow.map((track) => (
                        <PlayListPageItem key={track.uri} track={track} chooseTrack={chooseTrack} />
                    ))}
                </PlaylistPageWrapper> : <Loading />}
        </div>
    )
}

export default PlaylistPage;
