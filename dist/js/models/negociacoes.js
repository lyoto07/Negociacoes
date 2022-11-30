export class negociacoes {
    constructor() {
        //é a msm coisa que Array<Negociacao> = []
        this.negociacoes = [];
    }
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    //é a msm coisa que ReadonlyArray<Negociacao>
    lista() {
        return this.negociacoes;
    }
}
