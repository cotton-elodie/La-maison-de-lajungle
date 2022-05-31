import React from 'react';


const Categories = ({categories, activeCategory, setActiveCategory}) => {
 
  return (
    <div>
        <select 
        value={activeCategory}
        onChange={(e)=>setActiveCategory(e.target.value)}
        >
            <option value={('')}>---</option>
            {categories.map((cat) => (
          <option key={cat.id}>{cat}</option>
        ))}
            
        </select>
        <button>Réinitialiser</button>
    </div>
  )
}

export default Categories