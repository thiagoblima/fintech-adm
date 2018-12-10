/**
 * @author: <thitheguy@gmail.com> Thiago Lima
 * @class: ProductModel
 * @version: 0.1.0
 * @description: Product Obejct Model.
 * @exports: object
 */


export interface Product {
    id: number;
    name: string;
    type: string;
    colors: Array<string>;
    category: { 
        id: number;
        name: string;
     };
}
