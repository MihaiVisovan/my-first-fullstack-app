import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import 'dotenv/config';
import posts from './routes/api/posts.js';
import path from 'path';

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Routes
app.use('/api/posts', posts);

// Handle production
if (process.env.NODE_ENV === 'production') {
  // Static folder
  app.use(express.static(path.resolve(__dirname, '/static/')));

  // Handle SPA
  app.get('.*'), (req, res) => res.sendFile(path.resolve(__dirname, '/static/index.html'));
}

// Server
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started running on port: ${port}`));