
import { Helmet } from 'react-helmet'
export default function Projects() {

  const fullData =[
    
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
  return (
    <>
   <Helmet>
    <title>PROJECTS</title>
   </Helmet>
    <div className="container mt-5 m-auto">
      <div className="row ms-4 g-3">
        {fullData.map((data)=>(<>
          <div key={data.id}
            className="col-9 col-sm-9 col-md-6 col-lg-4 d-flex flex-column flex-sm-column flex-md-column justify-content-center align-items-center project me-md-5 me-lg-2 py-4">
            <article >

                <div className="article-wrapper">
                <figure>
                    <img src={data.img} alt="projectImage" />
                </figure>
                <div className="article-body">
                    <a href={data.url}>{data.title}</a><br/>
                    {data.LiveDemo?<><a href={data.LiveDemo}>Go Live</a></>:""}
                    <p className='text-white-50'>
                        {data.discription}
                    </p>
                </div>
                </div>
                </article>
             </div> 
        </>))}
      </div>
    </div>
    
    
    </>
  )
}
