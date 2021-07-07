import React, { SyntheticEvent } from 'react'
import {TableRow, TableCell} from "@material-ui/core"
import {BarChart, ArrowDropUp, ArrowDropDown, Delete} from "@material-ui/icons"
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux"
import accounting from "accounting"
import { DELETE_CRYPTO, selectCrypto } from "../app/slices/cryptoSlice"
import { CryptoDelete, CryptoImage } from './style/CoinRow'
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
export const CoinRow: React.FC<ICoinRow> = ({data: 
    {current_price, id, image, symbol, market_cap_rank, price_change_percentage_24h}}) => {
    const crypto = useSelector(selectCrypto)
    const dispatch = useDispatch();
    const deleteCrypto=(e: SyntheticEvent, id: string)=>{
        e.preventDefault();
        const filtered = crypto.filter((item)=>item!==id)
        dispatch(DELETE_CRYPTO(filtered))
    }
    return (
        <TableRow className="table-row">
            <CryptoImage><img src={image} alt="" /></CryptoImage>
            <TableCell>{symbol}</TableCell>
            <TableCell>{market_cap_rank}</TableCell>
            <TableCell>{accounting.formatMoney(current_price, "€")}</TableCell>
            <TableCell>
                <Link to={`/currency/${id}`} style={{color: "gray"}}>
                    <BarChart />
                </Link>
            </TableCell>
            <CryptoDelete>
            {price_change_percentage_24h>0?(
                <div><ArrowDropUp style={{color: "#00ff00"}}/>
                <span style={{color: "#00ff00"}}>{price_change_percentage_24h}</span></div>
                ):(
                <div><ArrowDropDown style={{color: "#00ff00"}}/>
                <span style={{color: "#00ff00"}}>{price_change_percentage_24h}</span></div>
            )}
            <span className="delete-crypto" style={{color: "gray", cursor: "pointer"}} onClick={e=>deleteCrypto(e,id)}>
                <Delete />
            </span>
            </CryptoDelete>
        </TableRow>
    )
}

export default CoinRow
