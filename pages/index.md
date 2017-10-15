---

layout: default

permalink: /

---

# Expressive, dynamic, robust CSS

## CSS needs a hero

    body {
      font: 12px Helvetica, Arial, sans-serif;
    }
    a.button {
      -webkit-border-radius: 5px;
      -moz-border-radius: 5px;
      border-radius: 5px;
    }


### What if we could omit braces?

    body
      font: 12px Helvetica, Arial, sans-serif;
    
    a.button
      -webkit-border-radius: 5px;
      -moz-border-radius: 5px;
      border-radius: 5px;


### How about semi-colons?

    body
      font: 12px Helvetica, Arial, sans-serif
    
    a.button
      -webkit-border-radius: 5px
      -moz-border-radius: 5px
      border-radius: 5px


### Keep things DRY

    border-radius()
      -webkit-border-radius: arguments
      -moz-border-radius: arguments
      border-radius: arguments
    
    body
      font: 12px Helvetica, Arial, sans-serif
    
    a.button
      border-radius(5px)


### How about transparent mixins?

    border-radius()
      -webkit-border-radius: arguments
      -moz-border-radius: arguments
      border-radius: arguments
    
    body
      font: 12px Helvetica, Arial, sans-serif
    
    a.button
      border-radius: 5px


### Create & Share

    @import 'vendor'
    
    body
      font: 12px Helvetica, Arial, sans-serif
    
    a.button
      border-radius: 5px


### Even in-language functions!

    sum(nums...)
      sum = 0
      sum += n for n in nums

    sum(1 2 3 4)
    // => 10


### What if it were all optional?

    fonts = Helvetica, Arial, sans-serif
    
    body {
      padding: 50px;
      font: 14px/1.4 fonts;
    }


### Get styling with Stylus

Installing Stylus is very easy once you have [Node.js](http://nodejs.org/).
So get the binaries for your platform and make sure that they also include npm, Node's package manager.

Now, type in your terminal:

{:.terminal}
    $ npm install stylus -g

If you want an expressive css language for nodejs with these
features or the features listed below, head over to 
[GitHub](http://github.com/stylus/stylus)
for more information.


### Features

- Optional colons         
- Optional semi-colons         
- Optional commas         
- Optional braces         
- Variables          
- Interpolation
- Mixins
- Arithmetic
- Type coercion
- Dynamic importing
- Conditionals
- Iteration
- Nested selectors
- Parent referencing
- Variable function calls
- Lexical scoping
- Built-in functions (over 60)
- In-language functions
- Optional compression
- Optional image inlining
- Stylus executable
- Robust error reporting
- Single-line and multi-line comments
- CSS literal for those tricky times
- Character escaping
- TextMate bundle
- and more!
