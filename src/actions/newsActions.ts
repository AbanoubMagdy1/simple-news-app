import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { extractErrorMessage, getYesterdayDate, handleAsync } from '../utils'

const yesterdayDate = getYesterdayDate()

async function newsRequest(text: string) {
  return await axios.get(`https://newsapi.org/v2/everything?q=${text}&from=${yesterdayDate}&language=en&sortBy=publishedAt&apiKey=${import.meta.env.VITE_NEWS_API_KEY}`)
}

export const newsGetAction = createAsyncThunk('news/get', async (text: string, thunkAPI) => {
    const [response, err] = await handleAsync(newsRequest, text )

    if(err) thunkAPI.rejectWithValue(extractErrorMessage(err))

    return response?.data;
})