import html from '../js/core.js';
import {connect} from '../js/store.js';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';

function App ({todos}) {
    return html `
                <section class="todoapp">
                ${Header()}
                ${Main()}
                ${todos.length > 0 && Footer()}
                </section>
                `;
}

export default connect()(App);