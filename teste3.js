const fs = require('fs');
const path = require('path');

function getAboveAverageDays(daysWithRevenue) {
  const monthlyAverage = daysWithRevenue.reduce((acc, dia) => acc + dia.valor, 0) / daysWithRevenue.length;

  return daysWithRevenue.filter(day => day.valor > monthlyAverage).length;
}

const filePath = path.join(__dirname, 'dados.json');
const jsonData = fs.readFileSync(filePath, 'utf8');

const invoiceData = JSON.parse(jsonData);
const daysWithRevenue = invoiceData.filter(day => day.valor > 0);

const minRevenue = Math.min(...daysWithRevenue.map(day => day.valor));
const maxRevenue = Math.max(...daysWithRevenue.map(day => day.valor));

const daysAboveAverage = getAboveAverageDays(daysWithRevenue);

console.log(`Menor faturamento: R$ ${minRevenue.toFixed(2)}`);
console.log(`Maior faturamento: R$ ${maxRevenue.toFixed(2)}`);
console.log(`Dias acima da média: ${daysAboveAverage}`);
