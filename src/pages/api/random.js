export default  (req, res) => {
    const jsonData = 
      [
        {
          "id":"1",
          "title": "Laravel in Enterprise: A Robust Solution for Scalable Applications",
          "summary": "Explore the versatility and strengths of Laravel as a top-tier PHP framework for developing large-scale enterprise applications. Discover how Laravel's flexibility, security, community support, and extensive features make it a compelling choice for businesses seeking to build scalable and secure solutions.",
          "time": "5 min read",
          "link": "https://www.expertlaravel.com/blog/laravel-in-enterprise-scalable-solution",
          "img": "laravel-in-enterprise-scalable-solution.webp"
        },
        {
          "id":"2",
          "title": "Embracing Full Stack Development in the Modern Tech Landscape",
          "summary": "The world of web application development is rapidly evolving, and choosing the right backend framework can significantly impact your projects. In this comprehensive guide, we explore the top 15 backend frameworks, providing detailed descriptions of their key features. ",
          "time": "7 min read",
          "link": "https://www.expertlaravel.com/blog/embracing-full-stack-development-modern-tech-landscape",
          "img": "embracing-full-stack-development-modern-tech-landscape.webp"
        },
        {
        "id":"3",
        "title": "JBCodeApp: Your Laravel Development Experts",
        "summary": "JBCodeApp offers top-notch Laravel development expertise to empower your web applications with robust and efficient solutions.",
        "time": "5 min read",
        "link": "https://www.expertlaravel.com/blog/jbcodeapp-laravel-development-experts",
        "img": "jbcodeapp-laravel-development-experts.webp"
        },
        {
          "id":"4",
          "title": "Top PHP Frameworks for Web Development in 2023",
          "summary": " Explore the power of Laravel development and the numerous benefits it offers for web applications. Discover why hiring dedicated Laravel developers is a strategic move for businesses of all sizes, and how they can tailor solutions to meet your unique needs.",
          "time": "5 min read",
          "link": "https://www.expertlaravel.com/blog/top-php-frameworks-2023",
          "img": "top-php-frameworks-2023.webp"
        },
        {
          "id":"5",
          "title": "The Top 10 Must Have IT Skills for 2023",
          "summary": "Explore the top 10 IT skills that are in high demand for 2023, ranging from artificial intelligence and cybersecurity to cloud computing and quantum computing.",
          "time": "4 min read",
          "link": "https://www.expertlaravel.com/blog/top-10-it-skills-2023",
          "img": "top-10-it-skills-2023.webp"
        }
      ];
  
    res.status(200).json(jsonData);
  };
  