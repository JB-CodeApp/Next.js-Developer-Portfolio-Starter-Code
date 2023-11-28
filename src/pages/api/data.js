
export default (req, res) => {
    const jsonData = 
      [
        {
          "title": "Mastering Next.js: A Comprehensive Guide to Ten Essential Libraries",
          "date": "November 10, 2023",
          "link": "https://www.expertlaravel.com/blog/mastering-next-js-essential-libraries-guide",
          "img": "mastering-next-js-essential-libraries-guide.webp"
        },
        {
          "title": "Embracing Full Stack Development in the Modern Tech Landscape",
          "date": "November 9, 2023",
          "link": "https://www.expertlaravel.com/blog/embracing-full-stack-development-modern-tech-landscape",
          "img": "embracing-full-stack-development-modern-tech-landscape.webp"
        },
        {
          "title": "Navigating Vue.js: A Comprehensive Beginner's Guide",
          "date": "November 9, 2023",
          "link": "https://www.expertlaravel.com/blog/navigating-vue-js-guide",
          "img": "navigating-vue-js-guide.webp",
        },
        {
          "title": "Top 15 JavaScript Frameworks to Consider in 2023",
          "date": "November 9, 2023",
          "link": "https://www.expertlaravel.com/blog/top-15-javascript-frameworks-2023",
          "img": "top-15-javascript-frameworks-2023.webp"
        },
        {
          "title": "Django vs Laravel: Choosing Your Web Development Champion",
          "date": "November 8, 2023",
          "link": "https://www.expertlaravel.com/blog/django-vs-laravel-web-framework-comparison",
          "img": "django-vs-laravel-web-framework-comparison.webp"
        },
        
        {
          "title": "Boost Your Business with JBCodeApp: The Mobile App Experts",
          "date": "November 8, 2023",
          "link": "https://www.expertlaravel.com/blog/elevate-your-business-with-jbcodeapp",
          "img": "elevate-your-business-with-jbcodeapp.webp"
        },
        {
          "title": "Laravel in Enterprise: A Robust Solution for Scalable Applications",
          "date": "November 2, 2023",
          "link": "https://www.expertlaravel.com/blog/laravel-in-enterprise-scalable-solution",
          "img": "laravel-in-enterprise-scalable-solution.webp"
        },
        
        {
          "title": "Laravel in Enterprise: A Robust Solution for Scalable Applications",
          "date": "November 2, 2023",
          "link": "https://www.expertlaravel.com/blog/laravel-in-enterprise-scalable-solution",
          "img": "laravel-in-enterprise-scalable-solution.webp"
        },
        {
          "title": "Seamless Node.js Version Upgrades",
          "date": "November 2, 2023",
          "link": "https://www.expertlaravel.com/blog/seamless-nodejs-version-upgrades",
          "img": "seamless-nodejs-version-upgrades.webp"
        },
        {
          "title": "Unlocking Limitless Possibilities with Laravel Development",
          "date": "November 1, 2023",
          "link": "https://www.expertlaravel.com/blog/limitless-possibilities-laravel",
          "img": "limitless-possibilities-laravel.webp",
        },
    ];
  
    res.status(200).json(jsonData);
  };
  