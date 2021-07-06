import React from 'react'
import {TableRow, TableCell} from "@material-ui/core"
import {BarChart, ArrowDropUp, ArrowDropDown} from "@material-ui/icons"
import accounting from "accounting"
import { CryptoImage } from './style/CoinRow'
export interface CoinData{
    id: string,
    image: string
    symbol: string
    current_price: number
    market_cap_rank: number
    price_change_percentage_24h: number
}
interface ICoinRow{
    data: CoinData
}
export const CoinRow: React.FC<ICoinRow> = ({data: {current_price, id, image, symbol, market_cap_rank, price_change_percentage_24h}}) => {
    return (
        <TableRow>
            <CryptoImage><img src={image} alt="" /></CryptoImage>
            <TableCell>{symbol}</TableCell>
            <TableCell>{market_cap_rank}</TableCell>
            <TableCell>{accounting.formatMoney(current_price, "€")}</TableCell>
            <TableCell><BarChart /></TableCell>
            <TableCell>
            {price_change_percentage_24h>0?(
                <><ArrowDropUp style={{color: "#00ff00"}}/>
                <span style={{color: "#00ff00"}}>{price_change_percentage_24h}</span></>
                ):(
                <><ArrowDropUp style={{color: "#00ff00"}}/>
                <span style={{color: "#00ff00"}}>{price_change_percentage_24h}</span></>)}
            </TableCell>
        </TableRow>
    )
}

export default CoinRow
