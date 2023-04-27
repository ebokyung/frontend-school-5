class ColaGenerator {
    constructor() {
        this.itemList = document.querySelector('.section-a .sale-items');
    }

    async setup() {
        const response = await this.loadData();
        this.colaFactory(response);
    }

    async loadData() {

        try {
            // ? - network 탭에 안나옴 !!!!!
            const response = await fetch('./items.json');

            if (response.ok) { // 서버의 응답 코드가 200 ~ 299 일 경우
                return response.json();
            } else {
                throw new Error(response.status);
            }
        } catch (error) {
            console.log(error);
        }

    }

    colaFactory(data) {
        const docFrag = document.createDocumentFragment();

        data.forEach(el => {
            const item = document.createElement('li');
            const itemTemplate = `
            <button class="vm-item" data-item=${el.name} data-count=${el.count} data-price=${el.cost} data-img=${el.img} type="button">
                <img class="img" src="./img/${el.img}" alt="">
                <span class="name">${el.name}</span>
                <strong class="price">${el.cost}원</strong>
            </button>
            `;

            item.innerHTML = itemTemplate;
            docFrag.append(item);
        })

        this.itemList.append(docFrag);

    }

}

export default ColaGenerator;