import Dashboard from "@/components/Dashboard/Dashboard";
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
const dashboard = () => {

    const accessToken = useSelector(state => state.auth.accessToken);
    return (
        <div style={{ display: 'flex' }}>
            {accessToken ? <Dashboard /> : <p>Loading</p>}
        </div>
    )
}

export default dashboard
