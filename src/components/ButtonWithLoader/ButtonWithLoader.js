import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Loader from '../Loader/Loader';

const ButtonWithLoader = ({ onClick, children, loading }) => (
  <Fragment>
    {
      loading ? (
        <Loader />
      ) : (
        <Button
          variant="contained"
          color="primary"
          onClick={onClick}
        >
          {children}
        </Button>
      )
    }
  </Fragment>
);

ButtonWithLoader.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  loading: PropTypes.bool,
};

ButtonWithLoader.defaultProps = {
  loading: false,
};

export default ButtonWithLoader;
