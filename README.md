# Airport Challenge (in JavaScript)
### Makers Academy Week No. 5

[![Build Status](https://travis-ci.org/KatHicks/airport_javascript.svg?branch=master)](https://travis-ci.org/KatHicks/airport_javascript) [![Code Climate](https://codeclimate.com/github/KatHicks/airport_javascript/badges/gpa.svg)](https://codeclimate.com/github/KatHicks/airport_javascript)

### Instructions

We worked through three challenges this week (of which this is the second) in order to get familiar with JavaScript.

* Challenge mimics the first weekend challenge
* Task was to write it again but this time in JavaScript rather than Ruby
* Below are the user stories that this programme is supposed to satisfy:

```
As an air traffic controller
To get passengers to a destination
I want to instruct a plan to land at
an airport and confirm that it has landed

As an air traffic controller
To get passengers to a destination
I want to instruct a plane to take off from
an airport and confirm that it is no longer in the airport

As an air traffic controller
To ensure safety
I want to prevent takeoff when weather is stormy
```

### Objectives

* Are you having fun?
* Are you a better developer than you were yesterday?
* **Can you learn a new language and its patterns?**

### Using my application

* Open up the `SpecRunner.html` file in the browser (preferably Chrome)
* Open up the developer tools and go to the console tab
* Type the follow commands in the console:

![Running in the Console](/console_screenshot.png?raw=true "Screenshot of console interactions")

### Running the tests

* Download the repo using `$ git clone`
* Open up the `SpecRunner.html` file in the browser to see the results of the tests

### Dependencies

* Written using **JavaScript**
* Tested with **Jasmine**

### Approach

* Used the prototype pattern
* Decided to have two objects; one for plane and one for airport

### Reflections

* Was quite difficult working out how to stub in Jasmine
  * Realised that the Jasmine testing library is not as extensive as RSpec, even though the syntax is quite similar
* Interesting (and annoying) that you don't have private methods in the same way to Ruby within JavaScript
  * Realised that scope is much more of a concern in JavaScript as all files can essentially see all files!

### Collaborators

Ross Benzie, Dylan Rhodius
