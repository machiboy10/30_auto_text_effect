const textEl = document.getElementById('text');
const speedEl = document.getElementById('speed');
const text = 'We Love Programming!';
let idx = 1;
let speed = 300 / speedEl.value;


writeText()

function writeText(){
    textEl.innerText = text.slice(0, idx);


    idx++;

    if(idx > text.length){
        idx = 1
    }

    setTimeout(writeText,speed)
}

speedEl.addEventListener('input', (e)=>{
    speed = 300/e.target.value;
})

document.addEventListener('keydown', (event) => {
    var name = event.key;
    var code = event.code;
    // Alert the key name and key code on keydown
   // alert(`Key pressed ${name} \r\n Key code value: ${code}`);
    //console.log(name,code)
   if(code == "ArrowUp") {
    if(speedEl.value<10)  speedEl.value++;
    speed = 300 / speedEl.value;
   }else if(code == "ArrowDown") {
    if(speedEl.value>1)  speedEl.value--;
    speed = 300 / speedEl.value;
   }
  }, false);

 