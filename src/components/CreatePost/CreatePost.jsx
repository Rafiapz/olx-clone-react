import React, { useState } from 'react'
import {db, storage} from '../../firebase/config'
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'
import { addDoc, collection } from 'firebase/firestore'
import Header from '../header/Header'

function CreatePost() {

    const [img,setImg]=useState()

    const [imageBlob,setImageBlob]=useState({})

    const handleSubmit = async () => {
        console.log('Submitting:', imageBlob);
      
        if (!imageBlob) {
          console.error('No image selected');
          return;
        }
      
        const imageRef = ref(storage, `Products/${imageBlob.name}`);
        console.log('Image Reference:', imageRef);
      
        try {
          await uploadBytes(imageRef, imageBlob);
          console.log('Image uploaded successfully');
      
          const url = await getDownloadURL(imageRef);
          console.log('Download URL:', url);
      
          const productsCollection = collection(db, 'products');
          console.log('Products Collection Reference:', productsCollection);
      
          await addDoc(productsCollection, {
            userId: 'GNbK99BNFeRtyM6tAipWxNEkpYX2',
            createdAt: new Date().toLocaleString(),
            form: '...form',
            imageUrl: url,
          });
      
          console.log('Successfully submitted');
          alert('Successfully submitted');
        } catch (error) {
          console.error('Error:', error);
          alert(error.message || 'Submission failed');
        }
      };
      
    
    const handleUploadImage=(event)=>{

        const url = URL.createObjectURL(event.target.files[0]);
        setImg(url);
        setImageBlob(event.target.files[0])

    }

    return (

        <>
        <Header/>
            <div className='create-post-container px-32 pt-2'>
                <h4 className='w-full text-center text-2xl py-4'>POST YOU AD</h4>
                <div className="form-container border-2 rounded">
                    <form action="">
                        <div className="form-item border-b px-6 py-4 flex flex-col gap-4">
                            <h4>SELECTED CATEGORY</h4>
                            <div className='flex items-center gap-4'>
                                <h6 className='text-xs text-slate-600'></h6>
                                <h6 className='text-xs underline cursor-pointer'>Change</h6>
                            </div>
                        </div>
                        <div className="form-items border-b px-6 py-4 flex flex-col gap-4">
                            <h4 className='w-full'>INCLUDE SOME DETAILS</h4>
                            <div className="form-item flex flex-col gap-2">
                                <h6 className='text-xs font-normal'>Ad title</h6>
                                <input type="text" name='title'  className='focus:outline-none border-2 px-4 py-2 w-1/2' />
                            </div>
                            <div className="form-item flex flex-col gap-2">
                                <h6 className='text-xs font-normal'>Description</h6>
                                <input type="text" name='description' className='focus:outline-none border-2 px-4 py-2 w-1/2' />
                            </div>
                            <div className="form-item flex flex-col gap-2">
                                <h6 className='text-xs font-normal'>Set a price</h6>
                                <input type="text" name='price'  className='focus:outline-none border-2 px-4 py-2 w-1/2' />
                            </div>
                        </div>
                        <div className="form-items border-b px-6 py-4 flex flex-col gap-4">
                            <div className="form-item flex flex-col gap-2">
                                <h6 className='text-xs font-normal'>Upload a photo</h6>
                                <input type="file" name='imageUrl' onChange={handleUploadImage} className='border-2 px-4 py-2 w-1/2 text-sm font-normal' />
                                <div className='py-4'>
                                    <img src={img} alt="" className='w-10 h-10' />
                                </div>
                            </div>
                        </div>
                        <div className="form-items border-b px-6 py-4 flex flex-col gap-4">
                            <h4 className='w-full'>CONFIRM YOUR LOCATION</h4>
                            <div className="form-item flex flex-col gap-2">
                                <h6 className='text-xs font-normal'>State</h6>
                                <select name="state"  className='border-2 px-4 py-2 w-1/2 text-sm font-normal'>
                                    <option value="kerala">kerala</option>
                                    <option value="Karnataka">Karnataka</option>
                                    <option value="TamilNadu">TamilNadu</option>
                                </select>
                            </div>
                            <div className="form-item flex flex-col gap-2">
                                <h6 className='text-xs font-normal'>City</h6>
                                <select name="city" className='border-2 px-4 py-2 w-1/2 text-sm font-normal'>
                                    <option value="palakkad">Palakkad</option>
                                    <option value="malappuram">Malappuram</option>
                                    <option value="calicut">Calicut</option>
                                </select>
                            </div>
                        </div>
                        <div className="form-items border-b px-6 py-4 flex flex-col gap-4">
                            <button type='button' onClick={handleSubmit}  className='w-max px-6 py-2 bg-emerald-900 rounded text-base font-medium text-white'>Post</button>
                        </div>
                    </form>
                </div>
            </div>

        </>
    )
}

export default CreatePost