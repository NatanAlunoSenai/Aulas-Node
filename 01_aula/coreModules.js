const fs = require('fs')

fs.readFile("teste.txt", "utf8", (erro,dados) =>{
   if(erro) {
        console.log(erro)
    }else{
        console.log(dados)
    }
    })

    const mensagem ="Texto muito legal,pra ver se funciona"
    const mensagem2 = "A mesma mensagem, só que diferente"
    
    fs.writeFile('teste2oretorno.txt', mensagem,"utf8",(erro) =>{
        if(erro){
            console.log("Deu erro, se virar ai")
        }
        else {
            console.log("Arquivo escrito sucessfully")
        }
    })

    fs.appendFile('teste2oretorno.txt', mensagem2,"utf8",(erro) =>{
        if(erro){
            console.log("Deu erro, se virar ai")
        }
        else {
            console.log("Arquivo escrito sucessfully")
        }
    })

    fs.unlink('teste2oretorno.txt',(erro) =>{
        if(erro){
            console.log("Não consegui apagar o arquivo")
        }
        else {
            console.log("Arquivo APAGADO sucessfully")
        }
    })