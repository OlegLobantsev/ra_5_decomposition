import './App.css';
import RegularText from './components/RegularText';
import HeaderH2 from './components/HeaderH2';
import HeaderH3 from './components/HeaderH3';
import UnorderedList from './components/UnorderedList';
import LinkImg from './components/LinkImg';
import LinkText from './components/LinkText';

function App() {
  return (
    <div className="App">
      <header className="page-header">
        <div className="last-news">
          <div className="news-header-block">
            <nav className="news-nav">
              <HeaderH2 text={'Главное'} link={'/'}/>
              <HeaderH2 text={'Новости'} link={'/'}/>
              <HeaderH2 text={'События'} link={'/'}/>
              <RegularText text={'я календарь переверну'} class={'current-date'}/>
            </nav>
            <UnorderedList array={[
              {
                id: 1,
                class: 'news',
                imgSrc: 'https://media.istockphoto.com/id/1127471287/ru/фото/сыр-на-белом.jpg?s=2048x2048&w=is&k=20&c=tYkMrLS4n-lVYiGY7i_pIxX6gdNXHam-CFzvTBPApcE=',
                text: 'В Австрии мыши ',
                link: '/'
              },
              {
                id: 2,
                class: 'news',
                imgSrc: 'https://media.istockphoto.com/id/1127471287/ru/фото/сыр-на-белом.jpg?s=2048x2048&w=is&k=20&c=tYkMrLS4n-lVYiGY7i_pIxX6gdNXHam-CFzvTBPApcE=',
                text: 'На дальнем востоке высадили селедку',
                link: '/'
              },
              {
                id: 3,
                class: 'news',
                imgSrc: 'https://media.istockphoto.com/id/1127471287/ru/фото/сыр-на-белом.jpg?s=2048x2048&w=is&k=20&c=tYkMrLS4n-lVYiGY7i_pIxX6gdNXHam-CFzvTBPApcE=',
                text: 'В северной столице соль',
                link: '/'
              },
              {
                id: 4,
                class: 'news',
                imgSrc: 'https://media.istockphoto.com/id/1127471287/ru/фото/сыр-на-белом.jpg?s=2048x2048&w=is&k=20&c=tYkMrLS4n-lVYiGY7i_pIxX6gdNXHam-CFzvTBPApcE=',
                text: 'Коты требуют приставки',
                link: '/'
              },
              {
                id: 5,
                class: 'news',
                imgSrc: 'https://media.istockphoto.com/id/1127471287/ru/фото/сыр-на-белом.jpg?s=2048x2048&w=is&k=20&c=tYkMrLS4n-lVYiGY7i_pIxX6gdNXHam-CFzvTBPApcE=',
                text: 'Пельмени объявили',
                link: '/'
              },
            ]}/>
            <UnorderedList array={[
              {
                id: 1,
                class: 'currency',
                link: '/',
                name: 'VODKA',
                value: 350.40,
                dynamic: '+1.70'
              },
              {
                id: 2,
                class: 'currency',
                link: '/',
                name: 'FUEL',
                value: 53.70,
                dynamic: '-0.05'
              },
              {
                id: 3,
                class: 'currency',
                link: '/',
                name: 'BULKA',
                value: 25.70,
                dynamic: '+1.1%'
              },
            ]}>
              <a className='currencies-more__link' href='/' style={{color: 'grey', fontWeight: '700'}}>...</a>
            </UnorderedList>
          </div>
        </div>
        <aside className="header-aside">
          <article className="header-aside-item">
            <LinkImg class={'header-aside'} imgSrc={'https://media.istockphoto.com/id/1127471287/ru/фото/сыр-на-белом.jpg?s=2048x2048&w=is&k=20&c=tYkMrLS4n-lVYiGY7i_pIxX6gdNXHam-CFzvTBPApcE='} link={'/'}/>
            <HeaderH2 text={'"Кусок сыра"'} link={'/'}/>
            <LinkText class={'aside-item'} text={'Ода куску сыра'} link={'/'}/>
          </article>
        </aside>
      </header>


      <main className="main">
        <div className="main__wrapper">
          <div className="logo-block">
            <LinkImg class={'main-logo'} imgSrc={'https://media.istockphoto.com/id/1127471287/ru/фото/сыр-на-белом.jpg?s=2048x2048&w=is&k=20&c=tYkMrLS4n-lVYiGY7i_pIxX6gdNXHam-CFzvTBPApcE='}/>
          </div>
          <div className="search-block">
            <nav className='service-nav-block'>
              <HeaderH3 text={'Видео'} link={'/'}/>
              <HeaderH3 text={'Картинки'} link={'/'}/>
              <HeaderH3 text={'Новости'} link={'/'}/>
              <HeaderH3 text={'Карты'} link={'/'}/>
              <HeaderH3 text={'Маркет'} link={'/'}/>
              <HeaderH3 text={'Переводчик'} link={'/'}/>
              <HeaderH3 text={'Эфир'} link={'/'}/>
              <HeaderH3 text={'еще'} link={'/'}/>
            </nav>
            <form className="search-form">
              <input className="search-input"></input> 
              <button className='search-button'>Найти</button>
            </form>
            <div className='search-example-block'>
              <RegularText class={'search-hint'} text={'Попробуй найти ,'}/>
              <RegularText class={'search-example'} text={' мы в тебя верим'}/>
            </div>
            <div className="ads-block">
            </div>
            <LinkImg class={'main-ad'} imgSrc={'https://media.istockphoto.com/id/1127471287/ru/фото/сыр-на-белом.jpg?s=2048x2048&w=is&k=20&c=tYkMrLS4n-lVYiGY7i_pIxX6gdNXHam-CFzvTBPApcE='}/>
          </div>
          
        </div>  
      </main>


      <footer className="page-footer">
        <div className="footer-column">
          <article className='weather__wrapper'>
            <HeaderH3 text={'Погода'} link={'/'}/>
            <div className='current-weather-block'>
              <LinkImg class={'weather-icon'} imgSrc={'https://media.istockphoto.com/id/1127471287/ru/фото/сыр-на-белом.jpg?s=2048x2048&w=is&k=20&c=tYkMrLS4n-lVYiGY7i_pIxX6gdNXHam-CFzvTBPApcE='}/>
              <LinkText class={'weather'} link={'/'} text={'+00000'}>
                <sup className='degrees-symbol'>o</sup>
              </LinkText>
            </div>
            <div className='day-part-block'>
              <RegularText class={'morning-weather'} text={'вчера  -  жарко'}><sup>o</sup>,</RegularText>
              <RegularText class={'evening-weather'} text={'послезавтра - узнаем'}><sup>o</sup></RegularText>
            </div>
          </article>
          <article className='text-ads-block'>
            <HeaderH3 text={'Посещяемое'} link={'/'}/>
            <UnorderedList array={[
              {
                id: 1,
                class: 'ads-category',
                name: 'Как есть',
                link: '/',
                text: 'развиваем рефлексы'
              },
              {
                id: 2,
                class: 'ads-category',
                name: 'Гамазея',
                link: '/',
                text: 'плетки и кони'
              },
              {
                id: 3,
                class: 'ads-category',
                name: 'Читаем',
                link: '/',
                text: 'Освежители '
              }
            ]}/>
          </article>
        </div>
        <div className="footer-column">
        <article className='schedule-block'>
            <HeaderH3 text={'Расписание'} link={'/'}/>
            <UnorderedList array={[
              {
                id: 1,
                class: 'schedule',
                link: '/',
                text: 'Лоси'
              },
              {
                id: 2,
                class: 'schedule',
                link: '/',
                text: 'Рыбы'
              },
              {
                id: 3,
                class: 'schedule',
                link: '/',
                text: 'Олени'
              }
            ]}/>
        </article>
        <article className='tv-program-block'>
            <HeaderH3 text={'Телепрограмма'} link={'/'}>
              <LinkImg link={'/'} class={'tv-live'} imgSrc={'https://media.istockphoto.com/id/1127471287/ru/фото/сыр-на-белом.jpg?s=2048x2048&w=is&k=20&c=tYkMrLS4n-lVYiGY7i_pIxX6gdNXHam-CFzvTBPApcE='}/>
            </HeaderH3>
            <UnorderedList array={[
              {
                id: 1,
                class: 'tv-show',
                link: '/',
                text: 'Танцы',
                time: '20:00',
                channel: 'ГоТВ'
              },
              {
                id: 2,
                class: 'tv-show',
                link: '/',
                text: 'Кино',
                time: '21:00',
                channel: 'Первый сельский'
              },
              {
                id: 3,
                class: 'tv-show',
                link: '/',
                text: 'Грусть Доска',
                time: '22:00',
                channel: 'Спесь'
              }
            ]}/>
        </article>
        </div>
        <div className="footer-column">
        <article className='lives-block'>
            <HeaderH3 text={'Эфир'} link={'/'}/>
            <UnorderedList array={[
              {
                id: 1,
                class: 'lives',
                link: '/',
                text: 'Вулканизация',
                imgSrc: 'https://media.istockphoto.com/id/1127471287/ru/фото/сыр-на-белом.jpg?s=2048x2048&w=is&k=20&c=tYkMrLS4n-lVYiGY7i_pIxX6gdNXHam-CFzvTBPApcE=',
                channel: 'Скука ТВ'
              },
              {
                id: 2,
                class: 'lives',
                link: '/',
                text: 'Вулканизация в жизни собак',
                imgSrc: 'https://media.istockphoto.com/id/1127471287/ru/фото/сыр-на-белом.jpg?s=2048x2048&w=is&k=20&c=tYkMrLS4n-lVYiGY7i_pIxX6gdNXHam-CFzvTBPApcE=',
                channel: 'Скука ТВ'
              },
              {
                id: 3,
                class: 'lives',
                link: '/',
                text: 'Вулканизация для самых маленьких',
                imgSrc: 'https://media.istockphoto.com/id/1127471287/ru/фото/сыр-на-белом.jpg?s=2048x2048&w=is&k=20&c=tYkMrLS4n-lVYiGY7i_pIxX6gdNXHam-CFzvTBPApcE=',
                channel: 'Скука ТВ'
              }
            ]}/>
        </article>
        </div>
      </footer>
    </div>
  );
}

export default App;
