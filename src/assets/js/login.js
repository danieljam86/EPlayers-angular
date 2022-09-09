

//quando a página estiver carregada por completo
$(document).ready(function(){

    $("button").click( function(){
        //DOM JQUERY
        let email = $("#email").val();
        let senha = $("#senha").val();

        console.log( podeCadastrar(email, senha) );

        if( podeCadastrar(email, senha) ) {
            alert("Preenchido corretamente")
        } else {
            alert("Preencher todos os campos")
        }

    } )

    function podeCadastrar(e, s) {
        if( e == "" || s == "" ) {//sem preencher
            return false;//avisa que não está tudo preenchido
        } else {
            return true;//está tudo preenchido
        }
    }
});// fim do jQuery Ready

