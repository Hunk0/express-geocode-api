import { Request, Response } from "express";
import Usuario from "../models/Usuario.model";

export default class PublicController {  
    static createUser = async (req: Request, res: Response): Promise<Response> => {
        try {
            const { usuario } = req.body;
            const user = new Usuario(usuario);
            const result = await user.createNew();

            return res.json(result)
        } catch (error) {
            return res.status(error.code).json({msg: error.msg})
        }
    }

    static deleteUser = async (req: Request, res: Response): Promise<Response> => {
        try {
            const { id } = req.params;
            
            const user = new Usuario();
            user.setId(id);
            const result = await user.deleteOne();

            return res.json(result)
        } catch (error) {
            return res.status(error.code).json({msg: error.msg})
        }
    }
}