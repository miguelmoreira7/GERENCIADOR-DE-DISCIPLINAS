class DisciplinaControlador {
    constructor() {
        this.disciplinaservico = new DisciplinaServico();
    }

    inserir() {
        const nomeDisciplina = document.querySelector("#nomeDisciplina").value;
        const codigoDisciplina = Number(document.querySelector("#codigoDisciplina").value);
        console.log(nomeDisciplina, codigoDisciplina);
        const disciplina = this.disciplinaservico.inserir(codigoDisciplina, nomeDisciplina);
        if(disciplina) {
            this.mostrarDisciplinaNoHtml(nomeDisciplina, codigoDisciplina);
        }
    }
    mostrarDisciplinaNoHtml(nomeDisciplina, codigoDisciplina) {
        const elementoD = document.createElement("p");
        elementoD.textContent = `${nomeDisciplina} - ${codigoDisciplina}`;

        const elementoBotaoApagar = document.createElement("button");
        elementoBotaoApagar.textContent = "X";

        elementoBotaoApagar.addEventListener("click", (event) => {
            this.removerDisciplinaDaLista(codigoDisciplina);
            event.target.parentElement.remove();
            }
        );
        elementoD.appendChild(elementoBotaoApagar);
        document.body.appendChild(elementoD);
    }

    removerDisciplinaDaLista(codigo) {
        this.disciplinaservico.remover(codigo);
    }
}