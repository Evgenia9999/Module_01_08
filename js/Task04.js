const foo = (n, m) => {

if (n > m) {

    max = n;
    min = m;
} else {
    max = m;
    min = n;
}

const allYear = Array(max - min + 1).fill(1);
console.log( allYear);

    for (i = 0; i < allYear.length; i++, min++) {

    const range = allYear[i] * min;
    const yearDeleted = allYear.splice(i, 1, range);

    }
    // console.log(allYear);

const leapYear = allYear.filter(item => (!(item % 4) && (item % 100)) || !(item % 400))
console.log('leapYear: ', leapYear);

}

foo(800, -100)
