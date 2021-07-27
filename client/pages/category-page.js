import CategoryPlaylist from '@/components/CategoryPlaylist/CategoryPlaylist';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const CategoryPage = () => {

    const categoryPlaylists = useSelector(state => state.category.categoryPlaylists);
    const [playlists, setPlaylists] = useState([]);
    useEffect(() => {
        if (!categoryPlaylists) return;
        setPlaylists(categoryPlaylists.map((playlist) => {
            const smallestImage = playlist.images.reduce((smallest, image) => {
                if (smallest.height < image.height) return smallest
                return image;
            }, playlist.images[0]);
            const r = () => Math.random() * 256 >> 0;
            const color = `rgb(${r()}, ${r()}, ${r()})`;

            return {
                id: playlist.id,
                name: playlist.name,
                totalTracks: playlist.tracks.total,
                playlistImage: smallestImage.url,
                uri: playlist.uri,
                backgroundColor: color
            }
        }));
    }, [categoryPlaylists])
    return (
        <CategoryPlaylist playlists={playlists} />
    )
}

export default CategoryPage
