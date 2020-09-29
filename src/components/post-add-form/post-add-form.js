import React from 'react';

import './post-add-form.css';

const PostAddForm = ({onAdd}) => {
	return (
		<form className="bottom-panel d-flex">
			<input 
				type="text"
				placeholder="О чем вы думаете сейчас?"
				className="form-control new-post-label"
			/>
			<button
				onClick={() => onAdd("Hello")}
				type="submit"
				className="btn btn-outline-secondary">
				Добавить</button>
		</form>
	)
}

export default PostAddForm;