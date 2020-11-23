import { registerEnumType } from "type-graphql";

export enum Species {
    BIRDS = "BIRDS",
    FISH = "FISH",
    MAMMALS = "MAMMALS",
    REPTILES = "REPTILES"
}

registerEnumType(Species, {
    name: "Species"
})
