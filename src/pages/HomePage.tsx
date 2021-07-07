import React from 'react'
import axios from 'axios'
import { Table, TableContainer, TableRow, TableHead, TableCell, TableBody } from "@material-ui/core"
import { styled } from "@material-ui/core/styles"
import { useEffect } from 'react'
import { useSelector } from "react-redux"
import { useState } from 'react'
import { selectCrypto } from '../app/slices/cryptoSlice'
import { AddCoin, CoinRow } from '../components'
import { CoinData } from '../components/CoinRow'

const HeaderCell = styled(TableCell)({
    fontWeight: 800,
    fontSize: "16px",
})

export const HomePage = () => {
    const [coins, setCoins] = useState<CoinData[]>([])
    const [loading, setLoading] = useState<boolean>(false)
    const cryptos = useSelector(selectCrypto)
    useEffect(()=>{
        const fetchData = async()=>{
            setLoading(true)
            const response = await axios.get("/coins/markets", {
                params: {
                    vs_currency: "eur",
                    ids: cryptos.join()
                }
            })
            setCoins(response.data)
            setLoading(false)
        }
        if(cryptos.length){
            fetchData()
        }else{
            setCoins([])
        }
    }, [cryptos])
    return(loading)? <h1>Loading...</h1> : (
        <><AddCoin />
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <HeaderCell>Image</HeaderCell>
                        <HeaderCell>Symbol</HeaderCell>
                        <HeaderCell>MktCap</HeaderCell>
                        <HeaderCell>Price</HeaderCell>
                        <HeaderCell>Chart</HeaderCell>
                        <HeaderCell>Price%</HeaderCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        coins.map(coin=>(
                            <CoinRow key={coin.id} data={coin}/>
                        ))
                    }
                </TableBody>
            </Table>
        </TableContainer></>
    )
};

export default HomePage
