import { injectable } from "inversify";
import Post, { IPost } from "../models/post";
import HttpRequestError from "../utils/http_failure";

@injectable()
export class PostRepositoryImpl {
    async getAll(): Promise<IPost[]> {
        try {
            return await Post.find()
        } catch(err) {
            throw new HttpRequestError(500, err)
        }
    }
}