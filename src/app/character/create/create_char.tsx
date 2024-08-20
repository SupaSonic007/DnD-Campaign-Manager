import React from "react";
import "./styles.css";

interface attributesInterface {
    attributes: [
        { name: "Physical"; attributes: Attribute[] },
        {
            name: "Mental";
            attributes: Attribute[];
        },
        {
            name: "Social";
            attributes: Attribute[];
        },
        {
            name: "Extraodinary";
            attributes: Attribute[];
        }
    ];
}

export class CharacterStats {
    constructor(
        xp: number = 0,
        // @ts-ignore
        attributes: attributesInterface["attributes"] = defaultAttributes,
        fatigue: number = 0
    ) {
        // JSON PARSE/STRINGIFY to ensure not pointer
        this.xp = xp;
        this.fatigue = fatigue;
        this.attributes = attributes;
    }

    fatigue: number;
    xp: number;
    attributes: attributesInterface["attributes"];

    level = () => {
        return this.xp < 3 ? 1 : Math.floor(this.xp / 3) + 1;
    };

    attributePointsAvailable = (xp: number) => {
        return 40 + xp;
    };

    // ! TO IMPLEMENT (USE CHAR SHEET)
    ARMOUR_GUARD = () => 0;
    //     =IF(OR(ARMOUR = "None", ARMOUR = ""),0,IF(
    //     ARMOUR = "Light [+1 Armor | Fort 0]",1,IF(
    //     ARMOUR = "Medium [+2 Armor | Fort 2]",2,IF(
    //     ARMOUR = "Heavy [+3 Armor | Fort 3]",3))))
    SHIELD_GUARD = () => 0;
    //     =IF(OR(SHIELD = "None", SHIELD=""),0,IF(
    //     SHIELD = "Shield [Defensive 1 | Forceful]",1,IF(
    //     SHIELD = "Large Shield [Defensive 2 | Forceful]",1,"")))
    ATTRIBUTE_GUARD = () => {
        // AGILITY + MIGHT
        return (
            // @ts-ignore
            this.attributes[0].attributes.find((a) => (a.name = "Agility"))
                ?.score +
            // @ts-ignore
            this.attributes[0].attributes.find((a) => (a.name = "Might"))?.score
        );
    };
    ATTRIBUTE_TOUGHNESS = () => {
        // =FORTITUDE + WILL
        return (
            // @ts-ignore
            this.attributes[0].attributes.find((a) => (a.name = "Fortitude"))
                ?.score +
            // @ts-ignore
            this.attributes[0].attributes.find((a) => (a.name = "Will"))?.score
        );
    };
    ATTRIBUTE_RESOLVE = () => {
        // =WILL + PRESENCE
        return (
            // @ts-ignore
            this.attributes[0].attributes.find((a) => (a.name = "Will"))
                ?.score +
            // @ts-ignore
            this.attributes[0].attributes.find((a) => (a.name = "Presence"))
                ?.score
        );
    };
    OTHER_GUARD = 0;
    OTHER_TOUGHNESS = 0;
    OTHER_RESOLVE = 0;

    guard = () =>
        this.fatigue >= 4
            ? this.ARMOUR_GUARD() + this.SHIELD_GUARD() + 10 + this.OTHER_GUARD
            : this.ARMOUR_GUARD() +
              this.SHIELD_GUARD() +
              this.ATTRIBUTE_GUARD() +
              10;
    toughness = () =>
        this.fatigue >= 4
            ? 10 + this.OTHER_TOUGHNESS
            : this.ATTRIBUTE_TOUGHNESS() + 10;
    resolve = () =>
        this.fatigue >= 4
            ? 10 + this.OTHER_RESOLVE
            : this.ATTRIBUTE_RESOLVE() + 10;
}

export class Attribute {
    name!: string;

    constructor(name: string) {
        this.name = name;
    }

    score = 0;

    dice = () => {
        switch (this.score) {
            case 0:
                return "d20";
            case 1:
                return "d20 + d4";
            case 2:
                return "d20 + d6";
            case 3:
                return "d20 + d8";
            case 4:
                return "d20 + d10";
            case 5:
                return "d20 + 2d6";
            case 6:
                return "d20 + 2d8";
            case 7:
                return "d20 + 2d10";
            case 8:
                return "d20 + 3d8";
            case 9:
                return "d20 + 3d10";
            case 10:
                return "d20 + 4d8";
            default:
                return "error";
        }
    };

    cost = () => {
        return (this.score * (this.score + 1)) / 2;
    };

    passives = () => {
        return 10 + 2 * this.score;
    };

    toHTML() {
        return (
            <ul id={this.name}>
                <span
                    id="name"
                    style={{ textDecoration: "underline", fontWeight: "bold" }}
                >
                    {this.name}
                </span>
                <br />
                <li id="score">Score: {this.score}</li>
                <li id="dice">Dice: {this.dice()}</li>
                <li id="cost">Cost: {this.cost()}</li>
                <li id="passives">Passives: {this.passives()}</li>
                <br />
                <br />
            </ul>
        );
    }

    updateScore(score: number) {
        this.score = score;
        if (this.score < 0) this.score = 0;
        if (this.score > 6) this.score = 6;
    }

    toString() {
        return `${this.name}: [Score: ${
            this.score
        }, Cost: ${this.cost()}, Dice: ${this.dice()}, Passives: ${this.passives()}]`;
    }
}

export class Proficiencies {}

export class Feats {}

const defaultAttributes = [
    {
        name: "Physical",
        attributes: [
            new Attribute("Agility"),
            new Attribute("Fortitude"),
            new Attribute("Might"),
        ],
    },
    {
        name: "Mental",
        attributes: [
            new Attribute("Learning"),
            new Attribute("Logic"),
            new Attribute("Perception"),
            new Attribute("Will"),
        ],
    },
    {
        name: "Social",
        attributes: [
            new Attribute("Deception"),
            new Attribute("Persuasion"),
            new Attribute("Presence"),
        ],
    },
    {
        name: "Extraodinary",
        attributes: [
            new Attribute("Alteration"),
            new Attribute("Creation"),
            new Attribute("Energy"),
            new Attribute("Entropy"),
            new Attribute("Influence"),
            new Attribute("Movement"),
            new Attribute("Prescience"),
            new Attribute("Protection"),
        ],
    },
];
