import {Image} from "../models/Images.js"
import {Video} from "../models/Videos.js"
import { getArtist } from "../pages/photographer.js";

export class Media {
    constructor(media){
        if ("image" in media){
            return new Image(media);
        }
        else {
            return new Video(media);
        }
    }
}



