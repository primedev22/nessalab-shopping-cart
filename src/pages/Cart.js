import React from 'react';
import { useHistory } from "react-router-dom";
import { useSelector } from 'react-redux';
import {
  Button,
  Card,
  Heading,
  Page,
  ResourceItem,
  ResourceList,
  Subheading,
  Thumbnail,
} from '@shopify/polaris';
import { selectCart } from '../app/cartSlice';
import styles from './Cart.module.css';

function Cart() {
  const history = useHistory();
  const items = useSelector(selectCart);

  return (
    <div>
      <Page>
        <div className={styles.header}>
          <Button onClick={() => history.push('/')}>Go to product list</Button>
        </div>
        <Card sectioned>
          <ResourceList
            resourceName={{singular: 'item', plural: 'items'}}
            items={Object.values(items)}
            renderItem={(item) => {
              const { id, title, category, image, description, price, amount } = item;

              return (
                <ResourceItem
                  id={id}
                  media={<Thumbnail size="large" source={image} alt={title} />}
                  accessibilityLabel={title}
                >
                  <div className={styles['item-header']}>
                    <Heading>{title}</Heading>
                    <Heading>{amount} items</Heading>
                  </div>               
                  <Subheading>[{category}] ${price}</Subheading>
                  <p>{description}</p>
                </ResourceItem>
              );
            }}
          />
        </Card>
      </Page>
    </div>
  );
}

export default Cart;
