import spinner from '../assets/spinner.gif'

export default function Spinner() {
  return <img src={spinner} alt="Loading..." style={{
    width: '100px',
    display: 'block',
    margin: 'auto'
  }}/>
}
