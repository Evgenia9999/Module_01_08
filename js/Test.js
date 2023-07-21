const numbers = [1, 13, 56, 3243, 65674, 2, 435];
// const scientists = ['Mendeleev', 'Curie', 'Tesla', 'Popov']

const scientists = [
    {
    name: 'Mendeleev',
    count: 2,
    },

    {
    name: 'Curie',
    count: 3,
    },

    {
    name: 'Tesla',
    count: 4,
    },

];


const nums = [1, 2, 3]


const newArr = scientists.reduce((acc, item, i, arr) => {
    
    return acc + item.count;

}, 0)
console.log(newArr);

