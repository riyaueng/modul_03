// ! ----- Variante 1 -----

// interface ScoreItemProps {
//   name: string
//   points: number
//   icon: string
// }

// export default function ScoreItem({ name, points, icon }: ScoreItemProps) {
//   return (
//     <>
//       <div>
//         <p>Name: {name}</p>
//         <span>{points} Pts</span>
//         <div>Icon: {icon}</div>
//       </div>
//     </>
//   )
// }

// ! ----- Variante 2 -----

interface ScoreItemProps {
  score: {
    name: string
    points: number
    icon: string
  }
}

export default function ScoreItem({ score }: ScoreItemProps) {
  return (
    <>
      <div>
        <p>Name: {score.name}</p>
        <span>{score.points} Pts</span>
        <div>Icon: {score.icon}</div>
      </div>
    </>
  )
}
