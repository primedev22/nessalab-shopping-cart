import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { Page, Card, Button, Select, ResourceList, ResourceItem, Heading, Subheading, Thumbnail } from '@shopify/polaris';
import { getCategories, selectCategories } from '../app/categorySlice';
import { getProducts, selectProducts } from '../app/productSlice';
import styles from './Product.module.css';

function Product() {
  const [filter, setFilter] = useState('');
  const [sort, setSort] = useState('asc');

  const categories = useSelector(selectCategories);
  const products = useSelector(selectProducts);

  const history = useHistory();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getProducts(sort, filter));
  }, [dispatch, sort, filter]);

  const handleFilterChange = (value) => setFilter(value);
  const handleSortChange = (value) => setSort(value);
  const addToCart = (product) => () => {};

  return (
    <Page title="Product">
      <div className={styles.header}>
        <div className={styles.options}>
          <Select
            label="Category"
            labelInline
            options={[
              { label: 'all', value: '' },
              ...categories.map(category => ({ label: category, value: category }))
            ]}
            onChange={handleFilterChange}
            value={filter}
          />
          <Select
            label="Sort"
            labelInline
            options={[
              { label: 'Ascending', value: 'asc' },
              { label: 'Descending', value: 'desc' },
            ]}
            onChange={handleSortChange}
            value={sort}
          />
        </div>
        <Button onClick={() => history.push('/cart')}>Go to cart</Button>
      </div>
      <Card sectioned>
        <ResourceList
          resourceName={{singular: 'product', plural: 'products'}}
          items={products}
          renderItem={(item) => {
            const { id, title, category, image, description, price } = item;

            return (
              <ResourceItem
                id={id}
                media={<Thumbnail size="large" source={image} alt={title} />}
                accessibilityLabel={title}
              >
                <div className={styles['item-header']}>
                  <Heading>{title}</Heading>
                  <Button onClick={addToCart(item)}>Add to cart</Button>
                </div>               
                <Subheading>[{category}] ${price}</Subheading>
                <p>{description}</p>
              </ResourceItem>
            );
          }}
        />
      </Card>
    </Page>
  );
}

export default Product;
