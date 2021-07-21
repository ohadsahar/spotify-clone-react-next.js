import { useSelector } from 'react-redux';
import {
    AlbumsWrapper, AlbumWrapper, DashboardWrapper, ArtistInfoWrapper,
    TracksWrapper, TrackWrapper, CurrentAlbumWrapper, TrackInfo
} from './StyledDashboard';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getCurrentAlbum, setCurrentTrack } from '@/store/actions/track.actions';


const Dashboard = () => {
    const data = useSelector(state => state.track.albums);
    const album = useSelector(state => state.track.currentAlbum);
    const accessToken = useSelector(state => state.auth.accessToken);
    const [albumsToShow, setAlbumsToShow] = useState([]);
    const [currentAlbum, setCurrentAlbum] = useState();
    const dispatch = useDispatch();

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
        if (!album) return;
        const smallestImage = album.images.reduce((smallest, image) => {
            if (image.height < smallest.height) return image
            return smallest
        }, album.images[0]);
        const albumTracks = album.tracks.items.map((track) => {
            const currentTrackArtists = track.artists.map((artist) => {
                return artist.name;
            });
            return { name: track.name, uri: track.uri, artists: currentTrackArtists };
        })
        const albumToShow = { name: album.name, tracks: albumTracks, albumImage: smallestImage.url };

        setCurrentAlbum(albumToShow);
    }, [album]);

    const getCurrentAlbumSongs = (albumID) => {
        dispatch(getCurrentAlbum(albumID, accessToken));
    }

    const changeTrack = (track) => {
        dispatch(setCurrentTrack(track));
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
            {currentAlbum && <CurrentAlbumWrapper>
                <h2>Current Album - {currentAlbum?.name}</h2>
                <TracksWrapper>
                    {currentAlbum && currentAlbum.tracks.map((track, index) => (
                        <TrackWrapper key={index}
                            onClick={() => changeTrack(track)}>
                            <p className="track-id">{index + 1}</p>
                            <img src={currentAlbum?.albumImage} />
                            <TrackInfo>
                                <p className="title">{track?.name}</p>
                                {track.artists.map((artist) => (
                                    <p className="muted">{artist}</p>
                                ))}
                            </TrackInfo>
                        </TrackWrapper>
                    ))}
                </TracksWrapper>
            </CurrentAlbumWrapper>
            }
        </DashboardWrapper >
    )
}

export default Dashboard
