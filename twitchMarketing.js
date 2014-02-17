var link = "http://chatleap.com/#openRoom/twitch_plays_pokemon"
var message = "Easier way for us to chat"
var proFuncIsPro = function(){
    CurrentChat.chat_say();
    var text = message+" ";
    for (var i = 0;i<5;i++){
    	text += link+" "
    }
    var times = Math.floor(Math.random() * 50);
    for (var i =0;i<times;i++){
        text += "!";
    }
    $("#chat_text_input").val(text);
    console.log("sending: " + text )
    setTimeout(proFuncIsPro,3000+(Math.random()*60000));
}
proFuncIsPro();