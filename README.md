# Airport Challenge in JavaScript

Please also see my solutions to this challenge in [Ruby](https://github.com/AdamusBG/airport_challenge) and [Java](https://github.com/AdamusBG/airport_challenge-java).

```
        ______
        _\____\___
=  = ==(____MA____)
          \_____\___________________,-~~~~~~~`-.._
          /     o o o o o o o o o o o o o o o o  |\_
          `~-.__       __..----..__                  )
                `---~~\___________/------------`````
                =  ===(_________)

```

## User stories

As an air traffic controller  
So I can get passengers to a destination  
I want to instruct a plane to land at an airport  

As an air traffic controller  
So I can get passengers on the way to their destination  
I want to instruct a plane to take off from an airport and confirm that it is no longer in the airport  

As an air traffic controller  
To ensure safety  
I want to prevent landing when the airport is full  

As the system designer  
So that the software can be used for many different airports  
I would like a default airport capacity that can be overridden as appropriate  

As an air traffic controller  
To ensure safety  
I want to prevent takeoff when weather is stormy  

As an air traffic controller  
To ensure safety  
I want to prevent landing when weather is stormy  

## Information

Edge cases considered:  
* Planes will not be able to take off from an airport that they are not currently in  
* Planes will not be able to take off when already in flight  
* Planes cannot land at an airport if they are already at an airport  
* Planes can neither land nor take off from an airport with bad weather (randomly chosen)  

If you would like to run the tests covering the above edge cases, as well as the normal behaviour of the program, open a terminal and navigate to a directory in whihc you would like to save this repository, then follow the below.  

```
$ git clone https://github.com/AdamusBG/airport_challenge-js.git
$ cd airport_challenge-js
$ open SpecRunner.html
```

This will then open a browser window in which you can see the Jasmine test results.
