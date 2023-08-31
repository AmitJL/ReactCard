import react from 'react'
import Datebox from "./components/Datebox";
import './App.css'

const Expenselist = (props) => {
  console.log(props.dummyData);
  return (
    <div>
      {props.dummyData.map((raw) => {
        return (
      <div className='Expenselist'>
         <Datebox raw={raw} month={props.month} /> 
        <div>
          <h2>{raw.title}</h2>
        </div>
        <div>
          <p>{raw.amount}</p>
        </div>
      </div>
        )
      })
      }

    </div>


  )
}

export default Expenselist;