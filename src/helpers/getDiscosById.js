import { discos } from "../data/discos";

export const getDiscosById = (id) => {
    return discos.find(disco => disco.id === id);
}