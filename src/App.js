import React from 'react';
import './App.css';
import {Page, Card, Button} from '@shopify/polaris';


function App() {
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
