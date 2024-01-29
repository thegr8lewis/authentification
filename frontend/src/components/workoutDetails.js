const WorkoutDetails = ({workout}) => {
   
   
  /* const handleClick = async () => {
    const response = await fetch('/api/workouts/' + workout._id,{
        method:'post'
    })

    if (response.ok){
        dispatchEvent({type: 'DELETE_WORKOUT', payload:json })
    }
   }
   */
   
    return (  
        <div className="workout-details">
            <h4>{workout.title}</h4>
            <p><strong> Load (kg):</strong> {workout.load} </p>
            <p><strong> Reps:</strong> {workout.reps} </p>
            <p>{workout.createdAt}</p>
           {/* /<span onClick={handleClick}>delete</span> */}
        </div>
    );
}
 
export default WorkoutDetails;