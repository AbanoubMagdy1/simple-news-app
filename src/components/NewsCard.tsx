import { Card, CardMedia, CardContent, Typography } from "@mui/material";
import { Article } from "../types"
import {styled} from '@mui/material/styles'
import { Link } from "react-router-dom";


interface Props {
    article: Article;
    idx: number;
}

const StyledCard = styled(Card)`
    & .MuiCardMedia-root {
        filter: brightness(0.8);
        transition: all 0.5s ease;
    }

    &:hover .MuiCardMedia-root{
        filter: brightness(1);
    }
`

function NewsCard({article, idx}: Props) {
  return (
    <Link to={`/details/${idx}`} style={{textDecoration: 'none'}}>
      <StyledCard>
        <CardMedia
          sx={{height: 200}}
          image={article.urlToImage}
          title={article.title}
        />
        <CardContent>
          <Typography gutterBottom variant="body2" component="h5" color='text.secondary'>
            {article.author}
          </Typography>
          <Typography variant="h6" color="text.primary">
            {article.title}
          </Typography>
        </CardContent>
      </StyledCard>
    </Link>
  )
}

export default NewsCard