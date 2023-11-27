import article3 from "../../../public/images/articles/embracing-full-stack-development-modern-tech-landscape.jpg";
import article4 from "../../../public/images/articles/form validation in reactjs using custom react hook.png";
import article5 from "../../../public/images/articles/smooth scrolling in reactjs.png";

export default  (req, res) => {
    const jsonData = 
      [
        {
          "id":"1",
          "title": "Laravel in Enterprise: A Robust Solution for Scalable Applications",
          "summary": "Explore the versatility and strengths of Laravel as a top-tier PHP framework...",
          "time": "9 min read",
          "link": "https://www.expertlaravel.com/blog/laravel-in-enterprise-scalable-solution",
          "img": "laravel-in-enterprise-scalable-solution.jpg"
          // "src": [
          //   {
          //     "src": "embracing-full-stack-development-modern-tech-landscape.jpg",
          //     "width": 500,
          //     "height": 500
          //   }
          // ]
        },
        {
          "id":"2",
          "title": "Embracing Full Stack Development in the Modern Tech Landscape",
          "summary": "The world of web application development is rapidly evolving, and choosing...",
          "time": "9 min read",
          "link": "https://www.expertlaravel.com/blog/embracing-full-stack-development-modern-tech-landscape",
          "img": "embracing-full-stack-development-modern-tech-landscape.jpg"
        }
    ];
  
    res.status(200).json(jsonData);
  };
  