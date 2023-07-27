/* Универсальный компонент для рендеринга списка элементов */

import {Component} from "react"
import LinkText from "./LinkText"
import LinkImg from "./LinkImg"
import ListItem from "./ListItem"
import RegularText from "./RegularText"

export default class UnorderedList extends Component {
  render() {
    return (
      <ul className={`list ${this.props.array[0].class}__list`}>
        {this.props.array.map(item => {

          if (item.class === 'news') {
            return <li className={`list__item ${item.class}__item`} key={item.id}>
                      <LinkImg {...item}/>
                      <LinkText {...item}/>
                  </li>
          }

          if (item.class === 'currency') {
            const currencyName = {
              class: item.class + '-name',
              text: item.name,
            }

            const currencyValue = {
              class: item.class + '-value',
              text: item.value,
            }

            const currencyDynamic = {
              class: item.class + '-dynamic',
              text: item.dynamic,
            }

            const currencyNameItem = {...item, ...currencyName}
            const currencyValueItem = {...item, ...currencyValue}
            const currencyDynamicItem = {...item, ...currencyDynamic}

            return <li className={`list__item ${item.class}__item`} key={item.id}>
                    <LinkText {...currencyNameItem}/>
                    <LinkText {...currencyValueItem}/>
                    <RegularText {...currencyDynamicItem}/>
                  </li>
          }

          if (item.class === 'ads-category') {

            const category = {
              class: item.class + '-name',
              text: item.name,
            }

            const text = {
              class: item.class + '-text',
              text: ' - ' + item.text,
            }

            const categoryItem = {...item, ...category}
            const textItem = {...item, ...text}

            return <li className={`list__item ${item.class}__item`} key={item.id}>
                    <LinkText {...categoryItem}/>
                    <LinkText {...textItem}/>
                  </li>
          }

          if (item.class === 'schedule') {
            return <li className={`list__item ${item.class}__item`} key={item.id}>
                      <LinkText {...item}/>
                  </li>
          }

          if (item.class === 'tv-show') {
            const time = {
              class: item.class + '-time',
              text: item.time,
            }

            const tvShowName = {
              class: item.class + '-name',
            }

            const channel = {
              class: item.class + '-channel',
              text: item.channel,
            }

            const timeItem = {...item, ...time}
            const showNameItem = {...item, ...tvShowName}
            const channelItem = {...item, ...channel}

            return <li className={`list__item ${item.class}__item`} key={item.id}>
                      <LinkText {...timeItem}/>
                      <LinkText {...showNameItem}/>
                      <RegularText {...channelItem}/>
                  </li>
          }

          if (item.class === 'lives') {

            const name = {
              class: item.class + '-name',
            }
            
            const channel = {
              class: item.class + '-channel',
              text: item.channel,
            }

            const nameItem = {...item, ...name}
            const channelItem = {...item, ...channel}

            return <li className={`list__item ${item.class}__item`} key={item.id}>
                      <LinkImg {...item}/>
                      <LinkText {...nameItem}/>
                      <RegularText {...channelItem}/>
                  </li>
          }

        })}
        {this.props.children}
      </ul>
    )
  }
}