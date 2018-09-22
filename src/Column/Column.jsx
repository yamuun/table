/* @flow */
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
  updateSortState: ({}) => void,
  columns: [],
};

export default function Column(props: Props) {
  const {
    style,
    className,
    children,
    sortState,
    updateSortState,
    columns,
  } = props;
  const sortable = className.indexOf('-cursor-pointer') !== -1;
  const resizable = className.indexOf('rt-resizable-header') !== -1;
  const column = columns.filter(column => {
    const target = children[0].props.children;
    return column.Header === target;
  });
  const sortKey = column[0].accessor;

  if (sortable && sortState && updateSortState) {
    return (
      <React.Fragment>
        <div
          className={classNames({
            'rt-th': true,
            'rt-resizable-header': resizable,
          })}
          style={style}
        >
          <div className={children[0].props.style}>
            <span
              role="button"
              tabIndex="0"
              className="b__sort"
              onClick={() => {
                const duplicateSortKey = sortState.key === sortKey;

                updateSortState({
                  key: sortKey,
                  order:
                    sortState.order === 'asc' && duplicateSortKey
                      ? 'desc'
                      : 'asc',
                });
              }}
            >
              {children[0].props.children}
              <span
                className={classNames({
                  hidden: !sortable,
                })}
              >
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
            </span>
          </div>
          {resizable ? (
            <div className="rt-resizer" {...children[1].props} />
          ) : null}
        </div>
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <div
          className={classNames({
            'rt-th': true,
            'rt-resizable-header': resizable,
          })}
          style={style}
        >
          <div className={children[0].props.style}>
            {children[0].props.children}
          </div>
          {resizable ? (
            <div className="rt-resizer" {...children[1].props} />
          ) : null}
        </div>
      </React.Fragment>
    );
  }
}