import {configureStore, createSlice} from "@reduxjs/toolkit" ;

let user = createSlice({
    name: "user", //변수명과 똑같이 만들어주면 안헷갈림
    initialState: {
        loggedIn : false,
        data: null,
        uid: null
    },
    reducers:{
        logIn:(state,action) =>{
            state.loggedIn = true;
            state.uid= action.payload;

        },
        loggedIn :(state,action)=>{
            state.loggedIn = true;
            state.data = action.payload;
        },
        logOut:(state)=>{
            state.loggedIn = false;
            state.data = null;
            state.uid = null;
        }
        
    }
    
})

export const{logIn, loggedIn, logOut} = user.actions;


export default configureStore({
    reducer:{
        user : user.reducer 
    } 
})