export class ProductItem {

    public imgSrc: string;
    public title: string;
    public description: string;
    public id: number;
    // starsRating: string;

    constructor(imgSrc: string, title: string, description: string, id: number, starsRating?: number) {
        this.imgSrc = imgSrc;
        this.title = title;
        this.description = description;
        this.id = id;
        // this.starsRating = this.setStarsRating();
    }

    // setStarsRating() {
    //     return "hola";
    // }

}
