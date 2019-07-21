// https://www.youtube.com/watch?v=fxEW4jgoX-4&t=1927s
// https://www.youtube.com/watch?v=WoSzy-4mviQ&t=60s
// https://github.com/final-form/react-final-form
// https://codesandbox.io/s/ww40y2m595

// mask: https://github.com/text-mask/text-mask/tree/master/react#readme

import * as React from "react";
import { Form, FieldRenderProps, FormSpy } from "react-final-form";
import {
    Button
} from "@material-ui/core";
import TestField from './Encapsulation/TextField'
import createDecorator from 'final-form-focus' // https://github.com/final-form/final-form-focus and https://www.detroitlabs.com/blog/2018/02/28/adding-custom-type-definitions-to-a-third-party-library/

export interface IValues {
    firstName: string;
    surName: string;
    phone: string;
    a: string;
    b: string;
    c: string;
    d: string;
    e: string;
    f: string;
    g: string;
}

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

const showResult = async (values: IValues) => {
    await sleep(500);
    alert(JSON.stringify(values, undefined, 2));
}
export interface IFormErrorFocusProps { }
export interface IFinalState<T> extends FieldRenderProps<T, HTMLElement> {
    placeholder: string;
}

const required = (value: string) => value ? undefined : "Required";

const focusOnError = createDecorator();

export default function FormErrorFocus() {

    return (
        <Form
            onSubmit={showResult}
            decorators={[focusOnError]}
            subscription={{ submitting: true }}>
            {({ handleSubmit, submitting }) => (
                <>
                    <h4>Error Focus</h4>
                    <form onSubmit={handleSubmit}>
                        <TestField name="firstName" placeholder="First Name" validate={required} />
                        <br />
                        <TestField name="lastName" placeholder="Last Name" validate={required} />
                        <br />
                        <TestField name="phone" placeholder="Phone" validate={required} />
                        <br />
                        <TestField name="a" placeholder="A" validate={required} />
                        <br />
                        <TestField name="b" placeholder="B" validate={required} />
                        <br />
                        <TestField name="c" placeholder="C" validate={required} />
                        <br />
                        <TestField name="d" placeholder="D" validate={required} />
                        <br />
                        <TestField name="e" placeholder="E" validate={required} />
                        <br />
                        <TestField name="f" placeholder="F" validate={required} />
                        <br />
                        <TestField name="g" placeholder="G" validate={required} />
                        <br />
                        <Button variant="outlined" type="submit" disabled={submitting}>Submit</Button>
                        <br />
                        <h4>Values</h4>
                        <FormSpy subscription={{ values: true }}>
                            {({ values }) =>
                                <pre style={{ textAlign: "left" }}>{JSON.stringify(values, undefined, 2)}</pre>
                            }
                        </FormSpy>
                    </form>
                </>
            )}
        </Form >
    )
}
