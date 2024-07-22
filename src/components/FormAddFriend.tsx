import { FormEvent, useState } from 'react'
import Button from '../features/Button'
import { AllFriends } from '../App'

type Props = {
  handleAddFriend: (friends:AllFriends) => void
}

export default function FormAddFriend({handleAddFriend}: Props) {
const [name,setName] = useState<string>("")
const [image,setImage] = useState<string>("https://i.pravatar.cc/48")


  function handleSubmit(e:FormEvent) {
    e.preventDefault()
    
    if(!name || !image) return;
    
    const id = crypto.randomUUID()
    const newFriend = {
      name,image:`${image}?=${id}`,balance:0,id
    }

    handleAddFriend(newFriend);

    setName("")
    setImage("https://i.pravatar.cc/48")
    
  }

  return (
    <form className='form-add-friend' onSubmit={handleSubmit}>
        <label htmlFor="">🤑Friend name</label>
        <input type="text" value={name} onChange={e => setName(e.target.value)} />

        <label htmlFor="">🖼️Image URL</label>
        <input type="text" value={image} onChange={e => setImage(e.target.value)} />


        <Button>Add</Button>
    </form>
  )
}