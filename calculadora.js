const readline = require('readline');

function calcular(primero, segundo, operacao) {
  switch (operacao) {
    case '+':
      return primero + segundo;
    case '-':
      return primero - segundo;
    case '*':
      return primero * segundo;
    case '/':
      if (segundo === 0) {
        throw new Error('Não é possível dividir por zero.');
      }
      return primero / segundo;
    case '%':
      if (segundo === 0) {
        throw new Error('Não é possível calcular módulo por zero.');
      }
      return primero % segundo;
    case '^':
      return primero ** segundo;
    default:
      throw new Error('Operação inválida. Use +, -, *, /, %, ou ^.');
  }
}

function executarComArgumentos(args) {
  if (args.length < 3) {
    throw new Error('Uso: node calculadora.js <numero1> <operacao> <numero2>');
  }

  const numero1 = Number(args[0]);
  const operacao = args[1];
  const numero2 = Number(args[2]);

  if ([numero1, numero2].some((valor) => Number.isNaN(valor))) {
    throw new Error('Informe números válidos.');
  }

  const resultado = calcular(numero1, numero2, operacao);
  console.log(`Resultado: ${resultado}`);
}

function iniciarModoInterativo() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question('Digite o primeiro número: ', (valor1) => {
    rl.question('Digite a operação (+, -, *, /, %, ^): ', (operacao) => {
      rl.question('Digite o segundo número: ', (valor2) => {
        try {
          const numero1 = Number(valor1);
          const numero2 = Number(valor2);

          if ([numero1, numero2].some((valor) => Number.isNaN(valor))) {
            throw new Error('Digite valores numéricos válidos.');
          }

          const resultado = calcular(numero1, numero2, operacao);
          console.log(`Resultado: ${resultado}`);
        } catch (erro) {
          console.error(`Erro: ${erro.message}`);
        } finally {
          rl.close();
        }
      });
    });
  });
}

try {
  if (process.argv.length > 2) {
    executarComArgumentos(process.argv.slice(2));
  } else {
    iniciarModoInterativo();
  }
} catch (erro) {
  console.error(`Erro: ${erro.message}`);
  process.exit(1);
}
