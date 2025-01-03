var password = "0123456789a";

// 1. Svaki znak passworda jedinstven

function isUnique(str){
    return str.length == _.uniq(str).length;
}

console.log("Opcija 1a: " + isUnique(password));

function isUnique1(str){
    return new Set(str).size == str.length;
}

console.log("Opcija 1b: " + isUnique1(password));

function isUnique2(str){
    var strChars = "";
    for (var i of str){
        if(strChars.includes(i)){
            return false;
        }
        strChars = strChars + i;
    }
    return true;
}

console.log("Opcija 1c: " + isUnique2(password));

//2. Svi znakovi su brojke

function isNum(str){
    if(_.toNumber(str)){
        return true;
    } else {
        return false;
    }
}

console.log("Opcija 2: " + isNum(password));

// 3. skrati na 10

function reduceLen (str){
    if(str.length > 10){
        // var tempStr = _.take(str, 10);
        var tempStr = str.substring(0, 10);
        return tempStr;
    } else {
        return str;
    }
}
console.log("Opcija 3: " + reduceLen(password));
