const { express, bodyParser, admin, getFirestore, serviceAccount } = require('./imports')

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
})

const db = getFirestore()

module.exports = { app, db }