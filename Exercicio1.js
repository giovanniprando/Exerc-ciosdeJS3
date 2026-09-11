//Atividade 1
/* 
let alunos = ["Giovanni", "Danilo", "Luca", "Julio", "Gabriel"];
console.log(alunos);
 */
//Atividade 2
/* 
let produtos = ["Teclado", "Mouse", "Monitor", "Notebook", "Headset", "Webcam"];
console.log(produtos);
 */
//Atividade 3
/* 
let cursos = [
  "JavaScript",
  "Java",
  "Phyton",
  "TypeScript",
  "Ruby",
  "Css",
  "Html",
  "C Sharp",
  "C++",
];
console.log(cursos);
console.log(cursos[0]);
console.log(cursos[cursos.length - 1]);
 */
//Atividade 4
/* 
let alunos = ["Lucas", "Mariana", "Pedro", "João"];
console.log(alunos[0]);
console.log(alunos[1]);
console.log(alunos[2]);
 */
//Atividade 5
/* 
let produtos = ["PS5", "Monitor", "Fone", "JBL", "Xbox", ""];
console.log(produtos[0], +"," + produtos[2], +"," + produtos[4]);
 */
//Atividade 6
/* 
let alunos = ["Giovanni", "Danilo", "Luca", "Julio", "Gabriel", "Jhonny"];
console.log("Aluno 1: " + alunos[0]);
console.log("Aluno 2: " + alunos[1]);
console.log("Aluno 3: " + alunos[2]);
console.log("Aluno 4: " + alunos[3]);
console.log("Aluno 5: " + alunos[4]);
console.log("Aluno 6: " + alunos[5]);
 */

//Atividade 7
/* 
let alunos = ["Ana", "João", "Carlos", "Maria"];
console.log("Quantidade de alunos: " + alunos.length);
 */

//Atividade 8
/* 
const produtos = [
  "Arroz",
  "Feijão",
  "Macarrão",
  "Óleo",
  "Sal",
  "Açúcar",
  "Café",
];

console.log(produtos.length);
 */
//Atividade 9
/* 
const alunos = ["Ana", "Bruno", "Carlos", "Daniela", "Eduardo"];

console.log("Primeiro aluno: " + alunos[0]);
console.log("Ultimo Aluno: " + alunos[alunos.length - 1]);
console.log("Total: " + alunos.length);
 */
//Atividade 10
/* 
let alunos = ["Ana", "Joao", "Carlos"];

alunos[1] = "João";

console.log(alunos);
 */

//Atividade 11
/* 
const produtos = ["Camiseta", "Calça", "Tênis", "Boné", "Meia"];

produtos[2] = "Cueca";

console.log(produtos);
 */

//Atividade 12
/* 
const nomes = ["Ana", "Bruno", "Carlos", "Diana", "Elena", "Fábio"];

nomes[2] = "Giovanni";
nomes[1] = "Danilo";

console.log(nomes);

//Atv 13
let alunos = ["Ana", "Carlos", "João"];

alunos.push("Mariana");
console.log(alunos);
 */

//Atv 14
/* 
let produtos = ["Arroz", "Feijão", "Macarrão", "Azeite", "Café"];

produtos.push("Açúcar", "Leite");
console.log(produtos);
 */
//Atv15
/* 
let alunos = ["Ana", "Bruno", "Carlos"];

alunos.push("Daniela", "Eduardo", "Fernanda", "Gabriel");

console.log(`Alunos cadastrados: ${alunos.join(", ")}`);
console.log("Total de alunos: " + [alunos.length]);
 */

//Atv16
/* 
let alunos = ["Bruno", "Carlos", "Daniela"];

alunos.unshift("Ana");

console.log("Alunos cadastrados: " + alunos);
console.log("Total de alunos: " + alunos.length);
 */

//Atv17
/* 
const nomesChamados = [
  "Servidor de Arquivos (NAS) inacessível na rede local",
  "Sistema ERP fora do ar após atualização de segurança",
  "Computador do CEO não liga (Tela Azul da Morte - BSOD)",
  "Impressora do Recursos Humanos atolando papel constantemente",
  "Falha na sincronização de e-mails no Outlook (Desktop)",
  "Acesso negado à pasta de Marketing no Google Drive corporativo",
  "Solicitação de Instalação do software Adobe Photoshop",
  "Configuração de VPN em novo dispositivo móvel",
  "Substituição de pilhas do teclado e mouse sem fio",
];

nomesChamados.unshift("Falha na GPU");

console.log(nomesChamados);
 */
