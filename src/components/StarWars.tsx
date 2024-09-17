import { useParams } from 'react-router-dom';
import { characters, defaultHero, starWarsInfo } from '../utils/constants'
import { SWContext } from '../utils/context';
import { useContext, useEffect } from 'react';
import ErrorPage from './ErrorPage';

const StarWars = () => {
  const { heroId = defaultHero } = useParams();
  const {changeHero} = useContext(SWContext);
  useEffect(() => {
      if (!characters[heroId]) {
          return;
        }
        changeHero(heroId);
      }, [heroId])
  return characters[heroId]?(
    <div className="text-3xl leading-loose text-justify tracking-widest">{starWarsInfo}</div>
  ):<ErrorPage/>
}

export default StarWars