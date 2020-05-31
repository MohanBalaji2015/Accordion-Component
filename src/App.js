import React, { useState, useEffect, useCallback } from 'react';
import Header from './Header';
import FAQ from './FAQ';
//import Faqs from "./faqs.json";

function App () {
  const [faqs, setFaqs] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch('http://www.mocky.io/v2/5ed2ba5c3200000c515ca2f0');
      const result = await response.json();
      setFaqs(result);
    }
    getData();
  }, []);

  const toggleFAQ = useCallback(index => {
    faqs[index].open = !faqs[index].open;
    setFaqs([...faqs]);
  }, [faqs, setFaqs]);


  return (
    <div className="layout">
      <div className="wrapper">
        <Header />
        <div className="faqs">
          {faqs.map((faq, i) => (
            <FAQ key={faq.id} faq={faq} index={i} toggleFAQ={toggleFAQ} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;