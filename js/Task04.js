const foo = (n, m) => {

const allYear = Array(m - n + 1).fill(1);
// console.log( allYear);

    for (i = 0; i < allYear.length; i++, n++) {

    const range = allYear[i] * n;
    const yearDeleted = allYear.splice(i, 1, range);

    }
    // console.log(allYear);

const leapYear = allYear.filter(item => !(item % 4) )
console.log('leapYear: ', leapYear);

}

foo(-100, 0)