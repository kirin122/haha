/*
當用戶滾動頁面至底部時，自動加載更多的相片，並免內存溢出
*/

const note = document.querySelector("#note");
const imageLength = 9;
const AllimageLength = 31;
const totalPage = Math.ceil(AllimageLength / imageLength);
let page = 1;
let imageFirst = 1;
let imageLast = imageLength;

const createTags = () => {
    note.innerText = `第${page}頁，共${totalPage}頁，目前載入${container.querySelectorAll("img").length
        }筆，共${AllimageLength}筆`;

    for (
        let i = imageFirst;
        i <= imageLast && imageFirst <= AllimageLength;
        i++
    ) {
        const li = document.createElement("li");
        li.innerHTML = `
        <div>
            <img src="${`static/img/p${i}.png`}" alt="${i}" onerror="this.src='https://via.placeholder.com/300x300&txt=error'">
        </div>
        `;
        container.appendChild(li);
        imageFirst += 1;
    }
    imageLast += imageLength;
    page++;
};

const handleScroll = () => {
    if (page <= totalPage) {
        // NOTE: 元素被overflow擋住，只能使用 scrollHeight
        if (window.innerHeight + window.scrollY >= document.body.scrollHeight) {
            createTags();
        }
    } else {
        window.removeEventListener("scroll", handleScroll);
    }
};

window.onload = createTags();
window.addEventListener("scroll", handleScroll);
