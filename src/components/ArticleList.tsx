/*!
 * ArticleList.tsx
 *
 * CopyRight (c) 2021 Watasuke
 * Email  : <watasuke102@gmail.com>
 * Twitter: @Watasuke102
 * This software is released under the MIT SUSHI-WARE License.
 */

import React from 'react';
import { navigate } from 'gatsby';
import RemoveMD from 'remove-markdown';
import Thumbnail from './Thumbnail'
import TagContainer from './TagContainer'
import Article from '../types/Article';
import '../styles/ArticleList.scss';

interface Props {
  list: {
    node: Article
  }[],
  page: number,
  tag?: string
}

export default function ArticleList(props: Props) {

  const article_count = 10;
  const page_number = props.page;
  const begin = page_number * article_count;
  const last = page_number * article_count + article_count;
  // 記事からarticle_count個取り出す
  let article_cards: object[] = [];
  props.list
    .slice(begin, last)
    .forEach(({ node }) => {
      article_cards.push(
        <div className='ArticleList-card' onClick={() => navigate('/blog/article/' + node.slug)}>
          <Thumbnail url={node.thumbnail} />
          <div className='ArticleList-text'>
            <h2>{node.title}</h2>
            <TagContainer tags={node.tags} />
            <p>
              {
                // 140字に制限して内容を表示、超過分は...で
                RemoveMD(node.body.slice(0, 140) + ((node.body.length > 140) ? ' ...' : ''))
              }
            </p>
          </div>
        </div>
      )
    });
  return (
    <div className='ArticleList-container'>
      {article_cards}
    </div>
  );
}
