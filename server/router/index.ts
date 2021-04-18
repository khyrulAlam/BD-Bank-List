import express from "express";
const router = express.Router();


import { BankList } from '../controllers/bankListController'

router.get('/banklist', BankList);

export { router as routerIndex };