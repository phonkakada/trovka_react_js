import { configureStore } from '@reduxjs/toolkit'
import AppData from './data/data'

export const store = configureStore({
  reducer: {
    data: AppData
  },
})