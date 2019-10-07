import React from 'react'
import Plot from 'react-plotly.js'

class Stock extends  React.Component {
    state = {
        stockChartX: [],
        stockChartY: []
    }

    componentDidMount(){
        this.fetchStock()
    }

    fetchStock(){
        const pointer = this
        console.log(pointer)
        const API_KEY = 'S55FJQ9A7F4NIHVH'
        //let stockSymbol = 'AMZN'
        const API_CALL = `https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY_ADJUSTED&symbol=MSFT&outputsize=compact&apikey=${API_KEY}`
        let stockChartXValuesFunction = []
        let stockChartYValuesFunction = []

        // console.log(API_CALL)
        fetch(API_CALL)
        .then(response => response.json())
        .then(result => {
            console.log(result)
            for(var key in result['Weekly Adjusted Time Series']){

               stockChartXValuesFunction.push(key)
               stockChartYValuesFunction.push(result['Weekly Adjusted Time Series'][key]['1. open'])
            }
            console.log(stockChartXValuesFunction)
            pointer.setState({
                stockChartX:stockChartXValuesFunction,
                stockChartY:stockChartYValuesFunction
            })
        })

        }
    
    render(){
        return(
            <div>
                <h1>Stock  Market</h1>
                <Plot
                    data={[
                    {
                        x: this.state.stockChartX,
                        y: this.state.stockChartY,
                        type: 'scatter',
                        mode: 'lines+points',
                        marker: {color: 'red'},
                    },
                    ]}
                    layout={ {width: 7200, height: 440, title: 'A Fancy Plot'} }
                />
            </div>

        )
    }

}
export default Stock