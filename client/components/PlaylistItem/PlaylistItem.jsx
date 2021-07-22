import { PlaylistItemWrapper, PlaylistInfoWrapper } from "./StyledPlaylistItem"

const PlaylistItem = ({ playlist, navigateTo }) => {
    return (
        <PlaylistItemWrapper onClick={() => navigateTo(playlist)}>
            <img src={playlist.playlistImage} />
            <PlaylistInfoWrapper>
                <p className="title">{playlist.name}</p>
                <p className="muted">{playlist.total} Songs</p>
            </PlaylistInfoWrapper>
        </PlaylistItemWrapper>
    )
}

export default PlaylistItem
