import TrackItem from "../TrackItem/TrackItem";
import { useDispatch } from 'react-redux';
import { setCurrentTrack, } from "@/store/actions/track.actions";
import { SearchWrapper } from './StyledSearchResult';

const SearchResult = ({ searchResults }) => {
    const dispatch = useDispatch();
    const chooseTrack = (track) => {
        dispatch(setCurrentTrack(track));
    }
    return (
        <SearchWrapper>
            <h1>Songs</h1>
            {searchResults?.length > 0 && searchResults.map(track => (
                <TrackItem chooseTrack={chooseTrack} track={track} key={track.uri} />
            ))}
        </SearchWrapper>
    )
}

export default SearchResult
