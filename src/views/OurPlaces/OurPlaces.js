import React from 'react';
import './OurPlaces.css';

import Slider from 'react-slick';

import images from '../../public/images/images';

import NavBar from '../../components/NavBar/NavBar';

import { Link } from 'react-router-dom';

import axios from 'axios';

import DATA from '../../public/assets/DATA';

import AddSide from '../../components/adds/AddSide';

import Wetravel from '../../components/Wetravel/Wetravel';

import ReactLoading from 'react-loading';

import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';

import data from '../../public/assets/DATA';

import { Image, Transformation } from 'cloudinary-react';

const OurPlaces = () => {

  const slider_images = [images.europe, images.asia, images.australia, images.africa, images.south_amerika, images.north_amerika];

  const [ imageIndex, setImageIndex ] = React.useState(0);

  const [ categoryIndex, setCategory ] = React.useState(0);

  const [ loading, setLoading ] = React.useState(true);

  const [ newBlogs, setNewBlogs ] = React.useState([]);

  const [ categoryBlogs, setCategoryBlogs ] = React.useState([])

  const recomendedBlogs = newBlogs.slice(0,5).sort(({likes:a}, {likes:b}) => b-a);

  React.useEffect( () => {
    axios.get(`http://localhost:8800/blogs/all`)
      .then(res => {
        const blogs = res.data;
        
        const initialBlogs = blogs.sort(function( a, b ) {
          return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        })

        setNewBlogs(blogs.sort(function( a, b ) {
          return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        }))
        setCategoryBlogs(initialBlogs.slice(0,6))
        setLoading(false);
      })
  }, [])

  function handleCategoryChange(index) {
    const changeBlogs = newBlogs.filter(x => x.category === index && x.continent === imageIndex );
    setCategoryBlogs(changeBlogs)
  }

  function NextArrow({onClick}) {
    return (
      <div className='arrow back' onClick={onClick} >
        <FaArrowRight />
      </div>
    )
  }

  function PrevArrow({onClick}) {
    return (
      <div className='arrow next' onClick={onClick} >
        <FaArrowLeft />
      </div>
    )
  }

  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 500,
    slidesToShow: 5,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => {
      setImageIndex(next)
    }
  }

  const categorySettings = {
    infinite: true,
    lazyLoad: true,
    speed: 500,
    slidesToShow: 6,
    centerMode: true,
    centerPadding: -10,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => {
      setCategory(next)
      handleCategoryChange(next)
    }
  }

  function topComponent() {
    return (
      <div className='map'>
        <Slider {...settings}>
          {slider_images.map((img, index) => (
            <div key={index} className={index === imageIndex ? "activeSlide" : "inactiveSlide"} onClick={() => setImageIndex(index)}>
              <img src={img} alt={img} className='img-size'/>
            </div>
          ))}
        </Slider>
      </div>
    )
  }

  function middleComponent() {

    const continent = data.continents.find(x => x.id === imageIndex);

    return (
      <div className='middleComponent'>
        <div className='desc'>
          <p className='title-text'>{continent.name}</p>
          <p className='desc-text'>{continent.desc}</p>
        </div>
        <div className='singlcontinent-imgs'>
          <img src={continent.image} alt='continent1' className='single-continent-img'/>
          <img src={continent.image1} alt='continent2' className='single-continent-img1'/>
        </div>
      </div>
    )
  }

  function categoryComponent() {
    return (
      <div className='category'>
        <Slider {...categorySettings}>
          {data.categories.map((category, index) => (
            <div key={index} className={index === categoryIndex ? "activeCategory" : "inactiveCategory"} onClick={() => {
                setCategory(index)
                handleCategoryChange(index)}}>
              <img src={category.image} alt={category.name} className='category-image'/>
              <p className='category-name'>{category.name}</p>
            </div>
          ))}
        </Slider>
      </div>
    )
  }

  function getCategory(category) {
    const blogCategory = DATA.categories.find(x => x.id === category)
    return blogCategory.name
  }

  function recomendedBlogsSection() {
    return (
      <div >
        {recomendedBlogs.map((blog, index) => (
          <div key={index} className='recomended-blog' >
            <p>{blog.title}</p>
            <h3>{getCategory(blog.category)}</h3>
            <Link to={"/blogs/" + blog.slug} state={blog._id} style={{ textDecoration: 'none' }}>Keep Reading ...</Link>
          </div>
        ))}
      </div>
    )
  }

  function getCountry(country) {
    const findCountry = DATA.states.find(x => x.id === country);
    return findCountry.name;
  }

  function blogsSection() {

    function firstBlog() {

      const blog = categoryBlogs[0];

      return (
        <div className='mainblog-destinations'>
          <Image cloudName="ditsdxnax" publicId={blog.mainImg}>
            <Transformation dpr="auto" responsive width="800" gravity="south" crop="fit" />
            <Transformation effect="art:hokusai" />
            <Transformation border="3px_solid_rgb:00390b" />
          </Image>
          <h1>{blog.title}</h1>
          <Link to={"/blogs/" + blog.slug} state={blog._id} style={{ textDecoration: 'none' }}>Keep reading ...</Link>
          <p>{blog.subTitle}</p>
        </div>
      )
    }

    function restOfBlogs() {
      return (
        <div className='restOfBlogs'>
          {categoryBlogs.slice(1).map((blog, index) => (
            <div className='single-blog-destinations'>
              <Image cloudName="ditsdxnax" publicId={blog.mainImg}>
                <Transformation dpr="auto" responsive width="200" gravity="south" crop="fit" />
                <Transformation effect="art:hokusai" />
                <Transformation border="3px_solid_rgb:00390b" />
              </Image>
              <p>{blog.title}</p>
              <p>{getCountry(blog.country)}</p>
              <Link to={"/blogs/" + blog.slug} state={blog._id} style={{ textDecoration: 'none' }}>Keep reading ...</Link>

            </div>
          ))}
        </div>
      )
    }

    return (
      <div>
        {firstBlog()}
        {restOfBlogs()}
      </div>
    )
  }

  function noblogs() {
    return (
      <div>
        <p>Curently no Blogs</p>
      </div>
    )
  }

  function blogsComponent() {

    const curent_category = data.categories.find(x => x.id === categoryIndex);

    return (
      <div className='blogs'>
        <div className='right-part'>
          <p className='newest'>{curent_category.name}</p>
          {categoryBlogs.length !== 0 ? blogsSection() : noblogs()}
        </div>
        <div className='left-part'>
          <p className='recomended'>Recomended:</p>
          {recomendedBlogsSection()}
          {AddSide()}
          {Wetravel()}
        </div>
      </div>
    )
  }

  if(loading) {
    return (
      <div className='navbar'>
          {NavBar()}
          <ReactLoading type="balls" color="#fff" height={'20%'} width={'20%'}/>
      </div>
    )
  }

  return (
    <div className='OurPlaces'>
      <div className='navbar'>
          {NavBar()}
      </div>
      {topComponent()}
      {middleComponent()}
      {categoryComponent()}
      {blogsComponent()}
    </div>
  );
}

export default OurPlaces;