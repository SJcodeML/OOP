import inquirer from "inquirer";





 




//original one 


class Person {
    // private _personality: string;

    constructor(public personality: string) {
        // this._personality = personality;

    }
    
    
    async askQuestion() {
       

        const ask = await inquirer.prompt({
            name: 'response',
            type: 'list',
            message: `Are you an ${this.personality}? Type 1 for yes or 2 for no`,
            choices: ['1', '2']
        });

        if (ask.response === '1') {
            console.log(`You confirmed being an ${this.personality}`);
        } else if (ask.response === '2') {
            console.log(`You denied being an ${this.personality}`);
        }else {
            console.log("You are sill a mystery");
            
        }

        return ask.response;
    }
}

 





class Student {
    private _name: string;
    constructor(name:string) {
        this._name = name;
    }

    get() {
        return this._name;
    }

    async set() {
        const response = await inquirer.prompt({
            name: "name",
            type: "input",
            message: "What is your name? "
        });
        this._name = response.name;
    }
}






class Program {
    private person: Person;
    private student: Student;

    constructor() {
        this.person = new Person('Introvert');
        this.student = new Student('Sidra');
    }

    async run() {
        await this.person.askQuestion();
        await this.student.set();
        console.log(`student's name is  ${this.student.get()}`);
    }
}

async function main1() {
    const myProgram = new Program();
    await myProgram.run();
}

main1();


// This code defines a TypeScript class called `Program` that has a `person` property of type `Person` and a `student` property of type `Student`. In the constructor of the `Program` class, a new `Person` object with the behavior of an introvert is created and assigned to the `person` property, and a new `Student` object with the name 'Sidra' is created and assigned to the `student` property.

// The `Program` class also has an async method called `run`, which first asks a question to the `person` object by calling the `askQuestion` method on it using `await`. Then, it sets the student name by calling the `set` method on the `student` object using `await`. Finally, it logs the name of the student by calling the `get` method on the `student` object.

// Additionally, there is an asynchronous function named `main1` that creates an instance of the `Program` class and calls the `run` method on it using `await`.

// In summary, this code creates an instance of the `Program` class, where a person and a student are initialized. The program then interacts with the person and student objects by asking a question to the person and setting the student's name, and finally, it logs the student's name.
