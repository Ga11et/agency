import { FC, useEffect } from "react"
import { useAppDispatch } from "../../../app/hooks"
import { MainReducer } from "../../../app/reducers/mainReducer"
import { ButtonContainer } from "./button/button"
import { FormContainer } from "./form/form"
import { Items } from "./items/items"
import css from './main.module.css'

type MainPropsType = {
    
}
export const Main: FC<MainPropsType> = ({  }) => {

    const dispatch = useAppDispatch()
    
    useEffect(() => {
        const onKeyPress = (e: KeyboardEvent) => {
            if (e.key === 'Delete') {
                dispatch(MainReducer.actions.deleteItem())
            }
        }

        document.addEventListener('keyup', onKeyPress)

        return () => document.removeEventListener('keyup', onKeyPress)
    }, [])
    
    return <>
        <main className={css.container}>
            <FormContainer />
            <Items />
            <ButtonContainer />
        </main>
    </>
}