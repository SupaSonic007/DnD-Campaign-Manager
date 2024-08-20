"use client";

import { useState } from "react";
import { CharacterStats, Attribute } from "./create_char";
import React from "react";

export function Create() {
    // Test data because database support isn't there yet
    let char = new CharacterStats();
    const [att_score, att_setScore] = useState("default");

    return (
        <div>
            <form>
                <label htmlFor="name">Name</label>
                <br />
                <input
                    name="name"
                    type="text"
                    id="name"
                    placeholder="Name"
                ></input>
                <br />
                <br />
            </form>
            <DisplayAttributeList character={char} callback={att_setScore}/>
            <DisplayDefensiveStats character={char} />
        </div>
    );
}

export function DisplayAttribute({ attribute, callback }: { attribute : Attribute, callback: Function}) {
    
    // Score state to re-render attribute data on update

    // Rerender when changing score
    function handleUpdate(e: React.ChangeEvent<HTMLInputElement>) {
        const val = e.target.value;
        // Check if the input is a number
        if (!Number.isNaN(parseInt(val))) {
            attribute.updateScore(parseInt(val));
            callback(attribute.name+attribute.score);
        }
    }
    
    return (
        <>
            <div className="attributeGridIndividual">
                <span style={{ fontWeight: "bold" }}>{attribute.name}</span>
                <span></span>
                <label
                    id="scoreLabel"
                    htmlFor="score"
                    style={{ marginRight: "5px" }}
                >
                    Score:
                </label>
                <form id={attribute.name}>
                    <input
                        id={attribute.name + "score"}
                        name="score"
                        type="number"
                        defaultValue={attribute.score}
                        onChange={handleUpdate}
                        max={6}
                        min={0}
                    />
                </form>
                <span>Cost: </span>
                <span id={attribute.name + "cost"}>{attribute.cost()}</span>
                <span>Dice: </span>
                <span id={attribute.name + "dice"}>{attribute.dice()}</span>
                <span>Passives: </span>
                <span id={attribute.name + "passives"}>
                    {attribute.passives()}
                </span>
            </div>
            <br />
            <br />
        </>
    );
}

export function DisplayAttributeList({ character, callback }: {character: CharacterStats, callback: Function}) {
    return (
        <>
            <div className="attributesGrid infoPane">
                {/* @ts-ignore */}
                {character.attributes.map((category) => (
                    <React.Fragment key={category.name}>
                        <div className="attributesGridData">
                            <br />
                            {category.attributes.map((attr: any) => (
                                <div key={attr.name}>
                                    <DisplayAttribute attribute={attr} callback={callback} />
                                </div>
                            ))}
                        </div>
                    </React.Fragment>
                ))}
            </div>
        </>
    );
}

export function DisplayDefensiveStats ({character}: {character: CharacterStats}) {
    return (
        <>
            {"Guard: " + character.guard()} <br/>
            {"Toughness: " + character.toughness()} <br/>
            {"Resolve: " + character.resolve()} <br/>
        </>
    )
}
