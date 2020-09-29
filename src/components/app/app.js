import React, {Component} from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list';
import PostAddForm from '../post-add-form';

import './app.css';

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [
				{label: "Going to learn React", important: true, id: 1},
				{label: "That is so good", imopratant: false, id: 2},
				{label: "My Dream", important: false, id: 3}
			]
		}
		this.maxId = 4;
	}

	deleteItem = id => {
		this.setState(({data}) => {
			const index = data.findIndex(item => item.id === id);

			// const before = data.slice(0, index);
			// const after = data.slice(index + 1);

			const newArr = [...data.slice(0, index), ...data.slice(index + 1)];

			return {
				data: newArr
			}
			
		});
	}

	addItem = body => {
		const newItem = {
			label: body,
			important: false,
			id: this.maxId++
		}
		this.setState(({data}) => {
			const newArr = [...data, newItem];
			return {
				//Записываем в state.data новое значение
				data: newArr
			}
		})
		console.log(this.state.data)
	}
	


	render() {
		return (
			<div className="app">
				<AppHeader />
				<div className="search-panel d-flex">
					<SearchPanel />
					<PostStatusFilter />
				</div>
				<PostList 
					posts={this.state.data}
					onDelete={this.deleteItem} />
				<PostAddForm 
					onAdd={this.addItem} />
			</div>
		)
	}





}


