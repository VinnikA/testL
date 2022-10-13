export type CardObj = {
  content: number,
  visible: boolean,
  active: boolean,
  correct: boolean,
  id: number,
  disabled: boolean
}

export type CardProps = {
  content: number,
  visible: boolean,
  active: boolean,
  correct: boolean,
  id: number,
  disabled: boolean
  clickFn: (index: number, content: number) => void
}

export type CardInfo = number[] | null[];