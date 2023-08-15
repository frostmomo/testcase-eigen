const express = require('express');
const memberController = require('../controllers/member-controller');

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Members
 *   description: API endpoints for managing members
 */

/**
 * @swagger
 * /api/members/all:
 *   get:
 *     summary: Get a list of all members
 *     tags: [Members]
 *     responses:
 *       200:
 *         description: A list of members
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Member'
 */
router.get('/all', memberController.getAllMembers);

/**
 * @swagger
 * tags:
 *   name: Members
 *   description: API endpoints for managing members
 */

/**
 * @swagger
 * /api/members/all/borrowed:
 *   get:
 *     summary: Get a list of all members with borrowed books
 *     tags: [Members]
 *     responses:
 *       200:
 *         description: A list of members with borrowed books
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Member'
 */
router.get('/all/borrowed', memberController.getAllMemberWithBorrowedBooks);


module.exports = router;
