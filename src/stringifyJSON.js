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
//returnecursive for all other objects
  else if (Array.isArray(obj)) {
    console.log("array");
    stringified += "[";
    for (var i=0; i<obj.length; i++) {
      stringified += stringifyJSON(obj[i]);
      if(obj.length < 1 || i<obj.length){
        stringified += ",";
      }
    }
    stringified += "]";
  }
  // else {
  //   for (var key in obj) {
  //     stringified += key;
  //   }
  // }

  console.log(obj);

  return stringified;
};
