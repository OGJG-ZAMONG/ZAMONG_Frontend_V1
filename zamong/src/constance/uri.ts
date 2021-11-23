enum uri {
  sendEmail = "/auth/mail",
  signup = "/auth/signup",
  idDuplicate = "/auth/user-id/duplicate",
  dreamShare = "/dream/share",
  dreamImage = "/dream/image",
  login = "/auth/login",
  dreamShareFollow = "/dream/share/follow",
  dreamShareMe = "/dream/share/me",
  follower = "/user/follower",
  following = "/user/following",
  refresh = "/auth/refresh",
  myProfile = "/user/me",
  followingList = "/following",
  followerList = "/follower",
  writeComment = "/dream/DREAM_UUID/comment",
  getComment = "/dream/DREAM_UUID/comment",
  getReComment = "/dream/comment/DREAM_UUID/comment",
  recommend = "/dream/comment/DREAM_UUID/recommend",
  dreamSell = "/dream/sell",
  shareDreamInfo = "/dream/share/DREAM_UUID",
}

export default uri;
