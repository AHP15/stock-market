import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import Alert from './Alert';
import SymbolCard from './SymbolCard';

import styles from '../styles/Details.module.css';
import DetailItem from './DetailItem';

const Details = () => {
  const { symbol, index } = useParams();
  const { symbols, loading } = useSelector((state) => state.symbols);
  const companyInfo = symbols[index - 1];

  const [state, setState] = useState({
    loading: true,
    error: null,
    details: null,
  });

  const getCampanyDetails = async (symbolName) => {
    const url = `${process.env.REACT_APP_BASE_URL}income-statement/${symbolName}?limit=120&apikey=${process.env.REACT_APP_API_KEY}`;

    try {
      const res = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await res.json();
      return {
        loading: false,
        error: null,
        details: data[0],
      };
    } catch (err) {
      return {
        loading: false,
        error: err.message,
        details: null,
      };
    }
  };

  useEffect(() => {
    getCampanyDetails(symbol).then(setState);
  }, [symbol]);

  if (state.loading || loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className={styles.details}>
      <div className={styles.card_container}>
        <SymbolCard
          key={companyInfo.symbol}
          symbol={companyInfo.symbol}
          company={companyInfo.companyName}
          price={companyInfo.price}
          dark={false}
          index={Number(index) - 1}
        />
      </div>
      <DetailItem
        title="Revenue"
        value={`${state.details.revenue} $`}
      />
      <DetailItem
        title="Gross profit"
        value={`${state.details.grossProfit} $`}
        dark
      />
      <DetailItem
        title="Gross profit ratio"
        value={`${state.details.grossProfitRatio}`}
      />
      <DetailItem
        title="Income before tax"
        value={`${state.details.incomeBeforeTax} $`}
        dark
      />
      <DetailItem
        title="Income tax expense"
        value={`${state.details.incomeTaxExpense} $`}
      />
      {
        state.error && (
          <Alert
            message={state.error}
            close={() => setState((prev) => ({ ...prev, error: null }))}
          />
        )
      }
    </div>
  );
};
export default Details;
