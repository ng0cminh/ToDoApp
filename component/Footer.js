import html from '../js/core.js';
import { connect } from '../js/store.js';

function Footer ({todos, filters, filter}) {
    return html `
                <footer class="footer">
                <span class="todo-count"><strong>${todos.filter(filters.active).length}</strong> item left</span>

                <ul class="filters">
                    ${Object.keys(filters).map(type => html `
                        <li>
                            <a class="${filter == type && 'selected'}" href="#/">${type[0].toUpperCase() + type.slice(1)}</a>
                        </li>
                    `)}
                </ul>
                <!-- Hidden if no completed items are left ↓ -->
                <button class="clear-completed">Clear completed</button>
                </footer>
                `;
}

export default connect()(Footer);