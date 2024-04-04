function passwordValidator(input) {
  let password = input;
  let isValid = true;
  if (!isLongEnough(password)) {
    console.log("Password must be between 6 and 10 characters");
    isValid = false;
  }
  if (!isAlphanumeric(password)) {
    console.log("Password must consist only of letters and digits");
    isValid = false;
  }
  if (!hasAtLeastTwoDigits(password)) {
    console.log("Password must have at least 2 digits");
    isValid = false;
  }
    if (isValid) {
        console.log("Password is valid");
    }
  function isLongEnough(password) {
    return password.length >= 6 && password.length <= 10;
  }
  function isAlphanumeric(password) {
    return /^[a-zA-Z0-9]+$/.test(password);
  }
  function hasAtLeastTwoDigits(password) {
    let digits = password.match(/\d/g);
    return digits !== null && digits.length >= 2;
  }
}
