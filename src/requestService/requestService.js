export default class requestService {

    static async getListDrinks() {
        const res = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list`);

        if (!res.ok) {
            throw new Error(`Cloud not fetch ${res}` + `, received ${res.status}`);
        }

        return res.json();
    }

    static async getDrinks(title) {
        const res = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${encodeURIComponent(title)}`, {
            method: 'GET',
            headers: {'Content-Type': 'application/json'},
        });

        if (!res.ok) {
            throw new Error(`Cloud not fetch` + `, received ${res.status}`);
        }
        return res.json();
    }
}