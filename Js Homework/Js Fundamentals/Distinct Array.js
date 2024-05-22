// function noRepeats(arr){
// noRepeatsArray = [];

// console.log(noRepeatsArray.join(' '));
// }
// noRepeats([7, 8, 9, 7, 2, 3, 4, 1, 2]); // 1 2 3 4 5 6

function noRepeats(arr) {
  let noRepeatsArray = [];
  let occurrences = {};

  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    if (!occurrences[num]) {
      noRepeatsArray.push(num);
      occurrences[num] = true;
    }
  }

  console.log(noRepeatsArray.join(" "));
}

noRepeats([7, 8, 9, 7, 2, 3, 4, 1, 2]); // 7 8 9 2 3 4 1
