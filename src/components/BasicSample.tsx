// https://www.youtube.com/watch?v=fxEW4jgoX-4&t=1927s
// https://www.youtube.com/watch?v=WoSzy-4mviQ&t=60s
// https://github.com/final-form/react-final-form
// https://codesandbox.io/s/ww40y2m595

import * as React from "react";
import { Form, Field, FieldRenderProps } from "react-final-form";
// import { useFormState, useForm } from "react-final-form";

export interface IValues {
    firstName: string;
    lastName: string;
    phone: string;
}

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

const showResult = async (values: IValues) => {
    await sleep(500);
    alert(JSON.stringify(values, undefined, 2));
}
export interface IBasicSampleProps { }
export interface IFinalState<T> extends FieldRenderProps<T, HTMLElement> {
    placeholder: string;
}


const required = (value: string) => value ? undefined : "Required";

export default function BasicSample(props: IBasicSampleProps) {
    return (
        <Form onSubmit={showResult}>
            {({ handleSubmit, submitting, values }) => (
                < form onSubmit={handleSubmit}>
                    <label>First Name</label>
                    <Field name="firstName" component="input" placeHolder="First Name" validate={required} />
                    <br />
                    <Field name="firstName" component="input" placeHolder="First Name">
                        {(fieldState: IFinalState<string>) => fieldState.meta.invalid && fieldState.meta.touched && <span style={{ color: "red" }}>{fieldState.meta.error}</span>}
                    </Field>

                    <Field name="firstName" component="input" placeHolder="First Name">
                        {(fieldState: IFinalState<string>) => <pre>{JSON.stringify(fieldState, undefined, 2)}</pre>}
                    </Field>
                    < br />


                    <Field name="lastName" placeholder="Last Name" validate={required}>
                        {({ meta, input, placeholder }: IFinalState<string>) => (
                            <>
                                <label>{input.name}</label>
                                <input {...input} placeholder={placeholder} />
                                {meta.invalid && meta.touched && <span style={{ color: "red" }}>{meta.error}</span>}
                            </>)
                        }
                    </Field>
                    <br />
                    <Field name="phone" placeholder="Phone" validate={required}>
                        {(fieldState: IFinalState<string>) => {
                            const { meta, input, placeholder } = fieldState;
                            return (
                                <>
                                    <label>{input.name}</label>
                                    <input {...input} placeholder={placeholder} />
                                    {meta.invalid && meta.touched && <span style={{ color: "red" }}>{meta.error}</span>}
                                </>);
                        }}
                    </Field>
                    {/* <br />
                    <Field name="phone" component="input" placeHolder="First Name">
                        {({ input }: IFinalState<string>) => <pre>{JSON.stringify(input, undefined, 2)}</pre>}
                    </Field>
                    <Field name="phone" component="input" placeHolder="First Name">
                        {({ meta }: IFinalState<string>) => <pre>{JSON.stringify(meta, undefined, 2)}</pre>}
                    </Field> */}
                    <button type="submit" disabled={submitting}>Submit</button>
                    <br />
                    <pre style={{ textAlign: "left" }}>{JSON.stringify(values, undefined, 2)}</pre>
                </form>
            )}
        </Form >
    )
}
