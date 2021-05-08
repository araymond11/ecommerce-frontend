import '../styles/Products.css'
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import data from '../data.json'

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
  });

function Products() {
    const classes = useStyles();
    const products = data.products;

    return(
      <div className='products_container'>
          {products.map(x=> {
            return(
              <div className='product_item' key={x}>
                <Card className={classes.root}>
                  <CardActionArea>
                    <CardMedia
                      className={classes.media}
                      image="/static/images/cards/contemplative-reptile.jpg"
                      title="Contemplative Reptile"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        {x.name}
                      </Typography>
                      <Typography variant="body2" color="textSecondary" component="p">
                        {x.description}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {x.price}
                    </Typography>
                  </CardActions>
                </Card>
              </div>
            )
          })}
      </div>
    );
}

export default Products