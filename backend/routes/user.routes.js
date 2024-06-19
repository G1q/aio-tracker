import express from 'express';
import {
	createUser,
	login,
	getUser,
	editUser,
	deleteUser,
} from '../controllers/user.controller.js';

const router = express.Router();

router.post('/register', createUser);
router.post('/login', login);
router.get('/profile/:id', getUser);
router.put('/:id', editUser);
router.delete('/:id', deleteUser);

export default router;
