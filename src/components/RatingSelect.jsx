import {useState} from 'react'

function RatingSelect({ select }) {
  const [selected, setSelected] = useState(5)

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