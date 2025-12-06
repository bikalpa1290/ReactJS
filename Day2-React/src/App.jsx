// import {Bookmark} from "lucide-react"
import Card from "./components/card.jsx"
const jobOpenings = [
  {
    brandLogo: "https://logo.clearbit.com/amazon.com",
    brandName: "Amazon",
    time: "2 days ago",
    position: "Web Developer",
    tag: "Full-time",
    paying: "$120 per hour",
    city: "Kathmandu, Nepal",
    level: "Senior"
  },
  {
    brandLogo: "https://logo.clearbit.com/facebook.com",
    brandName: "Meta (Facebook)",
    time: "5 days ago",
    position: "Frontend Developer",
    tag: "Part-time",
    paying: "$90 per hour",
    city: "Lalitpur, Nepal",
    level: "Junior"
  },
  {
    brandLogo: "https://logo.clearbit.com/google.com",
    brandName: "Google",
    time: "1 day ago",
    position: "Data Analyst",
    tag: "Full-time",
    paying: "$150 per hour",
    city: "Remote",
    level: "Mid"
  },
  {
    brandLogo: "https://logo.clearbit.com/microsoft.com",
    brandName: "Microsoft",
    time: "3 days ago",
    position: "Mobile App Developer",
    tag: "Internship",
    paying: "$20 per hour",
    city: "Pokhara, Nepal",
    level: "Intern"
  },
  {
    brandLogo: "https://logo.clearbit.com/netflix.com",
    brandName: "Netflix",
    time: "10 days ago",
    position: "Backend Developer",
    tag: "Full-time",
    paying: "$180 per hour",
    city: "Kathmandu, Nepal",
    level: "Senior"
  },
  {
    brandLogo: "https://logo.clearbit.com/tesla.com",
    brandName: "Tesla",
    time: "1 week ago",
    position: "Machine Learning Engineer",
    tag: "Full-time",
    paying: "$200 per hour",
    city: "San Francisco, USA",
    level: "Senior"
  },
  {
    brandLogo: "https://logo.clearbit.com/shopify.com",
    brandName: "Shopify",
    time: "3 hours ago",
    position: "UI/UX Designer",
    tag: "Part-time",
    paying: "$110 per hour",
    city: "Biratnagar, Nepal",
    level: "Mid"
  },
  {
    brandLogo: "https://img.freepik.com/premium-vector/adobe-illustrator-software-icon_539007-181.jpg?semt=ais_hybrid&w=740&q=80", // ✅ fixed logo
    brandName: "Adobe",
    time: "8 days ago",
    position: "Cloud Engineer",
    tag: "Full-time",
    paying: "$160 per hour",
    city: "Sydney, Australia",
    level: "Senior"
  },
  {
    brandLogo: "https://logo.clearbit.com/apple.com",
    brandName: "Apple",
    time: "6 days ago",
    position: "Product Manager",
    tag: "Full-time",
    paying: "$220 per hour",
    city: "London, UK",
    level: "Lead"
  },
  {
    brandLogo: "https://logo.clearbit.com/airbnb.com",
    brandName: "Airbnb",
    time: "12 hours ago",
    position: "Software Engineer",
    tag: "Full-time",
    paying: "$190 per hour",
    city: "Kathmandu, Nepal",
    level: "Mid"
  }
];


function App() {
  return (
    <div className='parent'>
      {jobOpenings.map(function(elem){
        return <Card company={elem.brandName} time={elem.time}
        logo={elem.brandLogo} position={elem.position} preference={elem.tag}
        pay={elem.paying} location={elem.city} level={elem.level}/>
      })}
    </div>
  )
}
 
export default App