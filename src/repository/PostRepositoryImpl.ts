import { injectable } from "inversify";
import Post, { IPost } from "../models/post";
import HttpRequestError from '../utils/http_failure';

@injectable()
export class PostRepositoryImpl {
    async getAll(): Promise<IPost[]> {
        return Post.find()
            .then((data: IPost[]) => {
                return data;
            })
            .catch((error: Error) => {
                throw new HttpRequestError(500, error.message);
            })
            .catch((httpError: HttpRequestError) => {
                throw httpError;
            });
    }
}