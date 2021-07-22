import Album from '@/components/Album/Album';
import { setCurrentTrack } from '@/store/actions/track.actions';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

const AlbumPage = () => {
    const dispatch = useDispatch();
    const album = useSelector(state => state.track.currentAlbum);
    const [currentAlbum, setCurrentAlbum] = useState();

    useEffect(() => {
        if (!album) return;
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
