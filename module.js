var angular = {
};
var $$modules = [
];
angular.module = function (moduleName, dep) {
  $$modules[moduleName] = $$modules[moduleName] || [
  ];
  var newModule = $$modules[moduleName];
  newModule.push(dep);
  
  dep.forEach(function(d){
    console.log('\nresolving... '+d);
  })
    
  function $$Scope() {
  }
  
  $$Scope.prototype.getRootScope = function () {
    return window;
  }
  return {
    controller: function (name, definitionFun) {
      definitionFun.call(this, new $$Scope);
    },
    factory: function (name, definitionFun) {
      definitionFun.call(this);
    }
  }
}
/*
//USAGE 
var mm = angular.module('mymodule', ['a','b']);
mm.controller('myctrl', function ($scope) {
  console.log($scope.getRootScope());
});
*/
