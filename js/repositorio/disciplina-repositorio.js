class DisciplinaRepositorio {
    constructor() {
        this._disciplinas = [];
    }

    inserir(disciplina) {
        this._disciplinas.push(disciplina);
        return disciplina;
    }

    remover(codigo) {
        const indxRemocao = this._disciplinas.indexOf(disciplina => disciplina._codigo === codigo);
        this._disciplinas.splice(indxRemocao, 1);
    }

    listar() {
        return this._disciplinas;
    }

    buscarPorCodigoOuNome(busca) {
        const nome = this._disciplinas.find(disciplina => disciplina._nome === busca);
        const codigo = this._disciplinas.find(disciplina => disciplina._codigo === busca);
        if(nome) {
            return nome; 
        }
        else if(codigo) {
            return codigo;
        }
        else {
            alert("a disciplina não existe")
        }
    }
    
    adicionarAluno(aluno, nomeOuCoD) {
        const disciplina = this.buscarPorCodigoOuNome(nomeOuCoD);
        if (disciplina) {
            disciplina._alunos.push(aluno);
            console.log("alo3");
        }
        else {
            return
        }
    }
}