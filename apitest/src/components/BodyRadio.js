/**
 * Created by mipwang on 2016/11/24.
 */
import React from 'react';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
import Variables from './Variables';
import TextField from 'material-ui/TextField';

const styles = {
    block: {
        maxWidth: 250,
    },
    radioButton: {
        marginBottom: 10,
        width: '70%'
    },
};

export default class RadioBody extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            displayState: 'yes',
            number:0
        }
        this.handleClick=this.handleClick.bind(this);
        this.handleClickY=this.handleClickY.bind(this);

    }

    handleClick(event) {
        this.setState({
            displayState: 'no',
            number:++this.state.number
        })
    }
    handleClickY(event){
        this.setState({
            displayState: 'yes',
            number:++this.state.number
        })
    }


    render() {
        let content = [];
        if (this.state.displayState === "yes") {
            content.push(<Variables rows={1} key={ this.state.number} />);
        } else if (this.state.displayState === "no") {
            content.push(<TextField
                hintText="raw"
                floatingLabelText="MultiLine"
                multiLine={true}
                rows={1}
                fullWidth={true}
                key={this.state.number}
            />);

        }


        return (
            <section>
                <div style={{display:'flex',marginTop:'10px'}}>
                    <RadioButtonGroup name="shipSpeed" defaultSelected="not_light" style={{display:'flex'}}>
                        <RadioButton
                            value="not_light"
                            label="form-data"
                            style={styles.radioButton}
                            onClick={this.handleClickY}
                        />
                        <RadioButton
                            value="light"
                            label="x-www-form-urlencoded"
                            style={styles.radioButton}
                            onClick={this.handleClickY}
                        />
                        <RadioButton
                            value="ludicrous"
                            label="raw"
                            checkedIcon={<ActionFavorite />}
                            uncheckedIcon={<ActionFavoriteBorder />}
                            style={styles.radioButton}
                            onClick={this.handleClick}
                        />
                    </RadioButtonGroup>
                </div>
                {content}
            </section>
        )
    }
}
// export default RadioButtonExampleSimple;

