import React from 'react'
import CustomerCard from '../customerCard/CustomerCard'
import "../../styles/components/customer/customer.css"
export default function CustomerSection() {
    // props
    const mountains_data = [
        {id:1 , title:"Santorini Beach",},
        {id:2 , title:"Santorini Beach", },
        {id:3 , title:"Santorini Beach", },
        {id:4 , title:"Santorini Beach", },
        {id:5 , title:"Santorini Beach", },
        {id:6 , title:"Santorini Beach", },
    ]
  return (
      <div className="customerSection">
          <h3>THE DESTINATION</h3>
          <div className="customerCard_container">
              {mountains_data.map((item, index) => (
                  <CustomerCard key={item.id} title={item.title} description={item.description} />
              ))}
          </div>
      </div>
  );
}
