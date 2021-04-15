/*!
 * MenuCard.tsx
 *
 * CopyRight (c) 2021 Watasuke
 * Email  : <watasuke102@gmail.com>
 * Twitter: @Watasuke102
 * This software is released under the MIT SUSHI-WARE License.
 */

import React from 'react';
import '../styles/MenuCard.scss';

interface Props {
  icon: string,
  text: string,
  url: string
}

export default function MenuCard(props: Props) {
  return (
    <div className='MenuCard-container' onClick={() => null}>
      <span className='material-icons'>{props.icon}</span>
      <br />
      <p>{props.text}</p>
    </div>
  );
}
