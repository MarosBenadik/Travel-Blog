import React from 'react';

import './Getinspired.css';

import { Link } from 'react-router-dom';

import NavBar from '../../components/NavBar/NavBar';

import axios from 'axios';

import { Image, Transformation } from 'cloudinary-react';

import DATA from '../../public/assets/DATA';
import icons from '../../public/icons/icons';

const Getinspire = () => {

  const [ isLoading, setIsLoading ] = React.useState(true);

  const [ newBlogs, setNewBlogs ] = React.useState([]);

  const [ categoryBlogs, setCategoryBlogs ] = React.useState(newBlogs);

  React.useEffect( () => {
    axios.get(`http://localhost:8800/blogs/all`)
      .then(res => {
        const blogs = res.data;

        setNewBlogs(blogs.slice(0,10));

        setIsLoading(false);
      })
  }, [])



  function topcomponent () {
    return (
      <div className='journy-image'>
        <h2>Find some Inspiration for your next Journy!</h2>
      </div>
    )
  }

  function handleCategory(value) {
    const category = newBlogs.filter(e => e.category === value);
    setCategoryBlogs(category)
  }

  function firstBlog() {

    const blog = newBlogs[0];

    const blog1 = newBlogs[1];

    return (
      <div>
        <div className='getInspire-destinations'>
          <div className='get-inspire-img'>
            <img src={blog.blogImg} className='slider-image-home-full'/>
          </div>
          <h1>{blog.title}</h1>
          <Link to={"/blogs/" + blog.slug} state={blog._id} style={{ textDecoration: 'none' }}>Keep reading ...</Link>
          <p>{blog.subTitle}</p>
        </div>
        <div className='getInspire-destinations'>
          <div className='get-inspire-img'>
            <img src={blog1.blogImg} className='slider-image-home-full'/>
          </div>
          <h1>{blog1.title}</h1>
          <Link to={"/blogs/" + blog1.slug} state={blog1._id} style={{ textDecoration: 'none' }}>Keep reading ...</Link>
          <p>{blog1.subTitle}</p>
        </div>
      </div>
    )
  }

  function bucketListComponent() {
    return (
      <div>
        {DATA.bucketList.map((item, index) => (
          <div key={index} className='bucketlist-single'>
            <img src={item.visited === true ? icons.ok : icons.pin} className='bucketlist-single-img'/>
            <p className={item.visited === true ? 'bucketlist-text-line' : 'bucketlist-text' } >{item.name}</p>
            <p style={{color: '#D1aCA5'}}>{item.country}</p>
            <p>{item.destination}</p>
          </div>
        ))}
      </div>
    )
  }

  function middleComponent() {
    return(
      <div className='journy-desc-container'>
        <div className='bucket-list'>
          <h2>Get inpired:</h2>
          {firstBlog()}
        </div>
        <div className='bucket-list'>
          <h2>Our BucketList:</h2>
          {bucketListComponent()}
        </div>
      </div>
    )
  }

  function categoryComponent() {
    return (
      <div className='top-categories'>
        <div className='title-container'>
          <p className='top-categories-title'>Get inspired:</p>
          <p className='top-categories-subtitle'>Some of the best blog categories to inpire you!</p>
        </div>
        <div className='categories-icons'>
          {DATA.categories.slice(0,6).map(( category, index ) => (
            <div key={index} >
              <img src={category.image} alt='category' className='category-icon' onClick={() => handleCategory(category.id)}/>
              <p>{category.name}</p>
            </div>
          ))}
        </div>
      </div>
    )
  }

  function resultsComponent() {
    return (
      <div className='result-getinspire'>
        {categoryBlogs.map((blog, index) => (
          <div key={index} className='category-single-blog'>
            <div>
              <img src={blog.img} className='slider-image-inspire-full'/>
            </div>
            <div>
              <h2>{blog.title}</h2> 
              <p>{blog.subTitle}</p>
            </div>
            <div>
              <p>{blog.author}</p>
              <Link to={"/blogs/" + blog.slug} state={blog._id} style={{ textDecoration: 'none' }}>Keep reading ...</Link>
            </div>
          </div>
        ))}
      </div>
    )
  }

  if(isLoading) {
    return (
      <div>
        {NavBar()}
        <div className='loading'>
          <p>Loading ....</p>
        </div>
      </div>
    )
  }

  return (
    <div className='getinspire-page'>
        {NavBar()}
        {topcomponent()}
        {middleComponent()}
        {categoryComponent()}
        {resultsComponent()}
    </div>
  );
}

export default Getinspire;