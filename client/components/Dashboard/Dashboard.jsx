import { useSelector } from 'react-redux';
import { AlbumsWrapper, AlbumWrapper, DashboardWrapper, ArtistInfoWrapper } from './StyledDashboard';
import { useEffect, useState } from 'react';


const Dashboard = () => {
    const data = useSelector(state => state.track.albums);
    const [albumsToShow, setAlbumsToShow] = useState([]);

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
                id: data[index].id, albumImage: smallestImage.url,
                artistsNames: currentArtists
            });
        }
        setAlbumsToShow(albums);
    }, [])



    return (
        <DashboardWrapper>
            <h1>Artists</h1>
            <AlbumsWrapper>
                {albumsToShow.length > 0 && albumsToShow.map(currentAlbum => (
                    <AlbumWrapper>
                        <img src={currentAlbum.albumImage} />
                        <ArtistInfoWrapper>
                            {currentAlbum.artistsNames.map(name => (
                                <p key={name}>{name}</p>
                            ))}
                        </ArtistInfoWrapper>
                    </AlbumWrapper>
                )
                )
                }
            </AlbumsWrapper>
        </DashboardWrapper >
    )
}

export default Dashboard
