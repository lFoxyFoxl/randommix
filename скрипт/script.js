var quesions = {
    que1: ["ans1","ans2","ans3"],
    que2: ["ans1","ans2","ans3"],
    que3: ["ans1","ans2","ans3"]
  };


  function mix(array) {
    var randomquesion;
    var auxiliary;
    for (var i = 0; i < array.length; i++) {
        randomquesion = Math.floor(Math.random() * (i + 1)); 
        auxiliary = array[randomquesion];
        array[randomquesion] = array[i];
        array[i] = auxiliary;
    }
    return array;
  };

  function auxiliary(array) {
    return mix(Object.keys(array));
  };
  function showlog(array){
    console.log(array)
  }

  mixedarray = auxiliary(quesions);
  showlog(quesions);
