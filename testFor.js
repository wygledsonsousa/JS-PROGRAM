/*
    Criar um sistema de  login primeiro, como validade de faceid true, password for correta igual foi cadastrada e nome for igual cadastrado.


    segundo passo, criar tipo os nome dos amigos e quando ele clicar para conversar com algum amigo retorno "On the chat" ai ele passa uma msg como "HELLO MY FRIEND".

*/


let Userlog = true;
const username = "wygledson";
let UserFriends = ["Bruno", "Wende", "Fabricio", "Felipe"];
let faceid = false;
let pwd = "12345";

let canSendMsg = "Bruno";

if(username === "wygledson" && !faceid && pwd === "12345" && Userlog){
    console.log("WELCOME THE CHAT... You can send for anyhere!\n");
    if(UserFriends){
        console.log(`You can send msg for : ${UserFriends}\n`);
        if(canSendMsg === UserFriends[0]){
            console.log(`Hello my Friend ${canSendMsg.toUpperCase()}`); // usei essa catrai toUpperCase(), pq tinha lembrado kkk
        }
    }
}else{
    console.log("Logging incorrect!");
}

//////////////////////////////////////////////////
let msg = "your code is so ugly kkkkkkkkkkk";
for(let i = 0; i <= 10; i++){
    console.log(msg.toUpperCase());
}
/////////////////////////////////////////////////