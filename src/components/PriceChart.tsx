import React from 'react'
import {Line} from "react-chartjs-2"
import {chartOptions} from "../utils/chartOptions"

export interface Prices{
    dailyPrices: any,
    weeklyPrices: any,
    yearlyPrices: any
}
interface IPrices{
    prices : Prices
    id: string
}
export const PriceChart: React.FC<IPrices> = ({prices: {dailyPrices, weeklyPrices, yearlyPrices}, id}) => {
    console.log(dailyPrices);    
    return (
        <div>
            <Line data={{
                labels: [],
                datasets: [{
                    label: `${id} daily prices`,
                    backgroundColor: "rgba(99, 255, 132, 0.3)",
                    borderColor: "rgb(2, 121, 177)",
                    pointRadius: 0,
                    borderWidth: 1,
                    data: dailyPrices
                }]
            }} width={800} height={250} options={chartOptions}/>
        </div>
    )
}

export default PriceChart
