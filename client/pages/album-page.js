import Album from '@/components/Album/Album';
import Loading from '@/components/Loading/loading';
import { setCurrentTrack } from '@/store/actions/player.actions';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import useAuth from 'utils/useAuth';
import { getSmallestImage } from 'utils/util.service';

const AlbumPage = () => {
    const dispatch = useDispatch();
    const album = useSelector(state => state.album.currentAlbum);
    const isLoading = useSelector(state => state.loading.loading);
    const [currentAlbum, setCurrentAlbum] = useState();
    useAuth();

    const buildArrayWithArtistsNamesOnly = (track) => {
        return track.artists.map((artist) => {
            return artist.name;
        });
    }

    useEffect(() => {
        if (!album) {
            window.location = '/dashboard';
        };
        const smallestImage = getSmallestImage(album);
        const albumTracks = album.tracks.items.map((track) => {
            const currentTrackArtists = buildArrayWithArtistsNamesOnly(track);
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
            {!isLoading ? <div>
                {currentAlbum !== null ? <Album changeTrack={changeTrack} currentAlbum={currentAlbum} /> : null}
            </div> : <Loading />}

        </div>
    )
}

export default AlbumPage
