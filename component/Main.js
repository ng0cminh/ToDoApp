import html from '../js/core.js';
import { connect } from '../js/store.js';
import TodoList from './TodoList.js';


function Main({todos, filters}) {
    return html `
                <section class="main">
                <input id="toggle-all" class="toggle-all" type="checkbox"
                onchange = "dispatch('toggleAll', this.checked)"
                ${todos.every(filters.completed) && 'checked'}
                >
                <label for="toggle-all">Mark all as complete</label>
                <ul class="todo-list">
                ${todos.map((todo,index) => TodoList({todo, index}))}
                </ul>
                </section>
                `;
}

export default connect()(Main);