import * as React from 'react';
import { Field, FieldRenderProps, FieldProps } from 'react-final-form';
import { TextField, makeStyles, createStyles, Theme } from '@material-ui/core';
import clsx from 'clsx';
// import { FieldValidator } from 'final-form';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        textField: {
            marginLeft: theme.spacing(1),
            // marginRight: theme.spacing(1),
        },
        active: {
            background: "#EED" //theme.palette.secondary.main
        }
    }),
);

export interface ITestFieldProps extends FieldProps<string, HTMLElement> {
    // name: string;
    // placeholder: string;
    // validate?: FieldValidator<string>;
}

export interface IFinalState extends FieldRenderProps<string, HTMLElement> {
    placeholder: string;
}

export default function TestField(props: ITestFieldProps) {
    const classes = useStyles();

    return (
        // <Field name={props.name} placeholder={props.placeholder} validate={s => props.validate(s) || required(s)}>
        <Field {...props}>
            {({ meta, input, placeholder }: IFinalState) => (
                <TextField {...input} label={placeholder}
                    className={meta.active ? clsx(classes.textField, classes.active) : classes.textField}
                    error={meta.invalid && meta.touched && meta.error}
                    helperText={meta.invalid && meta.touched && meta.error}
                    variant="outlined" margin="dense" />)
            }
        </Field>
    );
}
