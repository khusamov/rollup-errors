import React, {Component} from 'react';
import {JSDOM} from 'jsdom';
const window = new JSDOM().window;
const createDocument = window.document.implementation.createDocument.bind(window.document.implementation);
export const doc = createDocument(null, null, null);

export default class Example extends Component {
	render() {
		return <div>Example</div>;
	}
}