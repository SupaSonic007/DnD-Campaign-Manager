"use client"

export function Create() {
    return <form>
        <label htmlFor="name">Name</label>
        <br/>
        <input name="name" type="text" id="name" placeholder="Name"></input>
        <br/>
        <br/>
        <label htmlFor="url">URL</label>
        <br/>
        <input name="url" type="text" id="url" placeholder="https://forms.google.com/example"></input>
    </form>
}