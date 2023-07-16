import ImageUrlBuilder from "@sanity/image-url";
import { client } from "./sanity";


export function urlFor(source: any) {
    return builder.image(source);
  }