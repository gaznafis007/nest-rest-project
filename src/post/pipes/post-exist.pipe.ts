import { ArgumentMetadata, Injectable, NotFoundException, PipeTransform } from "@nestjs/common";
import { PostService } from "../post.service";


@Injectable()
export class PostExistPipe implements PipeTransform{
    constructor(private readonly postService: PostService){}

    transform(value: any, metadata: ArgumentMetadata) {
        try {
             this.postService.findById(Number(value));
        }
        catch (error){
            throw new NotFoundException(`Post with ${value} id not found`);
        }
        return value;
    }
}