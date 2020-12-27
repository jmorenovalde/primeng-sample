/**
 * Model for the Photo entity.
 */
export interface Photo {
  /**
   * description of the photo.
   */
  alt?: string;

  /**
   * The source of the image.
   */
  previewImageSrc?: string;

  /**
   * The source of the thumbnail of the image
   */
  thumbnailImageSrc?: string;

  /**
   * Link to external web
   */
  link?: string;

  /**
   * The title of the photo.
   */
  title?: string;
}
