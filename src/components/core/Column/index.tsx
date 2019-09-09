import React from 'react';
import {Icon} from 'semantic-ui-react';
import classNames from 'classnames';

import {ColumnProps} from './types';

const Column: React.FC<ColumnProps> = props => {
  const sortable = props.className.indexOf('-cursor-pointer') !== -1;
  const resizable = props.className.indexOf('rt-resizable-header') !== -1;
  const column = props.columns.filter(column => {
    const target = props.children[0].props.children;
    return column.Header === target;
  });
  const sortKey = column[0].accessor;

  if (sortable && props.sortState && props.updateSortState) {
    return (
      <>
        <div
          className={classNames('rt-th', {
            'rt-resizable-header': resizable,
          })}
          style={props.style}
        >
          <div>
            <span
              role="button"
              tabIndex={0}
              className="b__sort"
              onClick={() => {
                const duplicateSortKey = props.sortState.key === sortKey;

                props.updateSortState({
                  key: sortKey,
                  order:
                    props.sortState.order === 'asc' && duplicateSortKey
                      ? 'desc'
                      : 'asc',
                });
              }}
            >
              {props.children[0].props.children}
              <span
                className={classNames({
                  hidden: !sortable,
                })}
              >
                <Icon
                  name="triangle up"
                  size="small"
                  className={classNames({
                    sortKey: props.sortState.key === sortKey,
                    asc: 'asc' === props.sortState.order,
                  })}
                />
                <Icon
                  name="triangle down"
                  size="small"
                  className={classNames({
                    sortKey: props.sortState.key === sortKey,
                    desc: 'desc' === props.sortState.order,
                  })}
                />
              </span>
            </span>
          </div>
          {resizable ? (
            <div className="rt-resizer" {...props.children[1].props} />
          ) : null}
        </div>
      </>
    );
  } else {
    return (
      <>
        <div
          className={classNames('rt-th', {
            'rt-resizable-header': resizable,
          })}
          style={props.style}
        >
          <div>{props.children[0].props.children}</div>
          {resizable ? (
            <div className="rt-resizer" {...props.children[1].props} />
          ) : null}
        </div>
      </>
    );
  }
};

export default Column;
