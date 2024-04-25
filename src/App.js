import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import MyHeader from "./component/header/Header";
import MyTable from "./component/table/Table";
import Wester from "./component/courses/wester/Wester";
import { Header } from "antd/es/layout/layout";
import { Menu } from "antd";
import wester from './assets/courses/wester.jpg'
import result from './assets/courses/result.jpg'
import fiz_mat from './assets/courses/fiz_mat.webp'
import Footer from "./component/footer/Footer";
import About from "./component/about/About";
import Registration from "./component/registration/Registration";

function App() {
  const items = new Array(3).fill(null).map((_, index) => ({
    key: String(index + 1),
    label: `${index === 0 ? 'Asosiy' : index === 1 ? 'Biz haqimizda' : "Bog'lanish"}`,
  }));
  return (
    <div className="App">
        <Header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 1,
          width: '100%',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Link to={'/'} className={"demo-logo teachTrack_logo"} >TeachTrack</Link>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['1']}
          items={items}
          style={{
            flex: 1,
            minWidth: 0,
          }}
        />
      </Header>

      <Routes>
        <Route path="/" element={<> <MyHeader/> <MyTable /><About/></>} />
        <Route path="Wester" element={<Wester path="Wester" course={'Wester School'} subject={'Matematika'} logo={wester} time={'13:00-15:00'}/>} /> 
        <Route path="Result" element={<Wester path="Result" course={'Result Education Center'} subject={'Fizika'} logo={result} time={'12:00-14:00'}/>} /> 
        <Route path="Fiz-mat" element={<Wester path="Fiz-mat" course={'Fiz-Mat Education Center'} subject={'Fizika'} logo={fiz_mat} time={'13:00-15:00'}/>} /> 
        <Route path="InStudy" element={<Wester path="InStudy" course={'InStudy Education Center'} subject={'Matematika'} logo={fiz_mat} time={'14:00-16:00'}/>} /> 
        <Route path="/Wester/registration" element={<Registration/>} /> 
        <Route path="/Result/registration" element={<Registration/>} /> 
        <Route path="/Fiz-mat/registration" element={<Registration/>} /> 
        <Route path="/InStudy/registration" element={<Registration/>} /> 
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
