const scenes = [

{
speaker:"Friar Laurence",
image:"images/friar.png",
background:"images/background.jpg",

text:`Welcome...

My name is Friar Laurence.

Perhaps you know me only as the priest from Romeo and Juliet.

People remember the tragedy.

I remember every decision that led to it.

Today...

You will relive those moments with me.

Your choices will shape Hope and Conflict.

Are you ready to begin?`,

feedback:"Every story begins with a single choice.",

choices:[
{
text:"Begin the podcast",
next:1
}
]
},

{
speaker:"Friar Laurence",
image:"images/friar.png",
background:"images/background.jpg",

text:`Before we continue...

Tell me...

How much do you already know about Romeo and Juliet?`,

feedback:"Your answer only changes the dialogue.",

choices:[

{
text:"I know the whole story.",
next:2,
hope:5
},

{
text:"I know a little.",
next:2
},

{
text:"This is my first time.",
next:2,
conflict:2
}

]

},

{
speaker:"Friar Laurence",
image:"images/romeo.png",
background:"images/background.jpg",

text:`One morning Romeo rushed into my cell.

His eyes were shining.

'Father,' he said.

'I have fallen in love.'

He had met Juliet only the night before.

Now he wanted to marry her immediately.

What would you have done?`,

feedback:"Your decision will influence the rest of the story.",

choices:[

{
text:"Marry them in secret.",
next:3,
hope:20,
conflict:15
},

{
text:"Tell Romeo to wait.",
next:4,
hope:10,
conflict:0
},

{
text:"Refuse completely.",
next:5,
hope:-10,
conflict:8
}

]

},

{
speaker:"Juliet",
image:"images/juliet.png",
background:"images/background.jpg",

text:`The ceremony is secret.

Only a few people know the truth.

For a brief moment...

Love seems stronger than hatred.

But outside the church...

The feud continues.`,

feedback:"+20 Hope",

choices:[
{
text:"Continue",
next:6
}
]

},

{
speaker:"Romeo",
image:"images/romeo.png",
background:"images/background.jpg",

text:`Romeo sighs.

'I understand your advice...

But every hour without Juliet feels like forever.'

He leaves disappointed.

You wonder if waiting is truly the safest option.`,

feedback:"Patience can be wise... but also dangerous.",

choices:[
{
text:"Continue",
next:6
}
]

},

{
speaker:"Friar Laurence",
image:"images/friar.png",
background:"images/background.jpg",

text:`You refuse to help.

Perhaps it is the correct moral decision.

But Romeo refuses to abandon his love.

The families continue to hate each other.

Nothing improves.`,

feedback:"Conflict continues to grow.",

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
background:"images/background.jpg",

text:`I tried to calm everyone.

But anger spread faster than reason.

Soon...

Mercutio and Tybalt met in the streets.

Everyone feared what would happen next.`,

feedback:"A peaceful city slowly becomes a battlefield.",

choices:[

{
text:"Listen to Mercutio",
next:7
},

{
text:"Listen to Tybalt",
next:8
}

]

},

{
speaker:"Mercutio",
image:"images/romeo.png",
background:"images/background.jpg",

text:`'Why should we fear the Capulets?'

'If someone challenges us...

we answer.'

His confidence inspires some people...

and worries others.`,

feedback:"Pride often creates unnecessary conflict.",

choices:[

{
text:"Support Mercutio",
next:9,
conflict:15
},

{
text:"Try to calm him",
next:9,
hope:10
}

]

},

{
speaker:"Friar Laurence",
image:"images/friar.png",
background:"images/background.jpg",

text:`Tybalt cannot forgive Romeo.

His anger burns stronger every day.

You know revenge never ends well.

But can anyone stop him now?`,

feedback:"Hatred feeds hatred.",

choices:[

{
text:"Ask Tybalt to forgive.",
next:9,
hope:15
},

{
text:"Stay silent.",
next:9,
conflict:10
}

]

},
{
speaker:"Friar Laurence",
image:"images/friar.png",
background:"images/background.jpg",

text:`The worst happens.

Mercutio and Tybalt fight in the streets of Verona.

Romeo tries to stop them.

For one brief moment...

Everything depends on a single action.`,

feedback:"Some moments change history forever.",

choices:[

{
text:"Watch what happens",
next:10
},

{
text:"Think about what you would do",
next:10,
hope:5
}

]

},

{
speaker:"Friar Laurence",
image:"images/romeo.png",
background:"images/background.jpg",

text:`Mercutio falls.

His final words echo through the streets.

Romeo is devastated.

Filled with grief and anger...

he challenges Tybalt.`,

feedback:"Grief often becomes anger.",

choices:[

{
text:"Continue",
next:11
}

]

},

{
speaker:"Friar Laurence",
image:"images/romeo.png",
background:"images/background.jpg",

text:`Question 1

Who kills Tybalt?`,

feedback:"Choose the correct answer.",

choices:[

{
text:"Romeo",
next:12,
hope:10,
conflict:-5
},

{
text:"Mercutio",
next:12,
hope:-5,
conflict:5
},

{
text:"Benvolio",
next:12,
hope:-5,
conflict:5
}

]

},

{
speaker:"Friar Laurence",
image:"images/friar.png",
background:"images/background.jpg",

text:`Romeo has killed Tybalt.

Now the Prince has no choice.

Romeo is banished from Verona.

Juliet remains alone.

Both lovers believe the worst is yet to come.`,

feedback:"Every action has consequences.",

choices:[

{
text:"Continue",
next:13
}

]

},

{
speaker:"Juliet",
image:"images/juliet.png",
background:"images/background.jpg",

text:`My parents want me to marry Paris.

But I am already Romeo's wife.

I cannot tell them the truth.

Friar Laurence...

please help me.

What should I do?`,

feedback:"This is one of the most important choices in the story.",

choices:[

{
text:"Prepare the sleeping potion.",
next:14,
hope:15,
conflict:10
},

{
text:"Tell Juliet to confess everything.",
next:15,
hope:10,
conflict:5
},

{
text:"Tell her to escape Verona immediately.",
next:16,
hope:5,
conflict:15
}

]

},

{
speaker:"Friar Laurence",
image:"images/friar.png",
background:"images/background.jpg",

text:`You prepare a potion.

It will make Juliet appear dead.

The plan is dangerous...

but it seems to be the only way to save the lovers.`,

feedback:"A risky plan can still fail.",

choices:[

{
text:"Continue",
next:17
}

]

},

{
speaker:"Juliet",
image:"images/juliet.png",
background:"images/background.jpg",

text:`Juliet tells her parents everything.

Unfortunately...

they refuse to listen.

The conflict inside the Capulet family becomes even stronger.`,

feedback:"Honesty is not always enough.",

choices:[

{
text:"Continue",
next:17
}

]

},

{
speaker:"Friar Laurence",
image:"images/friar.png",
background:"images/background.jpg",

text:`You suggest escaping Verona.

It sounds simple...

but the city is full of guards.

Leaving unnoticed will not be easy.`,

feedback:"Running away creates new problems.",

choices:[

{
text:"Continue",
next:17
}

]

},

{
speaker:"Friar Laurence",
image:"images/friar.png",
background:"images/background.jpg",

text:`Before the story reaches its tragic ending...

let us see how carefully you have listened.`,

feedback:"The next answers will affect your final score.",

choices:[

{
text:"I'm ready.",
next:18
}

]

},
{
speaker:"Friar Laurence",
image:"images/friar.png",
background:"images/background.jpg",

text:`Question 2

Why does Juliet drink the potion?`,

feedback:"Think carefully before answering.",

choices:[

{
text:"To avoid marrying Paris.",
next:19,
hope:10,
conflict:-5
},

{
text:"To leave Verona forever.",
next:19,
hope:-5,
conflict:5
},

{
text:"To punish her parents.",
next:19,
hope:-5,
conflict:5
}

]

},

{
speaker:"Juliet",
image:"images/juliet.png",
background:"images/background.jpg",

text:`Night falls.

Juliet looks at the small bottle in her hands.

If the plan works...

she will see Romeo again.

If it fails...

everything is lost.`,

feedback:"Courage and fear often exist together.",

choices:[

{
text:"Continue",
next:20
}

]

},

{
speaker:"Friar Laurence",
image:"images/friar.png",
background:"images/background.jpg",

text:`Question 3

Who created the sleeping potion plan?`,

feedback:"A simple question... or is it?",

choices:[

{
text:"Friar Laurence",
next:21,
hope:10,
conflict:-5
},

{
text:"Romeo",
next:21,
hope:-5,
conflict:5
},

{
text:"Paris",
next:21,
hope:-5,
conflict:5
}

]

},

{
speaker:"Friar Laurence",
image:"images/friar.png",
background:"images/background.jpg",

text:`A message must reach Romeo.

The letter explains everything.

If he receives it...

the plan can succeed.

If he does not...

disaster awaits.`,

feedback:"Sometimes fate depends on a single message.",

choices:[

{
text:"Send the letter immediately.",
next:22,
hope:15
},

{
text:"Double-check the plan first.",
next:22,
hope:5
},

{
text:"Trust fate.",
next:22,
conflict:10
}

]

},

{
speaker:"Friar Laurence",
image:"images/friar.png",
background:"images/background.jpg",

text:`Unfortunately...

the letter never reaches Romeo.

A quarantine prevents the messenger from travelling.

Romeo hears only one thing:

'Juliet is dead.'`,

feedback:"A misunderstanding changes everything.",

choices:[

{
text:"Continue",
next:23
}

]

},

{
speaker:"Romeo",
image:"images/romeo.png",
background:"images/background.jpg",

text:`When Romeo hears the news...

he loses hope.

He decides to return to Verona one final time.

His heart is broken.

But his decision has already been made.`,

feedback:"Despair clouds judgment.",

choices:[

{
text:"Continue",
next:24
}

]

},

{
speaker:"Friar Laurence",
image:"images/friar.png",
background:"images/background.jpg",

text:`Question 4

What is Romeo's punishment after killing Tybalt?`,

feedback:"One more question.",

choices:[

{
text:"He is banished from Verona.",
next:25,
hope:10,
conflict:-5
},

{
text:"He is imprisoned.",
next:25,
hope:-5,
conflict:5
},

{
text:"He becomes a Capulet.",
next:25,
hope:-5,
conflict:5
}

]

},

{
speaker:"Friar Laurence",
image:"images/friar.png",
background:"images/background.jpg",

text:`The tomb is silent.

Romeo enters believing Juliet is gone forever.

Nearby...

Juliet is only sleeping.

Yet neither of them knows the truth.`,

feedback:"The audience knows what the characters do not.",

choices:[

{
text:"Continue",
next:26
}

]

},

{
speaker:"Friar Laurence",
image:"images/friar.png",
background:"images/background.jpg",

text:`Before the final moments...

answer one last question.`,

feedback:"Your final score is almost complete.",

choices:[

{
text:"Continue",
next:27
}

]

},
{
speaker:"Friar Laurence",
image:"images/friar.png",
background:"images/background.jpg",

text:`Question 5

What is the main message of Romeo and Juliet?`,

feedback:"This is the final question.",

choices:[

{
text:"Hatred destroys innocent lives.",
next:28,
hope:15,
conflict:-10
},

{
text:"Love always defeats everything.",
next:28,
hope:5
},

{
text:"Revenge solves problems.",
next:28,
hope:-10,
conflict:15
}

]

},

{
speaker:"Friar Laurence",
image:"images/friar.png",
background:"images/background.jpg",

text:`You have reached the final chapter.

Everything that happened began with love...

but every decision added more conflict.

Take one last look at the story before its conclusion.`,

feedback:"Your journey is almost over.",

choices:[

{
text:"Continue",
next:29
}

]

},

{
speaker:"Romeo",
image:"images/romeo.png",
background:"images/background.jpg",

text:`Romeo enters the tomb.

He believes Juliet has died.

Unable to imagine life without her...

he drinks poison beside her.`,

feedback:"A fatal misunderstanding.",

choices:[

{
text:"Continue",
next:30
}

]

},

{
speaker:"Juliet",
image:"images/juliet.png",
background:"images/background.jpg",

text:`Juliet wakes.

Romeo is beside her...

but it is too late.

The plan has failed.

The tragedy cannot be undone.`,

feedback:"Hope disappears in a single moment.",

choices:[

{
text:"Continue",
next:31
}

]

},

{
speaker:"Friar Laurence",
image:"images/friar.png",
background:"images/background.jpg",

text:`Looking back...

do you think there was a moment where everything could have changed?`,

feedback:"There is no perfect answer.",

choices:[

{
text:"Yes, when the families refused peace.",
next:32,
hope:10
},

{
text:"Yes, when Romeo acted in anger.",
next:32,
hope:10
},

{
text:"No, fate decided everything.",
next:32,
conflict:10
}

]

},

{
speaker:"Benvolio",
image:"images/benvolio.png",
background:"images/background.jpg",

text:`The Montagues and the Capulets finally understand what their hatred has caused.

But they learn this lesson too late.

Peace arrives...

only after unbearable loss.`,

feedback:"Sometimes peace has the highest price.",

choices:[

{
text:"See your ending",
next:-1
}

]

}

];
let currentScene = 0;

