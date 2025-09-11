import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export class UpdatePostDto {

    @IsOptional()
    @IsNotEmpty({message: 'Title should not be empty'})
    @IsString({message: 'Title must be a string'})
    title?: string;

    @IsOptional()
    @IsNotEmpty({message: 'Content should not be empty'})
    @IsString({message: 'Content must be a string'})
    content: string;


    @IsOptional()
    @IsNotEmpty({message: 'Author name should not be empty'})
    @IsString({message: 'Author name must be a string'})
    author: string;
}