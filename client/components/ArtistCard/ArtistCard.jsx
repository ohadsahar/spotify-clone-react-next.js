import { setCurrentPlayerStatus, setCurrentTrack } from '@/store/actions/player.actions';
import PauseIcon from '@material-ui/icons/Pause';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import { useDispatch, useSelector } from 'react-redux';
import { ArtistInfoWrapper, ArtistsCardWrapper, IconWrapper } from './StyledArtistsCard';

const ArtistCard = ({ artist }) => {

    const isPlaying = useSelector(state => state.player.play);
    const currentTrack = useSelector(state => state.player.currentTrack);
    const dispatch = useDispatch();

    const onPlay = () => {
        if (!currentTrack) {
            const track = { uri: artist.firstTrack };
            dispatch(setCurrentTrack(track));
        }
        dispatch(setCurrentPlayerStatus(!isPlaying));
    }
    return (
        <ArtistsCardWrapper>
            <ArtistInfoWrapper>
                <img src={artist?.image} />
                <p className="title">{artist?.artistName}</p>
                <p className="subtitle">{artist?.type}</p>
            </ArtistInfoWrapper>
            <IconWrapper>
                {!isPlaying ? <PlayArrowIcon className="play-icon" onClick={onPlay}></PlayArrowIcon> :
                    <PauseIcon className="play-icon" onClick={onPlay}></PauseIcon>}
            </IconWrapper>
        </ArtistsCardWrapper>
    )
}

export default ArtistCard
