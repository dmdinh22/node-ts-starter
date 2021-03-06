import * as express from 'express';
import * as bodyParser from 'body-parser';
import { Routes } from './routes/api/basicRoutes';
import * as mongoose from 'mongoose';

class App {
    public app: express.Application;
    public routePath: Routes = new Routes();
    public mongoUrl: string = 'mongodb://localhost/ContactDb';

    constructor() {
        this.app = express();
        this.config();
        this.routePath.routes(this.app);
        this.mongoSetup();
    }

    private mongoSetup(): void {
        mongoose.Promise = global.Promise;
        mongoose.connect(
            this.mongoUrl,
            { useNewUrlParser: true }
        );
    }

    private config(): void {
        // support application/json type post data
        this.app.use(bodyParser.json());
        //support application/x-www-form-urlencoded post data
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }
}

export default new App().app;
