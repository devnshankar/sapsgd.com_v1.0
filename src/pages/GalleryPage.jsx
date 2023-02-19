import "../pages/styles/GalleryPage.scss"
import React from "react"
import img1 from "../assets/images/schoolpic.jpg"
import img2 from "../assets/images/schoolpic1.jpg"
import img3 from "../assets/images/schoolpic2.jpg"
import img4 from "../assets/images/schoolpic3.jpg"


function GalleryPage() {

  return (
    <div className="gallery">
      <img src={img1} alt=''/>
      <img src={img2} alt=''/>
      <img src={img3} alt=''/>
      <img src={img4} alt=''/>
    </div>
  )
}

export default GalleryPage
