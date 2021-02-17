import React from 'react'
import MenuItem from './MenuItem'

function MenuList({item}) {

    const menuListComponent = item.map((data) => (
       <MenuItem
        key={data.id}
        source={data} />
        ))

    return (
        <div className="md:grid grid-cols-2 gap-8">
                { menuListComponent }
        </div>
    )
}

export default MenuList