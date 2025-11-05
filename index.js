function confirmarCadastro() {
    let getNome = document.getElementById("Nome").value
    let getEmail = document.getElementById("Email").value
    let getSenha = document.getElementById("Senha").value

    if (getNome,getEmail,getSenha ==! ' ') {
        alert("Complete todas as informações!")
    }
}