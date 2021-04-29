/*!
 * Layout.tsx
 *
 * CopyRight (c) 2021 Watasuke
 * Email  : <watasuke102@gmail.com>
 * Twitter: @Watasuke102
 * This software is released under the MIT SUSHI-WARE License.
 */

import React from 'react';
import Header from '../components/Header';

interface Props { children: object }

export default ({ children }: Props) => {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
}
