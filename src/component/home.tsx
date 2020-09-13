import React, { ReactNode, useEffect, useState } from 'react'
import { RouteComponentProps, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { GlobalState } from '../schemas';
import { getPropertyList } from '../store/actions';
import Loader from '../common/components/ui/loader/loader';
import { http } from '../common/services';
import { AxiosResponse, AxiosError } from 'axios';
import { APPLICATION_API } from '../common/configs';
import Search from '../common/components/search/search';


interface IProp extends RouteComponentProps {
	children: ReactNode | Element;
}
type Props = IProp & any;

const Home = (props: Props) => {
    const dispatch = useDispatch();
    const [isLoader, setIsLoader] = useState<boolean>(false);
    const [data, setData] = useState<any>([]);
    const history = useHistory();

    const propertyList = useSelector((state:GlobalState)=> {
        return state.property.list ? [...state.property.list] : null;
    });

    const loading = useSelector((state:GlobalState)=> {
        return state.property.loading;
    });

    

    useEffect(() => {
        //dispatch(getPropertyList());

       getPropertyList();

    }, [])

    // useEffect(() => {
    //     if(propertyList) {
    //         setIsLoader(loading);
    //         console.log(propertyList)
    //     }
    // }, [loading])

    const getPropertyList = () => {
        setIsLoader(true);
        http
            .post(APPLICATION_API.GET_PROPERTY(), {})
            .then((resp: AxiosResponse) => {
                const list = resp?.data.result;
                setData(list);
                setIsLoader(false);
            })
            .catch((err: AxiosError) => {
                setIsLoader(false);
            });
    }

    const searchedPropertyList = (item: string) => {
        history.push('properties/'+item);
    }

    return (
        <>
            <h1>Home</h1>
            { isLoader && <Loader  title="Loading..."/> }
            <Search data = {data} searchedPropertyList = {searchedPropertyList}  />
        </>
    );
}

export default Home
