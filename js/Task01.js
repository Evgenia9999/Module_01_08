

const randomMas = (n) => {

    let newMas = Array(n).fill(1);

    let result = newMas.map((item) => item * Math.round(Math.random() * 100))
    
    return result;

}
console.log('result', randomMas(5));