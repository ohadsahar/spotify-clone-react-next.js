import PlaylistPage from "@/components/PlaylistPage/PlaylistPage";
import { getPlaylistTracks } from "@/store/actions/playlist.actions";
import { useRouter } from "next/router";
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Playlist = () => {

    const router = useRouter();
    const dispatch = useDispatch();
    const accessToken = useSelector(state => state.auth.accessToken);
    useEffect(() => {
        if (!accessToken) return;
        const playlistID = router.query.playlistID;
        dispatch(getPlaylistTracks(accessToken, playlistID));
    }, [dispatch, accessToken, router.query.playlistID]);

    return (
        <PlaylistPage />
    )
}

export default Playlist;
