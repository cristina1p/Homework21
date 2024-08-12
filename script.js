// BMI = masa / inaltime ** 2;

// Varianta 1

let weightVadim1 = 78;
let heightVadim1 = 1.69;
let weightAlex1 = 92;
let heightAlex1 = 1.95;
let bmiVadim1;
let bmiAlex1;

bmiVadim1 = weightVadim1 / (heightVadim1 ** 2);
bmiAlex1 = weightAlex1 / (heightAlex1 ** 2);

console.log(`BMI pentru Vadim este: ${bmiVadim1}.`);
console.log(`BMI pentru Alex este: ${bmiAlex1}.`);

let markHigherBM1 = bmiVadim1 > bmiAlex1;

console.log(`BMI-ul pentru Vadim este mai mare decat pentru Alex: ${markHigherBM1}`)

// Varianta 2 

let weightVadim2 = 95;
let heightVadim2 = 1.88;
let weightAlex2 = 85;
let heightAlex2 = 1.76;
let bmiVadim2;
let bmiAlex2;

bmiVadim2 = weightVadim2 / (heightVadim2 ** 2);
bmiAlex2 = weightAlex2 / (heightAlex2 ** 2);

console.log(`BMI pentru Vadim este: ${bmiVadim2}.`);
console.log(`BMI pentru Alex este: ${bmiAlex2}.`);

let markHigherBM2 = bmiVadim2 > bmiAlex2;

console.log(`BMI-ul pentru Vadim este mai mare decat pentru Alex: ${markHigherBM2}`)

