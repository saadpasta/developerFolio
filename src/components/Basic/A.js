import React from 'react';
export default props => (
	<a
		{...props}
		target={props.target ? props.target : ''}
		rel="noopener noreferrer"
	>
		{props.children}
	</a>
);
