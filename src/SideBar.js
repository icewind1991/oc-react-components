import {Component} from 'react';

export class SideBar extends Component {

	render () {
		var className = this.props.withIcon ? 'with-icon' : '';
		return (
			<div id="app-navigation">
				<ul className={className}>
					{this.props.children}
				</ul>
			</div>
		);
	}
}

export class Entry extends Component {
	render () {
		var className = this.props.icon ? 'icon-' + this.props.icon : '';
		return (
			<li className={this.props.className||''}>
				<a className={className} onClick={this.props.onClick||(()=>{})}>
					{this.props.children}
				</a>
			</li>
		);
	}
}

export class Separator extends Component {
	render () {
		return (
			<li className="app-navigation-separator"/>
		);
	}
}

export class Settings extends Component {
	state = {
		show: false
	};

	toggle = () => {
		const show = !this.state.show;
		this.setState({show});
	};

	render () {
		const title = (this.props.title) ? this.props.title : 'Settings';
		const style = {
			display: (this.state.show) ? 'block' : 'none'
		};

		return (
			<div id="app-settings">
				<div id="app-settings-header">
					<button className="settings-button"
							onClick={this.toggle}>{title}
					</button>
				</div>
				<div
					style={style}>
					{this.props.children}
				</div>
			</div>
		);
	}
}
