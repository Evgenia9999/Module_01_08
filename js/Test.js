const hero = {
login: 'Дэдпул',
firstName: 'Уэйд',
lastName: 'Уилсон',
transport: {cars: {sport: ['BMW', 'Lada', 'VAZ' ]}},
}

Object.defineProperty(hero, 'fullName', {
get () {
return `${this.firstName} ${this.lastName}`

},
set(val) {

    if (typeof val === 'string') {
    this.comment = val;
    }
}
})

console.log(hero.fullName);
hero.fullName = 'Огонь'

hero.login  = 'Masha'
console.log(hero);
