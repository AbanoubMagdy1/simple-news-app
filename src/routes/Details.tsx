import { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';

import rootReducer from '../reducers';
import { Button, Card, CardContent, CardMedia, Typography } from '@mui/material';

type Params = {
    idx: string;
}

function Details() {
  const {idx} = useParams<Params>();
  const {news} = useSelector((state: ReturnType<typeof rootReducer>) => state.news)
  const article = news?.articles[Number(idx)]

  const navigate = useNavigate()

  useEffect(() => {
    if(!article) navigate('/')
  }, [])

  return (
    <>
    <Button sx={{marginBottom: 2, color: 'black'}}>
     <Link to="/">Go back</Link>
    </Button>
    {article && (<Card>
        <CardMedia
          component="img"
          image={article.urlToImage}
          title={article.title}
        />
        <CardContent sx={{paddingInline: 3}}>
          <Typography gutterBottom variant="h5" component="h5" color='text.secondary'>
            {article.author}
          </Typography>
          <Typography variant="h4" color="text.primary" sx={{marginBlock: 2}}>
            {article.title}
          </Typography>
          <Typography gutterBottom variant='h6'>
            {article.description}
          </Typography>
        </CardContent>
    </Card>)}
    </>
  )
}

export default Details