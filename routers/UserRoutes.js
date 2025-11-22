import * as UserController from '../controllers/UserController.js';
import express from 'express';

const userRoutes = express.Router();

userRoutes.post('/register', UserController.register);
userRoutes.post('/login', UserController.login);

// userRoutes.get('/all', UserController.fetchUser);
// userRoutes.post('/new', UserController.createUser);
// userRoutes.put('/edit/:userId', UserController.editUser);
// userRoutes.delete('/delete/:userId', UserController.deleteUser);

export default userRoutes;