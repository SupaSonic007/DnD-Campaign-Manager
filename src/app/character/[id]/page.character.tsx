"use client"

export default function CharacterPage({character}: { character: {id: string, name: string, owner: string, url:string }}) {
    
    return <ul>
        <li>{character.id}</li>
        <br/>
        <li>{character.name}</li>
        <br/>
        <li>{character.owner}</li>
        <br/>
        <li>{character.url}</li>
    </ul>
}