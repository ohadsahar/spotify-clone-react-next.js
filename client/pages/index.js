import Login from "@/components/Login/Login";
import { loginSpotify } from "@/store/actions/auth.actions";
import { useRouter } from "next/dist/client/router";
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

export default function Home() {

  const router = useRouter();
  const dispatch = useDispatch();
  useEffect(() => {
    const code = new URLSearchParams(window.location.search).get('code');
    if (code) {
      dispatch(loginSpotify(code));
      router.push('/dashboard');
    }
  }, [])

  return (
    <div >
      <Login />
    </div>
  )
}