let hope = 50;
let conflict = 50;

let typing = false;

const speaker = document.getElementById("speaker");
const dialogue = document.getElementById("dialogue");
const character = document.getElementById("character");
const choices = document.getElementById("choices");

const background = document.getElementById("background");

const hopeFill = document.getElementById("hopeFill");
const conflictFill = document.getElementById("conflictFill");

const hopeValue = document.getElementById("hopeValue");
const conflictValue = document.getElementById("conflictValue");

const progressFill = document.getElementById("progressFill");
const sceneCounter = document.getElementById("sceneCounter");
const chapter = document.getElementById("chapter");

const feedbackText = document.getElementById("feedbackText");
const endingTitle = document.getElementById("endingTitle");

function clamp(value){

    if(value < 0) return 0;
    if(value > 100) return 100;

    return value;

}

function updateBars(){

    hope = clamp(hope);
    conflict = clamp(conflict);

    hopeFill.style.width = hope + "%";
    conflictFill.style.width = conflict + "%";

    hopeValue.textContent = hope + "%";
    conflictValue.textContent = conflict + "%";

}

function updateProgress(index){

    const totalScenes = scenes.length;

    const progress = ((index + 1) / totalScenes) * 100;

    progressFill.style.width = progress + "%";

    sceneCounter.textContent =
        `Scene ${index + 1} / ${totalScenes}`;

    if(index < 8){

        chapter.textContent = "Chapter 1";

    }else if(index < 18){

        chapter.textContent = "Chapter 2";

    }else{

        chapter.textContent = "Chapter 3";

    }

}

