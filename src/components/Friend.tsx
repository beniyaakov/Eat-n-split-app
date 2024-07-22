
import Button from '../features/Button'

type FriendProps = {
    id: number | string;
    name: string;
    image: string;
    balance: number;
}

type UpdateProps =  {
  friend:FriendProps
  handleSelection:(Friend:FriendProps)=>void
  selectedFriend:FriendProps | null
}



export default function Friend({friend,handleSelection,selectedFriend}: UpdateProps) {
  const {name,image,balance,} = friend

  const isSelected = selectedFriend?.id === friend.id

  
  return (
    <li className={isSelected ? 'selected' : ""}>
        <img src={image} alt={name} />
        <h3>{name}</h3>
        {balance < 0 && <p className="red">You owe {name} {Math.abs(balance)}$</p>}
        {balance > 0 && <p className="green">{name} owes you {Math.abs(balance)}$</p>}
        {balance === 0 && <p>You and {name} are even </p>}
        <Button onClick={()=>handleSelection(friend)}>{isSelected ? "Close":"Select"}</Button>
    </li>
  )
}