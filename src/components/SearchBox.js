import React from 'react';
import '../bootstrap/css/bootstrap.min.css';
const SearchBox = (props) => {
	return (
		
		<div className='col col-sm-4'>
		<div className='row'>
			<svg className='col col-4' style={{marginTop: 5, marginRight: 10}} xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
  			<path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.02.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
			</svg>
			
			<input
				className='col form-control'
				value={props.value}
				onChange={(event) => props.setSearchValue(event.target.value)}
				placeholder='Type to search...'
			></input>
		
		</div>
		</div>
	);
};

export default SearchBox;
