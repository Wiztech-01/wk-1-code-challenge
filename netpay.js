function calculateNetPay(grossSalary, benefits) {
    const grossSalary = 'basicSalary + benefits';
    const nssfDeductions = grossSalary * 0.06;
    const nhifDeductions = grossSalary * 0.02;
    const PAYE = grossSalary * 0.04;
    const netPay = grossSalary -(nssfDeductions + nhifDeductions + PAYE);
    return {
        netPay,
        nhifDeductions,
        nssfDeductions,
        PAYE,
}

function calculateNSSF(grossSalary) {
    const nssfRate = 0.06; 
    const nssfDeductions = Math.min(basicSalary * nssfRate, 18000); 
    const netPay = grossSalary - paye - nhifDeductions - nssfDeductions;
    return grossSalary * nssfRate
} 

function calculatePAYE(grossSalary) {
    const PAYE = grossSalary * 0.3;

let paye = 0;
    if (grossSalary <= 24000) {
      paye = grossSalary * 0.10;
    } else if (grossSalary <= 32333) {
      paye = 24000 * 0.10 + (grossSalary - 24000) * 0.25;
    } else if (grossSalary <= 500000) {
      paye = 24000 * 0.10 + 8333 * 0.25 + (grossSalary - 32333) * 0.30;
    } else if (grossSalary <= 800000) {
      paye = 24000 * 0.10 + 8333 * 0.25 + 467667 * 0.30 + (grossSalary - 500000) * 0.325;
    } else {
      paye = 24000 * 0.10 + 8333 * 0.25 + 467667 * 0.30 + 300000 * 0.325 + (grossSalary - 800000) * 0.35;
    }
}

function calculatenhifDeductions() {
    const NHIFDeduction = grossSalary * 0.05;

let nhifDeductions = 0;
const nhifRates = [
  { minGrossPay: 0, maxGrossPay: 5999, deduction: 150 },
  { minGrossPay: 6000, maxGrossPay: 7999, deduction: 300 },
 ];
 for (const rate of nhifRates) {
    if (grossSalary >= rate.minGrossPay && grossSalary <= rate.maxGrossPay) {
      nhifDeductions = rate.deduction;
      break;
    }
}

const netPay = grossSalary -(nssfDeductions + nhifDeductions + PAYE);

console.log(`Gross Salary: ${grossSalary.toFixed(2)} Ksh`);
console.log(`PAYE (Tax): ${paye.toFixed(2)} Ksh`);
console.log(`NHIF Deductions: ${nhifDeductions.toFixed(2)} Ksh`);
console.log(`NSSF Deductions: ${nssfDeductions.toFixed(2)} Ksh`);

console.log(calculateNetPay(basicSalary, benefits));
