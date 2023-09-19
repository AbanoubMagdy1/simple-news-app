import {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { newsGetAction } from '../actions/newsActions'
import rootReducer from '../reducers'
import NewsCard from '../components/NewsCard'

function HomePage() {
  const {news, error, loading}= useSelector((state: ReturnType<typeof rootReducer>) => state.news)
  const dispatch = useDispatch()
  console.log(news?.articles)

  useEffect(() => {
    if(!news) dispatch(newsGetAction() as any)
  }, [])
  
  if(loading) return (<div>Loading...</div>)

  if(error) return (<div>{error}</div>)

  return (
    <div className='news-grid'>
        {news?.articles && news.articles.map((item, idx) => (
            <NewsCard key={idx} article={item}/>
        ))}
    </div>
  )
}

export default HomePage