/**
 * Created by mipwang on 2016/11/23.
 */
import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import Tabs2inner from './Tab2inner';
import Variables from './Variables';
import ReactQiniuDemo from './Qiniu';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import ReactFormData from 'react-form-data';

var itemValue = ["get", "put", "post", "delete"];
const items = [];
for (let i = 0; i < 4; i++) {
    items.push(<MenuItem value={i} key={i} primaryText={itemValue[i]}/>);
}


class Tabs1 extends React.Component {

    constructor(props) {
        super(props);
        this.handleActive = this.handleActive.bind(this);
        this.updateState = this.updateState.bind(this);
        this.keyProp = "";
        this.valueProp = "";
        this.state = {
            virsualUser: 1,
            loopCount: 1,
            selectValue: 0,
        }
        mixins: [FormData]

    }

    handleSubmit() {
        var url = 'urlToSendDataTo';
        // myRequestLib.post(url, this.formData);
    }

    handleActive(tab) {
        // alert(`A tab with this route property ${tab.props['data-route']} was activated.`);
    }

    handleChange = (event, index, selectValue) => {
        this.setState({selectValue});
    }

    updateState(keyProp, valueProp) {
        this.keyProp = keyProp;
        this.valueProp = valueProp;
    }

    handleClick(event) {

    }

    render() {
        const styles = {
            headline: {
                fontSize: 24,
                paddingTop: 16,
                marginBottom: 12,
                fontWeight: 400,
            },
        };
        return (
            <form onChange={this.updateFormData} onSubmit={this.handleSubmit}>
                <Tabs>
                    <Tab label="New Testing">
                        <div >
                            <div >
                                <TextField
                                    hintText="Virtual Users"
                                    errorText="This field is required"
                                    floatingLabelText="Virtual Users"
                                    type="number"
                                    name="virtualUsers"
                                />
                                <TextField
                                    style={{marginLeft:200}}
                                    hintText="Loop Count number"
                                    errorText="This field is required"
                                    floatingLabelText="Loop Count"
                                    type="number"
                                    name="loopCouts"
                                />
                            </div>
                            <div style={{display:'flex'}}>
                                <SelectField
                                    style={{width:'20%'}}
                                    value={this.state.selectValue}
                                    onChange={this.handleChange.bind(this)}
                                    maxHeight={200}
                                >
                                    {items}
                                </SelectField>
                                <TextField
                                    style={{width:'90%'}}
                                    hintText="Request URL"
                                    // value={this.state.data}
                                    onChange={this.updateState}
                                />
                                <RaisedButton label=" Params" disabled={true}/>
                                <RaisedButton label="Send" primary={true}
                                              style={{marginLeft:'100px',marginBottom:'12px'}}
                                              onClick={this.handleClick.bind(this)}/>
                            </div>
                            <Tabs2inner />
                            <div style={{marginTop:'100px'}}>
                                <Variables rows={1} float="Variables with MultiLine "
                                           updateStateProps={this.updateState}/>
                                <ReactQiniuDemo />
                            </div>
                        </div>
                    </Tab>
                    <Tab label="Result List">
                        <div>
                            {/* <TableResultList />*/}
                        </div>
                    </Tab>
                    <Tab
                        // label="Item Three"
                        label="Testing Reports"
                        data-route="/home"
                        onActive={this.handleActive}
                    >
                        <div>
                            <h2 style={styles.headline}>Tab Three</h2>
                            <p>
                                This is a third example tab.
                            </p>
                        </div>
                    </Tab>
                </Tabs>
            </form>
        );
    }
}


export default Tabs1;
