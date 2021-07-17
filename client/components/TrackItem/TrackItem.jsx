import { TrackItemWrapper, TrackInfo } from './StyledTrackItem';
const TrackItem = ({ track, chooseTrack }) => {

    const handleClick = () => {
        chooseTrack(track);
    }
    return (
        <TrackItemWrapper onClick={handleClick}>
            <img src={track.albumUrl} />
            <TrackInfo>
                <p>{track.title}</p>
                <p className="muted">By {track.artist}</p>
            </TrackInfo>
        </TrackItemWrapper>
    )
}

export default TrackItem
