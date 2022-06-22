import { FC } from "react"
import { useAppSelector } from "../../../../app/hooks"
import { Item } from "./item/item"
import css from './items.module.css'

type ItemsPropsType = {
    
}
export const Items: FC<ItemsPropsType> = ({  }) => {
    
    const { items } = useAppSelector(state => state.mainReducer)
    
    return <>
        <div className={css.container}>
            {items.map(el => <Item content={el} key={el.id} />)}
        </div>
    </>
}