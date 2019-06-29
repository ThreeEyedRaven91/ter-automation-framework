import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Card, CardBody, CardFooter, CardHeader,
} from 'reactstrap';

export default class Box extends Component {
  render() {
    const {
      title, icon, children, footer,
    } = this.props;

    return (
      <Card>
        <CardHeader>
          <i className={icon} />
          {title}
        </CardHeader>
        <CardBody>
          { children }
        </CardBody>
        { footer && (
          <CardFooter>
            { footer }
          </CardFooter>
        )}
      </Card>
    );
  }
}

Box.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.string,
  children: PropTypes.any,
  footer: PropTypes.any,
};

Box.defaultProps = {
  title: null,
  icon: 'fa fa-align-justify',
  children: null,
  footer: null,
};
