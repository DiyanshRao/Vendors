import React from 'react'
import { CardData, data } from './data'
interface CardProps {
  data: CardData
}

const Card: React.FC<CardProps> = ({ data }) => {
  return (
    <div className='w-45 h-20 bg-white rounded flexCol2 pad-2 '>
      <img src={data.icon} alt='Icon' className='rounded' />
      <h1 className='head2'>{data.title}</h1>
      <p className='p2'>{data.desc}</p>
      <a href={data.link} className='link'>
        {data.linkDesc}
        {'->'}
      </a>
    </div>
  )
}

const CardList: React.FC = () => {
  return (
    <div className='flexWrap'>
      {data.map((card, index) => (
        <Card key={index} data={card} />
      ))}
    </div>
  )
}

export default CardList
