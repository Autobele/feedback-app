import {AnimatePresence, motion} from 'framer-motion'
import PropTypes from 'prop-types'
import FeedbackItem from "./FeedbackItem"

function FeedbackList({ feedback, handleDelete }) {
  if(!feedback || feedback.length === 0) {
    return <p>No feedback yet.</p>
  }
  return (
    <div className="feedback-list">
      <AnimatePresence>
      {feedback.map((feedback) => (
        <motion.div
          key={feedback.id}
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          exit={{opacity: 0}}
        >
          <FeedbackItem key={feedback.id} item={feedback} handleDelete={handleDelete}/>
        </motion.div>
      ))}
      </AnimatePresence>
    </div>
  )
}

FeedbackList.propTypes = {
  feedback: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
    })
  )
}

export default FeedbackList