import React from "react";
import LeftPanel from "./LeftPanel/leftPanel";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/styles";
import RightPanel from "./RightPanel/rightPanel";
const drawerWidth = 240;

const styles = theme => ({
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    minHeight: "64px"
  },
  content: {
    flexGrow: 1,
    paddingLeft: drawerWidth + "px"
  }
});
class Screen extends React.Component {
  constructor(props) {
    super(props);
    this.handler = this.handler.bind(this);
    this.state = { category: 0 };
  }
  handler(cat) {
    this.setState({
      category: cat
    });
  }
  render() {
    const { classes } = this.props;

    return (
      <div>
        <LeftPanel
          selected={this.state.category}
          handler={this.handler}
        ></LeftPanel>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <RightPanel category={this.state.category}></RightPanel>
        </main>
      </div>
    );
  }
}

Screen.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Screen);
