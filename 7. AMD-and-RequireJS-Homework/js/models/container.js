define(['section'], function(Section){
    return (function () {
        function Container(title) {
            this.title = title;
        }

        Container.prototype.addToDOM = function () {
            var container = document.createElement('main');
            var header = document.createElement('h1');
            header.innerText = this.title + " TODO List";
            var input = document.createElement('input');
            input.type = 'text';
            input.placeholder = 'Title...';
            input.id = "title";
            var button = document.createElement('button');
            button.innerHTML = 'New Section';
            button.addEventListener('click', createSection, false);
            container.appendChild(header);
            container.appendChild(input);
            container.appendChild(button);
            document.body.appendChild(container);
        };

        function createSection() {
            var element = this.previousSibling;
            var title = element.value;
            var section = new Section(title);
            section.addToDOM();
            element.value = null;
        }

        return Container;
    })();
});