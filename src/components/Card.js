import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Card.css';

const Card = ({
  loading, title, children, className, cardClass,
}) => (
  <div className={`Card ${cardClass}`}>
    {loading ?
      <span>Loading...</span> :
      <div className={className}>
        {title && <h1 className="title">{title}</h1>}
        <div>
          {children}
        </div>
      </div>}
  </div>
);

export default Card;

Card.propTypes = {
  children: PropTypes.element.isRequired,
  title: PropTypes.string,
  loading: PropTypes.bool,
  className: PropTypes.string,
  cardClass: PropTypes.string,
};

Card.defaultProps = {
  title: undefined,
  loading: false,
  className: '',
  cardClass: '',
};
