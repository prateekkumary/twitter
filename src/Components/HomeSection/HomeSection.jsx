import { Avatar, Button } from '@mui/material'
import { useFormik } from 'formik'
import React from 'react'
import * as Yup from 'yup'
import ImageIcon from '@mui/icons-material/Image';
import { useState } from 'react'
import FmGoodIcon from '@mui/icons-material/Forum';
import TagFacesIcon from '@mui/icons-material/TagFaces';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import TweetCard from './TweetCard';





const validationSchema = Yup.object().shape({
    content: Yup.string().required("Tweet content is required"),

})

const HomeSection = () => {

    const [uploadedImage, setUploadedImage] = useState(false);
    const [selectImage, setSelectImage] = useState("");

    const handleSubmit = (values) => {
        console.log("values", values);
    }

    const formik = useFormik({
        initialValues: {
            content: "",
            image: ""
        },
        onSubmit: handleSubmit,

        validationSchema,
    });

    const handleSelect = (event) => {
        setUploadedImage(true);
        const imgUrl = event.target.files[0];
        formik.setFieldValue("image", imgUrl);
        setSelectImage(imgUrl);
        setUploadedImage(false);
    }



    return (

        <div className="min-h-screen px-5 pt-4 md:px-10 text-left">
            <section className="mb-4">
                <h1 className="text-xl font-bold opacity-90">Home</h1>
            </section>
            <section className={`pb-10`}>
                <div className="flex space-x-3 items-start">
                    <Avatar alt="username"
                        src="https://avatars.githubusercontent.com/u/108705663?v=4" />
                    <div className='w-full'>
                        <form onSubmit={formik.handleSubmit} className='flex flex-col space-y-5'>
                            <div>
                                <input
                                    type="text"
                                    name="content"
                                    placeholder="What's happening?"
                                    className={`border-none outline-none text-xl bg-transparent`}
                                    {...formik.getFieldProps("content")} />
                                {formik.touched.content && formik.errors.content && (
                                    <spam className='text-red-500'>{formik.errors.content}</spam>
                                )}
                            </div>
                            {/* <div>
                                <img src=''/>
                            </div> */}
                            <div className='flex justify-between items-center mt-5'>
                                <div className='flex space-x-5 items-center'>
                                    <label className='flex items-center space-x-2 rounded-md cursor-pointer'> <ImageIcon className='text-[#1d9bf0]' />
                                        <input type='file'
                                            name='imagefile'
                                            className='hidden'
                                            onClick={handleSelect} />

                                    </label>
                                    <FmdGoodIcon className="text-[#1d9bf0]" />
                                    <TagFacesIcon className="text-[#1d9bf0]" />


                                </div>
                                <div>
                                    <Button sx={{ width: "100%", borderRadius: "20px", paddingY: "8px", paddingX: "20px", bgColor: "#1e88e5" }} variant='contained' type='submit' >
                                        Tweet
                                    </Button>
                                </div>
                            </div>

                        </form>

                    </div>
                </div>

            </section>
            <section>

            </section>
            {[1,1,1,1,1,1].map((item)=><TweetCard />)}

        </div>
    )
}

export default HomeSection