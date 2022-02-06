import { MongoClient } from 'mongodb';

const connectToDatabase = async () => {
  const user = process.env.DB_USER;
  const password = process.env.DB_PASSWORD;
  const database = process.env.DATABASE;
  const cluster = process.env.CLUSTER;

  const url = `mongodb+srv://${user}:${password}@${cluster}.kb88a.mongodb.net/${database}?retryWrites=true&w=majority`;
  const client = await MongoClient.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  return {
    client,
    database: client.db(database),
  };
};

export default connectToDatabase;
