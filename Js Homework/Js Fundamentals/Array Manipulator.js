// function arrayMAnipulation(intArr, strArr){
//     let arr = intArr;
//     for (let i = 0; i < strArr.length; i++) {
//         let command = strArr[i].split(' ')[0];
//         let num = strArr[i].split(' ')[1];
//         let index = strArr[i].split(' ')[2];
//         if (command === 'add') {
//             arr.splice(index, 0, num);
//         } else if (command === 'addMany') {
//             let numbers = strArr[i].split(' ').slice(2).map(Number);
//             arr.splice(index, 0, ...numbers);
//         } else if (command === 'contains') {
//             console.log(arr.indexOf(num));
//         } else if (command === 'remove') {
//             arr.splice(index, 1);
//         } else if (command === 'shift') {
//             for (let i = 0; i < index; i++) {
//                 let firstElement = arr.shift();
//                 arr.push(firstElement);
//             }
//         } else if (command === 'sumPairs') {
//             let result = [];
//             for (let i = 0; i < arr.length; i += 2) {
//                 let currentNum = arr[i];
//                 let nextNum = arr[i + 1];
//                 if (nextNum === undefined) {
//                     nextNum = 0;
//                 }
//                 result.push(Number(currentNum) + Number(nextNum));
//             }
//             arr = result;
//         } else if (command === 'print') {
//             console.log(`[ ${arr.join(', ')} ]`);
//         }
//     }
// }

function arrayMAnipulation(intArr, strArr) {
  for (let i = 0; i < strArr.length; i++) {
    let commands = strArr[i].split(" ");
    switch (commands[0]) {
      case "add":
        add(intArr, Number(commands[1]), Number(commands[2]));
        break;
      case "addMany":
        commands.shift();
        let index = commands.shift();
        let numbers = commands.map(Number);
        addMany(intArr, Number(index), numbers);
        break;
      case "contains":
        contains(intArr, Number(commands[1]));
        break;
      case "remove":
        remove(intArr, Number(commands[1]));
        break;
      case "shift":
        shift(intArr, Number(commands[1]));
        break;
      case "sumPairs":
        intArr = sumPairs(intArr);
        break;
      case "print":
        return console.log(`[ ${intArr.join(", ")} ]`);
        break;
    }
  }
  console.log(intArr);

  function add(arr, index, num) {
    arr.splice(index, 0, num);
    //   console.log("added");
  }

  function addMany(arr, index, nums) {
    for (let i = 0; i < nums.length; i++) {
      arr.splice(index + i, 0, nums[i]);
    }

    //   console.log("added many");
  }

  function contains(arr, num) {
    console.log(arr.indexOf(num));
  }

  function remove(arr, index) {
    arr.splice(index, 1);
    //   console.log("removed");
  }

  function shift(arr, index) {
    for (let i = 0; i < index; i++) {
      let firstElement = arr.shift();
      arr.push(firstElement);
    }
    // console.log("shifted");
  }

  function sumPairs(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i += 2) {
      let currentNum = arr[i];
      let nextNum = arr[i + 1];
      if (nextNum === undefined) {
        nextNum = 0;
      }
      result.push(Number(currentNum) + Number(nextNum));
    }
    return result;
    // console.log("summed pairs");
  }
}

arrayMAnipulation(
  [1, 2, 3, 4, 5],
  ["addMany 5 9 8 7 6 5", "contains 15", "remove 3", "shift 1", "print"]
);
