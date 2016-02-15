var TODOListModule = (function () {
    var Container = (function () {
        function Container(listTitle) {
            if (listTitle === '') {
                throw new Error('The title must not be empty');
            }
            this._listTitle = listTitle;
        }

        Container.prototype.addToDOM = function () {
            var container = document.createElement('main');
            var header = document.createElement('h1');
            header.innerText = this._listTitle + " TODO List";
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
            var section = new TODOListModule.Section(title);
            section.addToDOM();
            element.value = null;
        }

        return Container;
    })();

    var Section = (function () {
        function Section (sectionTitle) {
            if (sectionTitle === '') {
                throw new Error('The title must not be empty');
            }
            this._sectionTitle = sectionTitle;
        }

        Section.prototype.addToDOM = function () {
            var section = document.createElement('section');
            var header = document.createElement('h3');
            header.innerText = this._sectionTitle;
            var input = document.createElement('input');
            input.type = 'text';
            input.placeholder = 'Add item...';
            var button = document.createElement('button');
            button.innerHTML = '+';
            button.addEventListener('click', createItem, false);
            section.appendChild(header);
            section.appendChild(input);
            section.appendChild(button);
            section.id = this._sectionTitle;
            var list = document.getElementsByTagName('main');
            list[0].insertBefore(section, document.getElementById('title'));
        };

        function createItem() {
            var element = this.previousSibling;
            var title = element.value;
            var item = new TODOListModule.Item(title, this.parentNode);
            item.addToDOM();
            element.value = null;
        }

        return Section;
    })();

    var Item = (function () {
        function Item (itemTitle, parent) {
            if (itemTitle === '') {
                throw new Error('The title must not be empty');
            }
            this._itemTitle = itemTitle;
            this._parent = parent;
        }

        Item.prototype.addToDOM = function () {
            var item = document.createElement('div');
            var input = document.createElement('input');
            var content = document.createElement('span');
            content.innerText = this._itemTitle;
            input.type = 'checkbox';
            input.addEventListener('click', clickFunction, false);
            item.appendChild(input);
            item.appendChild(content);
            this._parent.appendChild(item);
        };

        function clickFunction() {
            if (this.checked) {
                this.parentNode.style.backgroundColor = '#90EE90';
            } else {
                this.parentNode.style.backgroundColor = 'white';
            }
        }

        return Item;
    })();

    return {
        Container: Container,
        Section: Section,
        Item: Item
    };
})();

function createList() {
    var element = document.getElementById('list');
    var title = element.value;
    var list = new TODOListModule.Container(title);
    var del = document.getElementById('createList');
    list.addToDOM();

    document.body.removeChild(del);
}