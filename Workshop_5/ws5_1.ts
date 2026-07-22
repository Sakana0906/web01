class UserAccount {
    public username : string = "";
    private password : string = "";

    constructor(un : string, pw : string) {
        this.username = un;
        this.password = pw;
    }

    changePassword(oldPass : string, newPass : string) {
        if (oldPass == this.password) {
            this.password = newPass;
            console.log(`Your password has been changed.`);
        } else {
            console.error(`Error: Incorect password`);
        }
    }
}

const acc1 = new UserAccount("Sakana", "123456");
acc1.changePassword("123456", "654321");
acc1.changePassword("123456", "987654");