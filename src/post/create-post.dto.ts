import { IsNotEmpty, IsString } from 'class-validator';

export class CreatePostDto {
  @IsNotEmpty({ message: 'Title should not be empty' })
  @IsString({ message: 'Title must be a string' })
  title: string;

  @IsNotEmpty({ message: 'Content should not be empty' })
  @IsString({ message: 'Content must be a string' })
  content: string;

  @IsNotEmpty({ message: 'Author Name should not be empty' })
  @IsString({ message: 'Author Name must be a string' })
  author: string;
}
