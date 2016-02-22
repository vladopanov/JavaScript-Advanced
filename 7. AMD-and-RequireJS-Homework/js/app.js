(function() {
    require.config({
        paths: {
            factory: 'factory',
            container: 'models/container',
            section: 'models/section',
            item: 'models/item'
        }
    });
})();

function createList() {
    var listName = document.getElementById('listInput').value;
    document.body.removeChild(document.getElementById('createList'));

    require(['factory'], function(Factory){
        var container = new Factory.createContainer(listName);
        container.addToDOM();

    });
}