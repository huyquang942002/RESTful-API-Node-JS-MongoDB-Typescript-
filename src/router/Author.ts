import express from 'express'

import controller from '../contorllers/Author'

const router = express.Router();

router.post('/create',controller.createAuthor)


