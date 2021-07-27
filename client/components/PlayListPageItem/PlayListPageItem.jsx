import { useSelector } from 'react-redux';
import { formatMinutes } from 'utils/util.service';
import { TrackItemWrapper, TrackInfo } from './StyledPlayListPageItem';

const PlayListPageItem = ({ track, chooseTrack }) => {
    const currentTrack = useSelector(state => state.player.currentTrack);

    const handleClick = () => {
        chooseTrack(track);
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
