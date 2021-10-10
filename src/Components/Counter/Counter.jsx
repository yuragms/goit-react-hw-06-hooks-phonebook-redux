
import { connect } from 'react-redux';
import styles from './Counter.module.css';

 function Counter() {
  
  

  return (
    <>
      <button
        className={styles.btn}
        type="button"
        onClick={handleCounterAIncrement}
      >increment</button>
<div>{value}</div>
      <button
        className={styles.btn}
        type="button"
        onClick={handleCounterBIncrement}
      >
        decrement
      </button>
    </>
  );
}

export default connect()(Counter)
