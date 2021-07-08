import { FormControl, InputLabel, Select } from '@material-ui/core'
import { AddCircle } from "@material-ui/icons"
import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from "react-redux"
import { selectCrypto, ADD_CRYPTO } from "../app/slices/cryptoSlice"

interface IListResponse {
    id: string
    symbol: string
    name: string
}
const AddCoinContainer = styled.div`
    & .formControl{
        margin: 5px;
        min-width: 120px;
    }
    & .selectEmpty{
        margin-top: 10px;
    }
`

export const AddCoin = () => {
    const dispatch = useDispatch()
    const crypto = useSelector(selectCrypto)
    const [list, setList] = useState<IListResponse[]>([])
    // const [state, setState] = useState<{ crypto: string }>({
    //     crypto: '',
    // });
    // const handleChange = (event: React.ChangeEvent<{ name?: string; value: any }>) => {
    //     const name = event.target.name as keyof typeof state;
    //     setState({
    //         [name]: event.target.value,
    //     });
    // };
    const handleChange = (event: React.ChangeEvent<{ name?: string; value: any }>) => {
        if (crypto.indexOf(event.target.value) === -1) {
            dispatch(ADD_CRYPTO([...crypto, event.target.value]))
        }
    };
    useEffect(() => {
        const FetchData = async () => {
            const response = await axios.get<IListResponse[]>("/coins/list", {
                params: {
                    include_platform: false
                }
            })
            setList(response.data)
        }
        FetchData()
    }, [])

    return (
        <AddCoinContainer>
            <FormControl className="formControl">
                <InputLabel>
                    <AddCircle />
                </InputLabel>
                <Select
                    // onChange={handleChange}
                    onChange={handleChange}
                    inputProps={{
                        name: 'crypto',
                        id: 'age-native-simple',
                    }}>
                    {list.slice(800, 1000).map(item => (
                        <option key={item.id} value={item.id}>{item.name}</option>
                    ))}
                </Select>
            </FormControl>
        </AddCoinContainer>
    )
}

export default AddCoin
