import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  AnotherProfile: null,
  MyProfile: null,
  LoginState: null,
  HomeData: false,
  Uuid: null,
  Token : null,
  StateChange : false
}

export const AppData = createSlice({
  name: 'trovka',
  initialState,
  reducers: {
    setAnotherProfile: (state, action) => {
      state.AnotherProfile = action.payload
    },
    setMyProfile: (state, action) => {
      state.MyProfile = action.payload
    },
    setLoginState: (state, action) => {
      state.LoginState = action.payload
    },
    setHomeData: (state) => {
      state.HomeData = true
    },
    setUuid: (state, action) => {
      state.Uuid = action.payload
    },
    setToken : (state , action) => {
      state.Token = action.payload
    },
    setStateChange : (state , action) => {
      state.StateChange = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { setAnotherProfile, setStateChange ,  setToken ,  setUuid, setMyProfile, setLoginState, setHomeData } = AppData.actions

export default AppData.reducer