import { useSelector } from 'react-redux';

import SymbolCard from './SymbolCard';

import styles from '../styles/Home.module.css';

const Home = () => {
  const { symbols, loading } = useSelector((state) => state.symbols);

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className={styles.home}>
      {
        symbols.map((obj, i) => (
          <SymbolCard
            key={obj.symbol}
            symbol={obj.symbol}
            company={obj.companyName}
            price={obj.price}
            dark={i % 2 !== 0}
            index={i}
          />
        ))
      }
    </div>
  );
};

export default Home;
