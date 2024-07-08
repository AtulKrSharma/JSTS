let myObj = {
    name: 'atul',
    dept: 'tech',
    age: 30,
    city: 'Mississauga',
    projects: {
        java: 'selenium',
        js: 'cypress',
        ts: 'playwright'
    },
    friends: ['Rakesh', 'Anuj', 'Deswal', 'Dada', 'Monty']
};

for (const key in myObj) {
    console.log(key);
    console.log(myObj[key]);
}