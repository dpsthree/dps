import { https } from 'firebase-functions';
import * as admin from 'firebase-admin';

admin.initializeApp();

export const demoUsers = https.onRequest(async (req, res) => {
  res.set("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.set('Access-Control-Allow-Origin', '*');
  const collectionRef = admin.firestore().collection('demos/ng-faqs/users');
  console.log('received the request', req.body)
  if (req.body.firstName) {
    collectionRef.add(req.body);
    res.sendStatus(200);
  } else {
    const snapshot = await collectionRef.get();
    const users = [];
    snapshot.forEach((doc) => users.push(doc.data()));
    res.send(users);
  }
});
