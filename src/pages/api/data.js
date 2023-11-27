import article3 from "../../../public/images/articles/embracing-full-stack-development-modern-tech-landscape.jpg";
import article4 from "../../../public/images/articles/form validation in reactjs using custom react hook.png";
import article5 from "../../../public/images/articles/smooth scrolling in reactjs.png";

export default (req, res) => {
    const jsonData = 
      [
        {
          "id": "1",
          "title": "Unlocking Limitless Possibilities with Laravel Development",
          "date": "March 22, 2023",
          "link": "https://www.expertlaravel.com/blog/limitless-possibilities-laravel",
          "img": "laravel-in-enterprise-scalable-solution.jpg",
        },
        {
          "id": "2",
          "title": "Navigating the Digital Landscape: Web vs. Mobile Applications",
          "date": "March 22, 2023",
          "link": "images/articles/smooth scrolling in reactjs.png",
          "img": {article4}
        },
        {
          "id": "3",
          "title": "Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling",
          "date": "March 22, 2023",
          "link": "/",
          "img": "embracing-full-stack-development-modern-tech-landscape.jpg"
        },
       
    ];
  
    res.status(200).json(jsonData);
  };
  