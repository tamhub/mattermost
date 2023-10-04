// Copyright (c) 2015-present Tam Dev, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

// Copyright (c) 2015-present Tam Dev, Inc. All Rights Reserved.
// See LICENSE.txt for license information.
import React from 'react';
import {FormattedMessage} from 'react-intl';
import {useDispatch, useSelector} from 'react-redux';

import {isCurrentLicenseCloud} from 'mattermost-redux/selectors/entities/cloud';
import type {DispatchFunc} from 'mattermost-redux/types/actions';

import {retryFailedCloudFetches} from 'actions/cloud';
import {retryFailedHostedCustomerFetches} from 'actions/hosted_customer';

import './cloud_fetch_error.scss';

export default function CloudFetchError() {
    const dispatch = useDispatch<DispatchFunc>();
    const isCloud = useSelector(isCurrentLicenseCloud);
    return (<div className='CloudFetchError '>
        <div className='CloudFetchError__header '>
            <FormattedMessage
                id='cloud.fetch_error'
                defaultMessage='Error fetching billing data. Please try again later.'
            />
        </div>
        <button
            className='btn btn-primary'
            onClick={() => {
                dispatch(isCloud ? retryFailedCloudFetches() : retryFailedHostedCustomerFetches());
            }}
        >
            <FormattedMessage
                id='cloud.fetch_error.retry'
                defaultMessage='Retry'
            />
        </button>
    </div>);
}
