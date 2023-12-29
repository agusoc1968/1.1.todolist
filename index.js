var Item = /** @class */ (function () {
    function Item(id, name) {
        this.id = id;
        this.name = name;
    }
    return Item;
}());
var CRUD = /** @class */ (function () {
    function CRUD() {
        this.items = [];
        this.nextId = 1;
    }
    CRUD.prototype.create = function (name) {
        var newItem = new Item(this.nextId++, name);
        this.items.push(newItem);
        return newItem;
    };
    CRUD.prototype.read = function (id) {
        if (id) {
            return this.items.find(function (item) { return item.id === id; });
        }
        else {
            return this.items;
        }
    };
    CRUD.prototype.update = function (id, newName) {
        var itemToUpdate = this.items.find(function (item) { return item.id === id; });
        if (itemToUpdate) {
            itemToUpdate.name = newName;
            return itemToUpdate;
        }
        else {
            return undefined;
        }
    };
    CRUD.prototype.delete = function (id) {
        var index = this.items.findIndex(function (item) { return item.id === id; });
        if (index !== -1) {
            this.items.splice(index, 1);
            return true;
        }
        else {
            return false;
        }
    };
    return CRUD;
}());
