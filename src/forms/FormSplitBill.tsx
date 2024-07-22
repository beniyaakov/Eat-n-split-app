import Button from "../features/Button";
import { AllFriends } from "../App";
import { FormEvent, useState } from "react";

type FormSplitBillProps = {
  selectedFriend: AllFriends;
  handleSplitBill:(value:number | string)=>void
};

export default function FormSplitBill({ selectedFriend,handleSplitBill }: FormSplitBillProps) {
  const [bill, setBill] = useState<number>(0);
  const [paidByUser, setPaidByUser] = useState<number>(0);
  const paidByFriend = bill ? bill - paidByUser : "";
  const [whoPaying, setWhoIsPaying] = useState<string>("user");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    if(!bill || !paidByUser) return;

    handleSplitBill(whoPaying === "user" ? paidByFriend : -paidByUser )
  }

  return (
    <form className="form-split-bill" onSubmit={handleSubmit}>
      <h2>Split a bill with {selectedFriend.name}</h2>

      <label htmlFor="">🤑 Bill value</label>
      <input
        type="text"
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
      />

      <label htmlFor="">💸 your expense</label>
      <input
        type="text"
        value={paidByUser}
        onChange={(e) =>
          setPaidByUser(
            Number(e.target.value) > bill ? paidByUser : Number(e.target.value)
          )
        }
      />

      <label htmlFor="">🙎‍♂️ {selectedFriend.name}'s expense</label>
      <input type="text" disabled value={paidByFriend} />

      <label htmlFor="">💵 who is paying the bill</label>
      <select
        value={whoPaying}
        onChange={(e) => setWhoIsPaying(e.target.value)}
      >
        <option value="user">You</option>
        <option value="friend">{selectedFriend.name}</option>
      </select>

      <Button>Split bill</Button>
    </form>
  );
}
