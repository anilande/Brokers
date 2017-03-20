import React, {Component} from 'react';
import ReactDom from 'react-dom';

class Properties extends Component {
    constructor () {
        super(...arguments);
    }

    render () {
        const item = this.props.item;

        return (
            <table className="property">
                <tbody>
                    <tr><th colspan="2">{item.title}</th></tr>
                    <tr>
                        <td>Rent</td>
                        <td>{item.rent}</td>
                    </tr>
                    <tr>
                        <td>Sale</td>
                        <td>{item.sale}</td>
                    </tr>
                    <tr>
                        <td>Total</td>
                        <td>{item.total}</td>
                    </tr>
                </tbody>
            </table>
        );
    }
}

export default (Properties);
