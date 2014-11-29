  // If life was easy, we could just do things the easy way:
  // var getElementsByClassName = function (className) {
  //   return document.getElementsByClassName(className);
  // };

  // But instead we're going to implement it from scratch:
  var getElementsByClassName = function(className){
    var result = [];

    var documentBody = document;

    function childRecursion(startingPoint) {
      var nodeChildren = startingPoint.childNodes;
      for (var i=0; i<nodeChildren.length; i++) {
        var nodeClasses = nodeChildren[i].classList;
        if (nodeClasses && nodeClasses.length !== 0) {
          console.log(nodeChildren[i] + " has these classes: " + nodeClasses);
          for (var j=0; j<nodeClasses.length; j++) {
            if (nodeClasses[j] === className) {
              result.push(nodeChildren[i]);
            }
          }
        }
        childRecursion(nodeChildren[i]);
      }
    }

    childRecursion(documentBody);

    return result;
  };