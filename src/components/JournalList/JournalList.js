import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapReduxStateToProps from '../../Modules/mapReduxStateToProps';
import JournalItem from '../JournalItem/JournalItem';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import { withRouter } from 'react-router-dom';


class JournalList extends Component {
    addEntry = (event) => {
        this.props.history.push('/tasting-journal-entry-form')
    }

    render() {
        const journalEntries = this.props.reduxState.tastingJournalEntries.map((entry, index) => {
            let coffeeShopName = this.props.reduxState.getCoffeeShops.filter((shop, index) => {
                return shop.coffee_shop_id === entry.coffee_shop_id
            })
            coffeeShopName = coffeeShopName[0].shop_name
            return (
                <JournalItem key={index} entry={entry} coffeeShopName={coffeeShopName} />
            )
        })
        return (
            <div>
            {journalEntries}
            <Button onClick={this.addEntry}><AddIcon />Add</Button>
            </div>
        )
    }
}

export default connect(mapReduxStateToProps)(withRouter(JournalList));
