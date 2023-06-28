/* eslint-disable */
import React, { useState } from 'react'
import { storage } from '../../firebase/config.jsx'
import { ref, uploadBytes } from 'firebase/storage'

export default function UploadForm () {

  const [imageUpload, setImageUpload] = useState(null)
  const types = ['image/png', 'image/jpeg']

  const uploadImage = () => {
      if (imageUpload == null) return
      alert("")
        const randomString = Array.from({ length: 10 }, () => String.fromCharCode(97 + Math.floor(Math.random() * 26))).join('');
        let imageRef = ref(storage, `images/${imageUpload.name + randomString}`)
        uploadBytes(imageRef, imageUpload)

  }
  
  return (

        <form>
            <input type="file" onChange={(e) => {setImageUpload(e.target.files[0])}}/>
            <button onClick={uploadImage}>Upload your Image</button>
            <div className='output'>

            </div>
        </form>
  )
}
