const TodoList = require('../todo');

test('adds an item', () => {

    const todo = new TodoList();

    todo.add('Buy milk');

    expect(todo.list()).toEqual(['Buy milk']);

});

test('deletes an item', () => {

    const todo = new TodoList();

    todo.add('Buy milk');

    todo.delete(0);

    expect(todo.list()).toEqual([]);

});

test('updates an item', () => {

    const todo = new TodoList();

    todo.add('Buy milk');

    todo.update(0,'Buy oat milk');

    expect(todo.list()).toEqual(['Buy oat milk']);

});