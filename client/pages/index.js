import Login from "@/components/Login/Login";
import { useRouter } from "next/dist/client/router";
import { useEffect } from 'react';

export default function Home() {

  const router = useRouter();
  useEffect(() => {
    const code = new URLSearchParams(window.location.search).get('code');
    if (code) {
      router.replace({
        pathname: '/dashboard',
        query: { code: code }
      });
    }
  }, [])

  return (
    <div >
      <Login />
    </div>
  )
}
