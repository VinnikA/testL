import './Card.scss';
import { CardProps } from '../../types';
import { useState } from 'react';

const Card = (props: CardProps) => {
  const {content, visible, active, correct, id, disabled, clickFn} = props;

  const handleClick = () => {
      clickFn(id, content)
  }

  const visibleStyle = visible ? ' card_visible' : '';
  const activeStyle = active ? ' card_active' : '';
  const correctStyle = correct ? ' card_correct' : '';
  const currentStyle = `card${activeStyle}${correctStyle}${visibleStyle}`;

  return (
    <button 
      className={currentStyle} 
      value={props.content} 
      onClick={handleClick}
      disabled={disabled || correct}
    >
      {props.content}</button>
  )
}

export default Card;