
import { connect } from 'react-redux';
import styles from './Counter.module.css';
import * as actions from '../../redux/actions';

 function Counter({value, onIncrement, onDecrement}) {
  
  

  return (
    <>
      <button
        className={styles.btn}
        type="button"
        onClick={onIncrement}
      >increment</button>
<div>{value}</div>
      <button
        className={styles.btn}
        type="button"
        onClick={onDecrement}
      >
        decrement
      </button>
    </>
  );
}

const mapStateToProps = state => {
  return {
    value: state.counterValue,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onIncrement: ()=> dispatch(actions.increment(10)),
    onDecrement: ()=> dispatch(actions.decrement(10)),
};
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
