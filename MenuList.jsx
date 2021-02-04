import React from 'react'
// import CategoryLink from './CategoryLink'
import MenuItem from './MenuItem'

function MenuList({menuData}) {
    const menuList = menuData.map((source) => (
        <div>
            <MenuItem
            key={source.id}
            source={source}
            />
        </div>
        
    ))
    return (
        <div className="md:grid grid-cols-2 gap-8">
                {menuList}
        </div>
    )
}

export default MenuList