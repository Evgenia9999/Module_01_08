const randomMas = (a, n, m, s) => {

    if (n > m) {

        max = n;
        min = m;
    } else {
        max = m;
        min = n;
    }

    const newMas = Array(a).fill(1);

    const random = newMas.map((item) => item * Math.floor(Math.random() * (max - min + 1) + min));

    if (s === 'odd') {
        const result = random.filter((item) => item % 2 );
        return result;
    } else if (s === 'even') {
        const result = random.filter((item) => !(item % 2));
        return result;
    } else if (s === undefined) {
        const result = random;
        return result;
    };

};
console.log(randomMas(7, 5, -50, ));



