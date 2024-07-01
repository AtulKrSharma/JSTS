let person = {
  name: 'atul',
  location: 'Palam',
  country: 'India',
};

let { name, location: l, country = 'Canada' } = person;
console.log(name);
console.log(l);
console.log(country);
