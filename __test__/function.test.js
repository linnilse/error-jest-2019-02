const functions = require("../function");
/* Skapa ett describe block med 3 tester där vi testar funktionen emptyList:
• ska returnera en tom lista
• ska returnera en lista vars längd är 0 (använd toHaveLength(number) )
• ska inte returnera en tom sträng
 */
/* describe('emptylist', () => {

    test('is empty', () => {
        expect(functions.emptyList()).toEqual([]);
    });
    test('is = 0', () => {
        expect(functions.emptyList()).toHaveLength(0);
    });
    test('is not empty string', () => {
        expect(functions.emptyList()).not.toBe('');
    });
}); */

/* Skapa ett describe block med 3 tester där vi testar funktionen totalProductCost:
• ska returnera 0 på en tom lista
• ska returnera 15 på en lista med ett föremål som kostar 15
• ska returnera 55 på en lista med 3 föremål som kostar 10, 15 och 30 */

/* describe('emptylist', () => {

    let products0 = [];


    let products1 = [
        { name: "Lök", price: 15 }
    ];
    let products3 = [
        { name: "Banan", price: 10 },
        { name: "Mango", price: 30 },
        { name: "Lök", price: 15 }
    ];

    test('0 on emty list', () => {
        expect(functions.totalProductCost(products0)).toBe(0);
    });
    test('15 on one item', () => {
        expect(functions.totalProductCost(products1)).toBe(15);
    });
    test('55 on 3 items', () => {
        expect(functions.totalProductCost(products3)).toBe(55);
    });
}); */

/* Skapa ett describe block med 2 tester där vi testar funktionen addProduct:
• lägger till en produkt korrekt på en tom lista – är listans längd 1 och är innehållet
korrekt?
• lägger till en produkt korrekt på en lista med 2 produkter – är listans längd 3 och är
innehållet korrekt?
Det är helt okej att göra flera expect-anrop i ett test! Testa gärna match-funktionerna
toContain(item) och toContainEqual(item) för arrays! */

/* describe('emptylist', () => {

    let products = [];

    let product = { name: "Banan", price: 10 };

    let products2 = [
        { name: "Mango", price: 30 },
        { name: "Lök", price: 15 }
    ];

    test('add a product on a emty list', () => {
        expect(functions.addProduct(products, product)).toHaveLength(1);
        expect(functions.addProduct(products, product)).toContainEqual({ name: "Banan", price: 10 });

    });
    test('add a product to a list with 2 items', () => {
        expect(functions.addProduct(products2, product)).toHaveLength(3);
        expect(functions.addProduct(products2, product)).toContainEqual({ name: "Mango", price: 30 }, { name: "Lök", price: 15 }, { name: "Banan", price: 10 });

    });

}); */

/* describe("Function removeProduct", () => {

   
    let firstElementIndex; let boll, spade, sten;
    let threeProducts, oneProduct;
    beforeEach(() => {
        boll = { name: "Boll", price: 50 };
        spade = { name: "Spade", price: 100 };
        sten = { name: "Sten", price: 1 };
        threeProducts = [boll, spade, sten];
        oneProduct = [boll];
        firstElementIndex = 0;
    });
    test("is implemented", () => {
        expect(functions.removeProduct).toBeDefined();
    });
    test("returns empty list when removing first product in list with 1 item", () => {
        expect(functions.removeProduct(oneProduct, firstElementIndex)).toEqual([]);
    });
    test("contains 2 items when removing first product in list with 3 items", () => {
        expect(functions.removeProduct(threeProducts, firstElementIndex)).toHaveLength(2);
    });
    test("removes 'Boll', contain 'Sten' and 'Spade'", () => {
        expect(functions.removeProduct(threeProducts, firstElementIndex)).toContainEqual(sten);
        expect(functions.removeProduct(threeProducts, firstElementIndex)).toContainEqual(spade);
    });
}); */

/* Indata: en lista på produkter
    Utdata: medelvärdet av en produkt i listan, avrundat till 2 decimaler
    • Om indata är en tom lista är medelvärdet 0*/

/* describe("function  averageProductPrice", () => {
    test("is implemented", () => {
        expect(functions.averageProductPrice).toBeDefined();
    });
    let boll, spade, sten;
    let threeProducts, Product;
    beforeEach(() => {
        boll = { name: "Boll", price: 50 };
        spade = { name: "Spade", price: 100 };
        sten = { name: "Sten", price: 50 };
        threeProducts = [boll, spade, sten];
        Products = [];
    });
    test("medelvärdet av en product i listan", () => {
        expect(functions.averageProductPrice(threeProducts)).toBe(66.67);
        expect(functions.averageProductPrice(Products)).toBe(0);
    });
}); */

/* Funktionen expensiveCheapProduct()
• Indata: en lista på produkter
Utdata: en lista med produkten som är billigast och produkten som är dyrast
• Om indata är en tom lista är utdata en tom lista
• Om indata innehåller en produkt så är utdata en lista med samma produkt
Valfri implementation av övriga krav ni kommer på för funktionen. */

/* describe("function expensiveCheapProduct", () => {
    test("is implemented", () => {
        expect(functions.expensiveCheapProduct).toBeDefined();
    });
    let boll, spade, sten;
    let threeProducts, Product;
    beforeEach(() => {
        boll = { name: "Boll", price: 50 };
        spade = { name: "Spade", price: 100 };
        sten = { name: "Sten", price: 20 };
        threeProducts = [boll, spade, sten];
        Products = [];
    });
    test("dyrast och billigast", () => {
        expect(functions.expensiveCheapProduct(threeProducts)).toContainEqual(spade, sten);
        expect(functions.expensiveCheapProduct(Products)).toEqual([]);
    }); 
});*/

/* Funktionen isStringAValidPrice()
• Indata: en sträng
Utdata: en boolean - true om strängen representerar ett giltigt pris, annars false
• Indata måste vara en sträng, annars returnera false
• Indata får inte vara en tom sträng för att vara ett giltigt pris
• Indata får inte innehålla tecken som ej klassificeras som Number enligt javascript
• Negativa numeriska värden är inte giltiga belopp på ett pris */

describe("function isStringAValidPrice", () => {
    test("is implemented", () => {
        expect(functions.isStringAValidPrice).toBeDefined();
    });
    test("is string a legal number", () => {
        expect(functions.isStringAValidPrice("5")).toBeTruthy();

        expect(functions.isStringAValidPrice("price")).toBeFalsy();

        expect(functions.isStringAValidPrice(5)).toBeFalsy();
    });
});