import AnimatedImage from "utils/animatedImage"
import { PlaylistItemWrapper, PlaylistInfoWrapper } from "./StyledPlaylistItem"

const PlaylistItem = ({ playlist, navigateTo }) => {
    return (
        <PlaylistItemWrapper onClick={() => navigateTo(playlist)}>
            <AnimatedImage imageUrl={playlist.playlistImage} name={playlist.name} />
            <PlaylistInfoWrapper>
                <p className="title">{playlist.name}</p>
                <p className="muted">{playlist.total} Songs</p>
            </PlaylistInfoWrapper>
        </PlaylistItemWrapper>
    )
}

export default PlaylistItem
