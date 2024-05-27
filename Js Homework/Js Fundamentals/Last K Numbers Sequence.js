function sumKElements(n, k) {
  let result = [1];
  for (let i = 1; i < n; i++) {
    let sum = 0;
    for (let j = i - k; j < i; j++) {
      if (j >= 0) {
        sum += result[j];
      }
    }
    result.push(sum);
  }
  console.log(result.join(" "));
}
