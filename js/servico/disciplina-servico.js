class DisciplinaServico {
    constructor() {
        this.repositorio = new DisciplinaRepositorio();
    }

    inserir(codigo, nome) {
        const novaDisciplina = new Disciplina(codigo, nome);
        console.log(novaDisciplina._codigo)
        if(this.repositorio.disciplinas){
            console.log("alo")
            if(novaDisciplina._codigo === this.repositorio.disciplinas.filter(disciplina => disciplina._codigo === codigo)._codigo) {
                console.log("código de disciplina inserido já existente, tente outro código");
            }
            else {
                this.repositorio.inserir(novaDisciplina);
            }
        }
        else {
            this.repositorio.inserir(novaDisciplina);
        }
        return novaDisciplina;
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
