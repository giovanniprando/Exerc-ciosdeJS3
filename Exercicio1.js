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
