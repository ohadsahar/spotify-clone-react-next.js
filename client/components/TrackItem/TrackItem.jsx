import { useSelector } from 'react-redux';
import { formatMinutes } from 'utils/util.service';
import { TrackInfo, TrackItemWrapper } from './StyledTrackItem';
const TrackItem = ({ track, chooseTrack }) => {

    const currentTrack = useSelector(state => state.player.currentTrack);

    const handleClick = () => {
        chooseTrack(track);
    }

    return (
        <TrackItemWrapper onClick={handleClick}>
            <img src={track?.albumUrl} />
            <TrackInfo active={currentTrack?.title === track?.title}>
                <div>
                    <p className="title">{track?.title}</p>
                    <p className="muted">By {track?.artist}</p>
                </div>
                <p className="time">{formatMinutes(track?.duration)}</p>
            </TrackInfo>
        </TrackItemWrapper>
    )
}

export default TrackItem
