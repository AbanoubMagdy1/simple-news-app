import {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { newsGetAction } from '../actions/newsActions'
import rootReducer from '../reducers'

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
    <div>
        {news?.articles && news.articles.map((item) => (
            <p>{item.title}</p>
        ))}
    </div>
  )
}

export default HomePage