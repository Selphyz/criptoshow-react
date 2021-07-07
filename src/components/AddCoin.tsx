import { FormControl, InputLabel, Select } from '@material-ui/core'
import { AddCircle } from "@material-ui/icons"
import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import styled from 'styled-components'

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
    const [state, setState] = useState<{ crypto: string | number; name: string }>({
        crypto: '',
        name: '',
    });
    const [list, setList] = useState<IListResponse[]>([])
    const handleChange = (event: React.ChangeEvent<{ name?: string; value: unknown }>) => {
        const name = event.target.name as keyof typeof state;
        setState({
            ...state,
            [name]: event.target.value,
        });
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
                <InputLabel htmlFor="age-native-simple">
                    <AddCircle />Add Cryptos
                </InputLabel>
                <Select
                    native
                    value={state.crypto}
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
