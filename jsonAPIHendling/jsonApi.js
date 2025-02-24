let jsonRes ='{"fact":"man is mortal", "key": 937 }';

let validRes= JSON.parse(jsonRes);
console.log(validRes)
console.log(validRes.fact)

let student = {
    "name": "akash",
    "roll": 6272
}
JSON.stringify(student);
