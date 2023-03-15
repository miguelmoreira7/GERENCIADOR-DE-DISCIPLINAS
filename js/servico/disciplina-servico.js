class DisciplinaServico {
    constructor() {
        this.repositorio = new DisciplinaRepositorio();
    }

    inserir(codigo, nome) {
        const novaDisciplina = new Disciplina(codigo, nome);
        if(novaDisciplina._codigo === this.repositorio.filter(disciplina => disciplina._codigo === codigo)) {
            console.log("código de disciplina inserido já existente, tente outro código");
        }
        else {
            this.repositorio.inserir(novaDisciplina);
        }
    }

    remover(codigo) {
        this.repositorio.remover(codigo);
    }

    listar() {
        return this.repositorio.listar();
    }

    buscar(busca) {
        	this.repositorio.buscarPorCodigoOuNome(busca)
    }
}
