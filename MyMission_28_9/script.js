function User(userName) {
  this.userName = userName;
  this.followers = [];
  this.iFollow = [];

  this.addFollowers = function (someUser) {
    this.followers.push(someUser);
    someUser.iFollow.push(this);
  };

  this.sendMessage = function (myMessage) {
    this.followers.forEach((follower) => {
      follower.getMessage(myMessage, this.UserName);
    });
  };
  this.getMessage = function (theMessage, UserName) {
    console.log(
      this.myName + "got message from" + userName + " : " + theMessage
    );
  };
}

let myUser1 = new User("yoni");
let myUser2 = new User("naomi");
let myUser3 = new User("lily");
let myUser4 = new User("linda");

myUser1.addFollowers(myUser2);
myUser1.addFollowers(myUser3);
myUser1.addFollowers(myUser4);

myUser2.addFollowers(myUser3);
myUser2.addFollowers(myUser4);

myUser3.addFollowers(myUser4);

console.log(myUser1);
console.log(myUser2);
console.log(myUser3);
console.log(myUser4);
