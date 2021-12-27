import React, { Component } from 'react'
import { bitcoinService } from '../services/bitcoin.service'
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';

export class StatisticsPage extends Component {

    state = {
        marketPrice: null,
        confirmedTransactions: null
    }

    async componentDidMount() {
        const marketPrice = await bitcoinService.getMarketPrice()
        const confirmedTransactions = await bitcoinService.getConfirmedTransactions()
        this.setState({ marketPrice: marketPrice.values, confirmedTransactions: confirmedTransactions.values })
    }

    render() {
        const { marketPrice, confirmedTransactions } = this.state
        if (!marketPrice || !confirmedTransactions) return <div>Loading...</div>
        const marketData = marketPrice.map(item => {
            const container = {}
            container.x = new Date(item.x * 1000).toLocaleDateString();
            container.y = item.y
            return container
        })
        const transactions = confirmedTransactions.map(item => {
            const container = {}
            container.x = new Date(item.x * 1000).toLocaleDateString();
            container.y = item.y
            return container
        })
        return (
            <div className='container'>
                <h1>Statistics</h1>
                <h2>Market Price:</h2>
                <LineChart width={600} height={300} data={marketData}>
                    <Line type="monotone" dataKey="y" stroke="#8884d8" />
                    <CartesianGrid stroke="#ccc" />
                    <XAxis dataKey="x" />
                    <YAxis />
                </LineChart>
                <h2>Confirmed Transactions:</h2>
                <LineChart width={600} height={300} data={transactions}>
                    <Line type="monotone" dataKey="y" stroke="#8884d8" />
                    <CartesianGrid stroke="#ccc" />
                    <XAxis dataKey="x" />
                    <YAxis />
                </LineChart>
            </div>
        )
    }
}
