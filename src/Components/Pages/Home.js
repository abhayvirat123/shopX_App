import * as React from 'react';
// import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import './home.css';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
// import ProductDetails from '../Product/ProductDetails';

export default function Home({ updateState, products }) {
  return (
    <>
      <div className='main-card'>
        {products.map((x) => {
          return (
            <Card className='sub-card' key={x.id} sx={{ maxWidth: 345 }}>
              <CardHeader
                title={x.title}
              />
              <CardMedia
                component="img"
                height="194"
                image={x.images[0]}
                alt="Paella dish"
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                 Price Rs.{x.price.value}
                </Typography>
              </CardContent>
             <div className='btn-shop'>
              <CardActions disableSpacing>
                  <IconButton className='heart-cart' aria-label="add to favorites">
                    <FavoriteIcon  onClick={() => updateState(x)} />
                  </IconButton>
                  <IconButton aria-label="share">
                    <ShareIcon />
                  </IconButton>
                </CardActions>
                <Link to={`ProductDetails/${x.id}`}><Button variant="outlined">Buy Now</Button></Link>
             </div>
            </Card>
          )
        })}
      </div>
    </>
  );
}
