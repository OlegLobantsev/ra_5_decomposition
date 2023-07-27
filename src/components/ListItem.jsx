/* Компонент используется для рендернинга элемента li в списке*/


import {Component} from 'react';

export default class ListItem extends Component {
  render() {
    return <li className={`list__item ${this.props.class}__item`}>
            {this.props.children}
          </li>
  }
}