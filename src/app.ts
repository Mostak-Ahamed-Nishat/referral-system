import express, { Request, Response } from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import rateLimit from "express-rate-limit";

const app = express();

app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));

app.get("/health", (_req: Request, res: Response) => {
  return res.status(200).json({
    status: "OK",
    message: "Health is OK. No need ICU Support",
  });
});

app.use(
  rateLimit({
    windowMs: 15 * 60 * 1000,
    limit: 100,
  }),
);

export default app;
