export const TYPES = {
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT'
}

export const incrementCounter = () => ({type: TYPES.INCREMENT})
export const decrementCounter = () => ({type: TYPES.DECREMENT})