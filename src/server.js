import express from 'express'
import cors from 'cors'
import db from './database.js'
import routes from './routes.js'

const app = express();
const port = 3333;

app.use(cors({ origin: 'https://univesp-mg-stock.vercel.app' }));
app.use(express.json());
db.connect()
app.use(routes)


app.listen(port, () => {console.log(`🚀 Backend started at http://localhost:${port} `)})