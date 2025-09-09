import { Body, Controller, Delete, Get, HttpCode, HttpStatus, NotFoundException, Param, ParseIntPipe, Post, Put, Query } from '@nestjs/common';
import { PostService } from './post.service';
import type { Post as IPost } from './post.interface';

@Controller('post')
export class PostController {
    constructor(private readonly postService: PostService){}

    @Get()
    findAll(@Query('search') search?: string) : IPost []{
        const allPosts  = this.postService.findAll();
        if(search){
            const searchedPosts = allPosts.filter(post => post.title.toLocaleLowerCase().includes(search.toLowerCase()));
            if(searchedPosts.length > 0){
                return searchedPosts;
            }
            else {
                throw new NotFoundException('No post found with the given search term');
            }
        }
        return allPosts;
    }

    @Get(':id')
    findById(@Param('id', ParseIntPipe) id: number) : IPost {
        const post = this.postService.findById(id);
        if(!post){
            throw new NotFoundException('Post not found');
        }
        return post;
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    createPost(@Body() post: Omit<IPost, 'id' | 'createdAt' | 'updatedAt'>): IPost {
        return this.postService.createPost(post)
    }

    @Put(':id')
    @HttpCode(HttpStatus.OK)
    updatePost(@Param('id', ParseIntPipe) id: number, @Body() post: Partial<Omit<IPost, 'id' | 'createdAt' | 'updatedAt'>>): IPost {
        return this.postService.updatePost(id, post);
    };

    @Delete(':id')
    @HttpCode(HttpStatus.OK)
    deletePost(@Param('id', ParseIntPipe) id: string): {message: string}{
        return this.postService.deletePost(parseInt(id));
    }

}
