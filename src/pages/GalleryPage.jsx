import "../pages/styles/GalleryPage.scss"
import React from "react"
import ImageSlider from "../components/ImageSlider"
import { SliderData } from "../components/SliderData"


function GalleryPage() {

  return (
    <div className="gallerypage">
      <ImageSlider slides={SliderData}/>
    </div>
  )
}

export default GalleryPage
