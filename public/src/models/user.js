class Usuario {
    id;
    nome;
    #senha;
    email;
    cargo;
    constructor(nome, senha, email, cargo) {
        this.nome = nome;
        this.#senha= senha;
        this.email =email;
        this.cargo=cargo;
    }

    GetNome(){
        return this.nome;
    }

    SetNome(nome){
        this.nome = nome;
        return this.nome;
    }

    GetCargo(){
        return this.cargo;
    }

    SetCargo(cargo){
        this.cargo = cargo
        return this.cargo;
    }

    GetEmail(){
        return this.email;
    }

    SetEmail(email){
        this.email = email;
        return this.email;
    }

    SetSenha(senha){
        this.#senha=senha;
        return true;
    }

    Cadastro(nome, senha, email, cargo){
        if (nome&senha&cargo&email != null){
            return
        }
        else if (nome&senha&cargo!=null){
            return
        }
        else{
            alert("Verifique os campos de caddastro!")
        }
    }
}
