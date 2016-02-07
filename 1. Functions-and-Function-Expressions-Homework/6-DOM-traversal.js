function traverse(selector) {
    //
    var node = document.querySelector(selector);
    traverseNode(node, '');
    function traverseNode(node, spacing) {
        spacing = spacing || '  ';
        //
        var idName = node.getAttribute("id");
        var idOutput = idName === null ? '' : 'id="' + idName + '"' + ' ';
        var className = node.getAttribute("class");
        var classOutput = className === null ? '' : 'class="' + className + '"';
        var output = ': ' + idOutput + classOutput;
        console.log(spacing + node.nodeName + output);
        for (var i = 0, len = node.childNodes.length; i < len; i += 1) {
            var child = node.childNodes[i];
            if (child.nodeType === document.ELEMENT_NODE) {
                traverseNode(child, spacing + '  ');
            }
        }
        //console.log(spacing + '/' + node.nodeName);
    }
}

var selector = ".birds";
traverse(selector);