import {Component} from 'react/addons';

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
			<li>
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
