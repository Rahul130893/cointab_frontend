import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { List } from "../components/List";

export const Home = () => {
  const [data, setData] = useState([]);

  let url = "https://randomuser.me/api";

    let arr = new Array(10).fill(0);
    

   

  const getData = async () => {
    let temp = [];
    try {
      await Promise.all(
        arr.map(async (e) => {
          const response = await fetch(url);
          const list = await response.json();

            temp.push(list.results[0]);
            
        })
      );
      setData(temp);
    } catch (error) {
      console.log(error);
    }
    };

    useEffect(() => {
        if (data.length != 0) {
            console.log("post");
            postData()
         }
       
    }, [getData]);
    

    const postData = () => {
        let arrToPost = []
        // function User(name, gender) {
        //     this.name = name,
        //         this.gender=gender
        // }

       
        data.map((e) => {
            const User = new Object();
            User.name = e.name.first + " " + e.name.title
            User.gender = e.gender
            arrToPost.push(User)
            
        })
        console.log(arrToPost)
    }
    
  
  return (
    <div>
      
        <button onClick={() => getData()}>Fetch User</button>
        <button>Delete User</button>
      
      <Link to={"./userDetails"}>
        <button>User Details</button>
      </Link>

      {data?.map((e, i) => {
        return (
          <div key={i}>
            <List gender={e.gender} />
          </div>
        );
      })}
    </div>
  );
};
