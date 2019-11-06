var quesions = {  //массив с вопросами
first: ["ans11", "ans2", "ans3"],
second: ["ans12", "ans2", "ans3"],
third: ["ans13", "ans2", "ans3"],
fours: ["ans14", "ans2", "ans3"]
};
var endquesions = {}; //новый массив , в котором строиться рандомизированный массив с тестами
function fix(arr){  //функция строит новый масив
  var keys = Object.keys(quesions);
  for (let i = 0 ; i < arr.length;i++){
      endquesions[keys[arr[i]]] = quesions[keys[arr[i]]]
  };
}
function mix(array) { //создаёт массив на основе которого строиться перемешаный
  var randomquesion;
  var auxiliary;
  var newarr = [];
  for (var i = array.length ; i > newarr.length ; i++) {
      randomquesion = Math.floor(Math.random() * (array.length - 0) + 0);
      auxiliary = randomquesion;
      auxiliary += "";
      if(newarr.length>=array.length){
        return fix(newarr);
      };
      if (newarr.indexOf(auxiliary)==-1){
        newarr.push(auxiliary);
      };
  };
  return array;
};

function auxiliary(array) {
  return mix(Object.keys(array));
};
function showlog(array){
  console.log(array)
}
mixedarray = auxiliary(quesions);
showlog(endquesions);
