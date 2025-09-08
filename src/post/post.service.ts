import { Injectable } from '@nestjs/common';
import { Post } from './post.interface';

@Injectable()
export class PostService {
    private posts: Post [] = [
        {
            id: 1,
            title: 'first post',
            content: 'this is the content of the first post',
            author: 'John',
            createdAt: new Date()
        },
        {
            id: 2,
            title: 'second post',
            content: 'this is the content of the second post',
            author: 'Jane',
            createdAt: new Date()
        },
    ]
    generateId(): number {
        return this.posts.length > 0 ? Math.max(...this.posts.map(post => post.id)) + 1 : 1;
    }
    findAll(): Post []{
        return this.posts;
    }

    findById(id: number): Post | undefined{
        const post = this.posts.find(post => post.id === id);
        return post;
    }

    createPost(post: Omit<Post, 'id' | 'createdAt' | 'updatedAt'>): Post {
        const newPost: Post = {
            id: this.generateId(),
            ...post,
            createdAt: new Date()
        }
        this.posts.push(newPost);
        return newPost
    }
}
