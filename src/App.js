import styles from './index.scss';
import Header from './components/Header/Header';
import Content from './components/Content/Content';

function App() {
  return (
<div className={styles.wrapper}>
<Header/>
<Content/>
</div>
  );
}

export default App;
