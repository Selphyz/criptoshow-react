import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import { PriceChart, VolumeChart } from '../components';
import { Prices } from '../components/PriceChart';
import { Volumes } from '../components/VolumeChart';
type ChartParams = {
    id: string
}
export const ChartsPage = () => {
    const {id} = useParams<ChartParams>()
    const [prices, setPrices] = useState({
        dailyPrices: "",
        weeklyPrices: "",
        yearlyPrices: ""
    })
    const [volumes, setVolumes] = useState<Volumes>({
        dailyVolumes: "",
        weeklyVolumes: "",
        yearlyVolumes: ""
    })
    const [isLoading, SetIsLoading] = useState(true)
    const formatData=(data: any)=>{
        return data.map((coords: any)=>{
            return{t: coords[0],
            y: coords[1]}
        })
    }
    useEffect(()=>{
        const fetchData= async ()=>{
            SetIsLoading(true)
            const[day, week, year]=await Promise.all([
                axios.get(`/coins/${id}/market_chart/`, {
                    params: {
                        vs_currency: "eur",
                        days: "1"
                    }
                }),
                axios.get(`/coins/${id}/market_chart/`, {
                    params: {
                        vs_currency: "eur",
                        days: "7"
                    }
                }),
                axios.get(`/coins/${id}/market_chart/`, {
                    params: {
                        vs_currency: "eur",
                        days: "365"
                    }
                }),
            ])
            setPrices({
                dailyPrices: formatData(day.data.prices),
                weeklyPrices: formatData(week.data.prices),
                yearlyPrices: formatData(year.data.prices)
            })
            setVolumes({
                dailyVolumes: formatData(day.data.total_volumes),
                weeklyVolumes: formatData(week.data.total_volumes),
                yearlyVolumes: formatData(year.data.total_volumes)
            })
            SetIsLoading(false)
        }
        fetchData()
    },[id]);
    return(isLoading)? <h1>Loading...</h1> : (
        <div>
            <PriceChart prices={prices} id={id}/>
            <VolumeChart volumes={volumes} id={id}/>
        </div>
    )
}

export default ChartsPage
