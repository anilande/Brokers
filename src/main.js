import React, {Component} from 'react';
import ReactDom from 'react-dom';

import Carousel from './components/Carousel';
import data from './data/data';

require('./scss/style.scss');

class Brockers extends Component {
    constructor () {
        super(...arguments);

        this.data = data.data;

        this.state = {
            itemsList: this.data
        };
    }

    render () {
        return (
            <div className="app-page">
                <header>
                    <div className="title">Brokers</div>
                    <div className="fright profile"/>
                </header>
                <Carousel itemsList={this.state.itemsList}/>
            </div>
        );
    }
}

ReactDom.render(<Brockers />, document.getElementById('appContainer'));

export default (Brockers);
