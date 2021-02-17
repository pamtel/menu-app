import React from 'react'

function CategoryLink({menuData,handleCategory}) {
    const unique = ['All',...new Set(menuData.map(value => {
        return value.category
    })
    )
]
    
    const uniqueArray = unique.map((category) => {
        return  (
                <ul key={category}>
                    <li className="hover:bg-yellow-600 hover:text-white px-3 py-1 rounded-sm ml-5 mr-5 md:ml-10 md:mr-10"
                    onClick={() => handleCategory(category)}>
                        {category}
                    </li>
                </ul>
        )
    }
    
    )
    return (
        <div className="flex justify-center text-center mb-9 text-yellow-600 cursor-pointer">
            {uniqueArray}
        </div>
    )
}

export default CategoryLink
