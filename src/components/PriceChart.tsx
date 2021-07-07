import { Button } from '@material-ui/core';
import React from 'react'
import {Line} from "react-chartjs-2"
import {useDispatch, useSelector} from "react-redux"
import {chartOptions} from "../utils/chartOptions"
import {SET_FREQ, selectFreq} from "../app/slices/freqSlice"

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
    const dispatch = useDispatch()
    const freq = useSelector(selectFreq)
    return (
        <div>
            <Line data={{
                labels: [],
                datasets: [{
                    label: `${id} daily prices`,
                    backgroundColor: "rgba(99, 255, 132, 0.3)",
                    borderColor: "rgb(2, 121, 177)",
                    pointRadius: 0,
                    borderWidth: 2,
                    data: freq==="24h" ? dailyPrices : freq==="7d" ? weeklyPrices : yearlyPrices,
                }]
            }} width={800} height={250} options={chartOptions}/>
            <Button onClick={()=>dispatch(SET_FREQ("24h"))}>24H</Button>
            <Button onClick={()=>dispatch(SET_FREQ("7d"))}>7DAYS</Button>
            <Button onClick={()=>dispatch(SET_FREQ("365d"))}>1YEAR</Button>
        </div>
    )
}

export default PriceChart
