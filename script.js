// BMI = masa / inaltime ** 2;

// Varianta 1

let weightVadim = 78;
let heightVadim = 1.69;
let weightAlex = 92;
let heightAlex = 1.95;
let bmiVadim;
let bmiAlex;

// calculam mbi

bmiVadim = (weightVadim / heightVadim) ** 2;
bmiAlex = (weightAlex / heightAlex) ** 2;

let bmiVadimFinal = 'BMI a lui Vadim: ' + bmiVadim + '.'
console.log(bmiVadimFinal);

let bmiAlexFinal = 'BMI a lui Alex: ' + bmiAlex + '.'
console.log(bmiAlexFinal);

// higher mbi Vadim

let markHigherBMI = console.log(bmiVadimFinal > bmiAlexFinal);

// Varianta 2 

let weightVadim2 = 95;
let heightVadim2 = 1.88;
let weightAlex2 = 85;
let heightAlex2 = 1.76;
let bmiVadim2;
let bmiAlex2;

// calculam mbi

bmiVadim2 = (weightVadim2 / heightVadim2) ** 2;
bmiAlex2 = (weightAlex2 / heightAlex2) ** 2;

let bmiVadimFinal2 = 'BMI a lui Vadim: ' + bmiVadim2 + '.'
console.log(bmiVadimFinal2);

let bmiAlexFinal2 = 'BMI a lui Alex: ' + bmiAlex2 + '.'
console.log(bmiAlexFinal2);

// higher mbi Vadim

let markHigherBMI2 = console.log(bmiVadimFinal2 > bmiAlexFinal2);

