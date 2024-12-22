import {NextFunction, Request, Response} from "express";
import {IBeer} from "../types";

const fs = require("fs");

const brews = require('../brew.json');


const getBeer = (req: Request, res: Response, next?: NextFunction) => {
    const id = Number(req.params.id);
    const brewsById = brews.find((beer: IBeer) => beer.id === id);
    console.log(id, brews)
    if (!brewsById) {
        return res.status(404).send({
            message: 'Beer not found'
        })
    }
    return res.status(200).send(brewsById);
}

const getBeers = (req: Request, res: Response, next: NextFunction) => {
    return res.status(200).send(brews);
}

const updateBeer = (req: Request, res: Response, next: NextFunction) => {
    const id = Number(req.params.id);
    const beerIndex = brews.findIndex((beer: IBeer) => beer.id === id);
    const updatedBeer = Object.assign(brews[beerIndex], req.body);
    fs.writeFileSync(brews, JSON.stringify(updatedBeer));
    return res.status(200).send({message: 'Beer successfully updated'});
}

module.exports = {
    getBeers,
    getBeer,
    updateBeer
};
