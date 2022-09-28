import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ConfigProvider } from 'antd';
import locale from 'antd/es/locale/ko_KR';

import { Home } from './views/Home';
import { User } from './views/User';
import { Test } from './views/Test';

function App() {
  return (

    <ConfigProvider locale={locale}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="users/*" element={<User />} />
          <Route path="test" element={<Test />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </ConfigProvider>
  );
}

export default App;

// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// import { ConfigProvider } from 'antd';
// import locale from 'antd/es/locale/ko_KR';