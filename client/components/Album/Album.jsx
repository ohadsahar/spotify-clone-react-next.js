import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { formatMinutes } from 'utils/util.service';
import BackButton from '../BackButton/BackButton';
import {
    AlbumCardInfo, CurrentAlbumWrapper, TrackInfo, TracksWrapper, TrackWrapper
} from './StyledAlbum';

const Album = ({ currentAlbum, changeTrack }) => {

    const currentTrack = useSelector(state => state.player.currentTrack);
    const [currentTrackName, setCurrentTrackName] = useState();

    useEffect(() => {
        if (!currentTrack) return;
        setCurrentTrackName(currentTrack.name);
    }, [currentTrack]);

    return (
        <CurrentAlbumWrapper>
            <BackButton />
            <AlbumCardInfo>
                <img src={currentAlbum?.albumImage} />
                <h2>Current Album - {currentAlbum?.name}</h2>
            </AlbumCardInfo>
            <TracksWrapper>
                {currentAlbum && currentAlbum?.tracks?.map((track, index) => (
                    <TrackWrapper key={track.name}
                        active={currentTrackName === track.name}
                        onClick={() => changeTrack(track)}>
                        <p className="track-id">{index + 1}</p>
                        <img src={currentAlbum?.albumImage} />
                        <TrackInfo active={currentTrackName === track.name}>
                            <div className="track-details">
                                <p className="title">{track?.name}</p>
                                {track.artists.map((artist) => (
                                    <p key={artist} className="muted">{artist}</p>
                                ))}
                            </div>
                            <div className="time">
                                <p>{formatMinutes(track.duration)}</p>
                            </div>
                        </TrackInfo>
                    </TrackWrapper>
                ))}
            </TracksWrapper>
        </CurrentAlbumWrapper>
    )
}

export default Album
