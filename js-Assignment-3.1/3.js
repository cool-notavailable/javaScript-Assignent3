const obj = {
  name: "Box",
  value: 25000,
  year: 2012,
};
function creatingobject(obj) {
  return Object.keys(obj).length;
}
console.log(`The object has ${creatingobject(obj)} Property`);
