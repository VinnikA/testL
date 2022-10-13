import './Card.scss';
import { CardProps } from '../../types';

const Card = (props: CardProps) => {
  const {content, visible, active, correct, id, disabled, clickFn} = props;

  const handleClick = () => {
      clickFn(id)
  }

  const visibleStyle = visible ? ' card_visible' : '';
  const activeStyle = active ? ' card_active' : '';
  const correctStyle = correct ? ' card_correct' : '';
  const currentStyle = `card${activeStyle}${correctStyle}${visibleStyle}`;

  return (
    <button 
      className={currentStyle} 
      value={content} 
      onClick={handleClick}
      disabled={disabled || correct}
    >
      {props.content}</button>
  )
}

export default Card;