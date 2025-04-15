# JavaScript Basics

## 1. `let` Keyword
ცვლადების შესაქმნელად.

```javascript
let x = 5;
x = 10; // Now x is 10
```

## 2. Strings
ტექსტის ტიპის ცვლადი.

```javascript
let name = "Alice";
```

## 3. Numerical Operators
რიცხვითი ოპერატორები ჯავასკრიპტში:

| Operator | Description      | Example       | Result |
|----------|------------------|---------------|--------|
| `+`      | Addition         | `2 + 3`       | `5`    |
| `-`      | Subtraction      | `5 - 2`       | `3`    |
| `*`      | Multiplication   | `4 * 2`       | `8`    |
| `/`      | Division         | `10 / 2`      | `5`    |
| `%`      | Modulus (remainder) | `5 % 2`    | `1`    |

## 4. Boolean and Logical Operators
ორობითი ღირებულებები `true` or `false`.

```javascript
let isAdult = true;
```

| Operator | Meaning               | Example                  | Result      |
|----------|------------------------|---------------------------|-------------|
| `&&`     | AND                    | `true && false`          | `false`     |
| `||`     | OR                     | `true || false`          | `true`      |
| `!`      | NOT                    | `!true`                  | `false`     |

## 5. `if` and `if-else`
პირობების დამატება ინსტრუქციაზე. გარემოზე დაყრდნობით გადაწყვეტილების მისაღებად.

```javascript
let number = 5;

if (number % 2 === 0) {
    console.log("Even");
} else {
    console.log("Odd");
}
```

## 6. `switch` Statement
მრავალი პირობის შესამოწმებლად. თავიდან ირიდებს რამოდენიმე
if.else if. elseif გამოყენებას.

```javascript
let fruit = "apple";

switch (fruit) {
    case "banana":
        console.log("Yellow fruit");
        break;
    case "apple":
        console.log("Red or green fruit");
        break;
    default:
        console.log("Unknown fruit");
}
```

## Simple Examples

### ლუწი თუ კენტი. შემოწმება
```javascript
let num = 7;
if (num % 2 === 0) {
    console.log("Even");
} else {
    console.log("Odd");
}
```

### ცვლადების მნიშვნელობების გაცვლა
```javascript
let a = 3, b = 8;
let temp = a;
a = b;
b = temp;
console.log("a:", a, "b:", b);
```

### უმაღლესი და უმცირესი
```javascript
let a = 3, b = 8;
if(a > b){
    console.log("a: is greater");
}
else{
    console.log("b: is greater");
}
```

