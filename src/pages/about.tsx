/*!
 * about.tsx
 *
 * CopyRight (c) 2021-2022 Watasuke
 * Email  : <watasuke102@gmail.com>
 * Twitter: @Watasuke102
 * This software is released under the MIT SUSHI-WARE License.
 */

import React from 'react';
import {Link} from 'gatsby';
import Head from '@/common/Head';
import Layout from '@/common/Layout';
import Background from '@/common/Background';

export default () => {
  return (
    <Layout>
      <Head title={'このサイトについて'} desc={'このサイトについての説明'} url={'/about'} />
      <Background />
      <h1>このサイトについて</h1>
      <p>わたすけのへやです</p>
      <p>
        <Link to='/blog'>ブログ</Link>や<Link to='/profile'>プロフィール</Link>
        が置いてあります
      </p>
    </Layout>
  );
};
