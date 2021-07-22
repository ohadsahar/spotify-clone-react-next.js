import PlayListPageItem from '@/components/PlayListPageItem/PlayListPageItem';
import { setCurrentTrack } from '@/store/actions/track.actions';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { PlaylistPageWrapper, ArtistPlayListWrapper } from './StyledPlaylistPage';

const PlaylistPage = () => {
    const dispatch = useDispatch();
    const playlistTracks = useSelector(state => state.track.playlistTracks);
    const [playlistTracksToShow, setPlaylistTracks] = useState();
    const currentPlaylist = useSelector(state => state.track.currentPlaylist);

    useEffect(() => {
        if (!playlistTracks) return;
        const tracks = playlistTracks.map(({ track }) => {
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
        dispatch(setCurrentTrack(track));
    }
    return (
        <PlaylistPageWrapper>
            <div>
                <ArtistPlayListWrapper>
                    <p className="title">{currentPlaylist.name}</p>
                    <img src={currentPlaylist.playlistImage} />
                </ArtistPlayListWrapper>
                {playlistTracksToShow && playlistTracksToShow.map((track) => (
                    <PlayListPageItem track={track} chooseTrack={chooseTrack} />
                ))}
            </div>

        </PlaylistPageWrapper>
    )
}

export default PlaylistPage;
