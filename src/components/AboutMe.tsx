import { useEffect, useState } from 'react';
import { characters, period_month } from '../utils/constants';
import { HeroInfo } from '../utils/types';
import { withErrorPage } from '../hoc/withErrorPage';

interface AboutMeProps {
  heroId: string;
}

const AboutMe = ({heroId}: AboutMeProps) => {
  const [hero, setHero] = useState<HeroInfo>();

  useEffect(() => {
    const hero = JSON.parse(localStorage.getItem(heroId)!);
    if (hero && ((Date.now() - hero.time) < period_month)) {
      setHero(hero.payload)
    }
    else {
      fetch(characters[heroId].url)
        .then(response => response.json())
        .then(data => {
          const info = {
            name: data.name,
            gender: data.gender,
            birth_year: data.birth_year,
            height: data.height,
            mass: data.mass,
            hair_color: data.hair_color,
            skin_color: data.skin_color,
            eye_color: data.eye_color
          }
          setHero(info);
          localStorage.setItem(heroId, JSON.stringify({
            time: Date.now(),
            payload: info
          }))
        })
    }
  }, [heroId])

  return (
    <>
      {(!!hero) &&
        <div className='text-3xl leading-loose text-justify tracking-widest ml-8'>
          {Object.keys(hero).map(key => <p key={key}><span className='text-[1.5em] capitalize'>{key.replace('_', ' ')}:</span> {hero[key as keyof HeroInfo]}</p>)}
        </div>
      }
    </>
  )
}

export default withErrorPage(AboutMe)