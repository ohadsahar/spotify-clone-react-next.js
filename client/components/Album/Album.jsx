import {
    CurrentAlbumWrapper, TrackInfo, TracksWrapper, TrackWrapper,
    AlbumCardInfo
} from './StyledAlbum';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';

const Album = ({ currentAlbum, changeTrack }) => {
    const currentTrack = useSelector(state => state.track.currentTrack);
    const [currentTrackName, setCurrentTrackName] = useState();

    useEffect(() => {
        if (!currentTrack) return;
        setCurrentTrackName(currentTrack.name);
    }, [currentTrack]);

    const formatMinutes = (duration) => {
        const timeInSeconds = Math.ceil(duration / 1000);
        const minutes = Math.round((timeInSeconds / 60));
        let seconds = Math.round((timeInSeconds % 60));
        seconds = seconds < 10 ? `0${seconds}` : seconds;
        return `${minutes}:${seconds}`;
    }
    return (
        <div>
            <CurrentAlbumWrapper>
                <AlbumCardInfo>
                    <img src={currentAlbum?.albumImage} />
                    <h2>Current Album - {currentAlbum?.name}</h2>
                </AlbumCardInfo>
                <TracksWrapper>
                    {currentAlbum && currentAlbum?.tracks?.map((track, index) => (
                        <TrackWrapper key={track.uri}
                            active={currentTrackName === track.name}
                            onClick={() => changeTrack(track)}>
                            <p className="track-id">{index + 1}</p>
                            <img src={currentAlbum?.albumImage} />
                            <TrackInfo active={currentTrackName === track.name}>
                                <div className="track-details">
                                    <p className="title">{track?.name}</p>
                                    {track.artists.map((artist) => (
                                        <p className="muted">{artist}</p>
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
        </div>

    )
}

export default Album