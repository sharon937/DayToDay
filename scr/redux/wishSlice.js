import {createSlice} from '@reduxjs/toolkit';

const initialState ={
    general:{
        wish:"",
    }
};

const wishSlice = createSlice({
    name: 'wishtask',
    initialState,
    reducers: {
       setWish: (state, action) => {
          state.general = action.payload;
       }
    },
 });

 export const selectGeneral = (state) => state.wishtask.general;

// export actions to global
export const { setWish } = wishSlice.actions;

// export reducer to global
export default wishSlice.reducer;