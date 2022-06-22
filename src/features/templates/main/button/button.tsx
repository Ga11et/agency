import { FC } from "react"
import { useAppDispatch } from "../../../../app/hooks"
import { MainReducer } from "../../../../app/reducers/mainReducer"
import css from './button.module.css'

type ButtonContainerPropsType = {
    
}
export const ButtonContainer: FC<ButtonContainerPropsType> = ({  }) => {
    
    const dispatch = useAppDispatch()
    
    const clickHandler = () => {
        dispatch(MainReducer.actions.fetchMoreItems())
    }

    return <>
        <div className={css.container}>
            <button className={css.button}
                onClick={clickHandler}
            >load more</button>
        </div>
    </>
}