
document.addEventListener("DOMContentLoaded", () => {
    const sizeButtons = document.querySelectorAll(".product-purchase__size");
    const articleElement = document.querySelector(".product-purchase__article");
    const currentPriceElement = document.querySelector(".product-purchase__price-current");
    const oldPriceElement = document.querySelector(".product-purchase__price-old");

    const cartButton = document.querySelector(".product-purchase__button-cart");
    const favoriteButton = document.querySelector(".product-purchase__button-favorite");

    const tabs = document.querySelectorAll(".product-info__tab");
    const descriptionElement = document.querySelector(".product-info__description");

    const tabContent = {
        ingredients: "Китайский бирюзовый чай, цукаты, натуральные ароматические масла.",
        usage: "Отзывы о товаре пока не добавлены.",
        description: "китайский бирюзовый чай, цукаты, натуральные ароматические масла. Светлый Фуцзяньский улун с ароматом ананаса. В сухом виде — красивый крупный лист изумрудного цвета, скруткой листа напоминающий Те Гуань Инь. В прогретой посуде аромат свежей, весенней зелени и спелого ананаса. Скрученный лист медленно раскрывается, отдавая весь свой аромат. Тем, кому пришёлся по вкусу этот чай, может также понравиться связанный чай «Ананасовый рай»"      
    };
    
    descriptionElement.textContent = tabContent.description;

    function formatPrice(value) {
        return Number(value).toLocaleString("ru-RU", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        }) + " ₽";
    }

    sizeButtons.forEach((button) => {
        button.addEventListener("click", () => {
            sizeButtons.forEach((item) => {
                item.classList.remove("button--active");
            });

            button.classList.add("button--active");

            const price = button.dataset.price;
            const oldPrice = button.dataset.oldPrice;
            const article = button.dataset.article;

            currentPriceElement.textContent = formatPrice(price);
            oldPriceElement.textContent = formatPrice(oldPrice);
            articleElement.textContent = `Артикул: ${article}`;
        });
    });

    tabs.forEach((tab) => {
        tab.c
        tab.addEventListener("click", () => {
            tabs.forEach((item) => {
                    item.classList.remove("product-info__tab--active");
            });

            tab.classList.add("product-info__tab--active");

            const selectedTab = tab.dataset.tab;

            if (tabContent[selectedTab] !== undefined) {
                descriptionElement.textContent = tabContent[selectedTab];
            }
        });
    });

    cartButton.addEventListener("click", () => {
        cartButton.textContent = "Перейти в корзину";
        cartButton.classList.add("button--active");
    });

    favoriteButton.addEventListener("click", () => {
        const isFavorite = favoriteButton.dataset.favorite === "true";

        favoriteButton.dataset.favorite = String(!isFavorite);
        favoriteButton.textContent = isFavorite
            ? "В избранное"
            : "В избранном";

        favoriteButton.classList.toggle("button--active", !isFavorite);
    });
});
