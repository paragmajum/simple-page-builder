import React, {PropTypes, Component} from 'react';
import {Link} from 'react-router';

import getStyles from './styles';

class Button extends Component {
  constructor(props) {
    super(props);

    this.state = {hovered: false};

    this.onMouseOut = this.onMouseOut.bind(this);
    this.onMouseOver = this.onMouseOver.bind(this);
  }

  static propTypes = {
    href: PropTypes.string,
    type: PropTypes.string,
    style: PropTypes.object,
    activeStyle: PropTypes.object,
    icon: PropTypes.element,
    iconProps: PropTypes.object
  };

  static contextTypes = {
    theme: PropTypes.object
  };

  onMouseOver() {
    this.setState({hovered: !this.state.hovered});
  }

  onMouseOut() {
    this.setState({hovered: !this.state.hovered});
  }

  render() {
    let {href, type, style, activeStyle, icon, iconProps} = this.props;
    let theme = this.context.theme;

    const styles = getStyles(type, {style, activeStyle, theme});

    let buttonStyles = styles.block;
    if (this.state.hovered) {
      buttonStyles = Object.assign({}, buttonStyles, styles.block_active);
    }

    if (icon) {
      return (<icon {...iconProps} />);
    }

    if (href) {
      return (<Link to={href}
        style={buttonStyles}
        onMouseOver={this.onMouseOver}
        onMouseOut={this.onMouseOut}>
        {this.props.children}
      </Link>);
    }

    return (<a href='#'
      style={buttonStyles}
      onMouseOver={this.onMouseOver}
      onMouseOut={this.onMouseOut}>
      {this.props.children}
    </a>);
  }
}


export default Button;