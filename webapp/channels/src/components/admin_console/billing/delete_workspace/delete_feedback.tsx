// Copyright (c) 2015-present Tam Dev, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import React from 'react';
import {injectIntl} from 'react-intl';
import type {WrappedComponentProps} from 'react-intl';

import type {Feedback} from '@mattermost/types/cloud';

import FeedbackModal from 'components/feedback_modal/feedback';
import type {FeedbackOption} from 'components/feedback_modal/feedback';

type Props = {
    onSubmit: (deleteFeedback: Feedback) => void;
} &WrappedComponentProps

const DeleteFeedbackModal = (props: Props) => {
    const deleteFeedbackModalTitle = props.intl.formatMessage({
        id: 'feedback.deleteWorkspace.feedbackTitle',
        defaultMessage: 'Please share your reason for deleting',
    });

    const placeHolder = props.intl.formatMessage({
        id: 'feedback.deleteWorkspace.feedbackPlaceholder',
        defaultMessage: 'Please tell us why you are deleting',
    });

    const deleteButtonText = props.intl.formatMessage({
        id: 'feedback.deleteWorkspace.submitText',
        defaultMessage: 'Delete Workspace',
    });

    const deleteFeedbackOptions: FeedbackOption[] = [
        {
            translatedMessage: props.intl.formatMessage({
                id: 'feedback.deleteWorkspace.feedbackNoValue',
                defaultMessage: 'No longer found value',
            }),
            submissionValue: 'No longer found value',
        },
        {
            translatedMessage: props.intl.formatMessage({
                id: 'feedback.deleteWorkspace.feedbackMoving',
                defaultMessage: 'Moving to a different solution',
            }),
            submissionValue: 'Moving to a different solution',
        },
        {
            translatedMessage: props.intl.formatMessage({
                id: 'feedback.deleteWorkspace.feedbackMistake',
                defaultMessage: 'Created a workspace by mistake',
            }),
            submissionValue: 'Created a workspace by mistake',
        },
        {
            translatedMessage: props.intl.formatMessage({
                id: 'feedback.deleteWorkspace.feedbackHosting',
                defaultMessage: 'Moving to hosting my own Tam Dev instance (self-hosted)',
            }),
            submissionValue: 'Moving to hosting my own Tam Dev instance (self-hosted)',
        },
    ];

    return (
        <FeedbackModal
            title={deleteFeedbackModalTitle}
            feedbackOptions={deleteFeedbackOptions}
            freeformTextPlaceholder={placeHolder}
            submitText={deleteButtonText}
            onSubmit={props.onSubmit}
        />
    );
};

export default injectIntl(DeleteFeedbackModal);
