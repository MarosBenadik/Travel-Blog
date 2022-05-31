import React from 'react';

import './Blog.css';

import axios from 'axios';

import {useLocation} from 'react-router-dom';

import NavBar from '../../components/NavBar/NavBar';

import images from '../../public/images/images';

import DATA from '../../public/assets/DATA';

import icons from '../../public/icons/icons';

import Wetravel from '../../components/Wetravel/Wetravel';

import RecomendedFull from '../../components/RecomendedBlogsFull/RecomendedFull';

import InstagramSide from '../../components/InstagramSide/InstagramSide';

import Moment from 'react-moment';

import AddFull from '../../components/adds/AddFull';

import { Image, Transformation } from 'cloudinary-react';

const Blog = () => {

    const location = useLocation()

    const [ isLoading, setIsLoading ] = React.useState(true);

    const [ blog, setBlog ] = React.useState({});

    React.useEffect( () => {
        axios.get("http://localhost:8800/blogs/" + location.state)
          .then(res => {
            const newBlog = res.data;
            setBlog(newBlog)

            setIsLoading(false)
          })
    }, [location.state])

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

    if(isLoading === true){
        return(
            <div className='blog-page'>
                {NavBar()}
                <div className='loading'>
                    <p className='loading-text'>Loading</p>
                </div>
            </div>
        )
    }

    function shareArticle() {
        return (
            <div className='shareArticle'>
                <div className='author'>
                    <h3>Author: Tatiana</h3>
                </div>
                <div className='author'>
                    <a href="https://www.facebook.com/chicchicapp/" title="Facebook"><img className='icons' src={icons.facebook} alt='Facebook'/></a>
                    <a href="https://www.linkedin.com/company/chicchic/" title="Linkedin"><img className='icons' src={icons.instagram} alt='linkedIn'/></a>
                    <a href="https://www.instagram.com/chicchicapp/" title="Instagram"><img className='icons' src={icons.linkedin} alt='Instagram'/></a>
                </div>
                <div className='author'>
                    <h3>Created: <Moment fromNow>{blog.createdAt}</Moment></h3>
                </div>
            </div>
        )
    }

    return (
        <div className='blog-page'>
            {NavBar()}
            <img src={blog.blogImg} className='slider-image-home-full'/>
            <div className='blog-page-img-banner'>
                <p className='banner-state'>{getState(blog.country)}</p>
            </div>
            <div className='singl-blog-main-page'>
                <h2 className='text-color'>
                    {getCategory(blog.category)}
                </h2>
                <h1 className='single-blog-page-title'>{blog.title}</h1>
                <h1 className='text-color'>
                    {getContinent(blog.continent)}
                </h1>
                <div class='single-blog-qoute'>
                    <h2 className='single-blog-page-subtitle-part'>{blog.subTitle}</h2>
                    <h2 className='clever-qoute-blog'>"{blog.cleverQoute}"</h2>
                </div>
                <div class='single-blog-divider-imgs'>
                    <img src={blog.img} className='blog-img-single'/>
                    <p className='single-blog-page-text-part'>{blog.partOne}</p>
                </div>
                <div class='blog-adds-full-container'>
                    {AddFull()}
                </div>
                <div class='single-blog-divider-imgs'>
                    <p className='single-blog-page-text-part'>{blog.partTwo}</p>
                    <img src={blog.img1} className='blog-img-single'/>               
                </div>
                <div class='blog-adds-full-container'>
                    {AddFull()}
                </div>
                <div class='single-blog-divider-imgs'>
                    <img src={blog.img2} className='blog-img-single'/>
                    <p className='single-blog-page-text-part'>{blog.partThree}</p>
                </div>
                <div class='single-blog-divider-imgs'>
                    <p className='single-blog-page-text-part'>{blog.partFour}</p>
                    <img src={blog.img3} className='blog-img-single'/>
                </div>
                <div className='share-article-blog'>
                    {shareArticle()}
                </div>
                <div className='recomended-section'>
                    <h2>Explore More:</h2>
                    {RecomendedFull()}
                </div>
                <div class='single-blog-divider'>
                    {Wetravel()}
                    <div>
                        {InstagramSide()}
                        <div className='suportUs'>
                            <h3>Suport Us</h3>
                            <div className='author'>
                                <a href="https://www.facebook.com/chicchicapp/" title="Facebook"><img className='icons' src={icons.facebook} alt='Facebook'/></a>
                                <a href="https://www.linkedin.com/company/chicchic/" title="Linkedin"><img className='icons' src={icons.instagram} alt='linkedIn'/></a>
                                <a href="https://www.instagram.com/chicchicapp/" title="Instagram"><img className='icons' src={icons.linkedin} alt='Instagram'/></a>
                            </div>
                        </div>
                    </div>
                </div>
                {AddFull()}
            </div>
        </div>
    );
}

export default Blog;