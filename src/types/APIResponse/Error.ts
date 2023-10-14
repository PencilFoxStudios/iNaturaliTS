export interface Error {
    code?:number,
    message?:string
}

export class iNatError extends Error {
    code?:number;
    msg?:string;
    constructor(code?:number, message?:string){
        super(`[iNaturaliTS] The iNaturalist.org API returned error code ${code}: \n${message}`)
        this.code = code;
        this.msg = message;
    }
}