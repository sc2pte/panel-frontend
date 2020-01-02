import React from 'react';
import classnames from 'classnames/bind';
import useTwitchAuth from 'react-twitch-ext-onauthorized';
import useConfigData from 'src/hooks/useConfigData/useConfigData';
import ConfigConnectionError from 'src/components/ConfigConnectionError/ConfigConnectionError';
import FormikWrapper from 'src/components/FormikWrapper/FormikWrapper';
import Unauthorized from 'src/components/Unauthorized/Unauthorized';
import ConfigForm from 'src/components/ConfigForm/ConfigForm';
import addValidator from 'src/helpers/addValidator/addValidator';
import addValidationSchema from 'src/helpers/addValidationSchema/addValidationSchema';
import submitConfig from 'src/helpers/submitConfig/submitConfig';
import styles from './Config.module.scss';

const cx = classnames.bind(styles);

const Config = () => {
  const { authorized, channelId, token } = useTwitchAuth();
  const { data, error } = useConfigData(channelId, token);
  const configSubmitFunction = submitConfig(channelId, token);
  const validator = addValidator();
  const validationSchema = addValidationSchema(validator);

  if (!authorized) return <Unauthorized />;

  return error
    ? (
      <div className={cx('Config')}>
        <ConfigConnectionError />
      </div>
    )
    : (
      <div className={cx('Config')}>
        <div className={cx('bg')} />
        <div className={cx('cols')}>
          <div className={cx('formCol')}>
            <FormikWrapper
              initialValues={data}
              validationSchema={validationSchema}
              onSubmit={configSubmitFunction}
            >
              {(props) => (
                <ConfigForm
                  {...props}
                  status={props.status}
                  profiles={props.values.profiles}
                />
              )}
            </FormikWrapper>
          </div>
          <div className={cx('infoCol')}>
            Info
          </div>
        </div>
      </div>
    );
};

export default Config;
