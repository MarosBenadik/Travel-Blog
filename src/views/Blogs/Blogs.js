import React from 'react';

import { Link } from 'react-router-dom';

import './Blogs.css';

import axios from 'axios';

import DATA from '../../public/assets/DATA';

import NavBar from '../../components/NavBar/NavBar';

import images from '../../public/images/images';

import Moment from 'react-moment';

const Blogs = ({category}) => {

  //filter 
  const [ continent, setContinent ] = React.useState(DATA.explore[0]);
  const [ blogName, setBologName ] = React.useState([]);
  const [ blogCategory, setBlogCategory ] = React.useState([]);
  const [ blogState, setBlogState ] = React.useState([]);

  console.log(continent)
  console.log(blogName)
  console.log(blogCategory)
  console.log(blogState)

  const [ blogs, setBlogs ] = React.useState([]);
 
  const changeContinent = (newContinent) => {

    const thisContinent = DATA.explore.find(e => e.id === newContinent)

    
    setContinent(thisContinent)
  }

  React.useEffect( () => {
    axios.get(`http://localhost:8800/blogs/all`)
      .then(res => {
        const blogs = res.data;

        setBlogs(blogs.sort(function( a, b ) {
          return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        }))
      })
  }, [])

  function filterComponent() {
     return (
       <div className='blogs-filter-component'>
        <p>Choose a Name:</p>
        <input placeholder='Search' onChange={(event) => setBologName(event.target.value)} value={blogName}/>
        <p>Choose a Category:</p>
        <select name="category" id="category" multiple={true} onChange={(event) => setBlogCategory(event.target.value)} value={blogCategory}>
          {DATA.categories.map((category, index) => (
            <option key={index} value={category.id}>{category.name}</option>
          ))}
        </select>
        <p>Choose a Continent:</p>
        <select name="continent" id="continent" multiple={true} onChange={(event) => changeContinent(event.target.value)} value={continent}>
          {DATA.explore.map((c, index) => (
            <option key={index} value={c.id} >{c.name}</option>
          ))}
        </select>
        <p>Choose a State:</p>
        <select name="states" id="states" multiple={true} onChange={(event) => setBlogState(event.target.value)} value={blogState}>
        {continent.states.map((continent, index) => (
            <option key={index} value={continent.id}>{continent.name}</option>
          ))}
        </select>
        <button>Filter</button>
       </div>
     )
  }

  function blogsComponent() {

    function getContinent(id) {
      
      const continentName = DATA.explore.find(e => e.id === id);
      
      return continentName.name;
    }

    function getCategory(id) {
      
      const categoryName = DATA.categories.find(e => e.id === id);
      
      return categoryName.name;
    }

    return(
      <div className='blog-list-component'>
        {blogs.slice(0,5).map(( blog, index ) => (
          <div key={index} className={index % 2 === 0 ? 'blog-left-img' : 'blog-right-img'}>
            <div className='blogs-image-place'>
              <img src={images.norway} alt='single-blog' className='blogs-single-blog-image' />
              <div className='blog-img-banner'>
                <p className='banner-category'>{getCategory(blog.category)}</p>
              </div>
            </div>
            <div className='blog-nape-place-component'>
              <div className='blog-nape-place'>
                <h3 className='blog-continent-text'>{getContinent(blog.continent)}</h3>
                <h1>{blog.title}</h1>
                <p>{blog.subTitle}</p>
                <Link to={"/blogs/" + blog.slug} state={blog._id} >Keep Reading ...</Link>
                <h4>"{blog.cleverQoute}"</h4>
              </div>
              <div className='blog-date'>
                <Moment fromNow>{blog.createdAt}</Moment>
              </div>
            </div>
          </div>
        ))}
      </div>
    )
  }

  console.log(blogs)

  return (
    <div className='blogs-page'>
      {NavBar()}
      <div className='blogs-page-divider'>
        {blogsComponent()}
        {filterComponent()}
      </div>
    </div>
  );
}

export default Blogs;