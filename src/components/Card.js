import React, {Component} from 'react';
import ReactDom from 'react-dom';

import Properties from './Properties';
import Info from './Info';

class Card extends Component {
    constructor () {
        super(...arguments);

        this.readMore = this.readMore.bind(this);
    }

    readMore(e) {
        const el = e.currentTarget;
        el.parentNode.style.height = 'auto';
        el.style.display = 'none';
    }

    render () {
        const
            item = this.props.item,
            c_properties = {
                title: "Commertial Properties",
                rent: item.commercialForRentCount,
                sale: item.commercialForSaleCount,
                total: item.commercialTotalCount 
            },
            r_properties = {
                title: "Residential Properties",
                rent: item.residentialForRentCount,
                sale: item.residentialForSaleCount,
                total: (item.residentialForRentCount + item.residentialForSaleCount)
            },
            info = {
                loation: {label: 'Location', value: item.location},
                phone: {label: 'Phone', value: item.phone},
                type: {label: 'Type', value: item.type},
                properties: {label: 'Total Properties', value: item.totalProperties},
                license: {label: 'License', value: (item.licenseLabel + "(No. " + item.licenseNumber + ")")},
                agents: {label: 'No. of Agents', value: item.agentCount}
            };

        return (
            <li className={("card " + this.props.selected)}>
                <div className="card-top">
                    <h2>
                        <a className="fleft">
                            <img src={item.links.logo}/>
                        </a>
                        <div className="flaft">
                            {item.name}
                            <br/>
                            <Info key={item.id} item={info}/>
                        </div>
                    </h2>
                    <div>
                        <Properties key="commertial" item={c_properties}/>
                        <Properties key="residential" item={r_properties}/>
                    </div>
                    <div className="show-more">
                        {item.description}
                        <a className="read-more" onClick={this.readMore}>more..</a>
                    </div>
                </div>
            </li>
        );
    }
}

export default (Card);
