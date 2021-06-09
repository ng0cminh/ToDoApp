import html from '../js/core.js';
import { connect } from '../js/store.js';

function TodoList ({todo, index, editIndex}) {
    return html `
                <li class="${todo.completed && 'completed'} ${editIndex === index && 'editing'}">
                    <div class="view">
                        <input class="toggle" type="checkbox"
                        onchange = "dispatch('toggle', ${index})" 
                        ${todo.completed && 'checked'}>
                        <label ondblclick = "dispatch('edit', ${index})">${todo.title}</label>
                        <button class="destroy" onclick = "dispatch('destroy', ${index})"></button>
                    </div>
                    <input onkeydown = "event.keyCode === 13 && dispatch('endEdit', this.value.trim()) || event.keyCode === 27 && dispatch('cancelEdit')"
                    onblur = "dispatch('endEdit', this.value.trim())"
                    class="edit" value="${todo.title}">
                </li>
                `;
}

export default connect()(TodoList);