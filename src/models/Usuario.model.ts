import { connect } from '../database'
import { Usuario as iUsuario } from "../interfaces/Usuario.interface";

export default class Usuario {
    private id: string | undefined;
    private nombre: string;
    private apellido: string;
    private direccion: string;
    private ciudad: string;
    private longitud: string;
    private latitud: string;
    private estadogeo: string;


    /**
     * Getter id
     * @return {string }
     */
	public getId(): string | undefined {
		return this.id;
	}

    /**
     * Getter nombre
     * @return {string}
     */
	public getNombre(): string {
		return this.nombre;
	}

    /**
     * Getter apellido
     * @return {string}
     */
	public getApellido(): string {
		return this.apellido;
	}

    /**
     * Getter direccion
     * @return {string}
     */
	public getDireccion(): string {
		return this.direccion;
	}

    /**
     * Getter ciudad
     * @return {string}
     */
	public getCiudad(): string {
		return this.ciudad;
	}

    /**
     * Getter longitud
     * @return {string}
     */
	public getLongitud(): string {
		return this.longitud;
	}

    /**
     * Getter latitud
     * @return {string}
     */
	public getLatitud(): string {
		return this.latitud;
	}

    /**
     * Getter estadogeo
     * @return {string}
     */
	public getEstadogeo(): string {
		return this.estadogeo;
	}

    /**
     * Setter id
     * @param {string } value
     */
	public setId(value: string ) {
		this.id = value;
	}

    /**
     * Setter nombre
     * @param {string} value
     */
	public setNombre(value: string) {
		this.nombre = value;
	}

    /**
     * Setter apellido
     * @param {string} value
     */
	public setApellido(value: string) {
		this.apellido = value;
	}

    /**
     * Setter direccion
     * @param {string} value
     */
	public setDireccion(value: string) {
		this.direccion = value;
	}

    /**
     * Setter ciudad
     * @param {string} value
     */
	public setCiudad(value: string) {
		this.ciudad = value;
	}

    /**
     * Setter longitud
     * @param {string} value
     */
	public setLongitud(value: string) {
		this.longitud = value;
	}

    /**
     * Setter latitud
     * @param {string} value
     */
	public setLatitud(value: string) {
		this.latitud = value;
	}

    /**
     * Setter estadogeo
     * @param {string} value
     */
	public setEstadogeo(value: string) {
		this.estadogeo = value;
	}
    
    constructor(init?: Partial<iUsuario>) {
        Object.assign(this, init);
    }

    public async getAll(){
        try {
            const conn = await connect();
            const users = await conn.query('SELECT * FROM usuarios');
            
            return users[0];
        } catch (error) {
            throw {code: 500, msg: "Ha ocurrido un problema, intenta de nuevo mas tarde"};
        }
    }

    public async getOne(){
        try {
            const conn = await connect();
            const user = await conn.query('SELECT * FROM usuarios WHERE id = ?', [this.id]);
            const result = JSON.parse(JSON.stringify(user[0]));

            if(result.length != 0) return result[0];
        } catch (error) {
            throw {code: 500, msg: "Ha ocurrido un problema, intenta de nuevo mas tarde"};
        }

        throw {code: 404, msg: "Este usuario no existe"}
    }

    public async createNew(){
        try {
            const conn = await connect();
            const results = await conn.query('INSERT INTO usuarios SET ?', [this]);
            this.id = JSON.parse(JSON.stringify(results[0])).insertId;

            return await this.getOne();
        } catch (error) {
            console.log(error)
            if(error?.code === 'ER_BAD_FIELD_ERROR') throw {code: 400, msg: "Error, revisa la informacion ingresada"};
            throw {code: 500, msg: "Ha ocurrido un problema, intenta de nuevo mas tarde"};
        }
    }

    public async deleteOne(){
        try {
            const conn = await connect();
            const results = await conn.query('DELETE FROM usuarios WHERE id = ?', [this.id]);

            if(JSON.parse(JSON.stringify(results[0])).affectedRows != 0) return {msg: "El usuario ha sido eliminado con exito!"} 
        } catch (error) {
            throw {code: 500, msg: "Ha ocurrido un problema, intenta de nuevo mas tarde"};
        }

        throw {code: 404, msg: "Este usuario no existe"}
    }
}