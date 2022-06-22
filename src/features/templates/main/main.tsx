import { FC } from "react"
import { ButtonContainer } from "./button/button"
import { FormContainer } from "./form/form"
import { Items } from "./items/items"
import css from './main.module.css'

type MainPropsType = {
    
}
export const Main: FC<MainPropsType> = ({  }) => {
    
    
    return <>
        <main className={css.container}>
            <FormContainer />
            <Items />
            <ButtonContainer />
        </main>
    </>
}