function showFeedback(text){

    feedbackText.style.opacity = 0;

    setTimeout(()=>{

        feedbackText.textContent = text || "";

        feedbackText.style.opacity = 1;

    },200);

}

function changeBackground(scene){

    background.style.opacity = .4;

    setTimeout(()=>{

        background.style.backgroundImage =
            `url("${scene.background}")`;

        background.style.opacity = 1;

    },250);

}

function changeCharacter(scene){

    character.style.opacity = 0;
    character.style.transform = "translateY(20px)";

    setTimeout(()=>{

        character.src = scene.image;

        character.style.opacity = 1;
        character.style.transform = "translateY(0px)";

    },250);

}

function typeText(text, element, speed = 22){

    typing = true;

    element.textContent = "";

    let i = 0;

    const interval = setInterval(()=>{

        element.textContent += text.charAt(i);

        i++;

        if(i >= text.length){

            clearInterval(interval);

            typing = false;

        }

    },speed);

}
function loadScene(index){

    currentScene = index;

    const scene = scenes[index];

    updateProgress(index);

    speaker.textContent = scene.speaker;

    changeCharacter(scene);

    changeBackground(scene);

    showFeedback(scene.feedback);

    typeText(scene.text, dialogue);

    choices.innerHTML = "";

    scene.choices.forEach(choice=>{

        const button = document.createElement("button");

        button.textContent = choice.text;

        button.disabled = false;

        button.onclick = ()=>{

            if(typing) return;

            button.disabled = true;

            hope += choice.hope || 0;
            conflict += choice.conflict || 0;

            updateBars();

            dialogue.parentElement.style.opacity = 0;

            setTimeout(()=>{

                if(choice.next === -1){

                    showEnding();

                }else{

                    loadScene(choice.next);

                }

                dialogue.parentElement.style.opacity = 1;

            },350);

        };

        choices.appendChild(button);

    });

}

