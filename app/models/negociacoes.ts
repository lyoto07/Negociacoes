import { Negociacao } from "./negociacao.js";

export class negociacoes {
            //é a msm coisa que Array<Negociacao> = []
    private negociacoes: Negociacao[] = [];

    adiciona(negociacao:Negociacao){
        this.negociacoes.push(negociacao);
    }
        //é a msm coisa que ReadonlyArray<Negociacao>
    lista(): readonly Negociacao[] {
        return this.negociacoes;
    }
}