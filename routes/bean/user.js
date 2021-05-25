class User{
    constructor(Name,Email,password,confirm_password){
        this.Name=Name;
        this.password=password;
        this.confirm_password=confirm_password;
        this.Email=Email;
    }

}
   module.exports=User;