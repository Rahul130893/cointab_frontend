// age: 25;
// city: "Woodstock";
// country: "Canada";
// createdAt: "2022-12-25T12:36:24.131Z";
// email: "delphine.barnaby@example.com";
// gender: "female";
// name: "Mrs Delphine Barnaby";
// phone: "W48 W99-2869";
// picture: "https://randomuser.me/api/portraits/thumb/women/18.jpg";
// state: "Newfoundland and Labrador";
//name,age, gender, email, city, country,phone, picture,state

import "../App.css"
export const TableList = ({ data }) => {
  return (
    <table border="1px">
      <thead className="head">
        <tr>
          <th>Name</th>
          <th>GENDER</th>
          <th>AGE</th>
          <th>EMAIL</th>
          <th>PHONE</th>
          <th>PICTURE</th>
          <th>CITY</th>
          <th>STATE</th>
          <th>COUNTRY</th>
        </tr>
      </thead>
      <tbody>
        {data.map((e, i) => {
          return (
            <tr key={i}>
              <td>{e.name}</td>
              <td>{e.gender}</td>
              <td>{e.age}</td>
              <td>{e.email}</td>
              <td>{ e.phone}</td>
              <td>
                <img src={e.picture} />
              </td>
              <td>{e.city}</td>
              <td>{e.state }</td>
              <td>{e.country }</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
