// The Cloud Functions for Firebase SDK to create Cloud Functions and setup triggers.
const functions = require('firebase-functions');
// The Firebase Admin SDK to access the Firebase Realtime Database.
const admin = require('firebase-admin');


admin.initializeApp();

exports.helloWorld = functions.https.onRequest((request, response) => {
    response.send("Hello from gdfg dgdfg fei Firebase!");
});

exports.addMessage = functions.https.onCall((data, context) => {
    // Message text passed from the client.
    const text = data.text;
    console.log(text);
    return text + "  la la ia la la ia...";
});


exports.bigben = functions.https.onRequest((req, res) => {
    const hours = (new Date()); // london is UTC + 1hr;
    res.status(200).send(`<!doctype html>
      <head>
        <title>Time</title>
      </head>
      <body>
        ${hours}
      </body>
    </html>`);
});


// exports.getFuckingPromotion = functions.https.onRequest((req, res) => {
//     admin.firestore().doc("promotions/sulamerica").get()
//         .then(snapshot => {
//             if (doc && doc.exists) {
//                 const myData = snapshot.data();
//                 return res.send(myData);
//             }
//         })
//         .catch(error => {
//             // Show errors.
//             console.log("Got an: ", error);
//             res.status(500).send(error);
//         });
// });