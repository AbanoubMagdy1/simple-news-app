import {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { newsGetAction } from '../actions/newsActions'
import rootReducer from '../reducers'
import NewsCard from '../components/NewsCard'
import AsyncHandler from '../components/AsyncHandler'

function HomePage() {
  const {news, error, loading}= useSelector((state: ReturnType<typeof rootReducer>) => state.news)
  const dispatch = useDispatch()
  console.log(news?.articles)

  useEffect(() => {
    if(!news) dispatch(newsGetAction() as any)
  }, [])
  
  return (
    <AsyncHandler error={error} loading={loading}>
      <div className='news-grid'>
          {news?.articles && news.articles.map((item, idx) => (
              <NewsCard key={idx} article={item} idx={idx}/>
          ))}
      </div>
    </AsyncHandler>
  )
}

export default HomePage