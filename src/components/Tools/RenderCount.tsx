import * as React from 'react';
import {
  Badge, makeStyles, Theme, createStyles
} from "@material-ui/core";
import { useState, useEffect } from 'react';

export interface IRenderCountProps {
  children: React.ReactNode
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    badge: {
      marginLeft: theme.spacing(1),
      // marginRight: theme.spacing(1),
    }
  }),
);

export default function RenderCount(props: IRenderCountProps) {
  const classes = useStyles();
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    return () => {
      setCount(count + 1);
    };
  });

  return (
    <Badge color="secondary" badgeContent={count} className={classes.badge}>
      {props.children}
    </Badge>
  );
}
