const express = require('express');
const bp = require('body-parser');
const PORT = process.env.PORT || 8787;
const app = express();
// firebase
const admin = require("firebase-admin");
const serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://marine-debris.firebaseio.com"
});

const db = admin.firestore();
const settings = {timestampsInSnapshots: true};
db.settings(settings);
const debrisDB = db.collection('debris');

app.use(bp.json({ extended: true }));
app.use(bp.urlencoded({ extended: true }));

app.get('/', (req, res) => {
	debrisDB.get().then(snapshot => {
		snapshot.forEach(doc => {
			res.send(doc.data());
		})
	})
})

app.post('/', (req, res) => {
	debrisDB.add(req.body).then(ref => res.json(ref));
})

app.listen(PORT, () => {
	console.log(`Listening on ${PORT}`);
});