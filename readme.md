# RandomButton

## The goals

Random Button is a framework centered around randomized transitions, animations and colors.

You are able to
- Set a random transition time
- Set a random interval time
- Set a random color
- Set a random grayscale

This allows you to add multiple random experiences to you websites, with the simple click of a button.

The customisation of your buttons is up to yourself.

## The Options
Using RandomButton you have to following options for customisation.

-   Transition
    -   You can either set transition to true or false, whenever you set it to true the transition time gets randomized every interval.
- Color
    -   You can set color to 'color' or 'grayscale'.
    When you choose to set the condition to 'color', there will be a completely randomized color set to the button.
    If you choose to use 'grayscale', the background will be a shade of grey, randomized from white to black.
- Interval
    - You can choose a custom interval, in which the settings reset. Set this to off or very high to only make it refresh on reload.

 ## Using RandomButton
 To be able to use randombutton you have to understand the structure of the HTML file.
 The button has to have the following id.

 ```html
 <a id="btn" href="#"><span id="style">RandomColor</span></a>
 ```

 After that you can add a custom transition style, or setting in the css file. You are free to choose whichever animation you would like.
 Here is an example.

  ```css
#btn {
    color: #323232;
    height:300px;
    width:300px;
}
#btn:hover {
    color: #ffffff;
}
#btn:hover span {
    width: 150px;
    height: 80px;
}
#btn:active {
    background: #8f3846;
}

  ```

After you import and link the Javascript file, you can call a condition in a script on you HTML page, or in a main JS file.
You have the options for your condition.

 ```javascript
 randomBtn.condition({
         transition: false,
         color: 'color',
         interval: 1000
     });
 ```

## To do
To optimize this framework, there are multiple features missing.

    - Choose from transitions
    - Set all conditions empty or choose the precise conditions
    - More freedom in buttons and the CSS

## License
Random Button is licensed under Creative Commons, with every right free to use.

#### This is a framework by Mitchel van de Water


