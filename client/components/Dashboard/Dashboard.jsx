import { getCurrentAlbum } from '@/store/actions/album.actions';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRandomColor } from 'utils/util.service';
import Categories from '../Categories/Categories';
import Loading from '../Loading/loading';
import Playlist from '../Playlist/Playlist';
import {
    AlbumsWrapper, AlbumWrapper, ArtistInfoWrapper, DashboardWrapper, PlaylistWrapper, CategoriesWrapper
} from './StyledDashboard';


const Dashboard = () => {
    const data = useSelector(state => state.album.albums);
    const playlistsToHandle = useSelector(state => state.playlist.playlists);
    const categories = useSelector(state => state.category.categories);
    const accessToken = useSelector(state => state.auth.accessToken);
    const [albumsToShow, setAlbumsToShow] = useState([]);
    const [playlistsToShow, setPlaylists] = useState([]);
    const [categoriesToShow, setCategories] = useState([]);
    const isLoading = useSelector(state => state.loading.loading);
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

        setCategories(categories.map((category) => {
            const smallestImage = category.icons.reduce((smallest, image) => {
                if (image.height < smallest.height) return image
                return smallest;
            }, category.icons[0]);
            return {
                id: category.id,
                name: category.name,
                image: smallestImage,
            }
        }));
    }, [categories])

    useEffect(() => {
        if (!playlistsToHandle) return;
        setPlaylists(playlistsToHandle.map((playlist) => {
            const smallestImage = playlist.images.reduce((smallest, image) => {
                if (image.height > smallest.height) return image
                return smallest;
            }, playlist.images[0]);
            return {
                name: playlist.name,
                description: playlist.description,
                playlistImage: smallestImage.url,
                total: playlist.tracks.total,
                uri: playlist.id,
                backgroundColor: getRandomColor()
            }
        }));
    }, [playlistsToHandle]);

    const getCurrentAlbumSongs = (albumID) => {
        dispatch(getCurrentAlbum(albumID, accessToken));
        router.push('/album-page');
    }

    return (
        <div>
            {!isLoading ? <DashboardWrapper>
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
                {playlistsToShow.length}
                {playlistsToShow.length > 0 ? <Playlist playlists={playlistsToShow} /> : null}
                <h1>Top Categories</h1>
                {categoriesToShow.length}
                {categoriesToShow.length > 0 ? <Categories categories={categoriesToShow} /> : null}
            </DashboardWrapper > : <Loading />}
        </div>
    )
}

export default Dashboard