function showEnding(){

    speaker.textContent = "Friar Laurence";

    changeCharacter({

        image:"images/friar.png"

    });

    showFeedback("The story has come to an end.");

    progressFill.style.width = "100%";

    sceneCounter.textContent =
        `Scene ${scenes.length} / ${scenes.length}`;

    chapter.textContent = "Finished";

    choices.innerHTML = "";

    dialogue.parentElement.style.opacity = 0;

    setTimeout(()=>{

        dialogue.parentElement.style.opacity = 1;

        endingTitle.style.display = "block";

        if(hope >= 75 && conflict <= 45){

            endingTitle.textContent =
                "🌿 THE HOPE ENDING";

            dialogue.textContent =
`You encouraged wisdom, patience and forgiveness.

Although Romeo and Juliet could not escape tragedy, your decisions showed that peace is always possible when people choose compassion over hatred.

Hope remained alive until the very end.

Thank you for listening to the podcast.`;

        }

        else if(conflict >= 75){

            endingTitle.textContent =
                "💔 THE TRAGIC ENDING";

            dialogue.textContent =
`Conflict dominated nearly every decision.

Hatred, revenge and pride became stronger than reason.

Romeo and Juliet were not the only victims...

An entire city suffered because no one stopped the violence in time.

This is the darkest ending.`;

        }

        else{

            endingTitle.textContent =
                "⚖️ THE BALANCED ENDING";

            dialogue.textContent =
`Your choices created both hope and conflict.

Like the original play, some decisions helped while others made the situation worse.

Romeo and Juliet reminds us that even good intentions cannot always prevent tragedy.

Every choice matters.`;

        }

        choices.innerHTML = "";

        const restart = document.createElement("button");

        restart.textContent = "🔄 Play Again";

        restart.onclick = ()=>{

            location.reload();

        };

        choices.appendChild(restart);

    },400);

}
/* ---------- INITIAL SETUP ---------- */

hope = clamp(hope);
conflict = clamp(conflict);

updateBars();

progressFill.style.width = "0%";

feedbackText.textContent = "";
feedbackText.style.opacity = 0;

endingTitle.textContent = "";
endingTitle.style.display = "none";

dialogue.textContent = "";
speaker.textContent = "";

changeBackground({
    background:"images/background.jpg"
});

changeCharacter({
    image:"images/friar.png"
});

/* ---------- START GAME ---------- */

setTimeout(()=>{

    loadScene(0);

},300);

/* ---------- OPTIONAL KEYBOARD SHORTCUTS ---------- */

document.addEventListener("keydown",(event)=>{

    if(event.key === "Enter"){

        const firstButton = choices.querySelector("button");

        if(firstButton && !typing){

            firstButton.click();

        }

    }

});
