import {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { newsGetAction } from '../actions/newsActions'
import rootReducer from '../reducers'
import NewsCard from '../components/NewsCard'
import AsyncHandler from '../components/AsyncHandler'
import { Box, TextField } from '@mui/material'
import useDebounce from '../hooks/useDeboune'
import useLocalStorage from '../hooks/useLocalStorage'

function HomePage() {
  const {news, error, loading}= useSelector((state: ReturnType<typeof rootReducer>) => state.news)
  const [search, handleChange] = useLocalStorage('searchTerm', 'USA')
  const searchText = useDebounce(search, 500)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(newsGetAction(searchText) as any)
  }, [searchText, dispatch])
  
  return (
    <>
    <Box sx={{display: 'flex', justifyContent: 'center'}}>
      <TextField 
        sx={{ marginBottom: '20px', width: '80%'}}
        label='Search'
        type='text' 
        value={search} 
        onChange={handleChange}
      />
    </Box>
    <AsyncHandler error={error} loading={loading}>
      <div className='news-grid'>
          {news?.articles && news.articles.map((item, idx) => (
              <NewsCard key={idx} article={item} idx={idx}/>
          ))}
      </div>
    </AsyncHandler>
    </>
  )
}

export default HomePage