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

  const totalPrice = Object.values(items).reduce((sum, item) => {
    sum += item.price * item.amount;
    return +sum.toFixed(2);
  }, 0.0);

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
        <div className={styles.footer}>
          <Heading>Total price: ${totalPrice}</Heading>
        </div>
      </Page>
    </div>
  );
}

export default Cart;
