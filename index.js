import express  from 'express';
import bodyParser from 'body-parser'
import userRoutes from './routes/users.js'

const app = express();

app.use(bodyParser.json())

app.use('/users', userRoutes)

app.get('/', (req, res)=> {

    console.log('[Get Route]');

    res.send("Hello from the Server")
})



app.listen(8080, () => {
   console.log(`The server is listening on the port 8080`) 
})
