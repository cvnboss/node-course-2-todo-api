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

        // deleteMany
        // db.collection('Todos')
        //   .deleteMany({text: 'Eat lunch'})
        //   .then((result) => {
        //       console.log(result);
        //   })

        // deleteOne
        // db.collection('Todos')
        //   .deleteOne({text: 'Eat lunch'})
        //   .then((result) => {
        //       console.log(result);
        //   })

        // findOneAndDelete
        // db.collection('Todos')
        //   .findOneAndDelete({completed: false})
        //   .then((result) => {
        //       console.log(result);
        //   })

        db.collection('Users')
            .findOneAndDelete({
                _id: ObjectID('5b9a2f4bf157672cdcaf5ce0')
            })
            .then(result => {
                console.log(result);
            });

        client.close();
    }
);
