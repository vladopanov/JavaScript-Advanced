function createParagraph(id, text) {
    var parent = document.getElementById(id);
    var child = document.createElement('p');
    child.innerText = text;
    parent.appendChild(child);
}