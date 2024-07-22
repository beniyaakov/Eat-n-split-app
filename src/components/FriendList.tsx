import Friend from "./Friend";
import { AllFriends } from "../App";

type FriendsProps = {
  friends:AllFriends[]
  handleSelection:(friend:AllFriends)=> void
  selectedFriend:AllFriends | null
}


export default function FriendList({friends,handleSelection,selectedFriend}:FriendsProps) {

  return (
    <ul>
      {friends.map((friend) => {
        return <Friend friend={friend} key={friend.id} handleSelection={handleSelection} selectedFriend={selectedFriend}/>
      })}
    </ul>
  );
}
