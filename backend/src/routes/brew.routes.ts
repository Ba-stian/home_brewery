// @ts-ignore
import {NextFunction, Request, Response} from "express";

const express = require('express');
// @ts-ignore
const router = express.Router();


const {getBeer, getBeers, updateBeer} = require('../controllers/brew.controller');

router.get('/', getBeers);

router.get('/:id', getBeer);
router.put('/:id', updateBeer);


module.exports = router;
