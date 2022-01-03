import React from 'react'
import useList from '../Hooks/useList'

function List() {
    const { list, addItem, deleteItem, editItem, moveItem } = useList()
    return (
        <div>
            {list.toString()}
            <button onClick={()=>{addItem("vfd")}}>add</button>
        </div>
    )
}

export default List
