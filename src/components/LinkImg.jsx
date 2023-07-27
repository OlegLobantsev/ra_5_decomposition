/* Компонент используется для рендернинга картинок завернутых в тег а*/

import {Component} from 'react';

export default class LinkImg extends Component {
  render() {
    return (
      <a className={`${this.props.class}__link `} href={this.props.link}>
        <img className={`${this.props.class}__img`} src={this.props.imgSrc}></img>
      </a>
    )
  }
}