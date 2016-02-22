define(['item'], function(){
    return (function () {
        function Item(content, parent) {
            this.content = content;
            this.parent = parent;
        }

        Item.prototype.addToDOM = function () {
            var item = document.createElement('div');
            var input = document.createElement('input');
            var content = document.createElement('span');
            content.innerText = this.content;
            input.type = 'checkbox';
            input.addEventListener('click', clickFunction, false);
            item.appendChild(input);
            item.appendChild(content);

            var span = document.createElement('span');
            span.innerText = 'Due Date:';
            span.className = 'span';
            item.appendChild(span);
            var dueTime = document.createElement('input');
            dueTime.type = 'date';
            item.appendChild(dueTime);

            this.parent.appendChild(item);
        };

        function clickFunction() {
            this.parentNode.style.backgroundColor = this.checked ? '#90EE90' : 'white';
        }

        return Item;
    })();
});