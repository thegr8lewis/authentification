import { useEffect, useState} from 'react'


// components
import WorkoutDetails from "../components/workoutDetails"
import WorkoutForm from '../components/WorkoutForm'

const Home = () => {
    const [workouts, setWorkouts] = useState(null)

    //fetching data from the backend
    useEffect(() =>{
          const fetchWorkouts = async () => {
               
            const response = await fetch('/api/workouts')
            const json = await response.json()
            
            if(response.ok){
                setWorkouts(json)
            }

          }  

        fetchWorkouts()
    },[])

    return ( 
        <div className="home">
          <div className="workouts">
          {workouts && workouts.map((workout) =>(
                <WorkoutDetails key={workout._id} workout ={workout}/>
            ))}
          </div>
          <WorkoutForm/>
        </div>
       
     );
}
 
export default Home;