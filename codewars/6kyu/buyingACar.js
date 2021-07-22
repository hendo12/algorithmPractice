// https://www.codewars.com/kata/554a44516729e4d80b000012/javascript

function nbMonths(startPriceOld, startPriceNew, savingperMonth, percentLossByMonth) {
    let months = 0;
    let currentCarPrice = startPriceOld;
    let totalMoney = startPriceOld;
    let newCarPrice = startPriceNew;

    while(totalMoney < newCarPrice) {
        months++;
        if(months % 2 === 0 && months !== 0) {
            percentLossByMonth += 0.5;
        }
        currentCarPrice = currentCarPrice - ((percentLossByMonth / 100) * currentCarPrice);
        totalMoney = currentCarPrice + (savingperMonth * months);
        newCarPrice = newCarPrice - ((percentLossByMonth / 100) * newCarPrice);
    }

    totalMoney -= newCarPrice;
    totalMoney = Math.round(totalMoney);

    return [months, totalMoney];
}