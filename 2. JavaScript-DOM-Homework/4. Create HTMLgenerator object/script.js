var HTMLGen = (function() {
    function createParagraph(id, text) {
        var parent = document.getElementById(id);
        var child = document.createElement('p');
        child.innerText = text;
        parent.appendChild(child);
    }

    function createDiv(id, cl) {
        var parent = document.getElementById(id);
        var child = document.createElement('div');
        child.setAttribute("class", cl);
        parent.appendChild(child);
    }

    function createLink(id, text, url) {
        var parent = document.getElementById(id);
        var child = document.createElement('a');
        child.setAttribute("href", url);
        child.innerText = text;
        parent.appendChild(child);
    }

    return {
        createParagraph: createParagraph,
        createDiv: createDiv,
        createLink: createLink
    };
})();