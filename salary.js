
function netSalaryCalculator() {

    
    const prompt = require('prompt-sync')();
    let basicSalary = parseFloat(prompt("Please enter a valid Basic Salary: "));
    let benefits = parseFloat(prompt("Key in Benefits: "));

    if (isNaN(basicSalary) || isNaN(benefits) || basicSalary <= 0 || benefits <= 0) {
        console.log("Entries must be numbers and the basic salary should be > 0");
        return;
    }

    

    
    const grossSalary = basicSalary + benefits;

    
    let paye;
    if (grossSalary <= 24000) {
        paye = grossSalary * 0.1;
    } else if (grossSalary <= 32333) {
        paye = 2400 + (grossSalary - 24000) * 0.25;
    } else if (grossSalary <= 500000) {
        paye = 6008.25 + (grossSalary - 32333) * 0.3;
    } else if (grossSalary <= 800000) {
        paye = 74898.25 + (grossSalary - 500000) * 0.325;
    } else {
        paye = 151298.25 + (grossSalary - 800000) * 0.35;
    }

    
    const housingLevyDeductionRate = 0.015;
    const housingLevy = grossSalary * housingLevyDeductionRate;


    let nhif;
    if (grossSalary <= 5999) nhif = 150;
    else if (grossSalary <= 7999) nhif = 300;
    else if (grossSalary <= 11999) nhif = 400;
    else if (grossSalary <= 14999) nhif = 500;
    else if (grossSalary <= 19999) nhif = 600;
    else if (grossSalary <= 24999) nhif = 750;
    else if (grossSalary <= 29999) nhif = 850;
    else if (grossSalary <= 34999) nhif = 900;
    else if (grossSalary <= 39999) nhif = 950;
    else if (grossSalary <= 44999) nhif = 1000;
    else if (grossSalary <= 49999) nhif = 1100;
    else if (grossSalary <= 59999) nhif = 1200;
    else if (grossSalary <= 69999) nhif = 1300;
    else if (grossSalary <= 79999) nhif = 1400;
    else if (grossSalary <= 89999) nhif = 1500;
    else nhif = 1700;

    
    const tier1Limit = 7000;
    const tier2Limit = 36000;
    const nssfRate = 0.06;
    let nssf;

    if (grossSalary <= tier1Limit) {
        nssf = grossSalary * nssfRate;
    } else if (grossSalary <= tier2Limit) {
        nssf = tier1Limit * nssfRate + (grossSalary - tier1Limit) * nssfRate;
    } else {
        nssf = tier1Limit * nssfRate + (tier2Limit - tier1Limit) * nssfRate;
    }

    
    const netSalary = grossSalary - paye - housingLevy - nhif - nssf;

    
    console.log(`Paye (Tax): ${paye.toFixed(2)}`);
    console.log(`Housing Levy: ${housingLevy.toFixed(2)}`);
    console.log(`NHIF Deduction: ${nhif.toFixed(2)}`);
    console.log(`Net Salary: ${netSalary.toFixed(2)}`);
}

netSalaryCalculator();