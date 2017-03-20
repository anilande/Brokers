import React, {Component} from 'react';
import ReactDom from 'react-dom';

import Card from './Card';

const NAV_CAROUSEL_ITEM_WIDTH = 65;

class Carousel extends Component {
    constructor () {
        super(...arguments);

        this.data = this.props.itemsList;

        this.state = {
            itemsList: this.data || [],
            selected: 0
        };

        this.navCarouselItemClick = this.navCarouselItemClick.bind(this);
        this.carouselLeft  = this.carouselLeft.bind(this);
        this.carouselRight = this.carouselRight.bind(this);
        this.navigate = this.navigate.bind(this);
        this.setCarouselDimention = this.setCarouselDimention.bind(this);

        this.page = 0;
    }

    componentDidMount(){
        const self = this;
        
        this.setCarouselDimention();

        window.on('resize', () => {
            self.setCarouselDimention();
            self.navigate();
        });
    }

    setCarouselDimention() {
        const
            length = this.props.itemsList.length,
            children = [].slice.call(this.carousel.children),
            itemWidth = (90 / length),
            itemHeight = window.innerHeight;

        this.carousel.style.width = "calc("+ (length * 90) + "% + " + (length * 20) + "px)" ;
        children.forEach((childNode) => {
            childNode.style.width = "calc(" + itemWidth + '% + 40px)';
        });

        this.itemWidth = itemWidth;
    }

    navCarouselItemClick(e) {
        this.page = parseInt(e.currentTarget.innerText, 10) - 1;
        this.navigate();
    }

    navigate() {
        this.carousel.style.left = "calc(" + (this.page * 90) * -1 + "% + " + (length * 20) + "px)" ;
        this.setState({selected: this.page});
    }
    carouselLeft(e){
        this.page--;
        this.navigate();
        if (this.page <= 0) {
            e.currentTarget.style.display = 'none';
        }
        else {
            e.currentTarget.style.display = '';
        }
    }
    carouselRight(e){
        this.page++;
        this.navigate();
        if (this.page >= (this.state.itemsList.length -1)) {
            e.currentTarget.style.display = 'none';
        }
        else {
            e.currentTarget.style.display = '';
        }
    }

    render () {
        const self = this;
        let
            cardList = [],
            navitemList = [];

        this.state.itemsList.map(function(item, index) {
            const
                selectClass = (self.state.selected === index) ? "active" : "";

            navitemList.push(
                <li key={index}
                    className={("carousel-item " + selectClass)}
                    onClick={self.navCarouselItemClick}
                >
                    <span className="inner">{(index + 1)}</span>
                </li>
            );
            cardList.push(<Card key={item.index} item={item} selected={selectClass}/>);
        })

        return (
            <div>
                <div className="head">
                    <div className="nav-carousel"><ul className="nav"> {navitemList} </ul> </div>
                </div>
                <div className="carousel">
                    <ul className="cards" ref={(node) => { this.carousel = node; }}> {cardList} </ul>
                    <div className="navig">
                        <div className="navig-nav">
                            <div className="fleft left-arrow" onClick={this.carouselLeft}/>
                            <div className="fright right-arrow" onClick={this.carouselRight}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default (Carousel);
