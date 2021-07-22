import PlayListPageItem from '@/components/PlayListPageItem/PlayListPageItem';
import { setCurrentTrack } from '@/store/actions/track.actions';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { PlaylistPageWrapper } from './StyledPlaylistPage';

const PlaylistPage = () => {
    const dispatch = useDispatch();
    const playlistTracks = useSelector(state => state.track.playlistTracks);
    const [playlistTracksToShow, setPlaylistTracks] = useState();
    console.log(playlistTracks);

    useEffect(() => {
        if (!playlistTracks) return;
        const tracks = playlistTracks.map(({ track }) => {
            console.log(track);
            const smallestImage = track.album.images.reduce((smallest, image) => {
                if (image.height < smallest.height) return image
                return smallest;
            }, track.album.images[0]);
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
        console.log(track);
        dispatch(setCurrentTrack(track));
    }
    return (
        <PlaylistPageWrapper>
            {playlistTracksToShow && playlistTracksToShow.map((track) => (
                <PlayListPageItem track={track} chooseTrack={chooseTrack} />
            ))}
        </PlaylistPageWrapper>
    )
}

export default PlaylistPage;
