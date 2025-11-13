
import Card from "./components/Card";
import Props from "./components/Props";

const App = () => {


  
   const jobs = [
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFkkQhwA-14yQus_rij6VonTP5UT7IrorBkg&s",
    company: "Amazon",
    posted: "5 days ago",
    position: "Senior UI/UX Designer",
    type: "Full Time",
    level: "Mid Level",
    pay: "$120/hr"
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS77Ax9xUWiKczP2TE5GACo2ExS1pY5BdFu_w&s",
    company: "Google",
    posted: "2 days ago",
    position: "Frontend Developer",
    type: "Remote",
    level: "Junior Level",
    pay: "$95/hr"
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTyplxL1yVkc3F8bm2WZ2qnhgfJeyALJWgJA&s",
    company: "Microsoft",
    posted: "1 week ago",
    position: "Backend Engineer",
    type: "Full Time",
    level: "Senior Level",
    pay: "$140/hr"
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2tpNgOZLHX2AqCnd2z9ZnPtlgGh4lFh6adw&s",
    company: "Netflix",
    posted: "3 days ago",
    position: "React Developer",
    type: "Hybrid",
    level: "Mid Level",
    pay: "$110/hr"
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGbCWIG2MTrzdoVawUgDJUCGhB94ZVu3iOdA&s",
    company: "Apple",
    posted: "4 days ago",
    position: "Product Designer",
    type: "Full Time",
    level: "Senior Level",
    pay: "$150/hr"
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqk0TFvUaaGIkdzBu8mBmg-WxwhMZbnpDbUQ&s",
    company: "Adobe",
    posted: "6 days ago",
    position: "UI Engineer",
    type: "Contract",
    level: "Mid Level",
    pay: "$100/hr"
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeVb6S34q3xE64Xx9XnRQb6vW2teBzmfM9Mg&s",
    company: "Tesla",
    posted: "1 day ago",
    position: "Software Architect",
    type: "Full Time",
    level: "Lead Level",
    pay: "$160/hr"
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5FVp6K-WsKqWydyXhcW4rC09AhGqRDFRDrQ&s",
    company: "Spotify",
    posted: "8 days ago",
    position: "Full Stack Developer",
    type: "Remote",
    level: "Mid Level",
    pay: "$105/hr"
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNyYI7sLcw38mPGE0QEVKZfUBtx9V3A7DGRg&s",
    company: "Meta",
    posted: "2 weeks ago",
    position: "Machine Learning Engineer",
    type: "Full Time",
    level: "Senior Level",
    pay: "$155/hr"
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZpIxL1c7uQ9vRnkJZ2MOsPrpK5d6xTQDFqA&s",
    company: "Airbnb",
    posted: "3 days ago",
    position: "Frontend Intern",
    type: "Internship",
    level: "Entry Level",
    pay: "$35/hr"
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjCEqXcdzqICqRctcnFFy00RuhTY-3I5DjCQ&s",
    company: "Shopify",
    posted: "1 week ago",
    position: "Backend Developer",
    type: "Remote",
    level: "Mid Level",
    pay: "$100/hr"
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7z4Kq7sA1dA-sbA9AnVQlX2sQ4Vn_nczsvQ&s",
    company: "Slack",
    posted: "2 days ago",
    position: "System Engineer",
    type: "Hybrid",
    level: "Mid Level",
    pay: "$115/hr"
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr9ZqXo1f9vTt8o4x4fWcEhptPYnHQtL2E1g&s",
    company: "Zoom",
    posted: "6 days ago",
    position: "DevOps Engineer",
    type: "Full Time",
    level: "Senior Level",
    pay: "$130/hr"
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLmDkZkufEU0vJumTK2S_P6_MsPLiYz1zIOw&s",
    company: "LinkedIn",
    posted: "9 days ago",
    position: "Data Analyst",
    type: "Full Time",
    level: "Junior Level",
    pay: "$85/hr"
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhfbwl3KSEwE8mpXn74mI6p_PwxPQCe6hTZw&s",
    company: "Twitter (X)",
    posted: "1 day ago",
    position: "UI Designer",
    type: "Remote",
    level: "Mid Level",
    pay: "$90/hr"
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbeY6S4vBP1KgbAzGLOi5I7M-dRhNVUG2tbg&s",
    company: "PayPal",
    posted: "3 days ago",
    position: "Cloud Engineer",
    type: "Full Time",
    level: "Mid Level",
    pay: "$125/hr"
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3xCTl_rdnU8oZaPbkApBu6pOJYvxy5yo1Ug&s",
    company: "IBM",
    posted: "5 days ago",
    position: "AI Researcher",
    type: "Full Time",
    level: "Lead Level",
    pay: "$145/hr"
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvlK0NUQ9z9f2hV7FAG3fB7rqkWKwGvWfN_g&s",
    company: "Oracle",
    posted: "4 days ago",
    position: "Database Engineer",
    type: "Full Time",
    level: "Mid Level",
    pay: "$115/hr"
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ4tnbR-4QPPaPYo_F6Ho0U3iNcx7aU1-K0A&s",
    company: "Intel",
    posted: "2 weeks ago",
    position: "Embedded Systems Developer",
    type: "On-site",
    level: "Senior Level",
    pay: "$135/hr"
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkQz6D6XXCXXmPS4-EWcDN7KQW4Fnep1JX5Q&s",
    company: "Deloitte",
    posted: "3 days ago",
    position: "Tech Consultant",
    type: "Full Time",
    level: "Mid Level",
    pay: "$110/hr"
  },{
  img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSd6jsVcp4jyzq2iDF9V8KqA57z_o8Bv0O9pA&s",
  company: "Accenture",
  posted: "1 day ago",
  position: "Cloud Security Engineer",
  type: "Hybrid",
  level: "Senior Level",
  pay: "$135/hr"
},
{
  img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7zjSgbkloPwIqXvBBvYYch57y1gEydVzYDA&s",
  company: "Capgemini",
  posted: "4 days ago",
  position: "Business Analyst",
  type: "Full Time",
  level: "Mid Level",
  pay: "$95/hr"
},
{
  img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSYiwbHc1o7MgPReAAKjypksoE1zvPr7cxtQ&s",
  company: "Infosys",
  posted: "5 days ago",
  position: "Software Developer",
  type: "Remote",
  level: "Junior Level",
  pay: "$85/hr"
},
{
  img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQipP9dsh-2N6lVi5zj4kGynRz5WbST92wxmw&s",
  company: "Wipro",
  posted: "2 weeks ago",
  position: "Network Administrator",
  type: "On-site",
  level: "Mid Level",
  pay: "$100/hr"
},
{
  img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyNHVJ8uE6sDLb7WmMbZ6VZqgYfK5QXy9cMQ&s",
  company: "TCS",
  posted: "3 days ago",
  position: "Data Scientist",
  type: "Full Time",
  level: "Senior Level",
  pay: "$140/hr"
},
{
  img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZJ_IXwTnvDWu-QToxCh50DrpLALkSiJgB0g&s",
  company: "Cognizant",
  posted: "1 week ago",
  position: "Frontend Engineer",
  type: "Remote",
  level: "Mid Level",
  pay: "$110/hr"
},
{
  img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCB5YFt2EfqLXePpkA8PD7wa3CGPr0txCKXg&s",
  company: "Ernst & Young (EY)",
  posted: "6 days ago",
  position: "Data Engineer",
  type: "Hybrid",
  level: "Senior Level",
  pay: "$130/hr"
},
{
  img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqtJpp6krNboV2tyB7uAaP6f3_p-KBqEhMcA&s",
  company: "KPMG",
  posted: "3 days ago",
  position: "IT Auditor",
  type: "Full Time",
  level: "Mid Level",
  pay: "$120/hr"
},
{
  img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQKfBiL4hDJWAmvHkHKu47AdxPp-x1hxiRhw&s",
  company: "PwC",
  posted: "2 days ago",
  position: "DevOps Specialist",
  type: "Full Time",
  level: "Lead Level",
  pay: "$150/hr"
},


   ];

 return (
  <div className="parent">
    {jobs.map(function (elem) {
      return (
        <Card
          company={elem.company}
          post={elem.posted}
          position={elem.position}
          type={elem.type}
          level={elem.level}
          pay={elem.pay}
          img={elem.img}
        />
      );
    })}
  </div>
);
}
export default App