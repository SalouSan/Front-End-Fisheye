import { Video } from "../models/Videos.js";
import { Image } from "../models/Images.js";

export class Media {
	constructor(media,photographer){
		if ("image" in media){
			return new Image({...media,photographer:photographer});
		}
		else {
			return new Video({...media,photographer:photographer});
		}
	}
}




