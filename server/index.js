import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import 'dotenv/config';
import posts from './routes/api/posts.js';

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Routes
app.use('/api/posts', posts);

// Server
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started running on port: ${port}`));
