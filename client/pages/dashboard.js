import Dashboard from "@/components/Dashboard/Dashboard";
import { DashboardWrapper } from "@/components/Dashboard/StyledDashboard";
import { getNewReleases } from "@/store/actions/album.actions";
import { getNewPlaylists } from "@/store/actions/playlist.actions";
import { getCategories } from "@/store/actions/category.actions";
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useAuth from "utils/useAuth";

const DashboardPage = () => {
    const accessToken = useSelector(state => state.auth.accessToken);
    const dispatch = useDispatch();
    useAuth();

    useEffect(() => {
        if (!accessToken) return;
        dispatch(getNewReleases(accessToken));
        dispatch(getNewPlaylists(accessToken));
        dispatch(getCategories(accessToken));
    }, [accessToken, dispatch]);

    return (
        <DashboardWrapper>
            {accessToken ? <Dashboard /> : <p></p>}
        </DashboardWrapper>
    )
}

export default DashboardPage
