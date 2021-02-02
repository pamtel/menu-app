import React from 'react'
import MenuList from './MenuList'
import menuData from './menuData'
// import MenuItem from './MenuItem'

function MenuApp() {
    return (
        <div className="w-full bg-gray-100 p-10 pt-2">
            <h1 className="text-center font-bold text-3xl pb-2">Our Menu</h1>
            <div className="flex justify-center mb-5">
                <div className="w-20 h-1 bg-yellow-600"></div>
            </div>
            <div className="text-center mb-9 text-yellow-600 cursor-pointer">
                <span className="hover:bg-yellow-600 hover:text-white px-3 py-1 rounded-sm">All</span>
                <span className="ml-10 hover:bg-yellow-600 hover:text-white px-3 py-1 rounded-sm">Breakfast</span>
                <span className="ml-10 hover:bg-yellow-600 hover:text-white px-3 py-1 rounded-sm">Lunch</span>
                <span className="ml-10 hover:bg-yellow-600 hover:text-white px-3 py-1 rounded-sm">Shakes</span>
            </div>
            <MenuList menuData={menuData}/>
        </div>
    )
}

export default MenuApp
