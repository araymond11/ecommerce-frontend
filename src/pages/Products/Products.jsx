import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import './Products.scss';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 325,
  },
});


function Products(props) {
  const classes = useStyles();
  const [filter, setFilter] = useState('All');
  const { products } = props;
  const productFilteredByCategory = products.filter(products => filter === 'All' || products.category === filter);

  const filterProduct = async (e) => {
    setFilter(await e);
  };


  return(
    <>
      <div className='card__container'>
        <span className='filter__row'>   
          <div className='filter__container'>
            <strong>Filter:</strong>
            <select onChange={(event) => filterProduct(event.target.value)}>
              <option value="All">All</option>
              <option value="Chair">Chair</option>
              <option value="Lamp">Lamp</option>
            </select>
          </div>    
        </span>
        {productFilteredByCategory
          .map((x, i)=> {
            return(
              <div className='card__item' key={i}>
                <Card className={classes.root}>
                  <CardActionArea>
                    <Link to={{pathname: `/productDetail/${x.id}`}} className='card__text--textDecoration card__text--black'>
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
                    </Link>
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