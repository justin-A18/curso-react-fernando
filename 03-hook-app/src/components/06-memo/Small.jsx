import PropTypes from 'prop-types';
import { memo } from 'react';

// MEMO le dice a React que memorice este componente; solo se renderizará si las props cambian

export const Small = memo(({ value }) => {
  console.log('Me volví a dibujar');
  return (
    <>
      <small>{value}</small>
    </>
  );
});

Small.displayName = 'Small';

Small.propTypes = {
  value: PropTypes.number.isRequired,
};
