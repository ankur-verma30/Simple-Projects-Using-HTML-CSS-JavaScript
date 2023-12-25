const passwordBox=document.getElementById('password');
const length=12;

const uppercase="ABCDEFGHIJKLMNOPQRSTUVWZYZ";
const lowercase="abcdefghijklmnopqrstuvwxyz";
const number="0123456789";
const symbols="{}()_-*&^%$#@!<>?:|\[];',.="

const Allcharacters =uppercase+lowercase+symbols+number;

function GenerateRandomPassword(){
    let password="";
    password+=uppercase[Math.floor(Math.random()*uppercase.length)];

    password+=lowercase[Math.floor(Math.random()*lowercase.length)];

    password+=symbols[Math.floor(Math.random()*symbols.length)];

    password+=number[Math.floor(Math.random()*number.length)];

    while(length>password.length){
        password+=Allcharacters[Math.floor(Math.random()*Allcharacters.length)]
    }

    passwordBox.value=password;

}

GenerateRandomPassword()

function CopyPassword(){
    passwordBox.select();
    document.execCommand('copy');
}
