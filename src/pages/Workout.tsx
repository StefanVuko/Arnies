import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Musclegroup from "../components/Musclegroup";
import { useState } from "react";
import Exercise from "../components/Exercise";

function Workout() {

  const bodyParts = [
    {
      part: "Back",
      img: "back.png",
      exercise1: "Alternate Lateral Pulldown",
      exercise2: "Archer Pull Up",
      exercise3: "Assisted Parallel Close Grip Pull-up",
      exercise4: "Assisted Pull-up"
    },
    {
      part: "Chest",
      img: "chest.jpg",
      exercise1: "Archer Push Up",
      exercise2: "Barbell Bench Press",
      exercise3: "Barbell Decline Bench Press",
      exercise4: "Barbell Decline Pullover"
    },
    {
      part: "Shoulders",
      img: "shoulders.jpg",
      exercise1: "Barbell Front Raise",
      exercise2: "Barbell Incline Shoulder Raise",
      exercise3: "Barbell Rear Delt Raise",
      exercise4: "Cable Alternate Shoulder Press"
    },
    {
      part: "Arms",
      img: "arms.jpg",
      exercise1: "Cable Alternate Triceps Extension",
      exercise2: "Assisted Triceps Dip (Kneeling)",
      exercise3: "Barbell Curl",
      exercise4: "Cable Concentration Curl"
    },
    {
      part: "Legs",
      img: "legs.png",
      exercise1: "All Fours Squad Stretch",
      exercise2: "Ankle Circles",
      exercise3: "Band Single Leg Calf Raise",
      exercise4: "Band Pull Through"
    },
    {
      part: "Cardio",
      img: "cardio.png",
      exercise1: "Back and Forth Step",
      exercise2: "Bear Crawl",
      exercise3: "Burpee",
      exercise4: "Cycle Cross Trainer"
    },
    {
      part: "Waist",
      img: "waist.png",
      exercise1: "3/4 Sit-up",
      exercise2: "45° Side Bend",
      exercise3: "Air Bike",
      exercise4: "Assisted Hanging Knee Raise"
    }
  ]

  const [showExercise, setShowExercise] = useState(false)
  const [exerciseData, setExerciseData] = useState(
    [{
      "bodyPart": "",
      "id": "",
      "target": "",
      "name": "",
      "equipment": "",
      "gifUrl": ""

    }]);

  const getExercise = async (clickedExercise: string) => {
    fetch(`http://localhost:5000/getExercise?name=${clickedExercise}`)
      .then(resp => resp.json())
      .then(resp => {
        setExerciseData(JSON.parse(resp))
        setShowExercise(true)
      })
  }

  async function handleClick(event: any) {
    const clickedExercise = event.target.textContent.toLowerCase()
    getExercise(clickedExercise)

      .then(() => {
        window.scrollTo(0, 0);
      })
  }

  return (
    <>
      <Navbar />
      {showExercise && <Exercise
        bodyPart={exerciseData?.[0].bodyPart}
        id={exerciseData?.[0].id}
        target={exerciseData?.[0].target}
        name={exerciseData?.[0].name}
        equipment={exerciseData?.[0].equipment}
        gifUrl={exerciseData?.[0].gifUrl}
      >
      </Exercise>}
      <div className="content--container workout--container">

        {bodyParts.map(({ part, img, exercise1, exercise2, exercise3, exercise4 }) => {
          return (
            <Musclegroup
              key={part}
              group={part}
              img={img}
              exercise1={exercise1}
              exercise2={exercise2}
              exercise3={exercise3}
              exercise4={exercise4}
              onClick={handleClick}
            />
          )
        })}
      </div>
      <Footer />
    </>
  )
}

export default Workout