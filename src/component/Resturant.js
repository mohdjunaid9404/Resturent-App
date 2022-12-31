import react, {useState} from 'react'
import './style.css'
import Menu from './MenuApi'
import MenuCard from './MenuCard'

const Resturant = ()=>{
    const [menuData, setMenuData] = useState(Menu)
    const filteritem=(category)=>{
        const updatedList=Menu.filter((curElem)=>{
            return curElem.category===category;
        })
        setMenuData(updatedList);
    }
  return(
    <>
    <nav className='navbar'>
    <div className='btn-group'>
        <button className='btn-group__item' onClick={()=>filteritem("breakfast")}>Breakfast</button>
        <button className='btn-group__item' onClick={()=>filteritem("lunch")}>Lunch</button>
        <button className='btn-group__item' onClick={()=>filteritem("evening")}>Evening</button>
        <button className='btn-group__item' onClick={()=>filteritem("dinner")}>Dinner</button>
        <button className='btn-group__item' onClick={()=>setMenuData(Menu)}>All</button>
    </div>
    </nav>
    <MenuCard menuData={menuData}/>
    </>
  )
}
export default Resturant;