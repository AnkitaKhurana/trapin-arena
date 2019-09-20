import React from "react";
import GameCard from "../../Common/Card";
import { withStyles } from "@material-ui/styles";
import PropTypes from "prop-types";
import Games from '../../Games/games';

const styles = theme => ({});
class RightScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isGameOn: false,
      currentGame: ""
    };
    this.handleGamePlay = this.handleGamePlay.bind(this);

  }
  handleGamePlay(gameId){
    this.setState({
      isGameOn: true,
      currentGame: gameId
    });
  }
  render() {
    const { classes } = this.props;

    if (this.state.isGameOn) {
      return <Games gameId={this.state.currentGame} ></Games>;
    } else return <GameCard isGameOn={this.state.isGameOn} handleGamePlay={this.handleGamePlay} />;
  }
}

Screen.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(RightScreen);
