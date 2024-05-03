import express from 'express'
import { index, remove, store, update } from './controllers/ProductController.js'
import { validateId } from './middlewares/ProductMiddleware.js';
import { accIndex, accStore } from './controllers/AccountController.js';
import SessionController from './controllers/SessionController.js';


const routes = express.Router()


routes.post('/sessions', SessionController.create)

routes.get('/acc', accIndex)

routes.post('/acc', accStore)



routes.get('/products', index)

routes.post('/products', store)

routes.put('/products/:id', validateId, update)

routes.delete('/products/:id', validateId, remove)

export default routes