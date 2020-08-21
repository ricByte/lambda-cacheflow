# CACHEFLOW PRINTER

## HOW TO
### Prerequisites
node 12

### How to run project
```
yarn start
```
This command will display the receipt.
Under `src/data/input.json` you can modify the input of this application

### How to run test
```
yarn test
```
Under the __tests__ folder you can find some unit test

### Project structure
The logic is very basic to understand:
```
    |_src
        |_ beans  : contain the main class used in all project. Like other typescript project has inside that the constants and the creation logic(because of class-transformer)
        |_ service: contain the main business logic
        |_ common : differently from service, this folder not contain business logic
        |_ handler: contain the main of the function visibile for the user. Is the center of the API 
```
I decide to use some libraries:

1. `class-validator`: It's very convenient to test inputs in this declarative way
2. `class-transformer`: facilitates the reading of transformations