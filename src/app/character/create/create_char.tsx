import React from "react";
import "./styles.css";

export class CharacterStats {
    xp = 0;

    level = () => {
        return this.xp < 3 ? 1 : Math.floor(this.xp / 3) + 1;
    };

    attributePointsAvailable = (xp: number) => {
        return 40 + xp;
    };

    attributes = [
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
