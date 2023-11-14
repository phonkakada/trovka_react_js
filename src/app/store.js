import { configureStore } from '@reduxjs/toolkit'
import { AppData } from './data/data'
export default configureStore({
  reducer: {
    trovka : AppData
  },
})