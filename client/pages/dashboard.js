import Dashboard from "@/components/Dashboard/Dashboard";
import { useRouter } from "next/router";
import { useEffect, useState } from 'react';
const dashboard = () => {

    const router = useRouter();
    const [code, setCode] = useState(null);
    useEffect(() => {
        setCode(router.query.code);
    }, []);
    return (
        <div>
            {code ? <Dashboard code={code} /> : <p>Loading</p>}
        </div>
    )
}

export default dashboard
