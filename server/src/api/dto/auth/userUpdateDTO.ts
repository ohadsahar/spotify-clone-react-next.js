import {IsNumber, IsString} from "class-validator";
import {Type} from "class-transformer";

export class UserUpdateDTO {

    @IsNumber()
    @Type(() => Number)
    id: number;

    @IsString()
    fullName: string;

    @IsString()
    phoneNumber: string;

    @IsString()
    uid: string;

    @IsString()
    firebaseToken: string;
}