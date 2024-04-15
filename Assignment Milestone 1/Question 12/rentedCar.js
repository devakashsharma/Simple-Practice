function rentedCost(days, type) {
    if (type <= 4000) {
        return type * days;
    } else if(type > 4000 && type <= 10000) {
        return type * days;
    } else if (type > 10000) {
        return type * days;
    }

    return "Error";
}

const days = 7;
const type = 20000;
console.log(rentedCost(days, type));