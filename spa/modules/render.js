import { info } from "./api.js";

const loader = document.querySelector(".loading");
const title = document.querySelector("h2");
const bio = document.querySelector("p");
const quote = document.querySelector("q");
const id = document.querySelector("div > span");
export let updateData;
export const author = [];

export function loading() {
    loader.classList.add("display");
}

export function hideLoading() {
    loader.classList.remove("display");
}

export function setData(index) {
    updateData = info.map(cleanData);

    title.innerHTML = updateData[index].author;
    bio.innerHTML = updateData[index].bio;
    quote.innerHTML = updateData[index].quote;
    id.innerHTML = updateData[index].id;
}

export function arrayInsert() {
    for (let i = 0; i < info.length; i++) {
        author.push(info[i].author);
    }
}

function cleanData(info) {
    return {
        id: info.authorId,
        author: info.author,
        quote: info.quote,
        bio: info.bio
    }
}