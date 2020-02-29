import * as express from 'express';
import { interfaces, controller, httpGet, request, response } from "inversify-express-utils";
import {PostRepositoryImpl} from "../repository/PostRepositoryImpl";
import {inject} from "inversify";
import TYPES from "../config/type";

@controller("/posts")
export class PostController implements interfaces.Controller {
    private postRepository: PostRepositoryImpl;

    constructor(@inject(TYPES.PostRepositoryImpl) postRepository: PostRepositoryImpl) {
        this.postRepository = postRepository;
    }

    @httpGet("/")
    public async index (@request() _req: express.Request, @response() res: express.Response) {
        try {
            //const posts = await this.postRepository.findAll();
            res.send(this.postRepository.getName())
        } catch(error) {
            res.send('error')
        }
    }
}