// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Switch from "react-switch";
// import PostList from './components/PostList';
// import CreatePost from './components/CreatePost';
// import PostDetail from './components/PostDetail';

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <h1>Blog App</h1>
      
//         <Routes>
//           <Route path="/" element={<PostList/>}/>
            
//             <Route path="/" element={<CreatePost/>}/>
          
//           <Route path="/posts/:id" element={<PostDetail/>} />
//           </Routes>
          
        
//       </div>
//     </Router>
//   );
// }

// export default App;




import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PostList from './components/PostList';
import CreatePost from './components/CreatePost';
import PostDetail from './components/PostDetail';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Blog App</h1>
        <Routes>
          <Route path="/" element={<>
            <CreatePost />
            <PostList />
          </>} />
          <Route path="/posts/:id" element={<PostDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;


