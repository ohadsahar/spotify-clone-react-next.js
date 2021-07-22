import { getCurrentAlbum } from '@/store/actions/track.actions';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Playlist from '../Playlist/Playlist';
import {
    AlbumsWrapper, AlbumWrapper, ArtistInfoWrapper, DashboardWrapper
} from './StyledDashboard';


const Dashboard = () => {
    const data = useSelector(state => state.track.albums);
    const playlistsToHandle = useSelector(state => state.track.playlists);
    const accessToken = useSelector(state => state.auth.accessToken);
    const [albumsToShow, setAlbumsToShow] = useState([]);
    const [playlistsToShow, setPlaylists] = useState([]);
    const dispatch = useDispatch();
    const router = useRouter();

    useEffect(() => {
        const albums = [];
        for (let index = 0; index < data?.length; index++) {
            const currentArtists = data[index].artists.map((currentAlbum) => {
                return currentAlbum.name;
            });
            const smallestImage = data[index].images.reduce((smallest, image) => {
                if (image.height < smallest.height) return image
                return smallest
            }, data[index].images[0])
            albums.push({
                id: data[index].id,
                albumName: data[index].name,
                albumImage: smallestImage.url,
                artistsNames: currentArtists
            });
        }
        setAlbumsToShow(albums);
    }, [data]);


    useEffect(() => {
        if (!playlistsToHandle) return;
        const playlists = playlistsToHandle.map((playlist) => {
            const smallestImage = playlist.images.reduce((smallest, image) => {
                if (image.height > smallest.height) return image
                return smallest;
            }, playlist.images[0]);
            return {
                name: playlist.name,
                description: playlist.description,
                playlistImage: smallestImage.url,
                total: playlist.tracks.total,
                uri: playlist.id
            }
        });
        setPlaylists(playlists);
    }, [playlistsToHandle]);

    const getCurrentAlbumSongs = (albumID) => {
        dispatch(getCurrentAlbum(albumID, accessToken));
        router.push('/album-page');
    }



    return (
        <DashboardWrapper>
            <h1>New Albums Releases</h1>
            <AlbumsWrapper>
                {albumsToShow.length > 0 && albumsToShow.map(currentAlbum => (
                    <AlbumWrapper key={currentAlbum.id}
                        onClick={() => getCurrentAlbumSongs(currentAlbum.id)}>
                        <img src={currentAlbum.albumImage} />
                        <ArtistInfoWrapper>
                            <p className="title">{currentAlbum.albumName}</p>
                        </ArtistInfoWrapper>
                    </AlbumWrapper>
                ))}
            </AlbumsWrapper>
            <h1>New Playlists</h1>
            <div>
                {playlistsToShow.length}
                {playlistsToShow.length > 0 ? <Playlist playlists={playlistsToShow} /> : null}
            </div>

        </DashboardWrapper >
    )
}

export default Dashboard
