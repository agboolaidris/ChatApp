import { config } from "dotenv";

const { parsed } = config();
export const { DB_URL, JWT_SECRET } = parsed;
