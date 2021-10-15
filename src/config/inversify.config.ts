import { Container } from 'inversify';
import { PostRepositoryImpl } from '../repository/PostRepositoryImpl';

const container = new Container();

container.bind(PostRepositoryImpl).toSelf();

export default container;