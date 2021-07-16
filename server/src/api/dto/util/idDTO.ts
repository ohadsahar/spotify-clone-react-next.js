import {IsNumber} from "class-validator";
import {Type} from "class-transformer";

export class IdDTO {
    @IsNumber()
    @Type(() => Number)
    id: number;

}
