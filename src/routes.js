import { Router } from 'express';

import AuthMiddleware from './app/middlewares/auth';
import CheckUserExist from './app/middlewares/checkUserExist';
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import BrandController from './app/controllers/MarkController';
import CategoryController from './app/controllers/CategoryController';
import ProductController from './app/controllers/ProductController';
import NotificationController from './app/controllers/NotificationController';

const routes = new Router();

routes.post('/sessions', SessionController.store);
routes.post('/users', CheckUserExist, UserController.store);
routes.post('/callback', NotificationController.index);
routes.get('/picpay-callback/:referenceId',NotificationController.show);

//routes.use(AuthMiddleware);

routes.get('/marks', BrandController.index);
routes.post('/marks', BrandController.store);
routes.put('/marks/:id', BrandController.update);
routes.delete('/marks/:id', BrandController.delete);

routes.get('/categories', CategoryController.index);
routes.post('/categories', CategoryController.store);
routes.put('/categories/:id', CategoryController.update);
routes.delete(
  '/categories/:id',
  CategoryController.delete
);

routes.get('/products', ProductController.index);
routes.post('/products', ProductController.store);
routes.put('/products/:id', ProductController.update);
routes.delete('/products/:id', ProductController.delete);

export default routes;
