import "reflect-metadata";
import express from 'express';
import container from "./config/inversify.config";
import { InversifyExpressServer } from "inversify-express-utils";
import mongoose from 'mongoose';
import './controller/post.controller';
import morgan from "morgan"
import * as bodyParser from 'body-parser';

const server = new InversifyExpressServer(container, null, { rootPath: "/api/v1" });

const mongoUri = process.env.MONGO_URL || "mongodb://conectados-mongo:27017/conectados"

mongoose.connect(mongoUri, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
    console.log("service post-service connected to database");
});

server.setErrorConfig((app) => {
    app.use((err: Error, _req: express.Request, res: express.Response, _next: express.NextFunction) => {
        console.error(err.stack + "test");
        res.status(500).send('Something broke!');
    });
});
    
server.setConfig((app) => {
    const logger = morgan('combined');
    app.use(logger);
    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.use(bodyParser.json());
});

server.build().listen(3001, '0.0.0.0',() => console.log(`Server on!!`));
