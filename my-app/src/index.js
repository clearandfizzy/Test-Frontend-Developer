import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {config} from "./data";

ReactDOM.render(
	<React.StrictMode>
		<App config={config}/>
	</React.StrictMode>,
	document.getElementById('root')
);


