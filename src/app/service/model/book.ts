/**
 * need some swag ?
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */


/**
 * Book resource representation
 */
export interface Book {
    /**
     * Identifier
     */
    id?: number;
    /**
     * Title of the book
     */
    title: string;
    /**
     * Summary describing the book
     */
    description?: string;
    /**
     * Unit cost
     */
    unitCost?: number;
    /**
     * ISBN number
     */
    isbn: string;
    /**
     * Date in which the book has been published
     */
    publicationDate?: Date;
    /**
     * Number of pages
     */
    nbOfPages?: number;
    /**
     * URL of the image cover
     */
    imageURL?: string;
    /**
     * Language in which the book has been written
     */
    language?: Book.LanguageEnum;
}
export namespace Book {
    export type LanguageEnum = 'ENGLISCH' | 'FRENCH' | 'SPANISCH' | 'ITALIAN' | 'FINISH' | 'GERMAN' | 'RUSSIAN';
    export const LanguageEnum = {
        ENGLISCH: 'ENGLISCH' as LanguageEnum,
        FRENCH: 'FRENCH' as LanguageEnum,
        SPANISCH: 'SPANISCH' as LanguageEnum,
        ITALIAN: 'ITALIAN' as LanguageEnum,
        FINISH: 'FINISH' as LanguageEnum,
        GERMAN: 'GERMAN' as LanguageEnum,
        RUSSIAN: 'RUSSIAN' as LanguageEnum
    }
}
