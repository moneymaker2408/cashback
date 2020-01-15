const REGULAR = 'regular';
const INCREASED = 'increased';
const SPECIAL = 'special';

const regularPercent = 0.01;
const increasedPrecent = 0.05;
const specialPrecent = 0.3;


const purchase = [
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

for(const purchase of purchases){
    
    if(purchase.category === REGULAR){
        cashback = cashback + purchase.amount * regularPercent;
        continue;
    }

    if(purchase.category === INCREASED){
        cashback += purchase.amount * increasedPrecent;
        continue;
    }

    if(purchase.category === SPECIAL){
        cashback += purchase.amount * specialPrecent;
        continue;
    }
}

const cashbackLimit = 3000;
if(cashback > cashbackLimit){
    cashback = cashbackLimit;
}


console.log(cashback);