// Copyright (c) 2015-present Tam Dev, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import React from 'react';
import type {ChangeEvent, FormEvent, CSSProperties} from 'react';

type Props = {
    id?: string;
    className?: string;
    disabled?: boolean;
    value?: string;
    defaultValue?: string;
    onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
    onHeightChange?: (height: number, maxHeight: number) => void;
    onWidthChange?: (width: number) => void;
    onInput?: (e: FormEvent<HTMLTextAreaElement>) => void;
    placeholder?: string;
    forwardedRef?: ((instance: HTMLTextAreaElement | null) => void) | React.MutableRefObject<HTMLTextAreaElement | null> | null;
}

export class AutosizeTextarea extends React.PureComponent<Props> {
    private height: number;

    private textarea?: HTMLTextAreaElement;
    private referenceRef: React.RefObject<HTMLDivElement>;

    constructor(props: Props) {
        super(props);

        this.height = 0;

        this.referenceRef = React.createRef();
    }

    componentDidMount() {
        this.recalculateHeight();
        this.recalculateWidth();
    }

    componentDidUpdate() {
        this.recalculateHeight();
        this.recalculateWidth();
    }

    private recalculateHeight = () => {
        if (!this.referenceRef.current || !this.textarea) {
            return;
        }

        const height = (this.referenceRef.current).scrollHeight;
        const textarea = this.textarea;

        if (height > 0 && height !== this.height) {
            const style = getComputedStyle(textarea);

            // Directly change the height to avoid circular rerenders
            textarea.style.height = `${height}px`;

            this.height = height;

            this.props.onHeightChange?.(height, parseInt(style.maxHeight || '0', 10));
        }
    };

    private recalculateWidth = () => {
        if (!this.referenceRef) {
            return;
        }

        const width = this.referenceRef.current?.offsetWidth || -1;
        if (width >= 0) {
            window.requestAnimationFrame(() => {
                this.props.onWidthChange?.(width);
            });
        }
    };

    private setTextareaRef = (textarea: HTMLTextAreaElement) => {
        if (this.props.forwardedRef) {
            if (typeof this.props.forwardedRef === 'function') {
                this.props.forwardedRef(textarea);
            } else {
                this.props.forwardedRef.current = textarea;
            }
        }

        this.textarea = textarea;
    };

    render() {
        const props = {...this.props};

        Reflect.deleteProperty(props, 'onHeightChange');
        Reflect.deleteProperty(props, 'providers');
        Reflect.deleteProperty(props, 'channelId');
        Reflect.deleteProperty(props, 'forwardedRef');

        const {
            value,
            defaultValue,
            placeholder,
            disabled,
            onInput,

            // TODO: The provided `id` is sometimes hard-coded and used to interface with the
            // component, e.g. `post_textbox`, so it can't be changed. This would ideally be
            // abstracted to avoid passing in an `id` prop at all, but we intentionally maintain
            // the old behaviour to address ABC-213.
            id = 'autosize_textarea',
            ...otherProps
        } = props;

        const heightProps = {
            rows: 0,
            height: 0,
        };

        Reflect.deleteProperty(otherProps, 'onWidthChange');

        if (this.height <= 0) {
            // Set an initial number of rows so that the textarea doesn't appear too large when its first rendered
            heightProps.rows = 1;
        } else {
            heightProps.height = this.height;
        }

        let textareaPlaceholder = null;
        const placeholderAriaLabel = placeholder ? placeholder.toLowerCase() : '';
        if (!this.props.value && !this.props.defaultValue) {
            textareaPlaceholder = (
                <div
                    {...otherProps as any}
                    id={`${id}_placeholder`}
                    data-testid={`${id}_placeholder`}
                    style={styles.placeholder}
                >
                    {placeholder}
                </div>
            );
        }

        let referenceValue = value || defaultValue;
        if (referenceValue?.endsWith('\n')) {
            // In a div, the browser doesn't always count characters at the end of a line when measuring the dimensions
            // of text. In the spec, they refer to those characters as "hanging". No matter what value we set for the
            // `white-space` of a div, a single newline at the end of the div will always hang.
            //
            // The textarea doesn't have that behaviour, so we need to trick the reference div into measuring that
            // newline, and it seems like the best way to do that is by adding a second newline because only the final
            // one hangs.
            referenceValue += '\n';
        }

        return (
            <div>
                {textareaPlaceholder}
                <textarea
                    ref={this.setTextareaRef}
                    data-testid={id}
                    id={id}
                    {...heightProps}
                    {...otherProps}
                    role='textbox'
                    aria-label={placeholderAriaLabel}
                    dir='auto'
                    disabled={disabled}
                    onChange={this.props.onChange}
                    onInput={onInput}
                    value={value}
                    defaultValue={defaultValue}
                />
                <div style={styles.container}>
                    <div
                        ref={this.referenceRef}
                        id={id + '-reference'}
                        className={otherProps.className}
                        style={styles.reference}
                        dir='auto'
                        disabled={true}
                        aria-hidden={true}
                    >
                        {referenceValue}
                    </div>
                </div>
            </div>
        );
    }
}

const styles: { [Key: string]: CSSProperties} = {
    container: {height: 0, overflow: 'hidden'},
    reference: {display: 'inline-block', height: 'auto', width: 'auto'},
    placeholder: {overflow: 'hidden', textOverflow: 'ellipsis', opacity: 0.5, pointerEvents: 'none', position: 'absolute', whiteSpace: 'nowrap', background: 'none', borderColor: 'transparent'},
};

const forwarded = React.forwardRef<HTMLTextAreaElement>((props, ref) => (
    <AutosizeTextarea
        forwardedRef={ref}
        {...props}
    />
));

forwarded.displayName = 'AutosizeTextarea';

export default forwarded;
