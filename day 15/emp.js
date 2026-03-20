const employees=[{id:"A101",salary:50000},{id:"A102",salary:70000},{id:"A103",salary:60000},{id:"A104",salary:90000}];
const highpaid=employees.filter(employees=>employees.salary>60000);
console.log(highpaid);
const highPaidIDs = employees
  .filter(employees => employees.salary > 60000)
  .map(employees => employees.id);
console.log(highPaidIDs);
//const highpaidIds=employees.map()