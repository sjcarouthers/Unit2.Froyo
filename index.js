const order = prompt("Please enter your order", "Strawberry, etc");
const oArray = order.split(',');
console.log(oArray);
const counts = {};
oArray.forEach((x) => {
  counts[x] = (counts[x] || 0) + 1;
});
console.log(counts);