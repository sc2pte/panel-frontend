import React from 'react';
import classnames from 'classnames/bind';
import styles from './Flag.module.scss';
import { ServerLocale } from 'types';

interface FlagProps {
  code: ServerLocale;
}

const cx = classnames.bind(styles);

const Flag = ({ code }: FlagProps) => (
  <div className={cx('Flag', code)}></div>
);

export default Flag;
