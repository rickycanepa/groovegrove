const express = require('express');
import { MongoClient, WithId, Document } from 'mongodb';
import { Request, Response } from 'express';

const app = express();
const PORT = process.env.PORT || 5000;
const mongoUrl = 'mongodb://mongo-host:27017';

app.get('/api/data', async (req: Request, res: Response) => {
    let client;

    try {
        client = new MongoClient(mongoUrl, {});
        await client.connect();

        const database = client.db('users');
        const collection = database.collection('users');

        const data: WithId<Document>[] = await collection.find({}).toArray();
        res.json(data);
    } catch (error) {
        console.error('Error querying data from MongoDB:', error);
        res.status(500).send('Internal Server Error');
    } finally {
        if (client) await client.close();
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on https://localhost:${PORT}`);
})