class DisciplinaControlador {
    constructor() {
        this.disciplinaservico = new DisciplinaServico();
    }

    inserir() {
        const nomeDisciplina = document.querySelector("#nomeDisciplina").value;
        const codigoDisciplina = Number(document.querySelector("#codigoDisciplina").value);
        const disciplina = this.disciplinaservico.inserir(codigoDisciplina, nomeDisciplina);
        if(disciplina) {
            this.mostrarDisciplinaNoHtml(nomeDisciplina, codigoDisciplina);
        }
    }
    mostrarDisciplinaNoHtml(nomeDisciplina, codigoDisciplina) {
        const elementoD = document.createElement("h1");
        elementoD.textContent = `${nomeDisciplina} - ${codigoDisciplina}`
        document.body.appendChild(elementoD)
    }
}