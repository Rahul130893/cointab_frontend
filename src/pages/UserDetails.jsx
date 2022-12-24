

import { useNavigate } from "react-router-dom";


export const UserDetails = () => {
    const navigate = useNavigate()
    const navigateHome = () => {
        navigate("/")
    }
    return (
      <div>
       
          <button onClick={navigateHome}>GO_To_HOME</button>
        
      </div>
    );
}