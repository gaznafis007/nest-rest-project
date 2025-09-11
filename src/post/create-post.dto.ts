import { IsNotEmpty, IsString } from "@nestjs/class-validator";


export class CreatePostDto {

    @IsNotEmpty({message: 'Title should not be empty'})
    @IsString({message: 'Title must be a string'})
    title: string;

    @IsNotEmpty({message: 'Content should not be empty'})
    @IsString({message: 'Content must be a string'})
    content: string;

    @IsNotEmpty({message: 'Author name should not be empty'})
    @IsString({message: 'Author name must be a string'})
    author: string;
}