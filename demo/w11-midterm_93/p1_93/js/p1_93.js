/////////////////////
/* Compute salary1 */
const salary1 = [10000, 30000, 80000, 60000, 100000, 25000];

let max1 = -99999999;
let min1 = 999999999;
let total1 = 0;
let average1 = 0;

const summarySalary1 = (salary1) => {
  salary1.forEach((salary)=>{
    if(salary > max1) max1 = salary;
    if(salary < min1) min1 = salary;
    total1 += salary;
  })
  average1 = (total1 / salary1.length).toFixed(1);
  console.log(`
  Salary1 summary:
    Max: ${max1}
    Min: ${min1}
    Ave: ${average1}
  `);

};

// summarySalary1(salary1);
/*
Salary1 summary:
  Max: 100000
  Min: 10000
  Ave: 50833.3
*/

/////////////////////
/* Compute salary2 */

const salary2 = [
  {
    name: 'John',
    sex: 'male',
    age: 20,
    salary: 10000,
  },
  {
    name: 'Steve',
    sex: 'male',
    age: 30,
    salary: 30000,
  },
  {
    name: 'Amy',
    sex: 'female',
    age: 35,
    salary: 80000,
  },
  {
    name: 'Susan',
    sex: 'female',
    age: 32,
    salary: 60000,
  },
  {
    name: 'William',
    sex: 'male',
    age: 45,
    salary: 100000,
  },
  {
    name: 'Mary',
    sex: 'female',
    age: 25,
    salary: 25000,
  },
];

const summary2 = {
  countAll: 0,
  maxAll: -999999,
  minAll: 99999999,
  totalAll:0,
  averageAll:0,
  male:{
    count:0,
    max: -9999999,
    min: 99999999,
    total: 0,
    average:0,
  },
  female:{
    count:0,
    max: -9999999,
    min: 99999999,
    total: 0,
    average:0,
  }

};

const computeSalary2 = (salary2) => {
  salary2.forEach((person)=>{
    const {name,sex,age,salary} = person;
    summary2.countAll++;
    if(salary > summary2.maxAll) summary2.maxAll = salary;
    if(salary < summary2.minAll) summary2.minAll = salary;
    summary2.totalAll += salary;
    if(sex === 'male'){
      summary2.male.count++;
      if(salary > summary2.male.max) summary2.male.max = salary;
      if(salary < summary2.male.min) summary2.male.min = salary;
      summary2.male.total += salary;
    }else if(sex === 'female'){
      summary2.female.count++;
      if(salary > summary2.female.max) summary2.female.max = salary;
      if(salary < summary2.female.min) summary2.female.min = salary;
      summary2.female.total += salary;
    }

  });
  summary2.averageAll =(summary2.totalAll / summary2.countAll).toFixed(1)
  summary2.male.average =(summary2.male.total / summary2.male.count).toFixed(1)
  summary2.female.average =(summary2.female.total / summary2.female.count).toFixed(1)
};

const summarySalary2 = (salary2) => {
  console.log(`Susan
  Salary2 Summary:
    countAll:${summary2.countAll}
    maxAll:${summary2.maxAll}
    minAll:${summary2.minAll}
    AveAll:${summary2.averageAll}
    (male, female) = (${summary2.male.count},${summary2.female.count})
    male
      Max:${summary2.male.max}
      Min:${summary2.male.min}
      Ave:${summary2.male.average}
    female
      Max:${summary2.female.max}
      Min:${summary2.female.min}
      Ave:${summary2.female.average}

  `);
};

computeSalary2(salary2);
summarySalary2(salary2);

/*
Salary2 summary:
  countAll: 6
  MaxAll: 100000
  MinAll: 10000
  AveAll: 50833.3
  (male, female) = (3, 3) 
  male:
    Max: 100000
    Min: 10000
    Ave: 46666.7
  female:
    Max: 80000
    Min: 25000
    Ave: 55000.0
*/
