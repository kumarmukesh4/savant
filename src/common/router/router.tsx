import React, { ReactNode } from "react";
import { Router, Switch, Route, Redirect, useRouteMatch, RouteComponentProps, useHistory } from "react-router-dom";

import Home from '../../component/home'
import PropertyList from '../../component/property-list'
import About from '../../component/about'
import Layout from "../../hoc/layout";

interface IProp extends RouteComponentProps {
	children: ReactNode | Element;
}

type Props = IProp & any;

const Routes = (props: Props) => {
	const history = useHistory();
	let { path } = useRouteMatch();
	return (
		<Layout>
			<Switch>
				<Route path="/home" component={Home} />
				<Route
					path={'/properties/:searchtext'}
					render={(props: Props) => <PropertyList {...props} />}
				/>
				<Route path="/about" component={About} />
				<Route exact path="/">
					<Redirect to="/home" />
				</Route>
			</Switch>
		</Layout>
	)
}

export default Routes;

