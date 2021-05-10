import React from 'react';
import { useHistory } from "react-router-dom";
import {Page, Card, Button} from '@shopify/polaris';

function Cart() {
  const history = useHistory();
  return (
    <div>
      <Page title="Cart">
        <Card sectioned>
          <Button onClick={() => history.push('/')}>Go to product list</Button>
        </Card>
      </Page>
    </div>
  );
}

export default Cart;
