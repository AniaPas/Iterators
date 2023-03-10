import React from "react";
import axios from "axios";

/*Exercise 3
Using array of IP addresses — (array of strings) [“1.1.1.1”,“2.2.2..2",“3.3.3.3”,“4.4.4.4"], 
using Axios library for HTTP API calls and API `ip-api.com`, 
return a Promise for a list of objects containing names and companies assigned to IP addresses in the array.
 Use a non-mutable functional-programming approach.

Proper result (inside a Promise):
[
  {ip: "1.1.1.1", country: "Australia", as:"Cloudflare Inc"},
  {ip: "2.2.2.2", country: "Korea", as:"Innyflare Inc"},
]

Tip: Example `ip-api.com` api call for 1.1.1.1 address is a GET to `http://ip-api.com/json/1.1.1.1`
*/

//Solution Excercise 3
const Excercise3 = () => {
  const IPAddressArray = ["1.1.1.1", "2.2.2.2", "3.3.3.3", "4.4.4.4"];
  const APIArray = IPAddressArray.map(
    (item) => `http://ip-api.com/json/${item}`
  );
  const getData = async () => {
    const responseArr = await Promise.all(
      APIArray.map((item) => axios.get(item))
    );
    console.log(responseArr);
    const data = responseArr.map((item) => item.data);
    console.log(data);
    const requiredData = data.map((item) => ({
      ip: item.query,
      country: item.country,
      as: item.as,
    }));
    console.log("Solution to excercise 3", requiredData);
  };
  getData();
  return <div>Excercise3: Excercise3.js file </div>;
};

export default Excercise3;
