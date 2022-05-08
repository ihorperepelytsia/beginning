const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const getSelector = document.querySelector("#gallery");
getSelector.style.display = "flex";
getSelector.style.justifyContent = "space-between";
getSelector.style.width = "1000px";

console.log(getSelector);
const addImgHtml = (images) => {
  images.map((img) => {
    const li = `<li><img src="${img.url}" alt="${img.alt}" height="250" width="250"></li>`;
    const createElImg = getSelector.insertAdjacentHTML("afterbegin", li);
    return createElImg;
  });
};

addImgHtml(images);
