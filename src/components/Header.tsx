import * as React from 'react';
import AppBar from 'material-ui/AppBar';
import Icon from 'material-ui/Icon';
import IconButton from 'material-ui/IconButton';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import { withStyles, Theme } from 'material-ui/styles';

const decorate = withStyles((theme: Theme) => ({
  title: {
    flex: 1
  },
  menuButton: {
    marginLeft: -theme.spacing.unit,
    marginRight: theme.spacing.unit
  },
  rightButton: {
    marginLeft: theme.spacing.unit,
    marginRight: -theme.spacing.unit
  }
}));

interface IProps {
  onButtonClick: () => void;
  title: string;
  backButton?: boolean;
  renderRightSection?: () => JSX.Element;
}

export const Header = decorate<IProps>(
  ({ classes, onButtonClick, title, backButton, renderRightSection }) => {
    let rightSection;

    if (renderRightSection) {
      rightSection = (
        <div className={classes.rightButton}>{renderRightSection()}</div>
      );
    }

    return (
      <AppBar position="static">
        <Toolbar>
          <IconButton
            className={classes.menuButton}
            onClick={onButtonClick}
            color="inherit"
          >
            <Icon>{backButton ? 'arrow_back' : 'menu'}</Icon>
          </IconButton>
          <Typography variant="title" color="inherit" className={classes.title}>
            {title}
          </Typography>
          {rightSection}
        </Toolbar>
      </AppBar>
    );
  }
);

Header.defaultProps = {
  onButtonClick() {
    /* do nothing */
  },
  title: '',
  backButton: false
};
