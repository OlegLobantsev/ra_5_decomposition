/* Компонент используется для рендернинга заголовков h3*/

import {Component} from 'react';

export default class HeaderH3 extends Component {
  render() {
    return (
      <div className='header-container'>
        <h3 className='header-name h3'>
          <a className='header-link' href={this.props.link} style={{color: 'blue'}}>{this.props.text}</a>
        </h3>
        {this.props.children}
      </div>
      )
  }
}