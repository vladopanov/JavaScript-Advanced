function clickFunction() {
    var check = document.getElementById('checkbox');
    var info = document.getElementById('info');
    if (check.checked) {
        info.style.visibility = 'visible';
    } else {
        info.style.visibility = 'hidden';
    }
}