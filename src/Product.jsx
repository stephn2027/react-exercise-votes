import { Avatar } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';

export default function Product({ title, productImageUrl, votes, submitterAvatarUrl, description, url }) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1}>
        <Grid xs={6} md={3}>
          <div className="product-image">
            <Avatar
              src={require('/' + productImageUrl)}
              sx={{ width: 150, height: 150 }}
              variant="square"
            />
          </div>
        </Grid>
        <Grid xs={12} md={9}>
          <div className="product-details">
            <div className="details__score">
            <button className='score__btn'>
            <img className='score__arrow-img' src={require('./images/ui/arrow.png')} alt="" />
            </button>
              
              {votes}
            </div>
            <div className="details__title"><a className='title__link' href={url}>{title}</a></div>
            <div className="details__description">{description}</div>
            <div className="details__submitted-by"><span>Submitted By:</span><Avatar className='avatar__image' src={require("./"+ submitterAvatarUrl)}/></div>

            
          </div>
        </Grid>
      </Grid>
    </Box>
  );
}
