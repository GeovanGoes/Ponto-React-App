import { IFeriado } from "./feriado";
import { ILancamento } from "./lancamento";

export interface Dia {
    data: string,
    registros: string[],
    soma: string,
    numeroDaSemana:number,
    feriado: boolean,
    dadosFeriado: IFeriado
}