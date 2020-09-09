/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import ReactMarkdown, { MarkdownProps } from 'markdown-to-jsx';
import { withStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

const styles = (theme: Theme) => ({
  listItem: {
    marginTop: theme.spacing(1),
  },
});

type OptionProps = {
  // injected style props
  classes: {
    root: string;
    paper: string;
    button: string;
  };
};

const options = {
  overrides: {
    h1: {
      component: (props: OptionProps) => <Typography gutterBottom variant="h4" {...props} />,
    },
    h2: {
      component: (props: OptionProps) => <Typography gutterBottom variant="h6" {...props} />,
    },
    h3: {
      component: (props: OptionProps) => <Typography gutterBottom variant="subtitle1" {...props} />,
    },
    h4: {
      component: (props: OptionProps) => <Typography gutterBottom variant="caption" paragraph {...props} />,
    },
    p: { component: (props: OptionProps) => <Typography paragraph {...props} /> },
    a: { component: Link },
    li: {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      component: withStyles(styles)(({ classes, ...props }: any) => (
        <li className={classes.listItem}>
          <Typography component="span" {...props} />
        </li>
      )),
    },
  },
};

function Markdown(props: MarkdownProps) {
  return <ReactMarkdown options={options} {...props} />;
}

export default Markdown;
