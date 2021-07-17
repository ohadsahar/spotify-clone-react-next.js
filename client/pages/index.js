import Dashboard from "@/components/Dashboard/Dashboard";
import Login from "@/components/Login/Login";
import { useEffect, useState } from 'react';


export default function Home() {

  const [code, setCode] = useState(null);

  useEffect(() => {
    const code = new URLSearchParams(window.location.search).get('code');
    setCode(code);
  }, [])

  return (
    <div >
      {code ? <Dashboard code={code} /> : <Login />}
    </div>
  )
}
