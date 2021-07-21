import SearchResult from '@/components/SearchResult/SearchResult';
import { SearchInputWrapper, SearchResultsWrapper, SearchWrapper } from '@/components/SearchResult/StyledSearchResult';
import { SPOTIFY_CLIENT_ID } from '@/config/index';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import SpotifyWebApi from 'spotify-web-api-node';
import ArtistCard from '@/components/ArtistCard/ArtistCard';
import { getSearchedResults } from '@/store/actions/track.actions';


const spotifyApi = new SpotifyWebApi({
    clientId: SPOTIFY_CLIENT_ID
})

const SearchResults = () => {
    const [search, setSearch] = useState();
    const [searchResults, setSearchResults] = useState([]);
    const [artist, setCurrentArtist] = useState();
    const accessToken = useSelector(state => state.auth.accessToken);
    const result = useSelector(state => state.track.searchedTracks);
    const artistInfo = useSelector(state => state.track.artistInfo);
    const dispatch = useDispatch();



    useEffect(async () => {
        if (!search) return setSearchResults([]);
        if (!accessToken) return;
        dispatch(getSearchedResults(accessToken, search));
        if (!result || !artistInfo) return;
        handleArtistInfo(artistInfo);
        if (!result.body?.tracks) return;
        handleSearchResults(result); (result);
    }, [search, accessToken]);

    useEffect(() => {
        if (!result || !accessToken || !artistInfo) return;
        handleArtistInfo(artistInfo);
        if (!result.body?.tracks) return;
        handleSearchResults(result);
    }, [])

    const handleArtistInfo = (artistInfo) => {
        if (artistInfo.body?.images) {
            const smallestImage = artistInfo.body.images.reduce((smallest, image) => {
                if (image.height < smallest.height) return image;
                return smallest;
            }, artistInfo.body.images[0]);
            console.log(smallestImage);
            setCurrentArtist(
                { artistName: artistInfo.body.name, href: artistInfo.body.href, image: smallestImage.url ?? '', type: artistInfo.body.type, firstTrack: result.body.tracks.items[0].uri }
            );
        }
    }

    const handleSearchResults = (result) => {
        setSearchResults(result.body.tracks.items.map((track) => {
            const smallestImage = track.album.images.reduce((smallest, image) => {
                if (image.height < smallest.height) return image
                return smallest;
            }, track.album.images[0]);
            return {
                artist: track.artists[0].name,
                title: track.name,
                uri: track.uri,
                albumUrl: smallestImage.url
            }
        }));
    }

    return (
        <SearchWrapper>
            <SearchInputWrapper >
                <input type="text" placeholder="Artist, Songs, Podcasts" onChange={(e) => setSearch(e.target.value)} />
            </SearchInputWrapper>
            {searchResults.length > 0 && (
                <div style={{ 'overflow-y': 'hidden' }}>
                    <ArtistCard artist={artist} />
                    <SearchResultsWrapper>
                        <SearchResult searchResults={searchResults} />
                    </SearchResultsWrapper>
                </div>
            )};
        </SearchWrapper>
    )
}

export default SearchResults
