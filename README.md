Custom Flexgrid
==============



Installation
------------

```
npm install custom-flexgrid
```

Usage
-----


```jsx
const {Grid, Row, Col} = require('custom-flexgrid');

const App = React.createClass({
  render() {
    return (
      <Grid>
        <Row>
          <Col xs={6} md={3}>Hello, world!</Col>
        </Row>
      </Grid>
    );
  }
});
```

License
-------
MIT
