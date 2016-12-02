/**
 * Created by mipwang on 2016/11/24.
 */
import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';


class Variables extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            keyProp: '',
            valueProp: '',
            number: 1
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleClickDelete = this.handleClickDelete.bind(this);
    }

    handleClick(event) {
        this.setState({
            number: ++this.state.number
        });
    }

    handleClickDelete(event) {
        this.setState({
            number: --this.state.number
        });
    }

    getCurrentValue(event) {
        if(event.target.name === "keyProp") {
            this.setState({
                keyProp: event.target.value
            });
        }else {
            this.setState({
                valueProp: event.target.value
            });  
        }
        this.props.updateStateProps(this.state.keyProp,this.state.valueProp);
    }

    render() {
        var style1 = {
            margin: '8px'
        };

        var tfstyle = {
            width: '50%',
        };

        let content = [];
        for (let i = 0; i < this.state.number; i++) {
            if (i === 0) {
                content.push(
                    <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-end'}} key={0}>
                        <TextField
                            hintText="Variable Key"
                            value={this.state.keyProp}
                            name="keyProp"
                            onChange={this.getCurrentValue.bind(this)}
                        />
                        <TextField
                            hintText="Variable Value"
                            floatingLabelText={this.props.float}
                            multiLine={true}
                            rows={this.props.rows}
                            style={tfstyle}
                            name="valueProp"
                            value={this.state.valueProp}
                            onChange={this.getCurrentValue.bind(this)}
                        />
                        <RaisedButton label="Add" style={style1} onClick={this.handleClick}/>
                    </div>
                )
            } else {
                content.push(
                    <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-end'}} key={i}>
                        <TextField
                            hintText="Variable Key"
                            value={this.props.key}
                        />
                        <TextField
                            hintText="Variable Value"
                            floatingLabelText={this.props.float}
                            multiLine={true}
                            rows={this.props.rows}
                            style={tfstyle}

                            value={this.props.key}
                            onChange={this.props.updateStateProps}
                        />
                        <RaisedButton label="DELETE" style={style1} onClick={this.handleClickDelete}/>
                    </div>
                )
            }
        }

        return (
            <section>
                {content}
            </section>
        );
    }
}

export default Variables;