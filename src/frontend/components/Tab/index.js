import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Col,
  Row,
} from 'reactstrap';

export class CustomPagination extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      selectedIndex: 0,
    };
  }

  selectIndex(index) {
    this.setState({
      selectedIndex: index,
    });
  }

  render() {
    const { children, tabs } = this.props;
    const { selectedIndex } = this.state;

    return (
      <React.Fragment>
        <Row>
          <Col>
            {tabs && tabs.map((tab, index) => (
              <Button
                onClick={() => { this.selectIndex(index); }}
                color={selectedIndex === index ? 'primary' : 'light'}
                style={{ marginRight: 8, minWidth: 100 }}
              >
                {tab}
              </Button>
            ))}
          </Col>
        </Row>
        <Row style={{ marginTop: 20 }}>
          <Col>
            {children && children.length > selectedIndex && children[selectedIndex]}
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

export default CustomPagination;

CustomPagination.propTypes = {
  tabs: PropTypes.array,
  children: PropTypes.array,
};

CustomPagination.defaultProps = {
  tabs: [],
  children: [],
};
