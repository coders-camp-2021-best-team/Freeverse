
import PropTypes from 'prop-types';
import { useCallback } from 'react';
import { ReactComponent as ReactLike } from './icons/like.svg';
import './Icon.scss';

// still unused - to be changed


const icons = {
  'like': ReactLike
  }

export const Icon = ({ iconName, size, className, onClick }) => {
  const handleClick = useCallback(() => onClick(), [onClick]);
  return (
    <div
      className={`icon icon${size} icon${className}`}
      onClick={handleClick}
    >
    <iconName />
    </div>
  )
};



/* eslint-disable react/no-typos */
Icon.PropTypes = {
  iconName: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['small','medium', 'large']),
  onClick: PropTypes.func
}

Icon.defaultProps = {
  size: 'medium',
  onClick: () => null
}


/*
AC
Goal of this task is to prepare Icon component, which would be handling the SVG components

In Icon component we need to define an object which would look like:

import {LikeIcon as ReactComponent} from './like.svg'
const icons = {
'like': LikeIcon,
...
}

And based on iconName prop it would render the icon, for example

icons[props.iconName]

The component should accept following props:
iconName: one of the names for icons ('like' for example)
size?: size variant (medium, small etc.) - default to medium 
className?: additional class for custom styling 
onClick?: function which would invoke as user clicks on element 
*/