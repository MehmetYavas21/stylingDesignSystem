# Learning goals

After this lesson you will:
- Be able to install a design system for React and are able to use it in your projects.
- Be able to use Chakra components in your app. You are able to style those components.
- Be able to create a responsive design using the ChakraUI design system.

## Styling with a design system
At the end of this lesson, you will be able to install a design system for React and be able to use it in your projects.

Design systems are becoming more and more popular. These systems help to save startups a lot of time, but also tech heavyweights such as Airbnb are using them. 

Modern user interfaces consist of many different modular UI components that are used in different ways to deliver the much-needed user experience. A design system contains reusable UI components that you can use to create consistent, beautiful, and accessible interfaces. 

As React is also a modular library, it works very well with design systems. You can implement the design inside a component and reuse it throughout your app. In fact, the reusable UI components that we have made so far can also be considered as part of a design system. 

In a way, it is very similar to a set of lego bricks. Lego bricks are all designed in a certain way and in a particular structure so that you can use them to create almost anything you want. All bricks are reusable, consistent, modular, and accessible.

Design systems make it very easy to reuse components but also to update them. Instead of having to update every single component in your app, you only have to update the base component such as a button, and it will be updated all across the app. Design systems provide a single source of components, patterns and styles into one ecosystem. 

## ChakraUI

In this lesson, we will show you how to use an external design system with many styled-components. This will help you save a lot of time and effort while creating stunning and professional-looking web applications. It also helps you get familiar with an external design system, as it is likely that a company that you will work for uses a design system. 

The design system that we will be using is [ChakraUI](https://qag99.online/school/hvtrs8%2F-cjairc-wi%2Ccmm-). Chakra UI is a simple, modular, and accessible component library. It gives us a set of building blocks we can import and directly use in our app without thinking a lot about styling. If you still want to customize the designs, the system allows you to fully customize the components and theme to your own liking.

## Pros:

Save a lot of time by using pre-designed components

Easy to build a professional-looking UI

No more need for many different CSS files

Allows you to use a default or customized theme really easily

Allows you to add responsive CSS rules next to each other

Allows you to read and write React and CSS code in the same file

## Cons:

No class names, making debugging more difficult

Takes time to learn and get used to 

Styled props do not always work in similar components

The responsiveness system is difficult to get used to if you are used to creating complete designs per screen.

## Components

Chakra comes with many components out of the box for almost any UI element you can think of. You can use these components to organize your layout, build forms, or display data on the page. The components will generally just render some HTML, like any normal React component, but they come with a common set of features that are identical across all of Chakra. Once you get used to it, you can quickly build user interfaces by composing these components. 

## Style Props

Another benefit of using ChakraUI is that you don’t have to deal with having so many different stylesheets and CSS classes across your app. When a React app becomes bigger and bigger, this really starts to become a hassle to deal with. With ChakraUI, you can deal with CSS properties as if they are props to a component. You do not necessarily have to create a separate class anymore. 

An example is to give a height and width to the Box layout component:

  import {Box} from "@chakra-ui/react"

  <export const Layout = () => {
    return (
      <Box width="100%" height="100%">
        {// The rest of your app}
      </Box>
      )
  }>
  
A full list of the Style Props can be found in Chakra’s documentation. You can import the components you need from @Chakra-ui/react and style them any way you want with these properties. Most Style Props have similar names to their CSS property name but you are also able to use shortcuts to speed up development even more. You can for example change the margin-top by using “mt” as prop or “my” to set the margin along the y-axis (top and bottom).

## Theme

Chakra comes with a default theme that can be customized to your desires. 
The default theme comes with a set of colors, typography, breakpoints, spacing, sizes, border radius, z-index values, and other configurations, such as light/dark mode.
You can use these theme values by simply passing them as value to the style props that you pass to the Chakra components. We will give you some examples of how to do so in React.

## Colors

For colors you can pass values such as [Blue 200 or Blue 400](https://qag99.online/school/hvtrs8%2F-cjairc-wi%2Ccmm-dmcq%2Fqt%7Blgd%2Fs%7Bsveo%2Fvhgmg%23%60lwe) as follows:

    <Heading color= "blue.200">
      Hello
    </Heading>
  
 ## Typographi
 
 For texts, you would most likely change the [size and weight](https://qag99.online/school/hvtrs8%2F-cjairc-wi%2Ccmm-dmcq%2Fqt%7Blgd%2Fs%7Bsveo%2Fvhgmg%23vyroercpjy) most often. You can do so as follows: 
 
    <Heading size= "2xl" fontWeight="medium" color="blue.200">
        Hello
    </Heading>
    
## Spacing
  
You can use theme spacings of which the values are proportional. This means that 1 spacing unit is equal to 0.25rem, which translates to 4px by default in common browsers. In the example below, passing the value 4 means that the margin-top will be 1rem.

Alternatively, you can skip using the default theme values and just use pixels, vh, percentages, etc. Check out the spacing [documentation](https://qag99.online/school/hvtrs8%2F-cjairc-wi%2Ccmm-dmcq%2Fqt%7Blgd%2Fs%7Bsveo%2Fvhgmg%23qpcckne) to see all possible spacing theme values.

    <Heading marginTop= {4}>
        Hello
    </Heading>
    
## Sizings

You can use different values such as “full” (100%), “sm”, “lg”, “2xl” and many more to set the size of an element. Check out the sizings [documentation](https://qag99.online/school/hvtrs8%2F-cjairc-wi%2Ccmm-dmcq%2Fqt%7Blgd%2Fs%7Bsveo%2Fvhgmg%23qixeq) to see what’s available. Here is how using such a value would look like in code:

    <Box width ="full">
        <Text> Some text </Text>
    </Box>
    
## [Documentation](https://qag99.online/school/hvtrs8%2F-cjairc-wi%2Ccmm-dmcq%2Fqt%7Blgd%2Fs%7Bsveo%2Fvhgmg)
### [Guide](https://qag99.online/school/hvtrs8%2F-cjairc-wi%2Ccmm-ggtvilg%2Fsvaptgd-vktg-eukdg%231-auqtmmkzkne-vhgmg-mpvimncl)

## Exercise: Using Chakra
At the end of this exercise, you can use Chakra components in your app. You can also style those components.

### Description

So far, we’ve written a lot of our own styling in different stylesheets and created our own UI components. We would like you to experience how the app can benefit from a design system and see its impact on development and the overall look and feel of your app.

In this exercise, we will use Chakra UI, replace some of our components, and style those using Chakra’s built-in functionalities. We would like you to really dig into the [documentation of Chakra](https://qag99.online/school/hvtrs8%2F-cjairc-wi%2Ccmm-dmcq%2Fqt%7Blgd%2Fs%7Bsveo%2Fqt%7Blg-rrmpq), as that is the only way to get to know all the details of a Design system. 

## Instructions


To install Chakra and its dependencies, use the following command in your project folder:

      npm install @chakra-ui/react @emotion/react @emotion/styled framer-motion
   
### Next, we have to add a [ChakraProvider](https://qag99.online/school/hvtrs8%2F-cjairc-wi%2Ccmm-ggtvilg%2Fsvaptgd-vktg-eukdg%230-rrmvkdgr%2Fsgtwp). 

This special component should wrap every other place where you want to use Chakra. Place this all the way at the root of our component tree in main.jsx.

Open main.jsx and add the import for the ChakraProvider. 

      import { ChakraProvider } from '@chakra-ui/react'
      
      


