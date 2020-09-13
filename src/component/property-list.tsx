import React, { ReactNode, useEffect, useState } from 'react'
import { RouteComponentProps } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { GlobalState } from '../schemas';
import { getPropertyList } from '../store/actions';
import Loader from '../common/components/ui/loader/loader';
import { http } from '../common/services';
import { AxiosResponse, AxiosError } from 'axios';
import { APPLICATION_API } from '../common/configs';
import AppDialog from '../common/components/ui/dialog/app-dialog';


interface IProp extends RouteComponentProps {
	children: ReactNode | Element;
}
type Props = IProp & any;

const PropertyList = (props: Props) => {
    const dispatch = useDispatch();
    const [isLoader, setIsLoader] = useState<boolean>(false);
    const [propertyList, setPropertyList] = useState<any> ([]);
    const [isDialogOpen, setisDialogOpen] = useState<boolean>(false);
    const loading = useSelector((state:GlobalState)=> {
        return state.property.loading;
    });
    const param = props.match.params.searchtext;
    console.log(props)

    useEffect(() => {
        console.log(param);
        searchedPropertyList(param);
    }, [param])

    const searchedPropertyList = (item: string) => {
        setIsLoader(true);
        http
            .post(APPLICATION_API.GET_PROPERTY_LIST(), {search:item})
            .then((resp: AxiosResponse) => {
                const list = resp?.data.results;
                setPropertyList(list)
                setIsLoader(false);
            })
            .catch((err: AxiosError) => {
                setIsLoader(false);
            });
    }

    const openDialog = (data: any) => {
        setisDialogOpen(true);
    }

    const closeDialog = () => {
        setisDialogOpen(false)
    }

    return (
        <>
            <h1>Property List</h1>
            { isLoader && <Loader  title="Loading Property..."/> }
            Total data found  { propertyList && propertyList.length } <br></br> 
            <button onClick={openDialog}>Open Dialog</button>
            <AppDialog isScrolable="false" showActionRow={true} size={'xs'} title="Property Name" isOpenDialog={isDialogOpen} closeDialog={closeDialog}>
                 {/* components */}
            </AppDialog>

            
        </>
    );
}

export default PropertyList
