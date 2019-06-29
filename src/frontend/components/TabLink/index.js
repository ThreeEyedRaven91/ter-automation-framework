import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Col,
  Row,
} from 'reactstrap';

export class CustomPagination extends Component {
  render() {
    const { tabs, history } = this.props;
    const { pathname } = history.location;

    return (
      <Row style={{ marginBottom: 20 }}>
        <Col>
          {tabs && tabs.map(tab => (
            <Button
              onClick={() => { history.push(tab.path); }}
              color={pathname.indexOf(tab.path) !== -1 ? 'primary' : 'light'}
              style={{ marginRight: 8, minWidth: 100 }}
            >
              {tab.title}
            </Button>
          ))}
        </Col>
      </Row>
    );
  }
}

export default CustomPagination;

CustomPagination.propTypes = {
  tabs: PropTypes.array,
  history: PropTypes.object,
};

CustomPagination.defaultProps = {
  tabs: [],
  history: null,
};
