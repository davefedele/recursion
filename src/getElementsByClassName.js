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
      _.each( nodeChildren, function(value) {
        var nodeClasses = value.classList;
        if (nodeClasses && nodeClasses.length !== 0) {
          _.each( nodeClasses, function(foundClassName) {
            if (foundClassName === className) {
              result.push(value);
            }
          });
        }
        childRecursion(value);
      });
    }

    childRecursion(documentBody);

    return result;
  };