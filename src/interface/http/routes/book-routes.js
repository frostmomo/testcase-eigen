const express = require('express');
const bookController = require('../controllers/book-controller');

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Books
 *   description: API endpoints for managing books
 */

/**
 * @swagger
 * /api/books/all:
 *   get:
 *     summary: Get a list of all books
 *     tags: [Books]
 *     responses:
 *       200:
 *         description: A list of books
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Book'
 */
router.get('/all', bookController.getAllBooks);

/**
 * @swagger
 * /api/books/borrow:
 *   put:
 *     summary: Borrow a book
 *     tags: [Books]
 *     requestBody:
 *       description: Book and member code
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               bookCode:
 *                 type: string
 *               memberCode:
 *                 type: string
 *     responses:
 *       200:
 *         description: Successfully borrowed the book
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Book'
 */
router.put('/borrow', bookController.borrowBook);

/**
 * @swagger
 * /api/books/return:
 *   put:
 *     summary: Return a borrowed book
 *     tags: [Books]
 *     requestBody:
 *       description: Book and member code
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               bookCode:
 *                 type: string
 *               memberCode:
 *                 type: string
 *     responses:
 *       200:
 *         description: Successfully returned the book
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Book'
 */
router.put('/return', bookController.returnBook);

module.exports = router;
