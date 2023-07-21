const randomMas = (a, n, m) => {



    let newMas = Array(a).fill(1);

    let random = newMas.map((item) => item * Math.floor(Math.random() * (m - n + 1) + n));
    

    return random;

}
console.log(randomMas(7, 5, 50));

