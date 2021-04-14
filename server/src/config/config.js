import { config } from "dotenv";

const { parsed } = config();
export const { DB_URL } = parsed;
