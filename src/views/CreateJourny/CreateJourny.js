import React from 'react';

import './Createjourny.css';

import NavBar from '../../components/LogedNavBar/LogedNavBar';

import Select from 'react-select';

import DATA from '../../public/assets/DATA';

import Modal from 'react-modal';

import { useNavigate } from 'react-router-dom';

import axios from 'axios';

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

const CreateJourny = () => {

    const userRef = React.useRef();

    React.useEffect(() => {
        userRef.current.focus();
    }, []);

    const [ category, setCategory ] = React.useState(null);

    const [ state, setState ] = React.useState(null);

    const [ city, setCity ] = React.useState(null);

    const [ year, setYear ] = React.useState(null);

    const [ desc, setDesc ] = React.useState(null);

    const [ modalIsOpen, setIsOpen ] = React.useState(false);

    const [ img, setImg ] = React.useState(null);

    let subtitle;

    let navigate = useNavigate();

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


    const handleSubmit = async () => {

        try{
            await axios.post(`http://localhost:8800/journy/add`, 
                JSON.stringify({
                    city: city,
                    category: category,
                    year: year,
                    state: state,
                    country: state,
                    img: img,
                    desc: desc,
                }),
                {
                    headers: { 'Content-Type': 'application/json'},
                    AccessControlAllowredentials: true,
                    withCredentials: true
                }
            ).then((response) => {
                if (response) {
                    openModal()
                } else {
                    console.log("error")
                }
            });

        } catch (err){
            console.log(err.message);
        }
    }

    const ImgFile = (file) => {
        const reader = new FileReader();
        reader.readAsDataURL(file)
        reader.onload = () => {
            setImg(reader.result)
        }
    }

    const handleBlogImgInput = (e) => {
        const file = e.target.files[0];
        ImgFile(file);
    }

    return (
        <div className='CreateJourny-page'>
            {NavBar()}
            <form className='create-journy' onSubmit={handleSubmit}>
                <h3>Enter City</h3>
                <input placeholder="City ..." type="Text" id="city"  ref={userRef} autoComplete="off" onChange={(e) => setCity(e.target.value)} value={city} required/>
                <div className='create-blog-choices'>
                    <h3>Select Category:</h3>
                    <Select
                        defaultValue={category}
                        onChange={setCategory}
                        options={DATA.categories}
                        placeholder='Select Category'
                    />
                    <h3>Select State:</h3>
                    <Select
                        defaultValue={state}
                        onChange={setState}
                        options={DATA.states}
                        placeholder='Select State'
                    />
                </div>
                <h3>Enter Year</h3>
                <input placeholder="Year ..." type="Text" id="city"  ref={userRef} autoComplete="off" onChange={(e) => setYear(e.target.value)} value={year} required/>
                <h3>Enter Descripion:</h3>
                <textarea placeholder="Description ..." type="Text" id="city"  ref={userRef} autoComplete="off" onChange={(e) => setDesc(e.target.value)} value={desc} required/>
                <h3>Enter Image:</h3>
                <input placeholder="Year ..." type="file" id="city"  ref={userRef} autoComplete="off" onChange={handleBlogImgInput} value={""} required/>
                <button className='upload-blog-buttom' type='submit'>Upload</button>
            </form>
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
  );
}

export default CreateJourny;