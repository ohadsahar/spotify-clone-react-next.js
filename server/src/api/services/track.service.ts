import { Service } from 'typedi';
import lyricsFinder from 'lyrics-finder';
import { GetLyricsDTO } from '../dto/track/getLyricsDTO';

@Service()
export class TrackService {

	constructor() {
	}

	async findLyrics(getLyricsDTO: GetLyricsDTO): Promise<any> {
		const result = await lyricsFinder(getLyricsDTO.artist, getLyricsDTO.track);
		return result ?? 'No lyrics found';
	}

}


