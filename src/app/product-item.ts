export class ProductItem {

    public imgSrc: string;
    public title: string;
    public description: string;
    // starsRating: string;

    constructor(imgSrc: string, title: string, description: string, starsRating?: number) {
        this.imgSrc = imgSrc;
        this.title = title;
        this.description = description;
        // this.starsRating = this.setStarsRating();
    }

    // setStarsRating() {
    //     return "hola";
    // }

}
