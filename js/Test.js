const hero = {
login: 'Дэдпул',
firstName: 'Уэйд',
lastName: 'Уилсон',
transport: {cars: {sport: ['BMW', 'Lada', 'VAZ' ]}},
getfullname () {
return `${this.firstName} ${this.lastName}`
},
say () {
    console.log(`Меня зовут ${this.getfullname()}`);
},
}

// hero.say();

const heroStr = JSON.stringify(hero);
console.log('heroStr: ', heroStr);

const heroObj = JSON.parse(heroStr);
console.log('heroObj: ', heroObj);
