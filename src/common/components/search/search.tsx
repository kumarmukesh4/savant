import React, { ReactNode, useEffect, useState } from 'react'
import { RouteComponentProps } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

interface IProp extends RouteComponentProps {
    children: ReactNode | Element;
}
type Props = IProp & any;

const Search = (props: Props) => {
    const [inputValue, setInputValue] = useState('');
    const {data, searchedPropertyList} = props;
    const [isLoader, setIsLoader] = useState<boolean>(false);

    useEffect(() => {

    }, [])

    const inputChangeHandler = (val: string) => {
        setInputValue(val);
        searchedPropertyList(val);
    }

    return (
        <>
            <Autocomplete
                id="combo-box-demo"
                options={data.CityState}
                onInputChange={(event, newInputValue) => inputChangeHandler(newInputValue)}
                getOptionLabel={(option: any) => option}
                style={{ width: 300 }}
                renderInput={(params: any) => <TextField {...params} label="Combo box" variant="outlined" />}
            />
        </>
    );
}

export default Search
