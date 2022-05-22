import React from 'react';

import './Blog.css';

import axios from 'axios';

import {useLocation} from 'react-router-dom';

import NavBar from '../../components/NavBar/NavBar';

import images from '../../public/images/images';

import DATA from '../../public/assets/DATA';

const Blog = () => {

    const location = useLocation()

    const [ isLoading, setIsLoading ] = React.useState(true);

    const [ blog, setBlog ] = React.useState({});

    React.useEffect( () => {
        axios.get("http://localhost:8800/blogs/" + location.state)
          .then(res => {
            const newBlog = res.data;
            console.log({ blog: newBlog})
            setBlog(newBlog)
            window.setInterval(() => {
                setIsLoading(false);
            }, 4000);
          })
    }, [])

    console.log(location.state)

    function getContinent(id) {
    
        const continentName = DATA.explore.find(e => e.id === id);
    
    return continentName.name;
    }
  
    function getCategory(id) {
    
        const categoryName = DATA.categories.find(e => e.id === id);
    
    return categoryName.name;
    }

    function getState(id) {
        const stateName = DATA.states.find(e => e.id === id);

    return stateName.name;
    }

    if(isLoading){
        <div>
            <p>Loading</p>
        </div>
    }

    return (
        <div className='blog-page'>
            {NavBar()}
            <img src={images.greece} alt='mainImg' className='single-blog-mainImg' />
            <div className='singl-blog-main-page'>
                <h3>{blog.country}</h3>
                <h1 className='single-blog-page-title'>{blog.title}</h1>
            </div>
        </div>
    );
}

export default Blog;