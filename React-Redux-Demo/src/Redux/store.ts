import { configureStore } from "@reduxjs/toolkit"
import counterReducer from "../Redux/slice"

const store = configureStore({
    reducer: {
        counter: counterReducer
    }
  })

export default store