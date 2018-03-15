import React from "react";
import { Route, Switch } from "react-router-dom";
import LoginPage from "./components/layouts/LoginPage";
import NotFound from "./components/views/NotFound";
import { baseAppRouter } from "./utils/config";

export default (
	<Switch>
		<Route exact path={"/"} component={LoginPage} />
		<Route path={baseAppRouter + "*"} component={NotFound} />
	</Switch>
);
