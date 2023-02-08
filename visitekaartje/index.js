const start = document.getElementById("Name")
const text = document.getElementById("text")
const url = " https://stefan-the-api-middleman.netlify.app/.netlify/functions/members/?first=200"

function promiseOfSomeData() {
    fetch(url).then(r => r.json()).then(data => {
        const member = data.data.members[95]
        start.innerHTML = member.name;
    });
    
}

window.onload = async () => {
    let someData = promiseOfSomeData();
    console.log("onload");
};

function openFormSkills() {
    document.getElementById("myForm").style.display = "block";
    fetch(url).then(r => r.json()).then(data => {
        const member = data.data.members[95]
        member.avatar = "Python, Java, Javascript"
        text.innerHTML = member.avatar;
    });
}

function openFormExperience() {
    document.getElementById("myForm").style.display = "block";
    fetch(url).then(r => r.json()).then(data => {
        const member = data.data.members[95]
        member.prefix = "Ictual, Kalipo";
        text.innerHTML = "Worked at " + member.prefix;
    });
}

function openFormSocials() {
    document.getElementById("myForm").style.display = "block";
    fetch(url).then(r => r.json()).then(data => {
        const member = data.data.members[95]
        member.website = "https://github.com/RainbowJM";
        text.innerHTML = "Social: " + member.website.link(member.website);
    });
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}
