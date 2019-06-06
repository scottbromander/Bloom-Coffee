import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapReduxStateToProps from '../../Modules/mapReduxStateToProps'

class TastingJournalEntryForm extends Component {
    state = {
        description: '',
        coffee_name: '',
        coffee_shop_name: '',
        overall: '',
        aroma: '',
        flavor: '',
        aftertaste: '',
        acidity: '',
        sweetness: '',
        mouthfeel: '',
        balance: '',
        clean_cup: '',
        uniformity: ''
    }

    handleInputChangeFor = propertyName => (event) => {
        this.setState({
          [propertyName]: event.target.value,
        });
      };

      addEntry = (event) => {
          this.props.dispatch({
              type: 'ADD_ENTRY',
              payload: {
                description: this.state.description,
                coffee_name: this.state.coffee_name,
                coffee_shop_name: this.state.coffee_shop_name,
                overall: this.state.overall,
                aroma: this.state.aroma,
                flavor: this.state.flavor,
                aftertaste: this.state.aftertaste,
                acidity: this.state.acidity,
                sweetness: this.state.acidity,
                mouthfeel: this.state.mouthfeel,
                balance: this.state.balance,
                clean_cup: this.state.clean_cup,
                uniformity: this.state.uniformity,
                user_id: this.props.reduxState.user.user_id,
              }
          })
      }

    render() {
        return (
            <div>
                <textarea name="message" rows="10" cols="30" value={this.state.description} onChange={this.handleInputChangeFor('description')}>
                    Your Description Here
                </textarea>
                <input type="text" placeholder="coffee shop name" value={this.state.coffee_shop_name} onChange={this.handleInputChangeFor('coffee_shop_name')}/>
                <input type="text" placeholder="coffee name"value={this.state.coffee_name} onChange={this.handleInputChangeFor('coffee_name')}/>
                <input type="number" placeholder="overall"value={this.state.overall} onChange={this.handleInputChangeFor('overall')}/>
                <input type="number" placeholder="aroma"value={this.state.aroma} onChange={this.handleInputChangeFor('aroma')}/>
                <input type="number" placeholder="flavor"value={this.state.flavor} onChange={this.handleInputChangeFor('flavor')}/>
                <input type="number" placeholder="aftertaste"value={this.state.aftertaste} onChange={this.handleInputChangeFor('aftertaste')}/>
                <input type="number" placeholder="acidity"value={this.state.acidity} onChange={this.handleInputChangeFor('acidity')}/>
                <input type="number" placeholder="sweetness"value={this.state.sweetness} onChange={this.handleInputChangeFor('sweetness')}/>
                <input type="number" placeholder="mouthfeel" value={this.state.mouthfeel} onChange={this.handleInputChangeFor('mouthfeel')}/>
                <input type="number" placeholder="balance" value={this.state.balance} onChange={this.handleInputChangeFor('balance')}/>
                <input type="number" placeholder="clean cup" value={this.state.clean_cup} onChange={this.handleInputChangeFor('clean_cup')}/>
                <input type="number" placeholder="uniformity" value={this.state.uniformity} onChange={this.handleInputChangeFor('uniformity')}/>
                <button onClick={this.addEntry}>Add Entry</button>
            </div>
        )
    }
}

export default connect(mapReduxStateToProps)(TastingJournalEntryForm);