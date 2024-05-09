

const captureValue = ( value) => { 
    let resultHTMl = document.getElementById('inputs_result');
    resultHTMl.value = resultHTMl.value + value;
}

function submit() { 
    let resultHTMl = document.getElementById('inputs_result');
    const value =   resultHTMl.value;
    const result = eval(value); 
    resultHTMl.value =result;
}

function deleteValue() {
    let resultHTMl = document.getElementById('inputs_result');
 const value =   resultHTMl.value;
const leftValues= value.substring(0,resultHTMl.value.length - 1); 
resultHTMl.value = leftValues;

}

const resetInput = () => { 
    let resultHTMl = document.getElementById('inputs_result');
    resultHTMl.value = ''; 
}
//97979


 