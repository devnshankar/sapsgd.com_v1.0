
import "../components/styles/LoadingScreen.scss";
import { MoonLoader } from 'react-spinners';

function LoadingScreen() {

  return (
    <div className="loading-spinner">
      <MoonLoader  color={'rgba(26, 179, 26, 1.863)'} loading={true} size={70} />
    </div>
  )
}

export default LoadingScreen
