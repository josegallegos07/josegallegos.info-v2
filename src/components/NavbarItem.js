import React from 'react';
import TextButton from './TextButton';

function NavbarItem({ label, onClick }) {
  return (
    <TextButton label={label} onClick={onClick} />
  );
}

export default NavbarItem;
