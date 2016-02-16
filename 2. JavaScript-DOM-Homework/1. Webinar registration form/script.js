function clickFunction() {
    var check = document.getElementById('checkbox');
    var info = document.getElementById('info');
    info.style.visibility = check.checked ? 'visible' : 'hidden';
}