import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {Page, Card, Button} from '@shopify/polaris';
import { getCategories, selectCategories } from './app/categorySlice';
import { getProducts, selectProducts } from './app/productSlice';
import './App.css';


function App() {
  const categories = useSelector(selectCategories);
  const products = useSelector(selectProducts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategories());
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <div className="App">
      <Page title="Example app">
        <Card sectioned>
          <Button onClick={() => alert('Button clicked!')}>Example button</Button>
        </Card>
      </Page>
    </div>
  );
}

export default App;
