import { PlaylistItemWrapper, PlaylistInfoWrapper } from "./StyledPlaylistItem"

const PlaylistItem = ({ playlist }) => {
    console.log(playlist)
    return (
        <PlaylistItemWrapper >
            <img src={playlist.playlistImage} />
            <PlaylistInfoWrapper>
                <p className="title">{playlist.name}</p>
                <p className="muted">{playlist.total} Songs</p>
            </PlaylistInfoWrapper>
        </PlaylistItemWrapper>
    )
}

export default PlaylistItem
