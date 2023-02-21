
import "../components/styles/LoadingScreen.scss";
import loadinglogo from "../assets/logo/logo-maa-rmbg.png";

function LoadingScreen() {

  return (
    <div className='loading-screen'>
      <div className="loading-box">
        <img className="loading-logo" src={loadinglogo} alt="Logo" />  
      </div>
    </div>
  )
}

export default LoadingScreen
