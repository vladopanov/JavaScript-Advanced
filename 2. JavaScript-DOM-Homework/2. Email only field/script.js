function validate() {
    var input = document.getElementById('input').value;
    var output = document.getElementById('output');
    output.innerHTML = input;

    var res = /\w+@\w+\.\w+/g.test(input);
    if (res === true) {
        output.style.backgroundColor = '#90EE90';
    } else {
        output.style.backgroundColor = 'red';
    }

}