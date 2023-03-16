class Gerenciador{
    constructor() {
        this.alunoControlador = new AlunoControlador();
        this.disciplinaControlador = new DisciplinaControlador();
    }
    inserirAluno() {
        this.alunoControlador.inserir();
    }
    inserirDisciplina() {
        this.disciplinaControlador.inserir();
    }
    inserirAlunoEmDisciplina() {
        console.log("alo")
        const nomeAluno = document.querySelector("#nomeAluno").value;
        console.log(nomeAluno)
        const busca = this.alunoControlador.buscarAluno(nomeAluno);
        const nomeOuCoD = document.querySelector("#nomeOuCodigo").value;
        if(busca) {
            console.log("alo")
            this.disciplinaControlador.inserirAluno(aluno, nomeOuCoD);
        }
    }
}