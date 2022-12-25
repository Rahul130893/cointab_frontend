import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../App.css"


export const Home = () => {
  const [data, setData] = useState([]);
  const [gettingComplete, setGettingComplete] = useState(false);
  const [ispostingComplete, setIsPostingComplete] = useState(true);

  let url = "https://randomuser.me/api";

  let arr = new Array(10).fill(0);


  //getting data through API
  const getData = async () => {
    setIsPostingComplete(false);

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
    setGettingComplete(true);
  };


  
  useEffect(() => {
    if (gettingComplete === true && ispostingComplete==false) {
      console.log("post");
      postData();
    }
  }, [getData]);


  // function to post all the data to the mongoDB
  const postData = async () => {
    let arrToPost = [];

    data.map((e) => {
      const User = new Object();
      User.name = e.name.title + " " + e.name.first + " " + e.name.last;
      User.age = e.dob.age;
      User.gender = e.gender;
      User.phone = e.phone;
      User.picture = e.picture.thumbnail;
      User.email = e.email;
      User.city = e.location.city;
      User.state = e.location.state;
      User.country = e.location.country;
      arrToPost.push(User);
    });
    
    try {
      const response = await fetch(
        "https://cointab-server-rgxp.onrender.com/users",
        {
          method: "POST",
          headers: { "Content-type": "application/json" },
          body: JSON.stringify(arrToPost),
        }
      );

      const res = await response.json();
      //console.log("res", res);
      setIsPostingComplete(true);
    } catch (error) {
      console.log(error);
    }
  };

//function to delete all users from  database
  const handleDelete = async () => {
    try {
      const resp = await fetch(
        `https://cointab-server-rgxp.onrender.com/users`,
        {
          method: "DELETE",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      )
      const ress = await resp.json();
      console.log(ress)
   alert("Entire Data is Deleted")
    } catch (error) {
      alert(error)
    }
  }

  return (
    <div className="home">
      <div>{ispostingComplete === false ? <div>...loading</div> : null}</div>

      <button
        onClick={() => getData()}
        disabled={ispostingComplete === false ? true : false}
        className="fetchUser"
      >
        Fetch User
      </button>
      <button className="DeletUser" onClick={()=>handleDelete()}>Delete User</button>

      <Link to={"./userDetails"}>
        <button className="userDetails">User Details</button>
      </Link>
    </div>
  );
};
