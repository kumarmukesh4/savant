import React, { ReactNode, useEffect, useState } from 'react'
import { RouteComponentProps } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { GlobalState } from '../schemas';
import { getPropertyList } from '../store/actions';
import Loader from '../common/components/ui/loader/loader';

interface IProp extends RouteComponentProps {
	children: ReactNode | Element;
}
type Props = IProp & any;

const Home = (props: Props) => {
    const dispatch = useDispatch();
    const [isLoader, setIsLoader] = useState<boolean>(true);
    const propertyList = useSelector((state:GlobalState)=> {
        return state.property.list ? [...state.property.list] : null;
    });

    const loading = useSelector((state:GlobalState)=> {
        return state.property.loading;
    });

    

    useEffect(() => {
        dispatch(getPropertyList());
    }, [])

    useEffect(() => {
        if(propertyList) {
            setIsLoader(loading);
            console.log(propertyList)
        }
    }, [loading])


    return (
        <>
            <h1>Home</h1>
            { isLoader && <Loader  title="Loading..."/> }
        </>
    );
}

export default Home
