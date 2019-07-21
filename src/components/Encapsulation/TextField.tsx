import * as React from 'react';
import { Field, FieldRenderProps, FieldProps } from 'react-final-form';
import { TextField, makeStyles, createStyles, Theme } from '@material-ui/core';
import clsx from 'clsx';

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
    name: string;
    placeholder: string;
    validation?: (value: string) => string | undefined;
}

export interface IFinalState extends FieldRenderProps<string, HTMLElement> {
    placeholder: string;
}

export default function TestField(props: ITestFieldProps) {
    const classes = useStyles();

    return (
        <Field name={props.name} placeholder={props.placeholder} validate={props.validation}>
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
