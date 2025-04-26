import { createServer } from "http";
import app from "./api";
import { config } from "./config";
import mongoose from "mongoose"


(async () => {
  const server = createServer(app.callback());

  mongoose.connect(config.MONGODB_URI);

  mongoose.connection.once('open', () => {
    console.log('connected to database');
  });

  server.listen(config.PORT, () => {
    console.log(`server running at http://localhost:${config.PORT}`);
  });
})();
