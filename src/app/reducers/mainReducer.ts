import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { itemType } from "../models";
import sofa from '../../assets/sofa.png'
import keyboard from '../../assets/keyboard.png'
import workMedia from '../../assets/workMedia.png'
import dddone from '../../assets/dddone.png'
import abstract from '../../assets/abstract.png'
import handP from '../../assets/handP.png'
import architect from '../../assets/architect.png'
import calc from '../../assets/calc.png'
import sport from '../../assets/sport.png'

const initialItems = () => ([
    { id: Date(), image: sofa, name: 'SOFA', type: 'Design' },
    { id: Date()+1, image: keyboard, name: 'KeyBoard', type: 'Branding' },
    { id: Date()+2, image: workMedia, name: 'Work Media', type: 'Illustration' },
    { id: Date()+3, image: dddone, name: 'DDDone', type: 'Motion' },
    { id: Date()+4, image: abstract, name: 'Abstract', type: 'Design' },
    { id: Date()+5, image: handP, name: 'HandP', type: 'Branding' },
    { id: Date()+6, image: architect, name: 'Architect', type: 'Motion' },
    { id: Date()+7, image: calc, name: 'CalC', type: 'Design' },
    { id: Date()+8, image: sport, name: 'Sport', type: 'Branding' },
])

type MainReducerInitialValuesType = {
    items: itemType[]
    active: string
}

const initialState: MainReducerInitialValuesType = {
    items: initialItems(),
    active: '2'
}

export const MainReducer = createSlice({
    name: 'mainReducer',
    initialState,
    reducers: {
        setActive: (state, action: PayloadAction<string>) => {
            state.active = action.payload
        },
        fetchMoreItems: (state, action: PayloadAction) => {
            state.items = [...state.items, ...initialItems()]
        }
    },
})

export default MainReducer.reducer