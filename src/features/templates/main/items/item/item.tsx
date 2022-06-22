import { FC } from "react"
import { useAppDispatch, useAppSelector } from "../../../../../app/hooks"
import { itemType } from "../../../../../app/models"
import { MainReducer } from "../../../../../app/reducers/mainReducer"
import css from './item.module.css'

type ItemPropsType = {
    content: itemType
}
export const Item: FC<ItemPropsType> = ({ content }) => {

    const { id, image, name, type } = content
    const { activeItem } = useAppSelector(state => state.mainReducer)
    const dispatch = useAppDispatch()

    const onclickHandler = () => {
        dispatch(MainReducer.actions.setActive(id))
    }

    return <>
        <div className={`${css.container} ${activeItem === id ? css.active : ''}`}
            onClick={onclickHandler}
        >
            <img src={image} className={css.image} alt={name} />
            <div className={css.info}>
                <span className={css.type}>{type}</span>
                <h2 className={css.heading}>{name}</h2>
            </div>
        </div>
    </>
}