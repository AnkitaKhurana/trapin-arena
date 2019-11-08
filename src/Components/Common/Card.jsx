import React from "react";
import { withStyles } from "@material-ui/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";

const styles = theme => ({
  card: {
    maxWidth: 345
  },
  media: {
    height: 140
  }
});

class GameCard extends React.Component {
  constructor(props) {
    super(props);
  }

  openGame(event) {
    this.props.handleGamePlay(event.currentTarget.id);
  }

  render() {
    const { classes } = this.props;

    return (
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image="https://cdn.pixabay.com/photo/2014/11/21/17/17/country-house-540796_1280.jpg"
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Some Game Name
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Game description Game description Game description Game
              description
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            id="some-id"
            size="small"
            color="primary"
            onClick={this.openGame.bind(this)}
          >
            Play
          </Button>
          <Button size="small" color="primary">
            Share
          </Button>
        </CardActions>
      </Card>
    );
  }
}

GameCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(GameCard);
