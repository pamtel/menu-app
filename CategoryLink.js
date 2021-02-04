// import {useState} from 'react'
import MenuApp from './MenuApp'

function CategoryLink({menuData,handleCategory}) {
    const unique = ['All',...new Set(menuData.map(value => value.category))]
    
    const uniqueArray = unique.map((category) => {
        <div>
            <MenuApp key={category.id}/>
        </div>
        return  (
            <div className="text-center mb-9 text-yellow-600 cursor-pointer">
                <span 
                className="hover:bg-yellow-600 hover:text-white px-3 py-1 rounded-sm ml-5 mr-5 md:ml-10 md:mr-10"
                 onClick={() =>handleCategory(category)}>{category}</span>
            </div>
        )
    }
    
    )
    return (
        <div className="flex justify-center">
            {uniqueArray}
        </div>
    )
}

export default CategoryLink
