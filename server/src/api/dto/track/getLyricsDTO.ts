import { IsString } from 'class-validator';

export class GetLyricsDTO {

	@IsString()
	track: string;

	@IsString()
	artist: string;
}
