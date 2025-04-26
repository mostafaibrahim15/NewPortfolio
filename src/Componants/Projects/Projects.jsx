
import './Project.css'
import Card from '../Card/Card'


export default function Projects() {
const projects = 
    {
      projectsCard:[
        {
          id:1,
          url:"https://github.com/mostafaibrahim15/createFacePost.git",
          img:"https://media.istockphoto.com/id/1371339413/photo/co-working-team-meeting-concept-businessman-using-smart-phone-and-digital-tablet-and-laptop.jpg?s=612x612&w=0&k=20&c=ysEsVw3q2axYt3oVZAuQjtHRlN3lY-U_e0ikK5yKIXQ=",
          title:"FacePost",
          LiveDemo:"https://mostafaibrahim15.github.io/createFacePost/",
          discription:"A modern social media platform that makes sharing moments easier and smarter"
        },
        {
          id:2,
          url:"https://github.com/mostafaibrahim15/Movies.git",
          img:"https://media.istockphoto.com/id/1371339413/photo/co-working-team-meeting-concept-businessman-using-smart-phone-and-digital-tablet-and-laptop.jpg?s=612x612&w=0&k=20&c=ysEsVw3q2axYt3oVZAuQjtHRlN3lY-U_e0ikK5yKIXQ=",
          title:"Aflamko",
          LiveDemo:"https://mostafaibrahim15.github.io/Movies/",
          discription:"Discover and explore a world of movies with MovieApp."
        },
        {
          id:3,
          url:"",
          img:"https://media.istockphoto.com/id/1371339413/photo/co-working-team-meeting-concept-businessman-using-smart-phone-and-digital-tablet-and-laptop.jpg?s=612x612&w=0&k=20&c=ysEsVw3q2axYt3oVZAuQjtHRlN3lY-U_e0ikK5yKIXQ=",
          title:"Dashbord",
          discription:" going to be created very soon"
        },
        {
          id:4,
          url:"",
          img:"https://media.istockphoto.com/id/1371339413/photo/co-working-team-meeting-concept-businessman-using-smart-phone-and-digital-tablet-and-laptop.jpg?s=612x612&w=0&k=20&c=ysEsVw3q2axYt3oVZAuQjtHRlN3lY-U_e0ikK5yKIXQ=",
          title:"E-commerce",
          discription:"going to be created very soon"
        },
        {
          id:5,
          url:"https://github.com/mostafaibrahim15/jquery.git",
          img:"https://media.istockphoto.com/id/1371339413/photo/co-working-team-meeting-concept-businessman-using-smart-phone-and-digital-tablet-and-laptop.jpg?s=612x612&w=0&k=20&c=ysEsVw3q2axYt3oVZAuQjtHRlN3lY-U_e0ikK5yKIXQ=",
          title:"JQuery",
          discription:"simple project just trainingto study jquery"
        },
        
        {
          id:6,
          url:"https://github.com/mostafaibrahim15/event-project.git",
          img:"https://media.istockphoto.com/id/1371339413/photo/co-working-team-meeting-concept-businessman-using-smart-phone-and-digital-tablet-and-laptop.jpg?s=612x612&w=0&k=20&c=ysEsVw3q2axYt3oVZAuQjtHRlN3lY-U_e0ikK5yKIXQ=",
          title:"Events website",
          discription:"Could you clarify what you're looking for in terms of an event website description?"
        },
       
        {
          id:7,
          url:"https://github.com/mostafaibrahim15/weater-js.git",
          img:"https://media.istockphoto.com/id/1371339413/photo/co-working-team-meeting-concept-businessman-using-smart-phone-and-digital-tablet-and-laptop.jpg?s=612x612&w=0&k=20&c=ysEsVw3q2axYt3oVZAuQjtHRlN3lY-U_e0ikK5yKIXQ=",
          title:"Weather web",
          discription:"Could you clarify what you mean by weather web description?"
        },
       

      ]
       

    }

  return (
    <>
       <div className='container'>
       <h1 className='header'>Projects</h1>
        <div className="container  mt-4">
            <div className="row ms-1 g-5 d-flex justify-content-center align-items-center pt-5">
                    <Card projectInfo={projects} />   
            </div>
        </div>

       </div>
    
    
    
    </>
  )
}
