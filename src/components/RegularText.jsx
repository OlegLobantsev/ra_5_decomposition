/* Компонент используется для рендернинга простого текста*/


import {Component} from 'react';

export default class RegularText extends Component {
  render() {
    return (
      <span className={`${this.props.class}__regular-text`}>
        {this.props.text}
        {this.props.children}
      </span>
    )
  }
}