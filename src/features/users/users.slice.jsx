import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    items: [
        { id: 101, name: "Tiko", gender: "male", salary: 150000 },
        { id: 102, name: "Ano", gender: "female", salary: 160000 },
        { id: 103, name: "Ashot", gender: "male", salary: 180000 },
        { id: 104, name: "Mane", gender: "female", salary: 130000 },

    ]
}
export const UserSlice = createSlice({
    name: "Users",
    initialState,
    reducers: {
        salaryUp: function (state, action) {
            const person = state.items.find(user => user.id == action.payload)
            if (person) {
                person.salary += 5000
            }



        },
        salaryDown: function (state, action) {
            const person = state.items.find(user => user.id == action.payload)
            if (person && person.salary > 10000) {
                person.salary -= 5000;
            }
        },
        deleteUser(state, action) {
            state.items = state.items.filter(user => user.id !== action.payload)
        },
        swipeUp(state, action) {
            const index = state.items.findIndex(user => user.id === action.payload)
            if (index > 0) {
                [state.items[index], state.items[index -1]] = [state.items[index - 1], state.items[index]];

            }
        },
        swipeDown(state, action) {
            const index = state.items.findIndex(user => user.id === action.payload)
            if (index < state.items.length - 1) {
                [state.items[index], state.items[index + 1]] = [state.items[index + 1], state.items[index]];

            }
        }
    }
})

export const reducer = UserSlice.reducer;
export const { salaryUp, salaryDown, deleteUser, swipeUp, swipeDown } = UserSlice.actions;