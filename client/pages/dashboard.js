import Dashboard from "@/components/Dashboard/Dashboard";
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getNewPlaylists, getNewReleases } from "@/store/actions/track.actions";
import { DashboardWrapper } from "@/components/Dashboard/StyledDashboard";

const dashboard = () => {
    const accessToken = useSelector(state => state.auth.accessToken);
    const dispatch = useDispatch();

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
