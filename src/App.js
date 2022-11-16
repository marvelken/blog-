import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import BlogPost from "./pages/BlogPost";
import React,{ useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/Header";


function App() {
  const [getBlogContent, setGetBlogContent] = useState([]);

  const [data, setData] = useState([]);
console.log(data)
  useEffect(() => {
    const fetchtData = async () => {
      axios.get(`https://api.buttercms.com/v2/pages/home/knowledgebase/?auth_token=767c664c86c2ff763b469e66e988781c473129ae`).then(res => {
        setData(res.data.data.fields.knowledge);
      }).catch(err => {
        console.log(err);
      })
    }
    fetchtData();
  }, []);

  const getData = (blog) => {
    setGetBlogContent(blog);
  }
  return (
    <div>
      <div className="container">
      <Header date={data}/>
        <Routes>
          <Route path="/" element={<HomePage datas={data} data={getData}/>} />
          <Route path="/blog/:id" element={<BlogPost content={getBlogContent}/>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
