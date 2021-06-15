import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: style */

function SearchTabBar(props) {
  return (
    <Svg
      id="\uB808\uC774\uC5B4_1"
      width={props.size}
      height={props.size}
      viewBox="0 0 18.9 18.9"
      xmlSpace="preserve"
      enableBackground="new 0 0 18.9 18.9"
      {...props}>
      <Path
        className="st0"
        d="M17.9 16.7h-1.3V7.5c-.1-.3-.3-.5-.6-.5h-1.7c-.3 0-.5.2-.5.5v9.2h-1.1v-7c0-.3-.2-.5-.5-.5h-1.7c-.3 0-.5.2-.5.5v7H8.9V14c0-.3-.2-.5-.5-.5H6.7c-.3 0-.5.2-.5.5v2.7H5.1v-5.4c0-.3-.2-.5-.5-.5H2.8c-.3 0-.5.2-.5.5v5.4H1c-.3 0-.5.2-.5.5s.2.5.5.5h16.9c.3 0 .5-.2.5-.5 0-.2-.2-.5-.5-.5z"
        fill={props.fill}
      />
      <Path
        fill={props.fill}
        className="st0"
        d="M15.2 1.1c-.8 0-1.4.6-1.4 1.4 0 .2.1.4.1.6l-2.1 2.1c-.1 0-.3-.1-.4-.1-.8 0-1.4.6-1.4 1.4v.1l-1.5 1c-.3-.1-.6-.2-.9-.2-.4 0-.8.2-1.1.5l-1.4-.5c0-.8-.6-1.4-1.4-1.4s-1.4.6-1.4 1.4.6 1.4 1.4 1.4c.4 0 .8-.2 1.1-.5l1.4.5c0 .8.6 1.4 1.4 1.4.8.1 1.4-.6 1.4-1.4v-.3l1.4-.9c.2.3.6.4.9.4.8 0 1.4-.6 1.4-1.4 0-.3-.1-.5-.2-.7l2-2c.3 0 .5.1.7.1.8 0 1.4-.6 1.4-1.4s-.6-1.5-1.4-1.5z"
      />
    </Svg>
  );
}

export default SearchTabBar;
