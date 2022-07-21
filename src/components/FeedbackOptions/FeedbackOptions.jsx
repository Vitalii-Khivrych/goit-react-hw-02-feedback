import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';

function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <div className={s.wrap}>
      {options.map(option => (
        <button
          key={option}
          className={s.btn}
          type="button"
          name={option}
          onClick={onLeaveFeedback}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

FeedbackOptions.propTypes = {
  option: PropTypes.array,
  onLeaveFeedback: PropTypes.func.isRequired,
};
export default FeedbackOptions;

//    <button
//   className={s.btn}
//   type="button"
//     onClick={() => onLeaveFeedback('bad')}>Bad
// </button>;
