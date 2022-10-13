import Card from "../card/Card";
import { getRandomPrimeNumbers } from "../../helpers";
import './GameField.scss';
import { useEffect, useState } from "react";
import { CardObj} from "../../types";

const GameField = () => {
  const pairs = getRandomPrimeNumbers(60, 16);

  const cards: CardObj[] = [];
  pairs.forEach((item, index) => {
    cards.push({
      content: item,
      visible: true,
      active: false,
      correct: false,
      id: index,
      disabled: true
    })
  });

  const [fieldState, setFieldState] = useState([...cards]);
  const [firstCard, setFirstCard] = useState(-1);
  const [secondCard, setSecondCard] = useState(-1);

  useEffect(() => {
    setTimeout(() => setFieldState(fieldState.map(item => {
      return {...item, visible: false, disabled: false}
    })), 5000)
  }, [])

  const clickFn = (index: number) => {
    let item = {...fieldState[index], active: !fieldState[index].active};
    setFieldState([
      ...fieldState.map(el => {
        if(el.id !== index) return el;
        return item; 
      })
    ])
    if(firstCard === -1) {
      setFirstCard(index);
    } else {
      setSecondCard(index);
    }
  }

  useEffect(() => {
    if(secondCard >= 0 && firstCard >= 0) {
      if(fieldState[secondCard].content === fieldState[firstCard].content) {
        setFieldState([
          ...fieldState.map(item => {
            if(item.id === firstCard) return {...fieldState[firstCard], correct: true, active: false};
            if(item.id === secondCard) return {...fieldState[secondCard], correct: true, active: false};
            return item;
          })
        ])
        setFirstCard(-1);
        setSecondCard(-1);
      } else {
        setFieldState([
          ...fieldState.map(item => {
            if(item.id === firstCard) return {...fieldState[firstCard], disabled: true};
            if(item.id === secondCard) return {...fieldState[secondCard], disabled: true};
            return item;
          })
        ])
        setFirstCard(-1);
        setSecondCard(-1);
        setTimeout(() => {
          setFieldState([
            ...fieldState.map(item => {
              if(item.id === firstCard) return {...fieldState[firstCard], disabled: false, active: false};
              if(item.id === secondCard) return {...fieldState[secondCard], disabled: false, active: false};
              return item;
            })
          ])
        }, 1000)
      }
    }
    }, [secondCard])

  return (
    <div className="game-field">
      {fieldState.map((item) => <Card key={item.id} {...item} clickFn={clickFn}/>)
      }
    </div>
  )
}

export default GameField