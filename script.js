function entrar(){
    var area = document.getElementById('area');
    var texto = prompt("Digite seu nome: ");

    if (texto == '' || texto == null){
        alert("Digite seu nome");
        area.innerHTML = "Bem vindo ...";
    }else{
        area.innerHTML = "Bem vindo " + texto;
    }

    
}