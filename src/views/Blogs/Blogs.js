import React from 'react';

import { Link } from 'react-router-dom';

import './Blogs.css';

import axios from 'axios';

import DATA from '../../public/assets/DATA';

import NavBar from '../../components/NavBar/NavBar';

import Moment from 'react-moment';

import AddSide from '../../components/adds/AddSide';

import Select from 'react-select';

import InstagramSide from '../../components/InstagramSide/InstagramSide';

const Blogs = ({category}) => {

  //filter 
  const [ continent, setContinent ] = React.useState(null);
  const [ blogName, setBologName ] = React.useState(null);
  const [ blogCategory, setBlogCategory ] = React.useState(null);
  const [ blogState, setBlogState ] = React.useState(null);

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

    const stateChoice = [
      {value: "Select Continent First", label: "Select Continent First"}
    ]

    return (
      <div className='blogs-filter-component'>
        <span className='clear-filter-part'><h3>Search:</h3><buttom className='clear-filter-buttom' onClick={() => {
          setContinent(null)
          setBologName(null)
          setBlogCategory(null)
          setBlogState(null)
        }}>Clear Filter</buttom></span>
        <p>Search by Name:</p>
        <input placeholder='Search' className='blogs-search-placeholder' onChange={(event) => setBologName(event.target.value)} value={blogName}/>
        <h3>Filter</h3>
        <p>Choose a Category:</p>
        <Select
          defaultValue={blogCategory}
          onChange={setBlogCategory}
          options={DATA.categories}
          placeholder='Select Category'
        />
        <p>Choose a Continent:</p>
        <Select
          defaultValue={continent}
          onChange={setContinent}
          options={DATA.explore}
          placeholder='Select Continent'
        />
        <p>Choose a State:</p>
        <Select
          defaultValue={blogState}
          onChange={setBlogState}
          options={continent === null ? stateChoice : continent.states}
          placeholder='Select State'
        />
        <button className='blogs-filter-butom'>Filter</button>
        {AddSide()}
        {InstagramSide()}
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
              <img src={blog.mainImg} className='slider-image-blogs' alt='blog'/>
              <div className='blog-img-banner'>
                <p className='banner-category'>{getCategory(blog.category)}</p>
              </div>
            </div>
            <div className='blog-nape-place-component'>
              <div className='blog-nape-place'>
                <h3 className='blog-continent-text'>{getContinent(blog.continent)}</h3>
                <h1 className='blogs-title-text'>{blog.title}</h1>
                <p className='blogs-subtitle-text'>{blog.subTitle}</p>
                <Link to={"/blogs/" + blog.slug} state={blog._id} style={{ textDecoration: 'none' }}>Keep Reading ...</Link>
                <h4 className='blogs-title-text'>"{blog.cleverQoute}"</h4>
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

  return (
    <div className='blogs-page'>
      {NavBar()}
      <div className='blogs-page-top'>
        <h1>Away From Routine.</h1>
        <p className='blog-continent-text'>“Traveling – it leaves you speechless, then turns you into a storyteller”</p>
      </div>
      <div className='blogs-page-divider'>
        {blogsComponent()}
        {filterComponent()}
      </div>
    </div>
  );
}

export default Blogs;