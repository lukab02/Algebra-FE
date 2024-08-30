var password = "0123456789012";

// 1. Svaki znak passworda jedinstven 


function isUnique (str){
  return str.length == _.uniq(str).length;

}

console.log("Opcija 1a: " + isUnique(password));

function isUnique1 (str){
  return new Set(str).size == str.length


}

console.log("Opcija 1b: " + isUnique1(password));

function isUnique2 (str){
  var strChars= "012";
  for (var i of str){
    if(strChars.includes(i)){
      return false;
    }
    strChars = strChars + i;
  }
  return true;


}

console.log("opcija 1c: " + isUnique1(password));

// 2. Svi znakovi su brojke

function isNum(str) {
  if(_.toNumber(str)){
    return true;
  }else{
    return false;
  }

}

console.log("opcija 2: " + isNum(password));


// 3. Skrati na 10

function reduceLen(str) {
  if (str.length > 10){
    var tempStr = str.substring(0, 10);
    return tempStr;
  } else {
    return str;
  }
}

console.log("");