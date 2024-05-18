import React, { useEffect, useState } from 'react';
import Home from './pages/Home';
import BlogContentPage from './pages/BlogContentPage';
import useFetch from './hooks/useFetch';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { getToken } from "./helpers";
import Profile from "./components/Profile";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

const App = () => {
  const [isLoading, setLoading] = useState(true);
  const [blogs, setBlogs] = useState([]);
  const { loading, data, error } = useFetch('http://localhost:1337/api/blogs?populate=*');

  useEffect(() => {
    if (!loading) {
      setLoading(false);
      setBlogs(data || []);
    }
  }, [loading, data]);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;

  return (
    <Router>
      <Routes>
        {/* Pass data to the Home component */}
        <Route path="/" element={<Home blogs={blogs} />} />

        {/* Use /api/blogs/:id to match individual blog posts */}
        <Route path="blog/:id" element={<BlogContentPage blogs={blogs} />} />
        
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />

        <Route
          path="/profile"
          element={
            getToken() && <Profile />
            
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
