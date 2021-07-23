import { useSelector } from 'react-redux';
import { TrackInfo, TrackItemWrapper } from './StyledTrackItem';
const TrackItem = ({ track, chooseTrack }) => {

    const currentTrack = useSelector(state => state.player.currentTrack);

    const handleClick = () => {
        chooseTrack(track);
    }

    const formatMinutes = (duration) => {
        const timeInSeconds = Math.ceil(duration / 1000);
        const minutes = Math.round((timeInSeconds / 60));
        let seconds = Math.round((timeInSeconds % 60));
        seconds = seconds < 10 ? `0${seconds}` : seconds;
        return `${minutes}:${seconds}`;
    }

    return (
        <TrackItemWrapper onClick={handleClick}>
            <img src={track.albumUrl} />
            <TrackInfo active={currentTrack.title === track.title}>
                <div>
                    <p className="title">{track.title}</p>
                    <p className="muted">By {track.artist}</p>
                </div>
                <p className="time">{formatMinutes(track.duration)}</p>
            </TrackInfo>
        </TrackItemWrapper>
    )
}

export default TrackItem
