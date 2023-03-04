let result = document.getElementById("result");

function insert(num) {
    result.value += num;
}

function clearResult() {
    result.value = "";
}

function changeSign() {
    result.value = -result.value;
}

function percent() {
    result.value = result.value / 100;
}

function calculate() {
    result.value = eval(result.value);
}
