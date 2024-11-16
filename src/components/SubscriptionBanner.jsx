import React from 'react';
import { Container, Form, Button, InputGroup } from 'react-bootstrap';

const SubscriptionBanner = () => {
  return (
    <div className='subscription-banner'>
      <Container>
        <h2 style={{ fontWeight: 'bold' }}>Subscribe to get special price</h2>
        <p>Don't wanna miss something? Subscribe right now and get special <br />promotion and monthly newsletter</p>
        <Form style={{ maxWidth: '600px', margin: '0 auto' }}>
          <InputGroup className="mb-3">
            <Form.Control
              type="email"
              placeholder="Type your email here"
              aria-label="Subscriber's email"
              aria-describedby="subscribe-button"
            />
            <Button
              variant="dark"
              id="subscribe-button"
              style={{
                fontWeight: 'bold',
                borderTopLeftRadius: 0,
                borderBottomLeftRadius: 0,
              }}
            >
              Subscribe
            </Button>
          </InputGroup>
        </Form>
      </Container>
    </div>
  );
};

export default SubscriptionBanner;
