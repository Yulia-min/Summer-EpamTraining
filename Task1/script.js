//https://learn.javascript.ru/array-methods
//https://learn.javascript.ru/destructuring-assignment

const id = Symbol("id");

const firstObject = {
    one: 1,
    two:2,
    three:3,
    four:4,
    eleven:11,
};

const secondObject = {
    five: 5,
    six:6,
    seven:7,
    eight:8,
    nine:9,
    [id]: 10,
    ten:10,
    twelve:21,
};

//Object.freeze(firstObject);
//Object.seal(secondObject);

//firstObject.eleven = 12;
//secondObject.eight = 13;

//////////////////////////practic some of properties///////////////////////////////

document.write(firstObject.one + "<br>");
document.write(firstObject["two"]);

const objectValue = Object.values(firstObject);
document.write("<br>" + objectValue);

const objectKeys = Object.keys(secondObject);
document.write("<br>" + objectKeys);

const objectEntries = Object.entries(firstObject);
document.write("<br>" + objectEntries); 

Object.defineProperty(secondObject, "twelve", {
    value: 12,
});

document.write("<br>" + secondObject.twelve);

Object.defineProperty(secondObject, "twelve", {
    value: 12,
    configurable: false,
    writable: false,
});

firstObject.twelve = 3;
delete firstObject.twelve;

document.write("<br>" + secondObject.twelve + "<br>");

//////////////////////add of objects/////////////////////////////////////

const thirdObject = {
    one: 1,
    two:2,
    three:3,
    four:4,
};

const forthObject = {
    one: 1,
    two:2,
    three:3,
    five:5,
}; 

  const objectAdd = Object.keys({ ...thirdObject,...forthObject}).reduce((sum, current) => {
    sum[current] = (thirdObject[current] || 0) + (forthObject[current] || 0);
    return sum;
  }, {});
  
  document.write(Object.entries(objectAdd) + "<br>");

  /////////////////////////intersect of object////////////////////////////////
  
  const objectIntersect = Object.keys(thirdObject).filter(item => item in forthObject);

  document.write(Object.values(objectIntersect));

