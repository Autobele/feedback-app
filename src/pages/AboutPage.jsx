import { Link } from 'react-router-dom'
import Card from "../components/shared/Card"

function AboutPage() {
  return (
    <Card>
      <div className="about">
        <h1>About this Project</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, adipisci. Harum dolor qui ducimus voluptatem sequi laborum quasi at illo pariatur eos quae eius voluptas nam, beatae eveniet. Omnis, illo.</p>
        <Link to="/">Back to home</Link>
      </div>
    </Card>
  )
}

export default AboutPage