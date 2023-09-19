function bankAccount(accountNumber,name,type,balance,status)
{
  this.accountNum=accountNumber;
  this.Name=name;
  this.Type=type;
  this.Balance=balance;
  this.active=status;
  this.widthraw=function(amount){
    this.Balance-amount;

  }
  this.deposit=function(amount){
    this.Balance+=amount;
    console.log(this.Balance)

  }
  this.checkBalance=function(){
    console.log((this.Balance))

  }
  this.isActive=function(){
    if(this.active=="active")console.log("true")
    else console.log("false")

  }
}
let account1= new bankAccount(100001,"sahil Nishad","saving",2000,"active")
account1.checkBalance()
account1.deposit(500)
account1.isActive()
let account2= new bankAccount(100002,"srikant patel","saving",1500,"inactive")
account2.checkBalance()
account2.deposit(500)
account2.isActive()
