/* Компонент используется для рендернинга текста завернутого в тег а*/

import {Component} from 'react';

export default class LinkText extends Component {
  render() {
    return (
      <a className={`${this.props.class}__text-link`} href={this.props.link} style={{color: 'black'}}>
        {this.props.text}
        {this.props.children}
      </a>
    )
  }
}