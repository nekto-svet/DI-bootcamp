import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

export const getUsers = createAsyncThunk('users/fetchUsers', async (API) => {
    const response = await fetch(API);
    return response.json();
  });

const userSlice = createSlice({
    name:'allUsers',
    initialState: {
        users:[],
        status: '',
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(getUsers.pending, (state) => {
            state.status = 'loading';
        })
        .addCase(getUsers.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.users = action.payload;
        })
        .addCase(getUsers.rejected, (state, action) => {
            state.status = 'failed';
        });
    }
})

export default userSlice.reducer;