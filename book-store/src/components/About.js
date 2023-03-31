import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";


const About = () => {
  return <div className="bg">
    <Box display="flex" flexDirection="column" alignItems="center">
    <br>
         </br>
        <Typography sx={{ fontFamily:"fantasy"}} variant="h2">
            Welcome MYLINE BOOKSTORE Application 
        </Typography>
        <br>
         
         </br>
        <Typography sx={{ fontFamily:"fantasy"}} variant="h3">
            By ZhenniChao
        </Typography>
        <br>
         
         </br>
        <Typography sx={{ fontSize:'large' }} variant="h5">
        <br>
         
         </br>
         <ul>
          <li>
          MYLINE Bookstore is a website that allows customers to browse, add and delete books to their own collection through the internet. <br></br>
          In recent years, online bookstores have become increasingly popular due to the convenience they offer. <br></br>
          Customers can read and save books from the comfort of their own homes, without having to physically visit a brick-and-mortar bookstore <br></br>
          </li>
        
          <li>
          The functionality of an MYLINE bookstore offer a ability to add faviouriate books into your own collections. <br></br>
          Customers can view existing book repository, add or remove the books upon their needs.<br></br> 
          </li>

          <li>
          User can adding booknames, author names, descriptions, price and availablity into their collections. <br></br>
          The website may also include feature book reviews, ratings, and recommendations to help customers make informed purchase decisions for future developement.<br></br>
          </li>
          
          <li>
          MYLINE bookstores will offer e-books in the future, which customers can purchase and download directly to their e-reader devices <br></br>
          This feature is particularly appealing to customers who prefer digital copies of books or who live in areas without access to physical bookstores. <br></br>
          </li>
        
          <li>
         Overall, an online bookstore offers a convenient and easy way for customers to browse and purchase books from anywhere in the world.<br></br>
         </li>
         </ul>
        </Typography>
    </Box>
    </div>;
};

export default About;
