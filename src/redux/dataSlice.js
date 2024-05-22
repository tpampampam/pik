import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const FETCH_URL = 'https://api.pik.ru/v2/offer/special?types=1,2&locations=2,3'
const POST_URL ='https://strapi.pik.ru/front-tests'


export const fetchData = createAsyncThunk(
    'data/fetchData',
    async(_, {rejectWithValue}) => {
        try {
            const response = await fetch(`${FETCH_URL}`).then(data => data.json())
            return response
        } catch(e){
            console.log(e)
            rejectWithValue('Error')
        }
    }
)

export const sendData = createAsyncThunk(
    'data/postData',
    async (data, {rejectWithValue}) => {
        try {
            const response = await fetch(`${POST_URL}`,{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            return await response.json();
        }catch(e) {
            console.log(e)
            rejectWithValue('post error')
        }
    }
)


const initialState = {
    data: [],
    userData: null,
    isLoading: false,
    isError: false,
    postLoading: false,
    postError: null
}


const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchData.pending, state => {state.isLoading = true})
            .addCase(fetchData.fulfilled, (state, action) => {
                state.isLoading = false
                state.data = action.payload
            })
            .addCase(fetchData.rejected, state => {
                state.isLoading = false
                state.isError = true
            })
            .addCase(sendData.pending, state => {
                state.postLoading = true
            })
            .addCase(sendData.fulfilled, (state, action) => {
                state.postLoading = false
                state.userData = action.payload
            })
            .addCase(sendData.rejected, state => {
                state.postLoading = false
                state.postError = true
            })
    }
})

export const dataSelector = state => state.dataReducer;

const { reducer } = dataSlice;
export default reducer

