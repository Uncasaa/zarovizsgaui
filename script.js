const currencies = 
[
    {
        title: "US Dollar",
        sub: "$",
        text: "USD"
    },
    {
        title: "Euro",
        sub: "€",
        text: "EUR"
    },
    {
        title: "Chinese Yuan",
        sub: "¥",
        text: "CNY"
    },
    {
        title: "Thai Baht",
        sub: "฿",
        text: "THB"
    },
    {
        title: "British Pound Sterling",
        sub: "£",
        text: "GBP"
    },
    {
        title: "Ghanaian Cedi",
        sub: "₵",
        text: "GHS"
    },
    {
        title: "Japanese Yen",
        sub: "￥",
        text: "JPY"
    },
    {
        title: "Polish Zloty",
        sub: "zł",
        text: "PLN"
    }
    
];

function loadEvent() {
    const rootElement = document.getElementById("root");

    for (let i = 0; i < currencies.length; i++) {
        rootElement.insertAdjacentHTML("beforeend", `
            <div class="card">
                <h3 class="sub" >${currencies[i].sub}</h3>
                <h2 class="title" >${currencies[i].title}</h2>
                <p class="text" >${currencies[i].text}</p>
                <button>Save<span class="material-icons">arrow_forward</span></button>
            </div>
        `);
    }
}

window.addEventListener("load", loadEvent);