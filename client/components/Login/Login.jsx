import { SPOTIFY_CLIENT_ID, SPOTIFY_URL, URI, SPOTIFY_PERMISSION } from "@/config/index";
import AnimatedImage from "utils/animatedImage";
import useAuth from "utils/useAuth";
import { LoginWrapper, ImageWrapper, ButtonWrapper } from "./StyledLogin";
import { useSelector } from 'react-redux';
import { useRouter } from "next/router";
import { useEffect } from 'react';

const url = `${SPOTIFY_URL}?client_id=${SPOTIFY_CLIENT_ID}&response_type=code
&redirect_uri=${URI}&scope=${SPOTIFY_PERMISSION}`

const Login = () => {

    useAuth();
    const accessToken = useSelector(state => state.auth.accessToken);
    const router = useRouter();
    useEffect(() => {
        if (accessToken) {
            router.push('/dashboard');
        }
    }, [accessToken])

    return (
        <LoginWrapper>
            <p >Welcome To
                Spotify Clone</p>
            <p className="muted">In order to view / use the project you must connect via Facebook / Google / Spotify.
                hope you will enjoy</p>
            <ButtonWrapper>
                <a href={url}>Login</a>
            </ButtonWrapper>
        </LoginWrapper>
    )
}

export default Login;
