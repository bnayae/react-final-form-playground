// https://github.com/final-form/react-final-form
// https://codesandbox.io/s/ww40y2m595

import * as React from "react";
import { Form, Field } from "react-final-form";
// import { useFormState, useForm } from "react-final-form";

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

export interface IForm1Props { }

export default function Form1(props: IForm1Props) {
    // const { submitting } = useFormState();
    // const {  } = useForm();
    const onSubmit = async (values: any) => {
        await sleep(300);
        alert(JSON.stringify(values));
    }

    return (
        <Form
            onSubmit={onSubmit}
            //validate={validate}
            initialValues={{ name: '', employed: false }}
            render={({ handleSubmit, form, submitting, pristine, invalid, values }) => (
                <form onSubmit={onSubmit}>
                    <div>
                        <label>First Name</label>
                        <Field
                            name="name"
                            component="input"
                            placeholder="First Name"
                        />
                    </div>
                    <div>
                        <label>Employed</label>
                        <Field name="employed" component="input" type="checkbox" />
                    </div>

                    <div>
                        <label>Favourite Color</label>
                        <Field name="favouriteColor" component="select">
                            <option />
                            <option value="#ff0000">❤️ Red</option>
                            <option value="#00ff00">💚 Green</option>
                            <option value="#0000ff">💙 Blue</option>
                        </Field>
                    </div>
                    <div>
                        <label>Toppings</label>
                        <Field name="toppings" component="select" multiple>
                            <option value="chicken">🐓 Chicken</option>
                            <option value="ham">🐷 Ham</option>
                            <option value="mushrooms">🍄 Mushrooms</option>
                            <option value="cheese">🧀 Cheese</option>
                            <option value="tuna">🐟 Tuna</option>
                            <option value="pineapple">🍍 Pineapple</option>
                        </Field>
                    </div>

                    <div className="buttons">
                        <button type="submit" disabled={submitting || pristine}>
                            Submit
                        </button>
                        <button
                            type="button"
                            onClick={form.reset}
                            disabled={submitting || pristine}
                        >
                            Reset
                    </button>
                    </div>
                    <pre>{JSON.stringify(values)}</pre>
                </form>
            )}
        />
    );
}
