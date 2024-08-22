import { horoscopeIcons } from '../../utils/horoscopeIcons';
import { Link } from 'react-router-dom';
import { SIGNS_PAGE_ROUTE } from '../../utils/routes';
import css from './HomePage.module.css'
import { HomePageProps } from './types';

function HomePage({ lang }: HomePageProps) {
  
  return (
      <>
        <div className="container">
          {horoscopeIcons.map(({Icon, id, enName, ruName}) => {
            return (
              <Link key={id} className={css.horoscopeItem} to={`${SIGNS_PAGE_ROUTE}/${enName.toLowerCase()}`}>
                {<Icon className='icon' size={30} />}
                <p>{lang === 'ru' ? ruName : enName}</p>
              </Link>
            )
          })}
        </div>
      </>
  )
}

export default HomePage