//Atv 18
/* 
const filaSuporte = [
  "Servidor fora do ar - Sistema indisponível",
  "Computador travando e muito lento",
  "Esqueci a senha de acesso ao painel",
  "Impressora da rede não conecta",
];

filaSuporte.push("Tela Azul(tela da morte)");
filaSuporte.unshift("CPU super quente");

console.log(filaSuporte);
 */

//Atv 19
/* 
const alunos = ["Ana", "Bruno", "Carlos", "Diego"];
const alunoRemovido = alunos.pop("Diego");

console.log("Lista atualizada:", alunos);

console.log("Aluno que saiu:", alunoRemovido);
 */

//Atv 20
/* 
const filaAtendimento = ["At1", "At2", "At3", "At4", "At5"];

filaAtendimento.shift();
console.log(filaAtendimento);
 */

//Atv 21
/* 
const fila = ["Ana", "Bruno", "Carlos", "Diana", "Eduardo"];

fila.push("Ricardo");
fila.unshift("Pablo");
fila.shift();
fila.pop();

console.log(fila);
 */

//Atv 22
/* 
const alunos = [
  "Ana",
  "Bruno",
  "Carlos",
  "Diana",
  "Eduardo",
  "Fernanda",
  "Gabriel",
  "Helena",
  "Igor",
  "Juliana",
];

alunos.includes("João");

console.log(alunos.includes("João"));
 */
/* 
const produtos = [
  "Notebook",
  "Mouse",
  "Teclado",
  "Monitor",
  "Fone",
  "Celular",
  "Tablet",
  "Impressora",
  "Webcam",
  "Pendrive",
];

produtos.indexOf("Mouse");

console.log(produtos.indexOf("Mouse"));
 */

//Atv 24
/* 
const nomes = [
  "Ana",
  "Bruno",
  "Carlos",
  "Diana",
  "Eduardo",
  "Fernanda",
  "Gabriel",
  "Helena",
  "Igor",
  "Juliana",
];

if (nomes.includes("João")) {
  console.log("Aluno encontrado!");
} else {
  console.log("Aluno não encontrado!");
}
 */
// Atividade 25
/* 
const alunos = [
  "Ana",
  "Bruno",
  "Carlos",
  "Diana",
  "Eduardo",
  "Fernanda",
  "Gabriel",
  "Helena",
  "Igor",
  "Juliana",
];

alunos.splice(2, 1);

console.log(alunos);
 */

//Atividade 26
/* 
const produtosMercado = [
  "Arroz",
  "Feijão",
  "Macarrão",
  "Óleo de soja",
  "Açúcar",
  "Café",
  "Leite",
  "Pão de forma",
  "Manteiga",
  "Ovos",
  "Peito de frango",
  "Carne moída",
  "Tomate",
  "Cebola",
  "Batata",
  "Papel higiênico",
  "Sabão em pó",
  "Detergente",
];

produtosMercado.splice(3, 1, "Novo produto");

console.log(produtosMercado);
 */
//Atividade 27
/* 
const cursos = [
  "Desenvolvimento Web",
  "Design UI/UX",
  "Marketing Digital",
  "Data Science",
  "Gestão de Projetos",
  "Cibersegurança",
  "Inglês",
  "Finanças",
];

cursos.splice(2, 1);
console.log(cursos);
cursos.splice(3, 0);
console.log(cursos);
cursos.splice(0, 1, "Frances");
console.log(cursos);
 */
//Atividade 28
/* 
const alunos = [
  "Ana",
  "Bruno",
  "Carlos",
  "Diana",
  "Eduardo",
  "Fernanda",
  "Gabriel",
  "Juliana",
];

for (let i = 0; i < alunos.length; i++) {
  console.log(alunos);
}
 */
//Atividade 29
/* 
const produtos = [
  "Arroz",
  "Feijão",
  "Leite",
  "Ovos",
  "Pão",
  "Café",
  "Açúcar",
  "Tomate",
];

for (let produto of produtos) {
  console.log(produto);
}
 */
//Atividade 30
/* 
const alunos = [
  "Ana",
  "Bruno",
  "Carlos",
  "Diana",
  "Eduardo",
  "Fernanda",
  "Gabriel",
  "Juliana",
];

alunos.forEach(function (aluno) {
  console.log(aluno);
});
 */

//Atividade 31
/* 
const notas = [7.5, 8.0, 6.5, 9.2];
let soma = 0;

for (let i = 0; i < notas.length; i++) {
  soma += notas[i];
}

console.log("Soma das notas: " + soma);
 */
//Atividade 32
/* 
let notas = [7, 8, 9, 10];
let soma = 0;

for (let i = 0; i < notas.length; i++) {
  soma += notas[i];
}

let media = soma / notas.length;

console.log("Soma: " + soma);
console.log("Média: " + media);
 */
