import { Request, Response } from "express";
import { BANK_LIST, IResponseData } from '../models/banks'

export const BankList = async (req: Request, res: Response<IResponseData>) => {
    let { BankName } = req.query
    if (BankName) {
        let reg = new RegExp(BankName.toString(), 'i');
        let searchList = BANK_LIST.filter(bank => bank.BankName.match(reg) || bank.BankShortCode.match(reg));
        res.status(200).json({ data: searchList });
    } else {
        res.status(200).json({ data: BANK_LIST });
    }
}

