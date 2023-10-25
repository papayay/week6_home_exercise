import './App.css'
// import { Foodpanda_information_4 } from './component/foodpanda.jsx'
// import Ubereats_Store from './component/foodpanda.jsx'
//import InfoPanel from './component/office.jsx'
import { OfficeInfoHeader } from './component/office'
//import {OfficeInformation} from './component/office2.jsx'
//import { Name_Email_Phone_2 } from './component/office'


function App() {

  return (
   <>
        <OfficeInfoHeader
      imglink="https://econ.ntpu.edu.tw/storage/images/ZlP7DHjLRh8IeahmFoT1EMxkmCgaxYtguN76FqiW.jpg"
      name = "郭文宗"
      title = "教授"
      officeHour="Thu. 12:00 - 14:00"//沒用的
      email="guowc@gm.ntpu.edu.tw"
      phone="886-2-86741111 ext. 67156"
      office="社3F16"          //沒用到
                />
   
   
   
   </>
  )
}

export default App
