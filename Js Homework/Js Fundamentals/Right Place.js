function replaceChar(string, char, stringTest){
    let newString = string.replace("_", char);
    let output = newString === stringTest ? "Matched" : "Not Matched";
    console.log(output);
}

replaceChar("Str_ng", "I", "Strong");
