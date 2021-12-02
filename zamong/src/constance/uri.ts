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
  getCommentCount = "/dream/DREAM_UUID/comment/count",
  recommend = "/dream/comment/DREAM_UUID/recommend",
  dreamSell = "/dream/sell",
  shareDreamInfo = "/dream/share/DREAM_UUID",
  delPost = "/dream/DREAM_UUID",
  modifyComment = "/dream/comment/DREAM_UUID/content",
  deleteComment = "/dream/comment/DREAM_UUID",
  shareDream = "/dream/share/DREAM_UUID",
  interpretation = "/dream/interpretation",
  follow = "/user/follow",
  sellDreamInfo = "/dream/sell/DREAM_UUID",
  chatRequest = "/dream/sell/DREAM_UUID/request",
  deleteSell = "/dream/sell/DREAM_UUID",
  acceptChat = "/dream/sell/DREAM_UUID/accept",

}

export default uri;
