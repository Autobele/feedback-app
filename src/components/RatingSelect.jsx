import {useContext, useEffect, useState} from 'react'
import FeedbackContext from '../context/FeedbackContext'

function RatingSelect({ select }) {
  const [selected, setSelected] = useState(10)

  const { feedbackEdit } = useContext(FeedbackContext);

  useEffect(() => {
    if(feedbackEdit.edit === true) {
      setSelected(feedbackEdit.item.rating);
    }
  }, [feedbackEdit])

  const handleOnChange = (e) => {
    setSelected(+e.currentTarget.value)
    select(+e.currentTarget.value)
  }

  const radios = [...Array(10)].map((_, i) => {
    const index = i + 1;
    return {
      id: `num${index}`,
      value: index
    }
  })

  return (
    <ul className="rating">
      {radios && radios.map(item => (
        <li key={item.id}>
          <input 
            type="radio" 
            name="rating" 
            id={item.id} 
            value={item.value} 
            onChange={handleOnChange}
            checked={selected === item.value}
            />
          <label htmlFor={item.id}>{item.value}</label>
        </li>
      ))}
    </ul>
  )
}

export default RatingSelect