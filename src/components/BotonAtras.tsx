import { IoChevronBackOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
const BotonAtras = () => {
  return (
    <div>
        <button><Link to="/login" className="text-white text-sm flex items-center hover:scale-110"><IoChevronBackOutline /> Regresar</Link></button>
    </div>
  )
}

export default BotonAtras