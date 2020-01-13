const REGULAR = 'regular';
const INCREASED = 'increased';
const SPECIAL = 'special';

const regularPercent = 0.01;
const increasedPrecent = 0.05;
const specialPrecent = 0.3;


const arrs = [
    {
        amount: 3500,
        category: REGULAR,
    },
    {
        amount: 1500,
        category: INCREASED,
    },
    {
        amount: 5600,
        category: SPECIAL,
    }

];

let cashback = 0;

for(const arr of arrs){
    
    if(arr.category === REGULAR){
        cashback = cashback + arr.amount * regularPercent;
    }

    if(arr.category === INCREASED){
        cashback += arr.amount * increasedPrecent;
    }

    if(arr.category === SPECIAL){
        cashback += arr.amount * specialPrecent;
    }
}

const cashbackLimit = 3000;
if(cashback > cashbackLimit){
    cashback = cashbackLimit;
}

console.log(cashback);