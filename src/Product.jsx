import { Avatar } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import './styles/product.scss';

export default function Product({
  title,
  productImageUrl,
  votes,
  submitterAvatarUrl,
  description,
  url,
}) {
  return (
    <Box className='product__container' sx={{ flexGrow: 1 }}>
      <Grid container spacing={1}>
        <Grid xs={6} md={3}>
          <div className="product__image">
            <Avatar
              src={require('/' + productImageUrl)}
              sx={{ width: 150, height: 150 }}
              variant="square"
            />
          </div>
        </Grid>
        <Grid xs={12} md={9}>
          <div className="product__details">
            <div className="details__score">
              <button className="score__btn">
                <img
                  className="score__arrow-img"
                  src={require('./images/ui/arrow.png')}
                  alt=""
                />
              </button>

              <span className='score__votes'>{votes}</span>
            </div>
            <div className="details__title">
              <a className="title__link" href={url}>
                {title}
              </a>
            </div>
            <div className="details__description">{description}</div>
            <div className="details__submitted-by">
              
                   <p>Submitted By:  </p>
                <Avatar
                  className="avatar__image"
                  src={require('./' + submitterAvatarUrl)}
                  
                />
              
            </div>
          </div>
        </Grid>
      </Grid>
    </Box>
  );
}
