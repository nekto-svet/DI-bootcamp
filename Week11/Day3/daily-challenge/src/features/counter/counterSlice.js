import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const incrementAsync = createAsyncThunk('counter/increment', () =>{
    return new Promise((res, rej)=>{
        setTimeout(() => {
         res();
        }, 2000);
    })
});

export const decrementAsync = createAsyncThunk('counter/decrement', () =>{
    return new Promise((res, rej)=>{
        setTimeout(() => {
         res();
        }, 2000);
    })
});

const initialState = {
    count:0,
    loading: false
};

export const counterSlice = createSlice({
    name:'counter',
    initialState,
    reducers: {},
    extraReducers(builder){
        builder.addCase(incrementAsync.fulfilled, (state) => {
            state.count+=1;
            state.loading = false;
        });
        builder.addCase(incrementAsync.rejected, (state) => {
            state.count='Error';
            state.loading = false;
        });
        builder.addCase(incrementAsync.pending, (state) => {
           state.loading = true;
        });
        builder.addCase(decrementAsync.fulfilled, (state) => {
            state.count-=1;
            state.loading = false;
        });
        builder.addCase(decrementAsync.pending, (state) => {
            state.loading = true;
         });
        builder.addCase(decrementAsync.rejected, (state) => {
            state.count='Error';
            state.loading = false;
        });
    }
});

export default counterSlice.reducer;