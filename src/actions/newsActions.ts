import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { extractErrorMessage, handleAsync } from '../utils'

async function newsRequest() {
  return await axios.get(`https://newsapi.org/v2/everything?q=tesla&from=2023-09-17&sortBy=publishedAt&apiKey=${import.meta.env.VITE_NEWS_API_KEY}`)
}

export const newsGetAction = createAsyncThunk('news/get', async (payload, thunkAPI) => {
    const [response, err] = await handleAsync(newsRequest)

    if(err) thunkAPI.rejectWithValue(extractErrorMessage(err))

    return response?.data;
})