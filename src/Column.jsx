// @flow
import React from 'react';
import {Icon} from 'semantic-ui-react';
import classNames from 'classnames';

type Props = {
  style: {},
  className: string,
  children: [
    {
      props: {
        style: {},
        children: string,
      },
    },
    any,
  ],
  sortState: {
    key: string,
    order: string,
  },
  updateSort: ({}) => void,
  columns: [],
};

export default function Column(props: Props) {
  const {style, className, children, sortState, updateSort, columns} = props;
  const sortable = className.indexOf('-cursor-pointer') !== -1;

  const column = columns.filter(column => {
    const target = children[0].props.children;
    return column.Header === target;
  });

  const sortKey = column[0].accessor;

  if (children[1] && sortState) {
    return (
      <React.Fragment>
        <div
          className={`rt-th ${className}`}
          role="button"
          tabIndex={0}
          style={style}
          onClick={() => {
            updateSort({
              key: sortKey,
              order: sortState.order === 'asc' ? 'desc' : 'asc',
            });
          }}>
          <div className={children[0].props.style}>
            {children[0].props.children}
            <span className={classNames({b__sort: true, hidden: !sortable})}>
              <Icon
                name="triangle up"
                size="small"
                className={classNames({
                  sortKey: sortState.key === sortKey,
                  asc: 'asc' === sortState.order,
                })}
              />
              <Icon
                name="triangle down"
                size="small"
                className={classNames({
                  sortKey: sortState.key === sortKey,
                  desc: 'desc' === sortState.order,
                })}
              />
            </span>
          </div>
          <div className="rt-resizer" {...children[1].props} />
        </div>
      </React.Fragment>
    );
  } else if (children[1]) {
    return (
      <React.Fragment>
        <div className={`rt-th ${className}`} style={style}>
          <div className={children[0].props.style}>
            {children[0].props.children}
          </div>
          <div className="rt-resizer" {...children[1].props} />
        </div>
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <div className={`rt-th ${className}`} style={style}>
          <div className={children[0].props.style}>
            {children[0].props.children}
          </div>
        </div>
      </React.Fragment>
    );
  }
}
