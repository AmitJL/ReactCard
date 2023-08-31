import react from 'react'
import Expenselist from './Expenselist';
import './App.css';

const App = () => {
  const dummyData = [
    {
      id:123,
      title:'New Mobile',
      amount:8999,
      date:new Date (2023, 8,30)
    },
    {
      id:124,
      title:'New Bike',
      amount:89999,
      date:new Date (2023, 6,31)
    },
    {
      id:125,
      title:'New TV',
      amount:14199,
      date:new Date (2023, 7,21)
    },
     {
      id:125,
      title:'New Furniture',
      amount:8599,
      date:new Date (2023, 3,11)
    },
   {
      id:125,
      title:'New clothes',
      amount:5999,
      date:new Date (2023, 2,14)
    }
  ]
  let month = [ 'Jan' , 'Feb', 'March','Apr','May','Jun','July','Aug', 'Sep','Oct','Nov','Dec']
  return(
    <div className="">
      <Expenselist month ={month} dummyData={dummyData}/>
    </div>
  )
}

export default App; 