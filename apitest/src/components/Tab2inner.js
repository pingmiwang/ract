/**
 * Created by mipwang on 2016/11/24.
 */
import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import BodyRadio from './BodyRadio';
import Variables from './Variables';


export default class TabsExampleControlled extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: 'a',
        };
    }

    handleChange = (value) => {
        this.setState({
            value: value,
        });
    };

    render() {
        return (
            <Tabs
                value={this.state.value}
                onChange={this.handleChange}
            >
                <Tab label="Headers" value="a">
                    <div>
                        <Variables rows={1}/>
                    </div>
                </Tab>
                <Tab label="Body" value="b">
                    <BodyRadio />
                </Tab>
            </Tabs>
        );
    }
}