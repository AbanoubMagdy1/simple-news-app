import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { extractErrorMessage, getYesterdayDate, handleAsync } from '../utils'

const yesterdayDate = getYesterdayDate()

async function newsRequest() {
  return await axios.get(`https://newsapi.org/v2/everything?q=tesla&from=${yesterdayDate}&language=en&sortBy=publishedAt&apiKey=${import.meta.env.VITE_NEWS_API_KEY}`)
}

export const newsGetAction = createAsyncThunk('news/get', async (payload, thunkAPI) => {
    const [response, err] = await handleAsync(newsRequest)

    if(err) thunkAPI.rejectWithValue(extractErrorMessage(err))

    return response?.data;
})