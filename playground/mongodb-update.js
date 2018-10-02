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

        // db.collection('Todos')
        //   .findOneAndUpdate({
        //       _id: ObjectID("5b9a2d01f157672cdcaf5cdf")
        //   }, {
        //         $set: {
        //             completed: true
        //         }
        //   }, {
        //       returnOriginal: false
        //   }).then((result) => {
        //       console.log(result);
        //   })

        db.collection('Users')
            .findOneAndUpdate(
                {
                    _id: ObjectID('5b9a24660b924220ec202df6')
                },
                {
                    $set: {
                        name: 'PhatDV'
                    },
                    $inc: {
                        age: 1
                    }
                },
                {
                    returnOriginal: false
                }
            )
            .then(result => {
                console.log(result);
            });

        client.close();
    }
);
