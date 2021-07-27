import CategoryPlaylist from '@/components/CategoryPlaylist/CategoryPlaylist';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getRandomColor, getSmallestImage } from 'utils/util.service';

const CategoryPage = () => {

    const categoryPlaylists = useSelector(state => state.category.categoryPlaylists);
    const [playlists, setPlaylists] = useState([]);
    useEffect(() => {
        if (!categoryPlaylists) return;
        setPlaylists(categoryPlaylists.map((playlist) => {
            const smallestImage = getSmallestImage(playlist);
            return {
                id: playlist.id,
                name: playlist.name,
                totalTracks: playlist.tracks.total,
                playlistImage: smallestImage.url,
                uri: playlist.uri,
                backgroundColor: getRandomColor()
            }
        }));
    }, [categoryPlaylists])
    return (
        <CategoryPlaylist playlists={playlists} />
    )
}

export default CategoryPage
