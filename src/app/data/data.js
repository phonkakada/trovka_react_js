import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  AnotherProfile : null,
  MyProfile : null,
  LoginState : null, 
  HomeData : false
}

export const AppData = createSlice({
  name: 'trovka',
  initialState,
  reducers: {
    setAnotherProfile : (state , action) => {
        state.AnotherProfile = action.payload
    },
    setMyProfile : (state , action) => {
        state.MyProfile = action.payload
    },
    setLoginState : (state , action) => {
        state.LoginState = action.payload
    },
    setHomeData : (state) => {
        state.HomeData = true
    }
  },
})

// Action creators are generated for each case reducer function
export const { setAnotherProfile, setMyProfile, setLoginState , setHomeData } = AppData.actions

export default AppData.reducer