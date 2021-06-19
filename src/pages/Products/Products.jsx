import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import data from '../../data.json';
import './Products.css';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 325,
  },
});

function Products() {
  const classes = useStyles();
  const products = data.products;
  const [filter, setFilter] = useState('All');

  const filterProduct = async (e) => {
    setFilter(e);
  };

  return(
    <>
      <div className='products_container'>
        <span style={{width:'100%'}}>   
          <div className='filter_container'>
            <strong>Filter:</strong>
            <select onChange={(event) => filterProduct(event.target.value)}>
              <option value="All">All</option>
              <option value="Chair">Chair</option>
              <option value="Lamp">Lamp</option>
            </select>
          </div>    
        </span>
        {products.filter(product => filter === 'All' || product.category === filter)
          .map((x, i)=> {
            return(
              <div className='product_item' key={i}>
                <Card className={classes.root}>
                  <CardActionArea>
                    <CardMedia
                      className={classes.media}
                      image={x.image}
                      title="Product"
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
                      {x.price} CAD
                    </Typography>
                  </CardActions>
                </Card>
              </div>
            );
          })}
      </div>
    </>
  );
}

export default Products;