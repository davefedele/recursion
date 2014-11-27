// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
var stringifyJSON = function(obj) {
  console.log("----------------------------------");
  var stringified = "";

  if (typeof obj === "number") {
    console.log("number");
    stringified += obj;
  }
  else if (typeof obj === "string") {
    console.log("string");
    stringified += '"' + obj +'"';
  }
  else if (typeof obj === "boolean") {
    console.log("boolean");
    stringified += Boolean(obj);
  }
  else if (obj === null) {
    console.log("null");
    stringified += "null";
  }
  else if (obj === undefined) {
    console.log("undefined");
    //do nothing
  }
  else if (typeof obj === "function") {
    console.log("function");
    //do nothing
  }
//return recursive for all other objects
  if (Array.isArray(obj)) {
    console.log("array");
    stringified += "[";
    for (var i=0; i<obj.length; i++) {
      stringified += stringifyJSON(obj[i]);
      if (obj.length !== 1) {
        if (i !== obj.length -1) {
          stringified += ",";
        }
      }
    }
    stringified += "]";
  }
  else if (Object.prototype.toString.call(obj) === "[object Object]") {
    console.log("for strict objects")
    stringified += "{";
    if (Object.keys(obj).length === 0){
      ;
    }
    else {
      var illegal = false;
      for (var key in obj) {
        if (obj[key] === undefined) {
          console.log("skipping undefined values");
          illegal = true;
        }
        else if (typeof obj[key] === "function") {
          console.log("skipping functions");
          illegal = true;
        }
        else{
          stringified += stringifyJSON(key) + ':' + stringifyJSON(obj[key]) + ",";
        }
      }
      if(!illegal) {
        stringified = stringified.slice(0,-1);
      }
    }
    stringified += "}";
  }

  console.log("----------------------------------");
  console.log(obj);
  console.log("JSON_stringified = " + stringified);
  return stringified;
};
