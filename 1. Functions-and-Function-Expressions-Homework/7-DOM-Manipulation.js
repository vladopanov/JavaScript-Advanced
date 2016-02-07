var domModule = (function() {

    function appendChild(element, child) {
        var child = document.querySelector(child);
        child.appendChild(element);
    }

    function removeChild(element, child) {
        var child = document.querySelector(child);
        var parent = document.querySelector(element);
        parent.removeChild(child);
    }

    function retrieveElements(selector) {
        return document.querySelectorAll(selector);
    }

    function addHandler(element, eventType, eventHandler) {
        var elements = retrieveElements(element);
        for (var el in elements) {
            if (elements[el] instanceof HTMLElement) {
                elements[el].addEventListener(eventType, eventHandler, false);
            }
        }
    }

    return {
        appendChild: appendChild,
        removeChild: removeChild,
        addHandler: addHandler,
        retrieveElements: retrieveElements
    };
})();

// var liElement = document.createElement("li");

// Appends a list item to ul.birds-list
// domModule.appendChild(liElement,".birds-list");
// Removes the first li child from the bird list
// domModule.removeChild("ul.birds-list","li:first-child");
// Adds a click event to all bird list items
domModule.addHandler(".bird", 'click', function(){ alert("I'm a bird!") });
// Retrives all elements of class "bird"
// var elements = domModule.retrieveElements(".bird");