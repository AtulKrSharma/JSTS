///value1?? value2
//it will return value2 if value1 is null or undefined

let empName = null ?? "Raja";
let deptName = undefined ?? "Contractor";

console.log(empName);
console.log(deptName);

let demo;

console.log(demo ?? 11);
