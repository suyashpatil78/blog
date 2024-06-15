---
title: 'Understanding the Observer Pattern in TypeScript: A Complete Guide'
description: 'In this blog, I have explained observer pattern with code examples in typescript'
date: 2024-06-15
categories: ['javascript', 'typescript', 'design pattern']
ogImage: ./og-image.png
external: ''
time: 20
---

### Introduction

The Observer pattern defines a one-to-many relationship between objects. When the state of the subject (the object being observed) changes, all registered observers are notified and updated automatically. This is particularly useful in scenarios where multiple objects need to react to changes in a single object's state without being tightly coupled to it.

In this comprehensive guide, we'll explore the Observer pattern in TypeScript, covering its core concepts, implementation strategies, and real-world use cases. By the end of this tutorial, you'll have a solid understanding of how to leverage the Observer pattern to build flexible, decoupled systems in TypeScript.

### Core Concepts of the Observer Pattern

#### Subject

The Subject is the object being observed. It maintains a list of observers and provides methods to register, remove, and notify observers of state changes. The Subject is responsible for managing the observers and updating them when its state changes.

#### Observer

The Observer is the object that is notified of changes in the Subject's state. It defines an update method that is called by the Subject when a change occurs. Observers can be registered with multiple Subjects and react to changes in each one independently.

### Implementing the Observer Pattern in TypeScript

Let's delve into a TypeScript implementation of the Observer pattern using a simple example scenario of a weather station:

```ts

// Define interfaces for Subject and Observer
interface Subject {
    addObserver(observer: Observer): void;
    removeObserver(observer: Observer): void;
    notifyObservers(): void;
    getTemperature(): number;
}

interface Observer {
    update(temperature: number): void;
}

// Concrete implementation of Subject: WeatherStation
class WeatherStation implements Subject {
    private temperature: number;
    private observers: Observer[] = [];

    setTemperature(temperature: number) {
        console.log('Setting temperature as ' + temperature + 'C');
        this.temperature = temperature;
        this.notifyObservers();
    }

    addObserver(observer: Observer): void {
        this.observers.push(observer);
    }

    removeObserver(observer: Observer): void {
        let idx = this.observers.indexOf(observer);
        if (idx !== -1) {
            this.observers.splice(idx, 1);
        }
    }

    notifyObservers(): void {
        for (let observer of this.observers) {
            observer.update(this.temperature);
        }
    }

    getTemperature(): number {
        return this.temperature;
    }
}

// Concrete implementation of Observer: TemperatureDisplay
class TemperatureDisplay implements Observer {
    private subject: Subject;

    constructor(weatherStation: Subject) {
        this.subject = weatherStation;
        weatherStation.addObserver(this);
    }

    update(temperature: number): void {
        console.log('Updating Display...');
        console.log(`Current Temperature is ${temperature}C`);
    }
}

// Example usage
let weatherStation = new WeatherStation();

let display1 = new TemperatureDisplay(weatherStation);
let display2 = new TemperatureDisplay(weatherStation);

weatherStation.setTemperature(20);
weatherStation.setTemperature(25);
```

### Explanation of the Code

#### Interfaces (Subject and Observer):

- Subject: Defines methods for managing observers (`addObserver`, `removeObserver`, `notifyObservers`) and accessing subject state (`getTemperature`).

- Observer: Defines the method (`update`) that subjects call to notify observers of state changes.

#### Concrete Subject (`WeatherStation`):

- Maintains a list of observers (observers) and provides methods to manage them (addObserver, removeObserver).

- `setTemperature`: Updates the temperature state and notifies all registered observers using notifyObservers.

- `getTemperature`: Returns the current temperature.

#### Concrete Observer (TemperatureDisplay):

- Registers itself with a subject during initialization (`constructor`).

- Implements the update method to receive and process updates from the subject.

- Example behavior: Logs temperature updates to the console.

#### Example Usage:

- Creates a WeatherStation instance.

- Creates two TemperatureDisplay instances that subscribe to the WeatherStation.

- Updates the temperature of the WeatherStation (setTemperature) to trigger notifications to all registered displays (TemperatureDisplay instances).

- Benefits of Using the Observer Pattern

- Loose Coupling: Observers are not tightly coupled to the subject. They can be added or removed without affecting other parts of the system.

- Scalability: New observers can be added easily without modifying existing subject or observer classes.
