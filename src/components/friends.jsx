import FriendsModule from '../components/friends.module.css'


const Friends = friendsList =>  {
  const {friends} = friendsList
    return (<div>
        
      <ul className={FriendsModule.friendList} >
        {friends.map(friend => (
                <li className={FriendsModule.item} key={ friend.id} >
  <span className={friend.isOnline? FriendsModule.statOnline : FriendsModule.statOffline }>{friend.isOnline}</span>
  <img className={FriendsModule.avatar} src={friend.avatar} alt="User avatar" width="48" />
                    <p className="name">{ friend.name}</p>
</li>
  
          ))}
</ul>
        
        
        
        </div>
    )
  
 }


 export default Friends

