export class Bejegyzes {
    title: String;
    content: String;
    color: String;

    constructor(title:String, content:String, color: String)
    {
        if(title == "" || content == "")
        {
            throw new Error("Nem lehet üres semelyik mező sem!")
        }
        else if(color.length != 7 && color.charAt(0) != "#")
        {
            throw new Error("Nem jó a hexakód formája!")
        }

        this.title = title;
        this.content = content;
        this.color = color;
    }

    toString() {
        return `Cím: ${this.title} Tartalom: ${this.content} Szín(Hexakód): ${this.color}`
    }
}