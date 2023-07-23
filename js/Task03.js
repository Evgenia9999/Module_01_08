const randomMas = (a, n, m, s) => {



    let newMas = Array(a).fill(1);

    let random = newMas.map((item) => item * Math.floor(Math.random() * (m - n + 1) + n));

    if (s === 'even') {
        result = random.filter((item) => item % 2 );

    } else if (s === 'odd') {
        result = random.filter((item) => !(item % 2));

    } else if (s === undefined) {
        result = random;
    };

    return result;
};
console.log(randomMas(7, -5, 50, ));



