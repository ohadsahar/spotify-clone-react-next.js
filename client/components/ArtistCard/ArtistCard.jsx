import { ArtistsCardWrapper, ArtistInfoWrapper, IconWrapper } from './StyledArtistsCard';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import StopIcon from '@material-ui/icons/Stop';
import { useDispatch } from 'react-redux';
import { setCurrentTrack } from '@/store/actions/track.actions';
import { useState } from 'react';

const ArtistCard = ({ artist }) => {

    const [play, setPlay] = useState(false);
    const dispatch = useDispatch();
    const onPlay = () => {
        const track = { uri: artist.firstTrack };
        setPlay(play != play);
        console.log(play);
        dispatch(setCurrentTrack(track));
    }
    console.log(artist);
    return (
        <ArtistsCardWrapper>
            <ArtistInfoWrapper>
                <img src={artist?.image} />
                <p className="title">{artist?.artistName}</p>
                <p className="subtitle">{artist?.type}</p>
            </ArtistInfoWrapper>
            <IconWrapper>
                {!play ? <PlayArrowIcon className="play-icon" onClick={onPlay}></PlayArrowIcon> :
                    <StopIcon className="play-icon" onClick={onPlay}></StopIcon>}

            </IconWrapper>

        </ArtistsCardWrapper>
    )
}

export default ArtistCard
