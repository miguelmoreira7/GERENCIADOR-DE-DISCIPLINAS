class DisciplinaServico {
    constructor() {
        this.repositorio = new DisciplinaRepositorio();
    }

    inserir(codigo, nome) {
        const novaDisciplina = new Disciplina(codigo, nome);
        if(this.repositorio._disciplinas[0]){
            const verificar = this.repositorio._disciplinas.find(disciplina => disciplina._codigo === codigo);
            if(verificar) {
                console.log("código de disciplina inserido já existente, tente outro código");
                return;
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
