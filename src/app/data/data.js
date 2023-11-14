import { createSlice } from "@reduxjs/toolkit";

export const AppData = createSlice({
    name : 'trovka',
    initialState: {
        profile : [],
        value : 0
    },
    reducers:{
        setProfile : (state , action) => {
            state.profile = action.payload
        },
        IncreaseValue : (state) => {
            state.value += 1;
        }
    }
})

export const {setProfile , IncreaseValue} = AppData.actions

export default AppData.reducer