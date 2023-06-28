/* eslint-disable */
import React, { useState } from 'react'
import { storage } from '../config.jsx'
import { ref, uploadBytes } from 'firebase/storage'

export default function UploadForm () {

  const [imageUpload, setImageUpload] = useState(null)
  const types = ['image/png', 'image/jpeg']

  const uploadImage = () => {
      if (imageUpload == null) return
        const randomString = 123
        let imageRef = ref(storage, `images/${imageUpload.name + randomString}`)

        

  }
  
  return (

        <form>
            <input type="file" onChange={(e) => {setImageUpload(e.target.files[0])}}/>
            <button onClick={uploadImage}>Upload your Image</button>

        </form>
  )
}
