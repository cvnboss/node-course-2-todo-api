const { MongoClient, ObjectID } = require('mongodb');

const url = 'mongodb://localhost:27017/TodoApp';

MongoClient.connect(
    url,
    { useNewUrlParser: true },
    (err, client) => {
        if (err) {
            console.log('Unable to connect to MongoDB server');
        }
        console.log('Connected to MongoDB server');
        const db = client.db('TodoApp');

        // db.collection('Todos').find({
        //     _id: new ObjectID('5b93f87d5d69a835742d651e')
        // }).toArray().then((docs) => {
        //     console.log('Todos');
        //     console.log(JSON.stringify(docs, undefined, 2));
        // }, (err) => {
        //     console.log('Unable to fetch todos', err);
        // });

        db.collection('Todos')
            .find()
            .count()
            .then(
                count => {
                    console.log(`Todos count: ${count}`);
                },
                err => {
                    console.log('Unable to fetch todos', err);
                }
            );

        client.close();
    }
);
