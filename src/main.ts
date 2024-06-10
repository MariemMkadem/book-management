import "reflect-metadata";
import { Request, Response } from "express";
import * as bodyParser from "body-parser";
import { InversifyExpressServer } from "inversify-express-utils";
import { container } from "./config/inversify.config";

import "./modules/application/controllers/books.controller";
import { AppDataSource } from "./config/data-source.config";

let server = new InversifyExpressServer(container, null, {
  rootPath: "/api",
});

server.setConfig((app) => {
  app.use(
    bodyParser.urlencoded({
      extended: true,
    })
  );
  app.use(bodyParser.json());
});

let app = server.build();

const port = 3000;

app.get("/", (req: Request, res: Response) => res.send("Hello World!"));

AppDataSource.initialize()
  .then(() => console.log("connect db"))
  .catch((error) => console.log(error));

app.listen(port, () => console.log(`listen on http://localhost:${port}/`));
