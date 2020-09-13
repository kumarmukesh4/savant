import React, { ReactNode, useEffect, useState } from 'react'
import { RouteComponentProps } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

interface IProp extends RouteComponentProps {
    children: ReactNode | Element;
}
type Props = IProp & any;

const Search = (props: Props) => {

    const {data} = props;

    useEffect(() => {

    }, [])

    console.log(data);

    return (
        <>
            <Autocomplete
                id="combo-box-demo"
                options={data.CityState}
                getOptionLabel={(option: any) => option}
                style={{ width: 300 }}
                renderInput={(params: any) => <TextField {...params} label="Combo box" variant="outlined" />}
            />

        </>
    );
}

export default Search
