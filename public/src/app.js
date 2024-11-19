import {EsqueciSenha} from './views/index.js'

switch (document.body.id) {
    case "index":
        document.addEventListener('DOMContentLoaded', ()=>{
            let EsqueciSenhaVAR = document.getElementById('EsqueciSenhaID');
            
                EsqueciSenhaVAR.addEventListener('click', EsqueciSenha())
            
        })
        break;
}