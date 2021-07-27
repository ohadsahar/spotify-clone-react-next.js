import { CategoryPlaylistWrapper, CategoryPlayListItemWrapper, CategoryInfoWrapper, CategoryPlaylistDivWrapper } from "./StyledCategoryPlaylist"
import { useEffect } from 'react';
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentPlaylist } from "@/store/actions/playlist.actions";
import BackButton from "../BackButton/BackButton";
const CategoryPlaylist = ({ playlists }) => {

    const dispatch = useDispatch();
    const router = useRouter();
    const isLoading = useSelector(state => state.loading.loading);

    useEffect(() => {
        if (playlists.length <= 0 && !isLoading) { router.push('/dashboard'); }
    }, [isLoading]);

    const navigateTo = (playlist) => {

        dispatch(setCurrentPlaylist(playlist));
        router.push({
            pathname: '/playlist',
            query: { playlistID: playlist.id },
        })
    };
    return (
        <CategoryPlaylistDivWrapper>
            <BackButton />
            <h1>Top playlists</h1>
            <CategoryPlaylistWrapper>
                {playlists.map((playlist) => (
                    <CategoryPlayListItemWrapper key={playlist.name} onClick={() => navigateTo(playlist)}>
                        <img src={playlist.playlistImage} />
                        <CategoryInfoWrapper>
                            <p className="title">{playlist.name}</p>
                        </CategoryInfoWrapper>
                    </CategoryPlayListItemWrapper>
                ))}
            </CategoryPlaylistWrapper>
        </CategoryPlaylistDivWrapper>
    )
}

export default CategoryPlaylist
