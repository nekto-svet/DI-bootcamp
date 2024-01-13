import express from 'express';
export const router = express.Router();

import {
    getFirstQuestion,
    answerQuestion,
    getScope,
} from '../controller/controller.js'

router.get('/', getFirstQuestion);

router.post('/', answerQuestion);

router.get('/userscope', getScope);

