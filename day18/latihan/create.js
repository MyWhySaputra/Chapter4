const createPerson = function (person) {
    fs.writeFileSync('person.json', JSON.stringify(person));
    return person;
}

const Wahyu = createPerson({
    name: 'Mochamad Wahyu Saputra',
    age: 21,
    address: 'Depok'
})