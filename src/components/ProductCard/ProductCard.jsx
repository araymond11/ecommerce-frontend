import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import './ProductCard.scss';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 325,
  },
});

export const ProductCard = (props) => {
  const classes = useStyles();
  return(
    <Card className={classes.root}>
      <CardActionArea>
        <Link to={{pathname: `/productDetail/${props.id}`}} className='card__text--textDecoration card__text--black'>
          <CardMedia
            className={classes.media}
            image={props.image}
            title="Product"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {props.name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {props.description}
            </Typography>
          </CardContent>
        </Link>
      </CardActionArea>
      <CardActions>
        <Typography variant="body2" color="textSecondary" component="p">
          {props.price} CAD
        </Typography>
      </CardActions>
    </Card>
  );
};