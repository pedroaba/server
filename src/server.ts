import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import routes from "./routes";
import userRoutes from "./database/controllers/User/userRoutes";

const app = express();
const PORT = 3000 || process.env.PORT;

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(routes);
app.use(userRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on PORT = ${PORT}`);
});
