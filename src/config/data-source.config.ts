import { DataSource } from "typeorm";
import { Book, Page } from "../modules/infrastructure/database/entities";
import { CONFIG } from './config.constant';

export const AppDataSource = new DataSource({
  type: "postgres",
  host: CONFIG.DB.HOST,
  port: 5433,
  username: CONFIG.DB.USER,
  password: CONFIG.DB.PASSWORD,
  database: CONFIG.DB.NAME,
  synchronize: true,
  logging: false,
  entities: [Book, Page],
  migrations: [],
});