import express from 'express';
import { interfaces, controller, httpGet, request, response } from "inversify-express-utils";
import { PostRepositoryImpl } from "../repository/PostRepositoryImpl";
import { inject } from "inversify";

@controller("/posts")
export class PostController implements interfaces.Controller {
    private postRepository: PostRepositoryImpl;

    constructor(@inject(PostRepositoryImpl) postRepository: PostRepositoryImpl) {
        this.postRepository = postRepository;
    }

    @httpGet("/")
    public async get(@request() _req: express.Request, @response() res: express.Response) {
        try {
            const posts = await this.postRepository.getAll();
            res.send(posts)
        } catch(error) {
            res.send(error)
        }
    }
}