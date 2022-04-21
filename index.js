const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');

const app = express();
const port = process.env.PORT || 5000;

//use midleware
app.use(cors());
app.use(express.json());

//user:dbuser1
//pass:BvH7CYMiFtaY3jxG



const uri = "mongodb+srv://dbuser1:BvH7CYMiFtaY3jxG@cluster0.bo3cb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
async function run() {
    try {
        await client.connect();

        const userCollection = client.db('foodExpress').collection('user');

        app.post('/user', (req, res) => {

        })
    }
    finally {
        // await client.close();
    }
}
run().catch(console.dir)

app.get('/', (req, res) => {
    res.send('runnign server')
})


app.listen(port, () => {
    console.log('CRUD server running in port', port)
})