/**
 * Created by mipwang on 2016/11/29.
 */
import React from 'react';
// import jquery from '../dataTable/jquery-2.1.3.min';
// import ReactDom from 'react-dom';

class TableResultList extends React.Component{

    componentDidMount() {
        $(ReactDOM.findDOMNode(this.refs.table0)).dataTable({
            "columns": [
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null
            ],
                "order": [[4, "desc"]]
        });
    }


    render(){
        return(
            <div>
                <table ref="table0">
                    <thead >
                    <tr>
                        <td>ID</td>
                        <td>TestIP</td>
                        <td>Method</td>
                        <td>User</td>
                        <td>Time</td>
                        <td>Status</td>
                        <td>Detail</td>
                        <td>Edit</td>
                    </tr>
                    </thead>
                    <tfoot>
                    <tr>
                        <td>ID</td>
                        <td>TestIP</td>
                        <td>Method</td>
                        <td>User</td>
                        <td>Time</td>
                        <td>Status</td>
                        <td>Detail</td>
                        <td>Edit</td>
                    </tr>
                    </tfoot>
                </table>
            </div>
        );
    }
}

export default TableResultList;