import React, { Component } from 'react';
import { getSalesData } from '../../services/SalesReportService';

class SalesReport extends Component {
    state = {
        productSalesList: []
    }

    componentDidMount() {
        getSalesData().then(
            response => {
                this.setState({ productSalesList: response.productSalesList })
            }

        )
    }
    

render() {
    return (
        <div class="container">
            <h3>Sales Info.</h3>
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>SKU</th>
                        <th>Units Sold</th>
                        <th>Total - Rs.</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.productSalesList.map(
                        salesItem => (
                            <tr key={salesItem.productSku}>
                                <td>{salesItem.productName}</td>
                                <td>{salesItem.productSku}</td>
                                <td>{salesItem.unitsSold}</td>
                                <td>{salesItem.total}</td>
                            </tr>
                        )
                    )}
                </tbody>
            </table>
        </div>

    );
}
}

export default SalesReport;