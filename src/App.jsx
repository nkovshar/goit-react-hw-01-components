import user from 'data.json/user.json'
import stats from 'data.json/statistics.json'
import friendsList from 'data.json/friends.json'
import transactions from 'data.json/transactions.json'

import Profile from "components/profile";
import Statistics from "components/statistics";
import Friends from "components/friends";
import TransactionHistory from "components/transactions";

const App = () => {
  return (
    <>
      <Profile
        avatar={ user.avatar}
        username={user.username}
        tag={user.tag}
        location={user.location}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes} />
      <Statistics title="Upload stats" data= {stats} />
      <Friends friends= {friendsList} />
      <TransactionHistory transactions= {transactions} />
    </>
  )
}

export default App