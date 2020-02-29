import TYPES from './type';

import {Container} from 'inversify';
import { PostRepositoryImpl } from '../repository/PostRepositoryImpl';

const container = new Container();

container.bind<PostRepositoryImpl>(TYPES.PostRepositoryImpl ).to(PostRepositoryImpl).inSingletonScope();
export default container;