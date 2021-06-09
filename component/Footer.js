import html from '../js/core.js';
import { connect } from '../js/store.js';

function Footer ({todos, filters, filter}) {
    return html `
                <footer class="footer">
                <span class="todo-count"><strong>${todos.filter(filters.active).length}</strong> item left</span>

                <ul class="filters">
                    ${Object.keys(filters).map(type => html `
                        <li>
                            <a onclick = "dispatch('switchFilter', '${type}')"
                             class="${filter == type && 'selected'}" href="#">${type[0].toUpperCase() + type.slice(1)}</a>
                        </li>
                    `)}
                </ul>
                ${todos.filter(filters.completed).length > 0 &&
                     html`<button onclick = "dispatch('clearCompleted')" class="clear-completed" onclick = "dispatch()">Clear completed</button>`}
                </footer>
                `;
}

export default connect()(Footer);