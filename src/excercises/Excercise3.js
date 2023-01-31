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
const Excercise3 = () => {
  const IPAddressArray = ["1.1.1.1", "2.2.2.2", "3.3.3.3", "4.4.4.4"];
  const getData = IPAddressArray.map((item) => {
    return axios.get(`http://ip-api.com/json/${item}`);
  });
  console.log(getData);

  return <div>Excercise3</div>;
};

export default Excercise3;
