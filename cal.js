

function getHistory(){
   return  document.getElementById("history-value").innerText;
}
 function printHistory(num){
     document.getElementById('history-value').innerText = num;
}
 function getOutput(){
  return  document.getElementById('answer-value').innerText;
}
 function printOutput(num){
     if(num == ""){
         document.getElementById('answer-value').innerText = num
     }else{``
         document.getElementById('answer-value').innerText = getformattedNum(num)
     }  
    //  if(document.getElementById('answer-value').style.overflowY='hidden'){

    // }
 }
 function getformattedNum(num){
    if(num=="-"){
        return "";
    }
    let n = Number(num)
     let value = n.toLocaleString("en")
    return value;
}

function reverseFormattedNum(num){
    return Number(num.replace(/,/g,''))
}
 let operator = document.getElementsByClassName('operator');
for(let i=0; i<operator.length; i++){
    operator[i].addEventListener('click', function(){
        
        if(this.id=="clear"){
            printHistory("")
            printOutput("")
        }
        else if(this.id=="cut"){
            let output = reverseFormattedNum(getOutput()).toString();
            if (output){
                output = output.substr(0, output.length-1)
                printOutput(output)
            }

        }
        else{
            let output = getOutput()
            let history = getHistory();
            if(output==""&&history!=""){
                if(isNaN(history[history.length-1])){
                    history = history.substr(0, history.length-1)
                }
            }
            if(output!="" || history!=""){
                output = output==""?
                output: reverseFormattedNum(output)
                history = history+output;
                if(this.id == "="){
                    let result = eval(history)
                    printOutput(result);
                    printHistory("")
                    
                }
                else{
                    history = history+this.id;
                    printHistory(history);
                    printOutput("")
                }
            };
            
        }
    });
}
let number = document.getElementsByClassName('number');
for(let i=0; i<number.length; i++){
    number[i].addEventListener('click', function(){
        let output = reverseFormattedNum(getOutput()) 
        if(output!=NaN){
            output= output + this.id
            printOutput(output)

            if(output.length===14){
                document.getElementById('answer-value').classList.add('font')
            }
            
    }
    });
}


let clear = document.querySelector('.delete')
// console.log(clear)
clear.addEventListener('click', () => {
    let output = reverseFormattedNum(getOutput()) 
    document.getElementById('answer-value').classList.remove('font')
})