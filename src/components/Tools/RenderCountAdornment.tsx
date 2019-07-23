import * as React from 'react';
import {
  makeStyles, Theme, createStyles, InputAdornment, Chip
} from "@material-ui/core";
import { useState, useEffect } from 'react';

export interface IRenderCountProps {
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    chip: {
      // color: theme.palette.secondary.main
      background: "#666",
      color: "#EEE",
      maxWidth: "23px",
      maxHeight: "23px",
      fontSize: 12
    }
  }),
);

export default function RenderCountAdornment(props: IRenderCountProps) {
  const classes = useStyles();
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    return () => {
      setCount(count + 1);
    };
  });

  return (
    <InputAdornment position="end"><Chip label={count < 100 ? count : "99+"} className={classes.chip} /></InputAdornment>
  );
}
