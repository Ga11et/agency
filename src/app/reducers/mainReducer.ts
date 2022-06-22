import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { filterType, itemType } from "../models";
import sofa from '../../assets/sofa.png'
import keyboard from '../../assets/keyboard.png'
import workMedia from '../../assets/workMedia.png'
import dddone from '../../assets/dddone.png'
import abstract from '../../assets/abstract.png'
import handP from '../../assets/handP.png'
import architect from '../../assets/architect.png'
import calc from '../../assets/calc.png'
import sport from '../../assets/sport.png'

// Я не знаю как это сделать по-другому :(
let count = 0
const initialItems = () => {
    if (count == 0) {
        count++
        return [
            { id: Date(), image: sofa, name: 'SOFA', type: 'Design' },
            { id: Date()+1, image: keyboard, name: 'KeyBoard', type: 'Branding' },
            { id: Date()+2, image: workMedia, name: 'Work Media', type: 'Illustrations' },
            { id: Date()+3, image: dddone, name: 'DDDone', type: 'Motion' },
            { id: Date()+4, image: abstract, name: 'Abstract', type: 'Design' },
            { id: Date()+5, image: handP, name: 'HandP', type: 'Branding' },
            { id: Date()+6, image: architect, name: 'Architect', type: 'Motion' },
            { id: Date()+7, image: calc, name: 'CalC', type: 'Design' },
            { id: Date()+8, image: sport, name: 'Sport', type: 'Branding' },
        ] as itemType[]
    }
    return [
        { id: Date(), image: sofa, name: 'SOFA' + count, type: 'Design' },
        { id: Date()+1, image: keyboard, name: 'KeyBoard' + count, type: 'Branding' },
        { id: Date()+2, image: workMedia, name: 'Work Media' + count, type: 'Illustrations' },
        { id: Date()+3, image: dddone, name: 'DDDone' + count, type: 'Motion' },
        { id: Date()+4, image: abstract, name: 'Abstract' + count, type: 'Design' },
        { id: Date()+5, image: handP, name: 'HandP' + count, type: 'Branding' },
        { id: Date()+6, image: architect, name: 'Architect' + count, type: 'Motion' },
        { id: Date()+7, image: calc, name: 'CalC' + count, type: 'Design' },
        { id: Date()+8, image: sport, name: 'Sport' + count, type: 'Branding' },
    ] as itemType[]
}


type MainReducerInitialValuesType = {
    items: itemType[]
    activeItem: string,
    activeFilter: filterType
}

const initialState: MainReducerInitialValuesType = {
    items: initialItems(),
    activeItem: '',
    activeFilter: 'Design'
}

export const MainReducer = createSlice({
    name: 'mainReducer',
    initialState,
    reducers: {
        setActive: (state, action: PayloadAction<string>) => {
            state.activeItem = action.payload
        },
        fetchMoreItems: (state, action: PayloadAction) => {
            state.items = [...state.items, ...initialItems()]
        },
        setFilter: (state, action: PayloadAction<filterType>) => {
            state.activeFilter = action.payload
        },
        deleteItem: (state, action: PayloadAction) => {
            state.items = state.items.filter(el => el.id !== state.activeItem)
        }
    },
})

export default MainReducer.reducer