import { Router } from 'express';
import { register, login } from '../controllers/auth.controller';

const router = Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - name
 *         - email
 *         - password
 *         - levelOfEducation
 *         - walletAddress
 *         - privateKey
 *       properties:
 *         _id:
 *           type: string
 *           description: The auto-generated id of the user
 *         name:
 *           type: string
 *           description: The user's full name
 *         email:
 *           type: string
 *           format: email
 *           description: The user's email address
 *         password:
 *           type: string
 *           format: password
 *           description: The user's password (hashed)
 *         levelOfEducation:
 *           type: string
 *           enum: [secondary, university]
 *           description: The user's level of education
 *         walletAddress:
 *           type: string
 *           description: The user's blockchain wallet address
 *         privateKey:
 *           type: string
 *           description: The user's blockchain private key
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: The date the user was created
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           description: The date the user was last updated
 */

/**
 * @swagger
 * /api/auth/login:
 *   post:
 *     summary: Login user and update streak
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *                 description: The user's email address
 *               password:
 *                 type: string
 *                 format: password
 *                 description: The user's password
 *               currentStreak: 
 *                 type: number 
 *                 default: 0 
 *               longestStreak: 
 *                 type: number
 *                 default: 0  
 *     responses:
 *       200:
 *         description: Login successfully. Streak potentially updated.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 user:
 *                   $ref: '#/components/schemas/User'
 *                 token:
 *                   type: string
 *                   description: JWT authentication token
 *       400:
 *         description: Invalid credentials
 */
router.post('/login', login);

/**
 * @swagger
 * /api/auth/register:
 *   post:
 *     summary: Register a new user
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - email
 *               - password
 *               - levelOfEducation
 *             properties:
 *               name:
 *                 type: string
 *                 description: The user's full name
 *               email:
 *                 type: string
 *                 format: email
 *                 description: The user's email address
 *               password:
 *                 type: string
 *                 format: password
 *                 description: The user's password
 *               levelOfEducation:
 *                 type: string
 *                 enum: [secondary, university]
 *                 description: The user's level of education
 *               walletAddress:
 *                 type: string
 *                 description: The user's blockchain wallet address
 *               privateKey:
 *                 type: string
 *                 description: The user's blockchain private key
 *     responses:
 *       201:
 *         description: Registration successful
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 message:
 *                   type: string
 *                 data:
 *                   type: object
 *                   properties:
 *                     user:
 *                       $ref: '#/components/schemas/User'
 *                     token:
 *                       type: string
 *                       description: JWT authentication token
 *       400:
 *         description: Invalid input or email already registered
 */
router.post('/register', register);

export default router;