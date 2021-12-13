import Like from './Like'
import { useUser } from '../../context/UserContext'

export default function LikeList() {
  const { user } = useUser({})
  const { likes } = user
  return (
    <>
      <h2 className="text-center text-xl">Interests</h2>
      <ul className="mt-2 pt-3 flex flex-wrap mx-6 border-t">
        {likes.map((like) => {
          return (
            <li key={like}>
              <Like like={like} />
            </li>
          )
        })}
      </ul>
    </>
  )
}