//Atividade 33
/* 
let notas = [7, 9, 6, 10, 8];

let soma = 0;
let maior = notas[0];
let menor = notas[0];

for (let i = 0; i < notas.length; i++) {
  soma += notas[i];

  if (notas[i] > maior) {
    maior = notas[i];
  }

  if (notas[i] < menor) {
    menor = notas[i];
  }
}

let media = soma / notas.length;

console.log("Notas: " + notas);
console.log("Maior nota: " + maior);
console.log("Menor nota: " + menor);
console.log("Média: " + media);
 */

//Atividade 34
/* 
let alunos = ["Ana", "João", "Maria", "Pedro"];

let aluno = alunos.find((nome) => nome == "João");

console.log("Aluno encontrado: " + aluno);
 */

//Atividade 35
/* 
let notas = [5, 6, 7, 8, 9];

let nota = notas.find(nota => nota > 7);

console.log("Nota encontrada: " + nota);
 */

//Atividade 36
/* 
let alunos = [
  { nome: "Ana", nota: 8 },
  { nome: "João", nota: 6 },
  { nome: "Maria", nota: 9 },
];

let aluno = alunos.find((aluno) => aluno.nota > 7);
console.log("Aluno: " + aluno.nome);
 */

//Atividade 37
/* 
let notas = [5, 7, 8, 6, 10];

let aprovadas = notas.filter((nota) => nota >= 7);

console.log(aprovadas);

// Atividade 38

let precos = [50, 120, 80, 200, 150];

let caros = precos.filter((preco) => preco > 100);

console.log(caros);

//Atividade 39

let alunos = [
  { nome: "Ana", nota: 8 },
  { nome: "João", nota: 6 },
  { nome: "Maria", nota: 9 },
  { nome: "Pedro", nota: 5 },
];

let aprovados = alunos.filter((aluno) => aluno.nota >= 7);

console.log(aprovados);
 */
//Atividade 40
/* 
let numeros = [2, 4, 6, 8];

let dobro = numeros.map(numero => numero * 2);

console.log(dobro);
 */
/* 
// Exercício 41

let precos = [100, 200, 300, 400];

let novosPrecos = precos.map((preco) => preco * 1.1);

console.log(novosPrecos);

// Exercício 42

let alunos = [
  { nome: "Ana", idade: 18 },
  { nome: "João", idade: 17 },
  { nome: "Maria", idade: 19 },
];

let nomes = alunos.map((aluno) => aluno.nome);

console.log(nomes);

// Exercício 43

let alunos = ["Carlos", "Ana", "João", "Bruna"];

alunos.sort();

console.log(alunos);

// Exercício 44

let notas = [8, 3, 10, 6, 7];

notas.sort((a, b) => a - b);

console.log(notas);

// Exercício 45

let notas = [8, 3, 10, 6, 7];

notas.sort((a, b) => b - a);

console.log(notas);

// Exercício 46

let alunos = ["Ana", "João", "Maria"];

let lista = alunos.join(", ");

console.log(lista);

// Exercício 47

let tecnologias = ["HTML", "CSS", "JavaScript", "Node.js"];

let lista = tecnologias.join(" - ");

console.log(lista);

// Exercício 48

let projeto = ["Site SENAI", "HTML", "CSS", "JavaScript"];

let mensagem = projeto.join(" | ");

console.log(mensagem);

// Exercício 49

let alunos = ["Ana", "João", "Maria", "Pedro"];

alunos.reverse();

console.log(alunos);

// Exercício 50

let atividades = [
  "Estudar HTML",
  "Estudar CSS",
  "Estudar JavaScript",
  "Fazer exercício",
];

atividades.reverse();

console.log(atividades);

// Exercício 51

let acessos = [
  "08:00 - Lucas",
  "08:10 - Ana",
  "08:20 - João",
  "08:30 - Maria",
  "08:40 - Pedro",
  "08:50 - Bruna",
];

acessos.reverse();

console.log("Histórico do mais recente para o mais antigo:");

for (let i = 0; i < acessos.length; i++) {
  console.log(acessos[i]);
}

// Desafio Final

let alunos = ["Ana", "João", "Maria", "Pedro"];

alunos.push("Lucas");

alunos.unshift("Giovanni");

alunos.splice(2, 1);

let aluno = alunos.find((nome) => nome == "João");

console.log("Quantidade de alunos: " + alunos.length);

console.log("Primeiro aluno: " + alunos[0]);

console.log("Último aluno: " + alunos[alunos.length - 1]);

console.log("Aluno pesquisado: " + aluno);

console.log("Lista de alunos:");

for (let i = 0; i < alunos.length; i++) {
  console.log(alunos[i]);
}
 */
