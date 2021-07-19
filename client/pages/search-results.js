import SearchResult from '@/components/SearchResult/SearchResult';
import { SearchInput, SearchResultsWrapper, SearchWrapper } from '@/components/SearchResult/StyledSearchResult';
import { SPOTIFY_CLIENT_ID } from '@/config/index';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import SpotifyWebApi from 'spotify-web-api-node';
import ArtistCard from '@/components/ArtistCard/ArtistCard';


const spotifyApi = new SpotifyWebApi({
    clientId: SPOTIFY_CLIENT_ID
})

const SearchResults = () => {
    const [search, setSearch] = useState();
    const [searchResults, setSearchResults] = useState([]);
    const [artist, setCurrentArtist] = useState();
    const accessToken = useSelector(state => state.auth.accessToken);

    useEffect(() => {
        if (!accessToken) return;
        spotifyApi.setAccessToken(accessToken);
    }, [accessToken]);

    useEffect(async () => {
        let cancel = false;
        if (cancel) return;
        if (!search) return setSearchResults([]);
        if (!accessToken) return;
        const result = await spotifyApi.searchTracks(search);
        const artistID = result.body.tracks.items[0].artists[0].id;
        const artistInfo = await spotifyApi.getArtist(artistID);
        const smallestImage = artistInfo.body.images.reduce((smallest, image) => {
            if (image.height < smallest.height) return image;
            return smallest;
        }, artistInfo.body.images[0]);
        console.log(result.body.tracks.items[0].uri);
        setCurrentArtist(
            { artistName: artistInfo.body.name, href: artistInfo.body.href, image: smallestImage.url, type: artistInfo.body.type, firstTrack: result.body.tracks.items[0].uri }
        );
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
        return () => cancel = true;
    }, [search, accessToken]);


    return (
        <SearchWrapper>
            <SearchInput type="text" placeholder="Artist, Songs, Podcasts" onChange={(e) => setSearch(e.target.value)} />
            <ArtistCard artist={artist} />
            <SearchResultsWrapper>
                <SearchResult searchResults={searchResults} />
            </SearchResultsWrapper>
        </SearchWrapper>
    )
}

export default SearchResults
