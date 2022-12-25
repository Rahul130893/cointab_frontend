

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { TableList } from "../components/TableList";
import "../App.css"

export const UserDetails = () => {

    const [received, setReceived] = useState([])
   

    const navigate = useNavigate()
    const navigateHome = () => {
        navigate("/")
    }

//function to get data  from database
    useEffect(() => {
     getdata_from_db()    
    }, [])
    
    const getdata_from_db = async () => {
          try {
            const response = await fetch(
              "https://cointab-server-rgxp.onrender.com/users"
             
            );

            const res = await response.json();
            console.log("res", res);
            setReceived(res.user)
          } catch (error) {
            console.log(error);
          }
        
    }

    const handleChange = (e) => {
        console.log(e.target.value)
        let x = e.target.value
        

        if (e.target.value !== "") {
              const filtering = received.filter((e) => {
                return e.gender === x;
              });
              console.log(filtering);
              setReceived(filtering);
        } else {
            getdata_from_db()
        }
        
      
    }

    return (
      <div className="list">
        <div className="top">
          <button onClick={navigateHome}>GO_TO_HOME</button>
          <select className="filterbyGender" onChange={handleChange}>
            <option value={""}>ALL</option>
            <option value={"male"}>Male</option>
                    <option value={"female"}>Female</option>
          </select>
        </div>

        <div>
          <TableList data={received} />
        </div>
      </div>
    );
}