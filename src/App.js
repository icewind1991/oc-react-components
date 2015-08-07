import React, {Component} from 'react/addons';

export class App extends Component {
	findChild (type) {
		return this.props.children.reduce((topBar, element)=> {
			if (element.type === type) {
				return element;
			} else {
				return topBar;
			}
		}, null);
	}

	render () {
		// re-structure the content and topbar elements to what css expects
		let topBar = this.findChild(TopBar);
		let content = this.findChild(Content);

		if (content && topBar) {
			content = React.cloneElement(content, {topBar: topBar});
		}
		let children = this.props.children.filter(element => {
			return element.type !== TopBar && element.type !== Content;
		});
		children.push(content);
		console.log(topBar);
		return (
			<div id="content" role="main" className={"app-" + this.props.appId}>
				{children}
			</div>
		);
	}
}

export class TopBar extends Component {
	render () {
		return (
			<div id="controls">
				{this.props.children}
			</div>
		);
	}
}

export class Content extends Component {
	render () {
		let className = this.props.className || '';
		let topBar = this.props.topBar;
		if (topBar) {
			className = className + ' hascontrols';
		} else {
			topBar = [];
		}
		return (
			<div id="app-content">
				{topBar}
				<ContentContainer className={className.trim()}>
					{this.props.children}
				</ContentContainer>
			</div>
		);
	}
}

class ContentContainer extends Component {
	render () {
		return (
			<div className={this.props.className} id="content">
				{this.props.children}
			</div>
		);
	}
}
