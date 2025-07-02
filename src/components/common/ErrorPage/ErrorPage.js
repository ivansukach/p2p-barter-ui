import * as React from "react";
import "./ErrorPage.css";

import errorSVG from "../../../assets/error/error_ic.svg";

export default function(props) {
	return (
		<div className="ErrorPage-wrapper">
			<img src={errorSVG} alt='error' />
			<div>Some error has occurred, try refreshing the page</div>
			<div>If the error persists, contact admin</div>
		</div>
	);
}
