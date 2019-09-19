import React from "react";
import { withStyles } from "@material-ui/styles";
import PropTypes from "prop-types";

const styles = theme => ({
});
class RightScreen extends React.Component {
  render() {
    const { classes } = this.props;

    return <div>RIGHT</div>;
  }
}

Screen.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(RightScreen);
