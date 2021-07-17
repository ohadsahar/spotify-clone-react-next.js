import { SPOTIFY_CLIENT_ID, SPOTIFY_URL, URI, SPOTIFY_PERMISSION } from "@/config/index";

const url = `${SPOTIFY_URL}?client_id=${SPOTIFY_CLIENT_ID}&response_type=code
&redirect_uri=${URI}&scope=${SPOTIFY_PERMISSION}`

const Login = () => {

    return (
        <a className="btn btn-success btn-lg" href={url}>Login with spotify</a>
    )
}

export default Login;
