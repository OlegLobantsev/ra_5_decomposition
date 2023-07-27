/* Компонент используется для рендернинга заголовков h2*/

import {Component} from 'react';

export default class HeaderH2 extends Component {
  render() {
    return (
      <div className='header-container'>
        <h2 className='header-name h2'>
          <a className='header__link' href={this.props.link} style={{color: 'blue'}}>{this.props.text}</a>
        </h2>
        {this.props.children}
      </div>
      )
  }
}