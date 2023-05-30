let now = Date.now();
let birthDate = new Date(2000, 10, 30);
let birth = Date.parse(birthDate);
let timeSince = now - birth;
let daysSince = timeSince / 709920234603
console.log(daysSince);