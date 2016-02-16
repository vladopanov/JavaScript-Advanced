function validate() {
    var input = document.getElementById('input').value;
    var output = document.getElementById('output');
    output.innerHTML = input;

    var res = /\w+@\w+\.\w+/g.test(input);
    output.style.backgroundColor = res === true ? '#90EE90' : 'red';

}