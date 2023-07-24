const randomMas = (a, n, m) => {

    if (n > m) {

        max = n;
        min = m;
    } else {
        max = m;
        min = n;
    }

    let newMas = Array(a).fill(1);

    let random = newMas.map((item) => item * Math.floor(Math.random() * (max - min + 1) + min));
    

    return random;

}
console.log(randomMas(7, 5, 50));

