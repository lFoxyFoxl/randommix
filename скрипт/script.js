var quesions = {
    que1: anss = {
        ans1: "true",
        ans2: "false",
        ans3: "false"
    },
    que2: anss2= {
        ans1: "true",
        ans2: "false",
        ans3: "false"
    },
    que3: anss3= {
        ans1: "true",
        ans2: "false",
        ans3: "false"
    }
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