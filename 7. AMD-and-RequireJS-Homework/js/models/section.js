define(['item'], function(Item){
    return (function () {
        function Section(title) {
            this.title = title;
        }

        Section.prototype.addToDOM = function () {
            var section = document.createElement('section');
            var header = document.createElement('h3');
            header.innerText = this.title;
            var input = document.createElement('input');
            input.type = 'text';
            input.placeholder = 'Add item...';
            var button = document.createElement('button');
            button.innerHTML = '+';
            button.addEventListener('click', createItem, false);
            section.appendChild(header);
            section.appendChild(input);
            section.appendChild(button);
            section.id = this.title;
            var list = document.getElementsByTagName('main');
            list[0].insertBefore(section, document.getElementById('title'));
        };

        function createItem() {
            var element = this.previousSibling;
            var content = element.value;
            var item = new Item(content, this.parentNode);
            item.addToDOM();
            element.value = null;
        }

        return Section;
    })();
});