import { LocalizationComponent } from 'ter-localization';
import PropTypes from 'prop-types';

export default class BaseComponent extends LocalizationComponent {
  baseUrl = '';

  constructor(props, context) {
    super(props, context);
    const { match } = props;
    if (match && match.params) {
      Object.keys(match.params).forEach((key) => {
        this[key] = () => {
          const { match: propsMatch } = this.props;
          if (propsMatch && propsMatch.params && propsMatch.params[key]) {
            return match.params[key];
          }
          return false;
        };
      });
    }
  }

  push(base = '', url = null) {
    const { history } = this.props;
    if (url == null) {
      history.push(this.base(base));
    } else {
      history.push(`${base}/${url}`);
    }
  }

  base(url = '') {
    const baseString = `${this.baseUrl}/${url}`;
    const { match } = this.props;
    if (match && match.params) {
      return Object.keys(match.params).reduce((result, key) => {
        const re = new RegExp(`:${key}`, 'g');
        return result.replace(re, match.params[key]);
      }, baseString);
    }
    return baseString;
  }

  route(url = '') {
    return `${this.baseUrl}/${url}`;
  }
}

BaseComponent.propTypes = {
  history: PropTypes.object,
  match: PropTypes.object,
};

BaseComponent.defaultProps = {
  history: null,
  match: null,
};
