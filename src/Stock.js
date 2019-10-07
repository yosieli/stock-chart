import React from 'react'

class Stock extends  React.Component {
    state = {
        stockChartX: [],
        stockChartY: []
    }

    componentDidMount(){
        this.fetchStock()
    }

    fetchStock(){
        const API_KEY = 'S55FJQ9A7F4NIHVH'
        const API_CALL = `https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY_ADJUSTED&symbol=MSFT&apikey=${API_KEY}`
        console.log(API_CALL)
    }
    render(){
        return(
            <div>
                <h1>Stock  Market</h1>
            </div>

        )
    }

}
export default Stock