function appendToDisplay(value) {
    if(document.getElementById('display').value.includes(".")){
        return
    }
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculate() {
    var displayValue = document.getElementById('display').value;
    var result = math.evaluate(displayValue);
    document.getElementById('display').value = result;
}

window.addEventListener("keyup", (e)=>{
    if(e.code === "Backspace"){
        console.log("Backspace");
        document.getElementById('display').value = document.getElementById('display').value.slice(0,-1)
    }
})