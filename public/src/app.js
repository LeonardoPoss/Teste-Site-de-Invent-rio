import {EsqueciSenha} from './views/Esqueci_a_Senha/Esqueci_a_Senha.js'

switch (document.body.id) {
    case "index":
        document.addEventListener('DOMContentLoaded', ()=>{
            let EsqueciSenhaVAR = document.getElementById('EsqueciSenhaID');
            if (EsqueciSenhaVAR){
                EsqueciSenhaVAR.addEventListener('click', EsqueciSenha);
            }
            
        })
        break;
    case "EsqueciSenha":
        break;
}