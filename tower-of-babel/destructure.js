//Exercise 10

var json = {
    "name": {
      "first": "Yosuke",
      "family": process.argv[2]
    },
    "birth": {
      "year": 1982,
      "month": 12,
      "day": process.argv[3]
    }
  };

var {
  "name": {
    "family": familyName
  }
} = json;

var {
  "birth": {
    "day": birthDay
  }
} = json;

console.log(familyName);
console.log(birthDay);