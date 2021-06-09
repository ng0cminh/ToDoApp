import storage from '../util/storage.js';
const init = {
    filter: 'all',
    filters: {
        all: () => true,
        active: todo => !todo.completed,
        completed: todo => todo.completed
    },
    todos : storage.get(),
    editIndex: null
}

const actions = {
    add({todos}, title) {
        if(title) {
            todos.push({id: todos.length +1, title, completed: false})
            storage.set(todos)
        }
    },
    toggle({todos}, index) {
        todos[index].completed = !todos[index].completed
        storage.set(todos)
    },
    toggleAll({todos}, completed) {
        todos.forEach(todo => {
            todo.completed = completed
        });
        storage.set(todos)
    },
    destroy({todos}, index) {
        todos.splice(index,1)
        storage.set(todos)
    },
    edit(state, index) {
        state.editIndex = index
    },
    endEdit(state, title) {
        if(state.editIndex !== null) {
            if(title) {
                state.todos[state.editIndex].title = title
                storage.set(state.todos)
            } else {
                this.destroy(state, state.editIndex)
            }
            state.editIndex = null
        }
    },
    cancelEdit(state) {
        state.editIndex = null
    },
    switchFilter (state, filter) {
        state.filter = filter;
    },
    clearCompleted(state) {
        state.todos = state.todos.filter(state.filters.active);
        storage.set(state.todos)
    }
}

export default function reducer (state = init, action, args) {
    actions[action] && actions[action](state, ...args)
        return state;
}