/* @flow */
import React from 'react';
import {Icon} from 'semantic-ui-react';
import classNames from 'classnames';

export default function Column(props: ColumnProps) {
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
            '-cursor-pointer': true,
            'rt-resizable-header': resizable,
          })}
          role="button"
          tabIndex={0}
          style={style}
          onClick={() => {
            updateSortState({
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
          style={style}>
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
