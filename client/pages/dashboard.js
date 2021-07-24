import Dashboard from "@/components/Dashboard/Dashboard";
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { DashboardWrapper } from "@/components/Dashboard/StyledDashboard";
import { getNewPlaylists } from "@/store/actions/playlist.actions";
import { getNewReleases } from "@/store/actions/album.actions";
import useAuth from "utils/useAuth";

const dashboard = () => {
    const accessToken = useSelector(state => state.auth.accessToken);
    const dispatch = useDispatch();
    useAuth();

    useEffect(async () => {
        if (!accessToken) return;
        dispatch(getNewReleases(accessToken));
        dispatch(getNewPlaylists(accessToken));
    }, [accessToken]);

    return (
        <DashboardWrapper>
            {accessToken ? <Dashboard /> : <p>Loading</p>}
        </DashboardWrapper>
    )
}

export default dashboard
