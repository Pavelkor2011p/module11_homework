let result;

function getPercents(percent, number) {
        if (percent > 0) {
            return result = number / 100 * percent;
        } else return result = 'Данные не верны';
    }
getPercents(20, 300);
console.log(result);
module.exports = getPercents;