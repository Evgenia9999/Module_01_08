const randomMas = (a, n, m, s) => {



    let newMas = Array(a).fill(1);

    let random = newMas.map((item) => item * Math.floor(Math.random() * (m - n + 1) + n));
    console.log('random: ', random);


    if (s === 'even') {
        const evenArr = random.filter((item) => item % 2 )
        console.log(' evenArr: ',  evenArr);

    } else if (s === 'odd') {
        const oddArr = random.filter((item) => !(item % 2) )
        console.log(' oddArr: ',  oddArr);

    }
}
console.log(randomMas(7, -5, 50, 'odd'));



