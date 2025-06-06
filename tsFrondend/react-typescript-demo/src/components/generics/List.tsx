import React from 'react'

type ListProps<T>= {
    items: T[]
    onClick: (value:T) => void
    renderItem: (item: T) => React.ReactNode
}

export default function List<T>({items, onClick, renderItem}: ListProps<T>) {
  return (
    <div>
        <h2>List of items</h2>
        {items.map((item, index) => (
            <div key={index} onClick={() => onClick(item)}>
                {renderItem(item)}
            </div>
        ))}
    </div>
  )
}
