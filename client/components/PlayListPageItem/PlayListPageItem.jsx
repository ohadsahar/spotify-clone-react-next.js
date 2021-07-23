import { useSelector } from 'react-redux';
import { TrackItemWrapper, TrackInfo } from './StyledPlayListPageItem';

const PlayListPageItem = ({ track, chooseTrack }) => {
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
        <TrackItemWrapper onClick={() => handleClick(track)}>
            <img src={track?.image} />
            <TrackInfo active={currentTrack?.name === track?.name}>
                <div>
                    <p className="title">{track.name}</p>
                </div>
                <p className="time">{formatMinutes(track?.duration)}</p>
            </TrackInfo>
        </TrackItemWrapper>
    )
}

export default PlayListPageItem
