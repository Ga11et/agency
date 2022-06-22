import { FC } from "react"
import { useAppSelector } from "../../../../app/hooks"
import { Item } from "./item/item"
import css from './items.module.css'

type ItemsPropsType = {
    
}
export const Items: FC<ItemsPropsType> = ({  }) => {
    
    const { items, activeFilter } = useAppSelector(state => state.mainReducer)
    
    return <>
        <div className={css.container}>
            {items.map(el => {
                return activeFilter === 'Show All'
                ? <Item content={el} key={el.id} />
                : el.type === activeFilter
                    ? <Item content={el} key={el.id} />
                    : null
            })}
        </div>
    </>
}