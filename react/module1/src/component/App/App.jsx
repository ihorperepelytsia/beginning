import React from "react";
import FriendList from "../FriendList/FriendList";
import SocialProfile from "../SocialProfile/SocialProfile";
import Statistics from "../Statistics/Statistics";
import TransactionHistory from "../TransactionHistory/TransactionHistory";

import user from "../../db/user.json";
import data from "../../db/data.json";
import friends from "../../db/friends.json";
import transactions from "../../db/transactions.json";
const App = () => (
  <>
    <SocialProfile
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />
    <Statistics title="Upload stats" stats={data} />
    <Statistics stats={data} />
    <FriendList friends={friends} />
    <TransactionHistory items={transactions} />
  </>
);

export default App;
