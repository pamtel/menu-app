import React from 'react'
import MenuItem from './MenuItem'

function MenuList({menuData}) {
    const menuList = menuData.map((source) => (
        <MenuItem
        key={source.id}
        source={source}
        />
    ))
    return (
        <div className="md:grid grid-cols-2 gap-8">
            {menuList}
        </div>
    )
}

export default MenuList