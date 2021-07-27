import ArtistCard from '@/components/ArtistCard/ArtistCard';
import SearchResult from '@/components/SearchResult/SearchResult';
import {
    SearchInputWrapper, SearchMiniWrapper, SearchResultsWrapper,
    SearchWrapper
} from '@/components/SearchResult/StyledSearchResult';
import { getSearchedResults } from '@/store/actions/track.actions';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const SearchResults = () => {
    const [search, setSearch] = useState();
    const [searchResults, setSearchResults] = useState([]);
    const [artist, setCurrentArtist] = useState();
    const accessToken = useSelector(state => state.auth.accessToken);
    const result = useSelector(state => state.track.searchedTracks);
    const artistInfo = useSelector(state => state.track.artistInfo);
    const dispatch = useDispatch();

    useEffect(() => {
        if (!result || !accessToken || !artistInfo) {
            window.location = '/dashboard';
        };
        handleArtistInfo(artistInfo);
        if (!result.body?.tracks) return;
        handleSearchResults(result);
    }, [])

    useEffect(() => {
        if (!accessToken || !search) return;
        dispatch(getSearchedResults(accessToken, search));
        if (!result || !artistInfo) return;
        handleArtistInfo(artistInfo);
        if (!result.body?.tracks) return;
        handleSearchResults(result); (result);
    }, [search, accessToken]);


    const handleArtistInfo = (artistInfo) => {
        if (artistInfo.body?.images) {
            const smallestImage = artistInfo.body.images.reduce((smallest, image) => {
                if (image.height < smallest.height) return image;
                return smallest;
            }, artistInfo.body.images[0]);
            setCurrentArtist(
                { artistName: artistInfo.body.name, href: artistInfo.body.href, image: smallestImage.url ?? '', type: artistInfo.body.type, firstTrack: result.body.tracks.items[0].uri }
            );
        }
    }

    const handleSearchResults = (result) => {
        const searchResults = result.body.tracks.items.map((track) => {
            const smallestImage = track.album.images.reduce((smallest, image) => {
                if (image.height < smallest.height) return image
                return smallest;
            }, track.album.images[0]);
            return {
                artist: track.artists[0].name,
                title: track.name,
                uri: track.uri,
                albumUrl: smallestImage.url,
                duration: track.duration_ms
            }
        });
        setSearchResults(searchResults);
    }

    return (
        <SearchWrapper>
            <SearchInputWrapper >
                <input type="text" placeholder="Artist, Songs, Podcasts" onChange={(e) => setSearch(e.target.value)} />
            </SearchInputWrapper>
            {searchResults.length > 0 && (
                <SearchMiniWrapper>
                    {!search && result ? <p>Last search:</p> : null}
                    <ArtistCard artist={artist} />
                    <SearchResultsWrapper>
                        <SearchResult searchResults={searchResults} />
                    </SearchResultsWrapper>
                </SearchMiniWrapper>
            )};
        </SearchWrapper>
    )
}

export default SearchResults
