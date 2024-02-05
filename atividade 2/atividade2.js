let lista = document.getElementById("lista")

let vetor = []
function ler() {
    let elemento = Number(document.getElementById("elemento").value)

    vetor.push(elemento)
    console.log(vetor)

    if (vetor[4] != null) {
        lista.innerHTML = "== LISTA DE ELEMENTOS DO VETOR == <br>"
        for (let i = 0; i < vetor.length-1; i++) {
            lista.innerHTML += (i+1)+". "+ vetor[i] + "<br>"
        }  
        for (let i = vetor.length-2; i >= 0; i--) {
            lista.innerHTML += (i+1)+". "+ vetor[i] + "<br>"
        }    
    }
    
    
}