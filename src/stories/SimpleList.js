import { React } from 'react';

export function SimpleList( {items}) {
  return (
    <ul>
      {
        items.map((item, index) => (
          <li key={index.toString}>
            { item }
          </li>
        ))
      }
    </ul>
  );
}