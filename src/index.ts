import express from "express";
import todoRoutes from "./routes/todoRoutes";
import userRoutes from "./routes/userRoutes";


const app = express();

app.use(express.json());

// Routes
app.use('/api', todoRoutes);
app.use('/api', userRoutes);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
