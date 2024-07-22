import { useState } from "react";
import Button from "./features/Button";
import FormAddFriend from "./components/FormAddFriend";
import FormSplitBill from "./components/FormSplitBill";
import FriendList from "./components/FriendList";


export type AllFriends={
    id: number | string;
    name: string;
    image: string;
    balance: number;
}



const initialFriends:AllFriends[] = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];



function App() {
  const [friends,setFriends] = useState<AllFriends[]>(initialFriends)
  const [showAddFriend,setShowAddFriend] = useState<boolean>(false)
  const [selectedFriend,setSelectedFriend] = useState<AllFriends | null>(null)

  
  function handleShowAddFriend(){
    setShowAddFriend((show)=> !show)
  }

  function handleAddFriend(friend:AllFriends){
    setFriends(friends => [...friends,friend])
    setShowAddFriend(false)
  }

  function handleSelection(friend:AllFriends){
    setSelectedFriend((cur:AllFriends|null) => cur?.id === friend.id ? null : friend )
    setShowAddFriend(false)
  }

  function handleSplitBill(value:number|string){
    
    setFriends( (friends:AllFriends[]) => friends.map( (friend) => friend.id === selectedFriend?.id ? {...friend,balance:friend.balance + Number(value)} : friend))    
    setSelectedFriend(null)
    }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendList friends={friends} handleSelection={handleSelection} selectedFriend={selectedFriend}  />
      {showAddFriend &&  <FormAddFriend handleAddFriend={handleAddFriend} />}
        <Button onClick={handleShowAddFriend}>{showAddFriend ? "Close": "Add friend" }</Button>
      </div>
       {selectedFriend &&  <FormSplitBill selectedFriend={selectedFriend} handleSplitBill={handleSplitBill} key={selectedFriend.id} />}
    </div>
  )
}

export default App
