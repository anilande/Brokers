import React, {Component} from 'react';
import ReactDom from 'react-dom';

class Info extends Component {
    constructor () {
        super(...arguments);
    }

    render () {
        const item = this.props.item;
        let row_arr = [];

        Object.keys(item).forEach((key) => {
            const field = item[key];

            row_arr.push(<li className="info-item" key={key}><label>{field.label}</label>: {field.value}</li>);
        });

        return (
            <ul className="info">{row_arr}</ul>
        );
    }
}

export default (Info);
