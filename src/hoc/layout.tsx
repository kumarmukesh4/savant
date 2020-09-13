import React, { ReactNode, FC } from 'react'

import Header from '../common/components/header/header';
import { RouteComponentProps } from 'react-router-dom';

import './layout.scss'

interface IProp extends RouteComponentProps {
	children: ReactNode | Element;
}
type Props = IProp & any;
const Layout = (props:Props) => {
    
    return (
        <>
            <div className="main-container">
                <Header />
                <div className="content-wrapper">
                    {props?.children}
                </div>
            </div>
        </>
    )
}

export default Layout;
