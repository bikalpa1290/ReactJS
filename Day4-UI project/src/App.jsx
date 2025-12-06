import Page1 from './assets/components/Page1/Page1'
import Page2 from './assets/components/Page2/Page2'
const App = () => {
const professionals = [
  {
    id: 1,
    image: "https://i.pinimg.com/736x/6f/ad/49/6fad49112101e7540f3f850a69dc944d.jpg",  
    intro: "Emma is a seasoned software engineer with a flair for building scalable, maintainable web applications — she enjoys turning complex requirements into clean, efficient codebases.",
    tag: "satisfied"
  },
  {
    id: 2,
    image: "https://i.pinimg.com/736x/f0/ec/7f/f0ec7f3d179ff10cb98b72563095847f.jpg",
    intro: "Liam is a UX/UI designer dedicated to crafting intuitive user experiences. He blends aesthetics and usability to deliver interfaces that feel both friendly and professional.",
    tag: "satisfied"
  },
  {
    id: 3,
    image: "https://i.pinimg.com/1200x/2c/1b/95/2c1b957fbc176324b78f4b6962ce3389.jpg",
    intro: "Adam works as a data analyst who transforms raw data into meaningful insights, helping teams make data‑driven decisions and spot opportunities others might miss.",
    tag: "unsatisfied"
  },
  {
    id: 4,
    image: "https://i.pinimg.com/736x/09/63/03/09630372b8e6f94257d5c6b3d47f0560.jpg",
    intro: "sophie is a project manager experienced in leading cross-functional teams to deliver projects on time and within scope — he excels at communication, planning, and execution.",
    tag: "satisfied"
  }
];


  return (
    <div>
      <Page1 professionals={professionals}/>
      <Page2 />
    </div>
  )
}

export default App