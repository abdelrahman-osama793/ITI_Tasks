//observer
class IFaceBookSetting {
    constructor() {
        this.friendsArray = [];
        this.messagesArray = [];
        this.notifications = [];
        this.commentsArray = [];
    }

    addFriend(account) {
        this.friendsArray.push(account)
    }

    removeFriend(targetAccount) {
        this.friendsArray = this.friendsArray.filter(account => {
            if (targetAccount != account) {
                return account;
            }
        })
    }

    sendPrivateMessage(Message, friend) {
        this.messagesArray.push(Message);
        let myFriendName = friend.Name;
        let privateMessage = this.messagesArray[0]
        alert(`Your Friend ${myFriendName} Sent you a Private\n${myFriendName}: ${privateMessage}`)
    }

    sendPublicMessage(message) {
        this.messagesArray.push(message);
        this.friendsArray.forEach(friend => {
            friend.Message("Osama sent a public Message", message);
        });
    }

    postsPushNotification(Note) {
        this.notifications.push(Note);
        this.friendsArray.forEach(friend => {
            friend.Notification(friend.Name, Note, this);
        });
    }

    commentsPushNotification(Comment) {
        this.commentsArray.push(Comment);
        let myName = this.Name;
        let commentOfUser = this.commentsArray[0];
        this.Comments(myName, commentOfUser, this)
    }
}


class accounts extends IFaceBookSetting {
    constructor(_Name, _Age) {
        super();
        this.Name = _Name;
        this.Age = _Age;
    }

    Message(nameOfTheSender, message) {
        console.log(`${nameOfTheSender} sent you a message\n${message}`);
    }

    Notification(name, post, owner) {
        console.log(`Hey ${name},\nYour friend ${owner.Name} posted just now: "${post}"`);
    }

    Comments(nameOfTheCommenter, Comment) {
        console.log(`Your friend ${nameOfTheCommenter} comment on your post: "${Comment}"`);
    }

}

let osamaAccount = new accounts("Osama", 23);
let youssefAccount = new accounts("Youssef", 22);
let shehaAccount = new accounts("Sheha", 23);

osamaAccount.addFriend(youssefAccount)
osamaAccount.addFriend(shehaAccount)

//The post by Osama's account
osamaAccount.postsPushNotification('15 Yemen road, Yemen')
//Youssef's comment on Osama's post
youssefAccount.commentsPushNotification('What are you saying?!')
//Khamis's comment on Osama's post
shehaAccount.commentsPushNotification('Can it be any funnier!!')

//send private message
// MyAccount.sendPrivateMessage('They were not on a breaaaaaak!!!!', friend1)

//send public message
osamaAccount.sendPublicMessage('They were on a breaaaaaak!!!!')
//Remove friend
// osamaAccount.removeFriend(youssefAccount)