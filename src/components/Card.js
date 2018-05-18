import React from 'react';
import PropTypes from 'prop-types';
import Loader from 'react-loader-spinner';
import '../styles/Card.css';


const Card = ({
  error, loading, title, children, className, cardClass,
}) => (
  <div className={`Card ${cardClass}`}>
    {title &&
      <div className="title">
        <h1 className="title">{title}</h1>
      </div>}

    {error && (
      <div className="content center">
        <span>{error.message}</span>
      </div>
    )}

    {!error && (
      loading
        ? (
          <div className="content center">
            <Loader
              type="Bars"
              color="#3A9FBF"
              height="100"
              width="100"
            />
          </div>
          )
        : (
          <div className={`content ${className}`}>
            {children}
          </div>
        )
    )}
  </div>
);

export default Card;

Card.propTypes = {
  children: PropTypes.element.isRequired,
  title: PropTypes.string,
  loading: PropTypes.bool,
  className: PropTypes.string,
  cardClass: PropTypes.string,
  error: PropTypes.shape({
    message: PropTypes.string.isRequired,
  }),
};

Card.defaultProps = {
  title: undefined,
  loading: false,
  className: '',
  cardClass: '',
  error: undefined,
};
