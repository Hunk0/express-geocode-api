import { Request, Response } from "express";
import Usuario from "../models/Usuario.model";
import GeoDecoderApi from "../services/Google/GeoDecoderApi";

export default class PublicController {  
    static createUser = async (req: Request, res: Response): Promise<Response> => {
        try {
            const simulate = Boolean(Number(req.query.simulate));
            const { usuario } = req.body;
            const user = new Usuario({...usuario, ...await GeoDecoderApi.getCoordinates(req.body.direccion, simulate)}); //when simulate is true the request will be simulated
            const result = await user.createNew();

            return res.json(result)
        } catch (error) {
            return res.status(error.code).json({msg: error.msg})
        }
    }

    static getUsers = async (req: Request, res: Response): Promise<Response> => {
        try {
            const user = new Usuario();
            const users = await user.getAll();

            return res.json(users)
        } catch (error) {
            return res.status(error.code).json({msg: error.msg})
        }
    }

    static getUser = async (req: Request, res: Response): Promise<Response> => {
        try {
            const user = new Usuario({id: req.params.id});
            const results = await user.getOne();

            return res.json(results)
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