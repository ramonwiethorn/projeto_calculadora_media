const form = document.getElementById('form-atividade');
const imgAprovado = '<img src="./images/aprovado.png">';
const imgReprovado = '<img src="./images/reprovado.png">';
const atividades = [];
const notas = [];
const spanAprovado = '<span class="aprovado">Aprovado</span>';
const spanReprovado = '<span class="reprovado">Reprovado</span>';
const notaMinima = parseFloat(prompt("Digite a nota mínima: "));

let linhas = '';
form.addEventListener('submit', function(e){
    e.preventDefault();

    AddLinha();
    atualizaTabela();
    atualizaMediaFinal();
});

function AddLinha(){
    const inputNomeAtividade = document.getElementById('nome-atividade');
    const inputNotaAtividade = document.getElementById('nota-atividade');

    if(atividades.includes(inputNomeAtividade.value)){
        alert(`A atividade  ${inputNomeAtividade.value} já foi incluida.`)
    } else{
    atividades.push(inputNomeAtividade.value);
    notas.push(parseFloat(inputNotaAtividade.value));

    let linha = '<tr>'
    linha += `<td>${inputNomeAtividade.value}</td>`;
    linha += `<td>${inputNotaAtividade.value}</td>`;
    linha += `<td>${inputNotaAtividade.value >= notaMinima ? imgAprovado: imgReprovado}</td>`;
    linha += `</tr>`;

    linhas += linha;
    }
    inputNomeAtividade.value = '';
    inputNotaAtividade.value = '';

}

function atualizaTabela(){

    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;

}

function atualizaMediaFinal(){
    const mediaFinal = calculaMedia();

    document.getElementById('mediaFinalValor').innerHTML = mediaFinal;
    document.getElementById('mediaFinalResultado').innerHTML = mediaFinal >= notaMinima ? spanAprovado:spanReprovado;
}

function calculaMedia(){
    let somaNotas = 0;
    for (let i = 0; i< notas.length; i++){
        somaNotas += notas[i];
    }

    return somaNotas/notas.length;
}