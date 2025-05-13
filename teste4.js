const fs = require('fs');
const path = require('path');

const monthlyRenevue = {
  SP: 67836.43,
  RJ: 36678.66,
  MG: 29229.88,
  ES: 27165.48,
  Outros: 19849.53
};

const totalRevenue = Object.values(monthlyRenevue).reduce((acc, valor) => acc + valor, 0);
const percentageMapping = {};

for (const uf in monthlyRenevue) {
  percentageMapping[uf] = ((monthlyRenevue[uf] / totalRevenue) * 100).toFixed(2);
}

const filePath = path.join(__dirname, 'faturamento.json');

fs.writeFile(filePath, JSON.stringify(percentageMapping, null, 2), 
  (err) => {
    if (err) {
      console.error('Erro ao escrever o arquivo:', err);
    } else {
      console.log('Arquivo faturamento.json criado com sucesso!');
    }
  }
);

console.log('Percentual de representação por estado:');
for (const uf in percentageMapping) {
  console.log(`${uf}: ${percentageMapping[uf]}%`);
}