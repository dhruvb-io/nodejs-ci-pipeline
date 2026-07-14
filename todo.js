class TodoList {

    constructor() {
        this.items = [];
    }

    add(item) {
        this.items.push(item);
        return this.items;
    }

    delete(index) {
        this.items.splice(index, 1);
        return this.items;
    }

    update(index, newItem) {
        this.items[index] = newItem;
        return this.items;
    }

    list() {
        return this.items;
    }
}

module.exports = TodoList;