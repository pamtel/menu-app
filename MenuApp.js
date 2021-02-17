import {useState} from 'react'
import MenuList from './MenuList'
import { menu } from './menuData'
import CategoryLink from './CategoryLink'

function MenuApp() {

    const [list, setList] = useState(menu);
    
    const handleCategory = (content) => {
        if(content === 'All') {
            setList(menu)
            return;
        }
        const showList = menu.filter((data) => {
            return data.category === content;
        })
        setList(showList)
    }

    return (
        <div className="w-full h-full bg-gray-100 p-10 pt-2">
            <h1 className="text-center font-bold text-3xl pb-2">Our Menu</h1>
            <div className="flex justify-center mb-5">
                <div className="w-20 h-1 bg-yellow-600"></div>
            </div>

            <CategoryLink menuData={menu} handleCategory={handleCategory}/>
            <MenuList item={list}/>
        </div>
    )
}

export default MenuApp
