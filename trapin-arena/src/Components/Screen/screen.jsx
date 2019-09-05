import React from "react";
import LeftPanel from "./LeftPanel/leftPanel";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/styles";
const drawerWidth = 240;

const styles = theme => ({
   toolbar: {display: 'flex',
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    minHeight: '64px'
},
  content: {
    flexGrow: 1,
    paddingLeft: drawerWidth+"px"
  }
});
class Screen extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div>
        <LeftPanel></LeftPanel>
        <main className={classes.content}>
          <div className={classes.toolbar} />
        

        </main>
      </div>
    );
  }
}

Screen.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Screen);
