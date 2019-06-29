import React, { Component } from 'react';
import Pagination from 'react-js-pagination';
import PropTypes from 'prop-types';

export class CustomPagination extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      activePage: 1,
    };
  }

  render() {
    const { activePage } = this.state;
    const { data, onChange } = this.props;

    return (
      <div className="Table__pagination">
        <Pagination
          itemsCountPerPage={data.size}
          totalItemsCount={data.totalElements}
          activePage={activePage}
          onChange={(_activePage) => {
            this.setState({ activePage: _activePage });
            if (onChange) {
              onChange(_activePage - 1);
            }
          }}
          itemClass="page-item"
          linkClass="page-link"
        />
      </div>
    );
  }
}

export default CustomPagination;

CustomPagination.propTypes = {
  data: PropTypes.object,
  onChange: PropTypes.func,
};

CustomPagination.defaultProps = {
  data: null,
  onChange: null,
};
