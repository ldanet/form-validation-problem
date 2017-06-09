# [Form validation problem](https://springload.github.io/form-validation-problem/)

## Setup

```sh
npm install
```

## Usage

```sh
npm start
```

The page will be visible at localhost:8080

## Process

* Read the problem carefully
* Look up on the internet to refresh my memory about form validation
* Decide to do HTML5 validation for accessibility with a polyfill for browser support
* Set up a quick dev environment with:
    * Babel to write ES6 without having to worry about browser support
    * Webpack because it was the first thing I could think of to run a server with auto reload
    * ESLint because it saves me from time wasting very silly bugs and helps me keep thing clean
* Dive into actual coding

## Known issues

* The tiger type field is OK with only whitespace, I should remove whitespace at beginning and end before validating.
* hyperform *replaces* browser HTML5 validation instead of adding it only in browsers that don't support it. I don't know how good it is for accessibility.
* Messages are ugly.

## Problem definition

Included in this repository is an [index.html](index.html) file that contains a form. You must ensure all of the following rules are met before the form is posted to the (in this case imaginary) server:

* `Email` must be a valid email address.
* `Password` must be longer than 8 characters.
* `Colour` must be selected.
* At least two `Animal`s must be chosen.
* If `Tiger` is one of the chosen `Animal`s then `Type of tiger` is required to be a non-empty string.

## Other requirements

If the form is submitted and an error occurs, the error element's parent should have a CSS `error` class added to it.

```html
<p class="error">
    <label for="field"></label>
    <input id="field" type="text" value="foo">
</p>
```

## The cherry on the cake

Beyond the problem statement, show us the consideration you have given to some or all of the following:

- Documentation
- Accessibility
- Progressive enhancement
- Browser support
- Testing
- Tooling

## Submission

Please email us a link to your fork of this repository, or a zip of your solution to `1337h4x0r@springload.co.nz`.
