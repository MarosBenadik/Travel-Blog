import React from 'react';

import LogedNavBar from '../../components/LogedNavBar/LogedNavBar';

import axios from 'axios';

import { useNavigate } from 'react-router-dom';

import DATA from '../../public/assets/DATA';

import "./CreateBlog.css"

import Select from 'react-select';

import Modal from 'react-modal';

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
};

Modal.setAppElement('body');


const CreateBlog = () => {

    const userRef = React.useRef();

    const [ previewSource, setPreviewSource ] = React.useState();
    const [fileInputState, setFileInputState ] = React.useState();

    const [ title, setTitle ] = React.useState(null);
    const [ category, setCategory ] = React.useState(null);
    const [ state, setState ] = React.useState(null);
    const [ continent, setContinent ] = React.useState(null);
    const [ cleverQoute, setCleverQoute ] = React.useState(null);
    const [ subTitle, setSubTitle ] = React.useState(null);
    const [ partOne, setPartOne ] = React.useState(null);
    const [ partTwo, setPartTwo ] = React.useState(null);
    const [ partThree, setPartThree ] = React.useState(null);
    const [ partFour, setPartFour ] = React.useState(null);
    const [ author, setAuthor ] = React.useState(null);

    const [ mainImg, setMainImg ] = React.useState();
    const [ blogImg, setBlogImg ] = React.useState(null);
    const [ img, setImg ] = React.useState(null);
    const [ img1, setImg1 ] = React.useState(null);
    const [ img2, setImg2 ] = React.useState(null);
    const [ img3, setImg3 ] = React.useState(null);

    let subtitle;
    let navigate = useNavigate();
    const [ modalIsOpen, setIsOpen ] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }
    
    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = '#D1aCA5';
    }
    
    function closeModal() {
        setIsOpen(false);
        navigate('/dashboard');
    }

    const stateChoice = [
        {value: "Select Continent First", label: "Select Continent First"}
    ]

    React.useEffect(() => {
        userRef.current.focus();
    }, []);

    const previewMainImgFile = (file) => {
        const reader = new FileReader();
        reader.readAsDataURL(file)
        reader.onload = () => {
            setPreviewSource(reader.result)
            setMainImg(reader.result)
        }
    }

    const previewBlogImgFile = (file) => {
        const reader = new FileReader();
        reader.readAsDataURL(file)
        reader.onload = () => {
            setPreviewSource(reader.result)
            setBlogImg(reader.result)
        }
    }
    const previewImgFile = (file) => {
        const reader = new FileReader();
        reader.readAsDataURL(file)
        reader.onload = () => {
            setPreviewSource(reader.result)
            setImg(reader.result)
        }
    }
    const previewImg1File = (file) => {
        const reader = new FileReader();
        reader.readAsDataURL(file)
        reader.onload = () => {
            setPreviewSource(reader.result)
            setImg1(reader.result)
        }
    }
    const previewImg2File = (file) => {
        const reader = new FileReader();
        reader.readAsDataURL(file)
        reader.onload = () => {
            setPreviewSource(reader.result)
            setImg2(reader.result)
        }
    }
    const previewImg3File = (file) => {
        const reader = new FileReader();
        reader.readAsDataURL(file)
        reader.onload = () => {
            setPreviewSource(reader.result)
            setImg3(reader.result)
        }
    }

    const uploadImage = async () => {

        console.log("actual upload ")
        try{
            await axios.post(`http://localhost:8800/blogs/add`, 
                JSON.stringify({
                    title: title,
                    category: category,
                    cleverQoute: cleverQoute,
                    continent: continent,
                    country: state,
                    subTitle: subTitle,
                    partOne: partOne,
                    partTwo: partTwo,
                    partThree: partThree,
                    partFour: partFour,
                    author: author,
                    mainImg: mainImg,
                    blogImg: blogImg,
                    img: img,
                    img1: img1,
                    img2: img2,
                    img3: img3,
                }),
                {
                    headers: { 'Content-Type': 'application/json'},
                    AccessControlAllowredentials: true,
                    withCredentials: true
                }
            ).then((response) => {
                if (response.status === 200) {
                    openModal()
                } else {
                    console.log("error")
                }
            });

        } catch (err){
            console.log(err.message);
        }
    }

    const handleMainImgInput = (e) => {
        const file = e.target.files[0];
        previewMainImgFile(file);
    }

    const handleBlogImgInput = (e) => {
        const file = e.target.files[0];
        previewBlogImgFile(file);
    }

    const handleImgInput = (e) => {
        const file = e.target.files[0];
        previewImgFile(file);
    }

    const handleImg1Input = (e) => {
        const file = e.target.files[0];
        previewImg1File(file);
    }

    const handleImg2Input = (e) => {
        const file = e.target.files[0];
        previewImg2File(file);
    }

    const handleImg3Input = (e) => {
        const file = e.target.files[0];
        previewImg3File(file);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("here")
        if (!previewSource) return;
        uploadImage()
    }

    return (            
        <div className='create-blog'>
            {LogedNavBar()}
            <div className="createblog-form">
                <form className='create-blog-form' onSubmit={handleSubmit}>
                    <label htmlFor='title'>Blog Title:</label>
                    <input className='input-title' type="Text" id="title"  ref={userRef} autoComplete="off" onChange={(e) => setTitle(e.target.value)} value={title} required placeholder='Blog Title'/>
                    <div className='create-blog-choices'>
                        <label htmlFor='category'>Category:</label>
                        <Select
                            defaultValue={category}
                            onChange={setCategory}
                            options={DATA.categories}
                            placeholder='Select Category'
                        />
                        <label htmlFor='continent'>Continent:</label>
                        <Select
                            defaultValue={continent}
                            onChange={setContinent}
                            options={DATA.explore}
                            placeholder='Select Continent'
                        />
                        <label htmlFor='continent'>State:</label>
                        <Select
                            defaultValue={state}
                            onChange={setState}
                            options={continent === null ? stateChoice : continent.states}
                            placeholder='Select State'
                        />
                    </div>
                    <label htmlFor='cleverQoute'>Travel Quote:</label>
                    <input className='input-title' type="Text" id="cleverQoute"  ref={userRef} autoComplete="off" onChange={(e) => setCleverQoute(e.target.value)} value={cleverQoute} required placeholder='Travel Quote'/>
                    <label htmlFor='subTitle'>Sub Title:</label>
                    <input className='input-title' type="Text" id="subTitle"  ref={userRef} autoComplete="off" onChange={(e) => setSubTitle(e.target.value)} value={subTitle} required placeholder='Sub Title'/>
                    <label htmlFor='partOne'>Part One:</label>
                    <textarea className='text-area-part' rows={20} type="Text" id="partOne"  ref={userRef} autoComplete="off" onChange={(e) => setPartOne(e.target.value)} value={partOne} required placeholder='Part One '/>
                    <label htmlFor='partTwo'>Part Two:</label>
                    <textarea className='text-area-part' rows={20} type="Text" id="partTwo"  ref={userRef} autoComplete="off" onChange={(e) => setPartTwo(e.target.value)} value={partTwo} required placeholder='Part Two'/>
                    <label htmlFor='partThree'>Part Three:</label>
                    <textarea className='text-area-part' rows={20} type="Text" id="partThree"  ref={userRef} autoComplete="off" onChange={(e) => setPartThree(e.target.value)} value={partThree} required placeholder='Part Three'/>
                    <label htmlFor='partFour'>Part Four:</label>
                    <textarea className='text-area-part' rows={20} type="Text" id="partFour"  ref={userRef} autoComplete="off" onChange={(e) => setPartFour(e.target.value)} value={partFour} required placeholder='Part Four'/>
                    <div className='create-blog-image'>
                        <label htmlFor='mainImg'>Main Image:</label>
                        <input type='file' name="mainImg" onChange={handleMainImgInput} value={fileInputState} className='image-input'/>
                        <label htmlFor='blogImg'>Blog Image:</label>
                        <input type='file' name="blogImg" onChange={handleBlogImgInput} value={fileInputState} className='image-input'/>
                        <label htmlFor='img'>Image 1:</label>
                        <input type='file' name="img" onChange={handleImgInput} value={fileInputState} className='image-input'/>
                    </div>
                    <div className='create-blog-image'>
                        <label htmlFor='img1'>Image 2:</label>
                        <input type='file' name="img" onChange={handleImg1Input} value={fileInputState} className='image-input'/>
                        <label htmlFor='img2'>Image 3:</label>
                        <input type='file' name="img" onChange={handleImg2Input} value={fileInputState} className='image-input'/>
                        <label htmlFor='img3'>Image 4:</label>
                        <input type='file' name="img" onChange={handleImg3Input} value={fileInputState} className='image-input'/>
                    </div>
                    <label htmlFor='cleverQoute'>Author:</label>
                    <input className='input-title' type="Text" id="author"  ref={userRef} autoComplete="off" onChange={(e) => setAuthor(e.target.value)} value={author} required placeholder='Author'/>

                    <button className='upload-blog-buttom' type='submit'>Upload</button>
                    
                </form>
                {previewSource && (
                        <div className='preview-container'>
                            <img src={previewSource} alt='chosen' style={{height: '300px'}} />
                        </div>
                )}
            </div>
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Succes upload"
            >
                <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Succesfully Uploaded</h2>
                <button onClick={closeModal}>close</button>
            </Modal>
        </div>
    )
}

export default CreateBlog;