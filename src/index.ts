import { AppDataSource } from "./config/data-source.config";

AppDataSource.initialize()
  .then(async () => {
    console.log("initialize ..");

   
  })
  .catch((error) => console.log(error));
