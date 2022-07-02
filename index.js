import express from "express";
import helmet from "helmet";
import expressWinston from "express-winston";
import winston from "winston";
import constants from "./helpers/constants.js";
import routes from "./api/v1/routes.js";
import cors from "cors";
import cookieParser from 'cookie-parser'
import redis from "redis"

const app = express();

const { baseUrl, deployParamName } = constants;

// create redis client
const REDIS_PORT = process.env.PORT || 6379;
const client = redis.createClient(REDIS_PORT);

app.set(deployParamName, deploy);
// Setup middleware
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser())

// Setup logging
app.use(
  expressWinston.logger({
    transports: [new winston.transports.Console()],
    meta: true,
    expressFormat: true
  })
);


// Setup routes
app.use(`${baseUrl}`, routes);


// Start the server
const port = process.env.PORT || 3030;
const server = app.listen(port, () => console.log(`Listening on ${port}`));

export default server;