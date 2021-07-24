import Album from '@/components/Album/Album';
import { setCurrentTrack } from '@/store/actions/player.actions';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import useAuth from 'utils/useAuth';

const AlbumPage = () => {
    const dispatch = useDispatch();
    const album = useSelector(state => state.album.currentAlbum);
    const [currentAlbum, setCurrentAlbum] = useState();
    useAuth();

    useEffect(() => {
        if (!album) {
            window.location = '/dashboard';
        };
        const smallestImage = album.images.reduce((smallest, image) => {
            if (image.height < smallest.height) return image
            return smallest
        }, album.images[0]);
        const albumTracks = album.tracks.items.map((track) => {
            const currentTrackArtists = track.artists.map((artist) => {
                return artist.name;
            });
            return { name: track.name, uri: track.uri, artists: currentTrackArtists, duration: track.duration_ms };
        })
        const albumToShow = { name: album.name, tracks: albumTracks, albumImage: smallestImage.url };
        setCurrentAlbum(albumToShow);
    }, [album]);

    const changeTrack = (track) => {
        dispatch(setCurrentTrack(track));
    }

    return (
        <div>
            {currentAlbum !== null ? <Album changeTrack={changeTrack} currentAlbum={currentAlbum} /> : null}
        </div>
    )
}

export default AlbumPage
