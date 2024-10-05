import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

export default function App() {
  const printOutput = (questionNumber, content) => (
    <View style={styles.display} key={content}>
      <Text>{questionNumber} {content}</Text>
    </View>
  );

  const renderExercises = () => {
    let output = [];

    // 1. Print numbers from 1 to 10
    output.push(printOutput(1, ". Numbers from 1 to 10:"));
    for (let i = 1; i <= 10; i++) {
      output.push(printOutput("", i.toString()));
    }

    // 2. Print the odd numbers less than 100
    output.push(printOutput(2, ". Odd numbers less than 100:"));
    for (let i = 1; i < 100; i += 2) {
      output.push(printOutput("", i.toString()));
    }

    // 3. Print the multiplication table with 7
    output.push(printOutput(3, ". Multiplication table with 7:"));
    for (let i = 1; i <= 10; i++) {
      output.push(printOutput("", `7 x ${i} = ${7 * i}`));
    }

    // 4. Print all the multiplication tables with numbers from 1 to 10
    output.push(printOutput(4, "All multiplication tables with numbers from 1 to 10:"));
    for (let i = 1; i <= 10; i++) {
      for (let j = 1; j <= 10; j++) {
        output.push(printOutput("", `${i} x ${j} = ${i * j}`));
      }
    }

    // 5. Calculate the sum of numbers from 1 to 10
    let sum = 0;
    for (let i = 1; i <= 10; i++) {
      sum += i;
    }
    output.push(printOutput(5, `Sum: ${sum}`));

    // 6. Calculate 10!
    let factorial = 1;
    for (let i = 1; i <= 10; i++) {
      factorial *= i;
    }
    output.push(printOutput(6, `10! = ${factorial}`));

    // 7. Calculate the sum of even numbers greater than 10 and less than 30
    sum = 0;
    for (let i = 12; i < 30; i += 2) {
      sum += i;
    }
    output.push(printOutput(7, `Sum of even numbers between 10 and 30: ${sum}`));

    // 8. Convert Celsius to Fahrenheit
    const celsiusToFahrenheit = (celsius) => (celsius * 9) / 5 + 32;
    output.push(printOutput(8, `0°C to Fahrenheit: ${celsiusToFahrenheit(0)}`));

    // 9. Convert Fahrenheit to Celsius
    const fahrenheitToCelsius = (fahrenheit) => ((fahrenheit - 32) * 5) / 9;
    output.push(printOutput(9, `32°F to Celsius: ${fahrenheitToCelsius(32)}`));

    // 10. Calculate the sum of an array
    const sumArray = (arr) => arr.reduce((acc, curr) => acc + curr, 0);
    output.push(printOutput(10, `Sum of array [1, 2, 3, 4, 5]: ${sumArray([1, 2, 3, 4, 5])}`));

    // 11. Calculate the average of an array
    const averageArray = (arr) => sumArray(arr) / arr.length;
    output.push(printOutput(11, `Average of array [1, 2, 3, 4, 5]: ${averageArray([1, 2, 3, 4, 5])}`));

    // 12. Return positive numbers in an array
    const getPositiveNumbers = (arr) => arr.filter((num) => num > 0);
    output.push(printOutput(12, `Positive numbers in [-3, -2, 0, 1, 2, 3]: ${getPositiveNumbers([-3, -2, 0, 1, 2, 3])}`));

    // 13. Find the maximum number in an array
    const maxNumber = (arr) => Math.max(...arr);
    output.push(printOutput(13, `Max number in [1, 2, 3, 4, 5]: ${maxNumber([1, 2, 3, 4, 5])}`));

    // 14. Print first 10 Fibonacci numbers without recursion
    let fib = [0, 1];
    output.push(printOutput(14, "First 10 Fibonacci numbers:"));
    for (let i = 2; i < 10; i++) {
      fib[i] = fib[i - 1] + fib[i - 2];
    }
    fib.forEach((num) => output.push(printOutput("", num.toString())));

    // 15. Calculate the nth Fibonacci number using recursion
    const fibonacci = (n) => (n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2));
    output.push(printOutput(15, `10th Fibonacci number: ${fibonacci(10)}`));

    // 16. Check if a number is prime
    const isPrime = (num) => {
      if (num <= 1) return false;
      for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
      }
      return true;
    };
    output.push(printOutput(16, `Is 7 prime? ${isPrime(7)}`));

    // 17. Calculate sum of digits of a number
    const sumOfDigits = (num) => num.toString().split("").reduce((acc, curr) => acc + Number(curr), 0);
    output.push(printOutput(17, `Sum of digits of 1234: ${sumOfDigits(1234)}`));

    // 18. Print first 100 prime numbers
    let primes = [];
    for (let i = 2; primes.length < 100; i++) {
      if (isPrime(i)) primes.push(i);
    }
    output.push(printOutput(18, `First 100 prime numbers: ${primes.join(", ")}`));

    // 19. Return first “p” prime numbers greater than “n”
    const primeNumbersGreaterThan = (n, p) => {
      let primes = [];
      let num = n + 1;
      while (primes.length < p) {
        if (isPrime(num)) primes.push(num);
        num++;
      }
      return primes;
    };
    output.push(printOutput(19, `First 5 prime numbers greater than 10: ${primeNumbersGreaterThan(10, 5)}`));

    // 20. Rotate an array to the left
    const rotateLeft = (arr) => {
      let first = arr.shift();
      arr.push(first);
      return arr;
    };
    output.push(printOutput(20, `Array [1, 2, 3, 4, 5] rotated left: ${rotateLeft([1, 2, 3, 4, 5]).join(", ")}`));

    // 21. Rotate an array to the right
    const rotateRight = (arr) => {
      let last = arr.pop();
      arr.unshift(last);
      return arr;
    };
    output.push(printOutput(21, `Array [1, 2, 3, 4, 5] rotated right: ${rotateRight([1, 2, 3, 4, 5]).join(", ")}`));

    // 22. Reverse an array
    const reverseArray = (arr) => arr.reverse();
    output.push(printOutput(22, `Array [1, 2, 3, 4, 5] reversed: ${reverseArray([1, 2, 3, 4, 5]).join(", ")}`));

    // 23. Reverse a string
    const reverseString = (str) => str.split("").reverse().join("");
    output.push(printOutput(23, `String "hello" reversed: ${reverseString("hello")}`));

    // 24. Merge two arrays
    const mergeArrays = (arr1, arr2) => arr1.concat(arr2);
    output.push(printOutput(24, `Merged arrays [1, 2, 3] and [4, 5, 6]: ${mergeArrays([1, 2, 3], [4, 5, 6]).join(", ")}`));

    // 25. Symmetric difference between two arrays
    const symmetricDifference = (arr1, arr2) =>
      arr1.filter((x) => !arr2.includes(x)).concat(arr2.filter((x) => !arr1.includes(x)));
    output.push(printOutput(25, `Symmetric difference of [1, 2, 3] and [2, 3, 4]: ${symmetricDifference([1, 2, 3], [2, 3, 4]).join(", ")}`));

    return output;
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>2005711_Mai Quốc Trưởng</Text>
      </View>
      <ScrollView style={styles.main}>
        {renderExercises()}
      </ScrollView>
      <View style={styles.footer}>
        <Text style={styles.footerText}>© 2024 Mai Quốc Trưởng</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#f0f4f8',
  },
  header: {
    backgroundColor: '#4CAF50',
    padding: 10,
    textAlign: 'center',
  },
  headerText: {
    color: 'white',
    fontSize: 24,
  },
  main: {
    padding: 20,
    flex: 1,
  },
  display: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: 8,
    marginVertical: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  footer: {
    backgroundColor: '#4CAF50',
    padding: 10,
    textAlign: 'center',
  },
  footerText: {
    color: 'white',
  },
});
