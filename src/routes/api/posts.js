import express from 'express';
import connectToDatabase from '../../database/databaseConnection.js';
import { ObjectId } from 'mongodb';
const router = express.Router();

// Get posts
router.get('/', async (req, res) => {
  const { client, database } = await connectToDatabase();
  const collection = await database.collection(process.env.COLLECTION).find().toArray();

  res.send(collection);
  client.close();
});

// Add posts
router.post('/', async (req, res) => {
  const { client, database } = await connectToDatabase();
  const collection = await database.collection(process.env.COLLECTION);
  const { name, email } = req.body;

  await collection.insertOne({ name, email });

  res.sendStatus(201);
  client.close();
});

// Delete posts
router.delete('/:id', async (req, res) => {
  const { client, database } = await connectToDatabase();
  const collection = await database.collection(process.env.COLLECTION);
  const id = req.params.id;

  await collection.deleteOne({ _id: new ObjectId(id) });

  res.sendStatus(200);
  client.close();
});

export default router;
