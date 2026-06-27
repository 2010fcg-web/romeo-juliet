const scenes = [

{
speaker:"Friar Laurence",
image:"images/friar.png",

text:`Welcome...

My name is Friar Laurence.

Some people know me only as "the priest from Romeo and Juliet."

But for me...

It wasn't a story.

It was my life.

Every day I still remember Romeo and Juliet.

And I still wonder...

Could I have changed their fate?`,

choices:[
{
text:"Continue",
next:1
}
]
},

{
speaker:"Friar Laurence",
image:"images/romeo.png",

text:`One morning Romeo came to me.

He was excited.

He had met Juliet only one day before.

Now he wanted to marry her immediately.

What should I do?`,

choices:[
{
text:"Marry them",
next:2,
hope:20,
conflict:15
},

{
text:"Tell Romeo to wait",
next:3,
hope:5,
conflict:0
},

{
text:"Refuse completely",
next:4,
hope:-10,
conflict:5
}
]
},

{
speaker:"Friar Laurence",
image:"images/juliet.png",

text:`You secretly marry Romeo and Juliet.

For a moment...

There is hope.

But the hatred between the families continues...`,

choices:[
{
text:"Continue",
next:5
}
]
},

{
speaker:"Romeo",
image:"images/romeo.png",

text:`Romeo is disappointed.

He believes every minute matters.

He leaves the church frustrated.`,

choices:[
{
text:"Continue",
next:5
}
]
},

{
speaker:"Friar Laurence",
image:"images/friar.png",

text:`You refuse to help.

The conflict between the Montagues and Capulets becomes even worse.`,

choices:[
{
text:"Continue",
next:5
}
]
},

{
speaker:"The Nurse",
image:"images/nurse.png",

text:`"Juliet has never looked happier."

"I helped them because I believed their love was real."`,

choices:[
{
text:"Continue",
next:6
}
]
},

{
speaker:"Benvolio",
image:"images/benvolio.png",

text:`"The real enemy was hatred."

"If the families had listened...

none of this would have happened."`,

choices:[
{
text:"Finish Story",
next:-1
}
]
}

];

let currentScene = 0;
let hope = 50;
let conflict = 50;

const speaker = document.getElementById("speaker");
const dialogue = document.getElementById("dialogue");
const character = document.getElementById("character");
const choices = document.getElementById("choices");

function loadScene(index){

const scene = scenes[index];

speaker.textContent = scene.speaker;
dialogue.textContent = scene.text;
character.src = scene.image;

choices.innerHTML="";

scene.choices.forEach(choice=>{

const button=document.createElement("button");

button.textContent=choice.text;

button.onclick=()=>{

hope += choice.hope || 0;
conflict += choice.conflict || 0;

document.getElementById("hopeFill").style.width=Math.min(100,hope)+"%";
document.getElementById("conflictFill").style.width=Math.min(100,conflict)+"%";

if(choice.next==-1){

showEnding();

}else{

loadScene(choice.next);

}

};

choices.appendChild(button);

});

}

function showEnding(){

speaker.textContent="Friar Laurence";

character.src="images/friar.png";

if(hope>conflict){

dialogue.textContent=
"Love gave hope, but hatred was stronger. Romeo and Juliet deserved a better world.";

}else{

dialogue.textContent=
"Hatred, pride and silence destroyed everything. That is the true tragedy of Romeo and Juliet.";

}

choices.innerHTML="<button onclick='location.reload()'>Play Again</button>";

}

loadScene(0);
