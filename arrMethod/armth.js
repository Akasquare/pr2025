let nums= [2,3,5,4,6,5,7,8,9,8,5];

let result = nums.reduce((max, ele) => {
  return  max < ele ?  ele :  max});
console.log(result);