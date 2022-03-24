
class Artists {
    constructor (json) {
        this.json = json;
    }
    get(name) {
        return this.json[name];
    }
}
let a = new Artists(api_url);
console.log(a.get("Mimi Keel"))


        
class Photographe {
    constructor (photographers) {
        this._name = name;
        this._id = id;
        this._city = city;
        this.country = country;
        this._tagline = tagline;
        this._price = price;
        this._portrait = portrait;
    }
    get name () {
        return this._name
    }
    get id() {
        return this._id
    }
    get city(){
        return this._city
    }
    get country(){
        return this._city
    }
    get tagline(){
        return this._tagline
    }
    get price () {
        return this._price
    }
    get portrait () {
        return `/assets/Sample Photos/Photographers ID Photos/${this._portrait}`
    }
}