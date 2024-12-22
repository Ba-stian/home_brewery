import {IBeer} from "../types";

const fs = require('fs');

class BrewService {
    getBeers() {
        return new Promise((resolve, reject) => {
            fs.readFile('brew.json', 'utf8', (err: unknown, data: string) => {
                if (err) {
                    return resolve(false)
                }
                console.log(data)
                return resolve(JSON.parse(data))
            })
        })
    };
    createBeer(data: IBeer) {
        return new Promise((resolve, reject) => {
            fs.writeFile('brew.json', JSON.stringify(data), (err: unknown) => {
                if (err) {
                    return resolve(false);
                }
                return resolve({message: 'Beer created successfully'})
            })
        })
    };
    updateBeer(id: number, data: Partial<IBeer>) {};
    deleteBeer(id: number) {};
}

module.exports = new BrewService();
