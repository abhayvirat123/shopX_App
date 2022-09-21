import * as React from 'react';
// import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import './home.css';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import 'antd/dist/antd.min.css';


export default function Home({ updateState, products,msg }) {
  return (
    <>
      <div className='main-card'>
        {products.map((x) => {
          return (
            <Card className='sub-card' key={x.id} sx={{ maxWidth: 345 }}>
              <CardHeader
                titleTypographyProps={{fontSize:"20px", height:"80px" }}
                title={x.title}
              />
              <CardMedia
                component="img"
                height="194"
                image={x.images[0]}
                alt="Paella dish"
                className='card-img'
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                 Price Rs.{x.price.value}
                </Typography>
              </CardContent>
             <div className='btn-shop'>
              <CardActions disableSpacing>
              <Button variant="contained" onClick={() => updateState(x)}>Add to Cart</Button>
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
