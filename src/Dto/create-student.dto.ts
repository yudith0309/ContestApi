//Data validator, Object of the client 
import { IsString,IsOptional } from "class-validator"

export class CreateStudent{
    name: string

    age?:number

    @IsString()
    @IsOptional()
    adress?: string
}

export class UpdateStudent{
    name: string

    age?:number

    @IsString()
    adress?: string
}