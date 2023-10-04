// Copyright (c) 2015-present Tam Dev, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import React, {PureComponent} from 'react';
import type {MouseEvent} from 'react';

import Setting from './setting';
import type {Props as SettingsProps} from './setting';

type Props = SettingsProps & {
    id: string;
    label: React.ReactNode;
    helptext?: React.ReactNode;
    removeButtonText: React.ReactNode;
    removingText?: React.ReactNode;
    fileName: string;
    onSubmit: (arg0: string, arg1: () => void) => void;
    disabled?: boolean;
}

type State = {
    removing: boolean;
}

export default class RemoveFileSetting extends PureComponent<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            removing: false,
        };
    }

    handleRemove = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        this.setState({removing: true});
        this.props.onSubmit(this.props.id, () => {
            this.setState({removing: false});
        });
    };

    render() {
        return (
            <Setting
                label={this.props.label}
                helpText={this.props.helpText}
                inputId={this.props.id}
            >
                <div>
                    <div className='help-text remove-filename'>
                        {this.props.fileName}
                    </div>
                    <button
                        type='button'
                        className='btn btn-danger'
                        onClick={this.handleRemove}
                        disabled={this.props.disabled}
                    >
                        {this.state.removing && (
                            <>
                                <span className='glyphicon glyphicon-refresh glyphicon-refresh-animate'/>
                                {this.props.removingText}
                            </>)}
                        {!this.state.removing && this.props.removeButtonText}
                    </button>
                </div>
            </Setting>
        );
    }
}
