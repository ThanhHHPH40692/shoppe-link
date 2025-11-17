const shopeeLink = "https://shopee.vn/Box-%E1%BB%95-c%E1%BB%A9ng-M2-NVMe-M2-SATA-NGFF-cao-c%E1%BA%A5p-i.696860216.17988748271?extraParams=%7B%22display_model_id%22%3A107653424674%2C%22model_selection_logic%22%3A3%7D&sp_atk=2be3526d-1e72-4a4e-8e9d-6c422a1d03f9&xptdk=2be3526d-1e72-4a4e-8e9d-6c422a1d03f9";

document.addEventListener("DOMContentLoaded", function () {
    const adImg = document.getElementById("ad-image");
    if (adImg) {
        adImg.addEventListener("click", function () {
            window.open(shopeeLink, "_blank");
        });
    }
});
