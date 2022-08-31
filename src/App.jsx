import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ActivityDetail } from './component/activityDetail/ActivityDetail.js';
import { ActivityFeed } from './component/activityFeed/ActivityFeed.js';
import Header from './Header.jsx';



const App = () => {
  return (
    <div className='container'>
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<ActivityFeed />}></Route>
          <Route path="/call/details/:id" element={<ActivityDetail />}></Route>
        </Routes>
      </Router>
    </div>
  );
};

ReactDOM.render(<App/>, document.getElementById('app'));

export default App;
