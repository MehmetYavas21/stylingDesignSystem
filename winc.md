# Styling with a design system

## Learning goals

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


- To install Chakra and its dependencies, use the following command in your project folder:

        npm install @chakra-ui/react @emotion/react @emotion/styled framer-motion
   
### Next, we have to add a [ChakraProvider](https://qag99.online/school/hvtrs8%2F-cjairc-wi%2Ccmm-ggtvilg%2Fsvaptgd-vktg-eukdg%230-rrmvkdgr%2Fsgtwp). 

This special component should wrap every other place where you want to use Chakra. Place this all the way at the root of our component tree in main.jsx.

- Open main.jsx and add the import for the ChakraProvider. 

        import { ChakraProvider } from '@chakra-ui/react'
      
- Wrap the <App /> inside the jsx in a <ChakraProvider></ChakraProvider>.

            <ChakraProvider>
                <App />
            </ChakraProvider>

When you run the app, you will notice it looks different. The ChakraProvider provides a default theme that overrides the existing (default) styling. You can delete the index.css and remove the import from main.jsx, as the default theme is overriding this styling anyway.

## Let’s import our first ChakraUI component <Heading> in the <App /> component.

- Go to App.jsx and copy the following code to import the component or use auto-import:

               import { Heading } from '@chakra-ui/react'

- Replace the <h1> tag with <Heading>

- Add some margin to the bottom by using the marginBottom or mb prop and pass an appropriate value: e.g. ‘2rem” or 8 (which the default theme translates to 2rem).
    
- Change the size of the text by using the fontSize prop. Pass a value such as “lg” “xl”, “2xl” or “3xl”.

- Change the color by using the “color” prop and use a value from the default theme, such as e.g. “blue.200”, “blue.400”, “green.200”, etc.

    !! Stuck: 
    
                <Heading mb={8} fontSize="2xl" color="blue.400">
                    {greeting}
                </Heading>
  
 ## Right now, we have a DrinkSearch component rendering a TextInput and a list of DrinkItem components. Let’s start with the simplest of the two components, the TextInput.

- We can replace the input tag inside the TextInput component with [Chakra’s Input component](https://qag99.online/school/hvtrs8%2F-cjairc-wi%2Ccmm-dmcq%2Faoopmngnvs-ilpwt-uqaee). Import this Chakra component into the TextInput.jsx file, and use it instead of the HTML <input> element. You can remove the class name, related CSS import, and file as well.

You can still pass the onChange prop in the same way as you did before.

## !! ℹ️ Did you choose the default styling?

You may choose the default styling, play around with its variants, e.g. variant='flushed' or try to recreate the styling you have made before by following the steps below:

1. Open the TextInput.css file and review the existing styling.

2. For each style property, do the following:

    - Find the Style prop matching your previous styling.

    - Add the Style prop to the component, with the correct value

    - Ensure that the component still looks the same on the page.
    
You might wonder why we are importing a complete component into our UI component. Even though you can style Chakra components any way you want, it can sometimes still be useful to have your own UI components that import the Chakra component because this allows you to apply a default styling that you would like to keep the same across your app. 

## But how can I still use styling props?

You can still pass any styling prop you want to your own UI component by using the spread operator:

                export const TextInput = ({changeFn, ...props}) => (
                        <Input variant="flushed" onChange={changeFn} {...props} />
                    );
    
In this way, you can pass props such as margin to the TextInput component. In this example, you want to ensure you pass the additional props after passing the onChange prop, as this is the order defined in the destructured object parameter.

Try it out yourself by changing the width or margin-bottom when using the <TexInput /> component in DrinkSearch.jsx! 
    **!!Hint:**
            <TextInput changeFn={handleChange} w={300} mb={10}/>
  
Repeat the same steps for the DrinkItem component. Note that this component is more complex. It has a <button> with 2 other elements inside it, so each of these has to be replaced by a Chakra component. Find the Chakra component in the [documentation](https://qag99.online/school/hvtrs8%2F-cjairc-wi%2Ccmm-dmcq%2Faoopmngnvs) that would be the best option to replace the component or HTML element you want to replace. 
    
- As the <Button /> component from Chakra, isn’t the best option to fit in an image, you can simply use a container alternative such as [<Center>](https://qag99.online/school/hvtrs8%2F-cjairc-wi%2Ccmm-dmcq%2Faoopmngnvs-cgnvep), use the [cursor](https://qag99.online/school/hvtrs8%2F-dgvglmpgr%2Cmmzklna%2Copg-el-WS-dmcq%2FUe%60%2FASQ%2Faupsmr) css property, and change it to pointer. 

- Use [<Image>](https://qag99.online/school/hvtrs8%2F-cjairc-wi%2Ccmm-dmcq%2Faoopmngnvs-ioaee) to replace the <img /> element

- Use [<Text>](https://qag99.online/school/hvtrs8%2F-cjairc-wi%2Ccmm-dmcq%2Faoopmngnvs-tgxv) to replace the <p> element. 

- Make sure that the correct styles are applied to the correct components and elements.

We encourage you to experiment a little bit to make it look more pretty so you become more familiar with Chakra. You can style our search results a bit more and add some proper layouts there, for example. 


- Don’t forget to delete the css file and import.
    
    
    **!! STUCK** 
    
            export const DrinkItem = ({drink, onClick}) => {
                    return (
                            <Center gap={8} cursor={'pointer'} onClick={() => onClick(drink)}>
                                <Image src={drink.Url} w={50} h={50} alt={drink.alt} />
                                <Text fontWeight={'450'}> {drink.name}</Text>
                            </Center>
                            );
                    };
    
    
If you feel like you need a bit more practice before you start building your own component with Chakra, feel free also to convert the <Button/>, <DrinkSearch/>, <App/>, and/or <DrinkItems/> components. 

When you want to use the **<Button/>** component in a way similar to how you use the HTML **<button>** tag, where you put text between the text instead of passing it as a prop, you can use the ‘children’ prop. Read more about it below.

## The `children` Prop

Each React component receives a prop that we haven’t spoken about before. It contains precisely the stuff that goes between a component’s opening and closing tags. Until now, we have mostly been writing self-closing tags when we want to render a component, but we can also write them as `<Component></Component>`. The children’s prop contains everything that goes between these tags. It can be simple text, HTML elements, or other React components. 

Now, in order to display the children on the page, you have to use `{props.children}` inside the JSX you return from the component. You can also destructure children from props in the function signature, in which case you can simply write `{children}`. You place this in the position where you want to display them.
    
                export const Button = ({onClick, ...props}) => (
                        <CButton colorScheme="teal" onClick={onClick} {...props}>
                            {props.children}
                        </CButton>
                 );
    
**NOTE:** When you are importing a Chakra component that has the same name as your UI component, you can import the Chakra component with a different alias. E.g.
    
                import { Button as CButton } from '@chakra-ui/react';
    
    
### Extra bonus!

In the DrinkItems component you use a SimpleGrid, Stack or Flex to place the items in columns and rows instead of just underneath each other. 
    
 ## Now comes the real challenge! It is your turn to add something to the page using Chakra. 

We want to show an alert dialog when a user selects a drink in our cafe. In Chakra, the Modal consists of several components that we can use together to create a box shown on top of the page that shows some information, usually along with some buttons. A common use case for a modal is to ask for confirmation from the user, which is exactly what we would like, as we noticed our customers sometimes click a drink by mistake.

## Requirements:

- ▶︎ Study the documentation in the link above.
- ▶︎ We like the customer to be able to confirm their order.
- ▶︎ After clicking on a drink, show a modal that displays their order
- ▶︎  The modal also asks them to confirm their order. For now, the button doesn't have to do anything.
- ▶︎  The modal also has a button to cancel/close the modal.
    
    
    
    
## !! [SOLUTION](https://github.com/WincAcademy/react-exercise-solutions/blob/97bd11ee76b13e3e8d351ba455f5551b9591e615/chakra-exercise-solution/chakra-exercise-solution/src/App.jsx)
    
    
### Tutorial
If you would like to practice more, we recommend this tutorial on [egghead.io](https://qag99.online/school/hvtrs8%2F-eegjecd%2Cim%2Fneqsmnq%2Fpeccv-%60uklf-c-na%7Bowt%2Fwktj-vhg-aoltcilep-dlgx%2Fald%2Fvqtcci-aoopmngnv-kn%2Fcjairc-wi). 
    
## Responsiveness
    
ChakraUI makes it easy to create responsive designs.

It will take some time to get used to it, but once you have learned it, you will save up a lot of time and find it easier to read the corresponding code. 

Normally, you will need to manually add @media queries in your CSS files to make your designs responsive. With ChakraUI, you can provide object and array values as props to add mobile-first responsive styles. We will show you some examples very soon. First, Chakra has provided some default theme settings with some set breakpoints:


                    const breakpoints = { 
                        sm:'30em',
                        md: '48em',
                        lg:'62em',
                        xl:'80em',
                        '2xl':'96em',
                    }
    
As a guideline, you can keep in mind that “sm” is approximately the size of a mobile screen, “md” is approximately the size of a tablet screen and “lg” is approximately the size of laptop and desktop screens. 

To implement these breakpoints, you can use the object or array syntax. We pass these syntaxes as value to a property to declare how they will look like on mobile or larger screens for example.
    
 ## Object syntax

With the object syntax, you can use the breakpoint aliases as key names and add CSS values to pair with. Next to the breakpoint aliases, you can use “base” as a key name, showing the CSS rules from 0em and upwards. So essentially, any screen until the next defined breakpoint. As the system is supposed to be mobile-first, you can use “base” to create your mobile design.

You can interpret the syntax as follows:
- ▶︎  base: From 0em upwards
- ▶︎ sm: From 30em upwards
- ▶︎  md: From 48em upwards
- ▶︎  lg: From 62em upwards

Let’s show some React code as example:

            <Flex flexDirection={{base:'column', sm:'row'}} gap={8}>
                <Text fontSize={{base:24, sm:40, md:56}} color="blue.300">
                    Im blue
                </Text>
                <Text fontSize={{base:24, sm:40, md:56}} color="green.300">
                    Im green
                </Text>
            </Flex>

Here we have a responsive flexbox that is vertical on mobile and horizontal on larger screens. We also have text that becomes larger on different screens:
    
    !! ![IMAGE Video]()
    
You do not necessarily have to define every breakpoint in the object. The previously defined size will be used when you don’t define a breakpoint. For example, when you define a size for "base" and "lg", the size defined for "base" will remain the same until the breakpoint for "lg" (62em) has reached. After reaching the "lg" breakpoint, it will remain the defined size for "lg". 

## Array syntax

You can also use arrays as values for style props. Chakra maps the array of items to the theme breakpoints in ascending order. This means that the first array item will start from 0em upwards, like the base key in the object syntax. The second item will start from 30em and upwards (sm). The third item starts from 48em and upwards (md) and so on.


The default breakpoints translate to the following array syntax:
    
    
                    // Default breakpoints
                    const breakpoints = { 
                        sm:'30em',
                        md: '48em',
                        lg:'62em',
                        xl:'80em',
                        '2xl':'96em',
                    }
    
    
                    // Transforms to the following array syntax 
                    const breakpoints=['0em' , '30em' , '48em' , '62em' , '80em' , '96em']
    
We can translate our previous object example to the array syntax in the following way:

                    <Flex flexDirection={{base:'column', sm:'row'}} gap={8}>
                        <Text fontSize={{base:24, sm:40, md:56}} color="blue.300">
                            Im blue
                        </Text>
                        <Text fontSize={{base:24, sm:40, md:56}} color="green.300">
                            Im green
                        </Text>
                    </Flex>
    
In the array syntax, we can achieve the same styling with the following code:

                        <Flex flexDirection={['column', 'row']} gap={8}>
                            <Text fontSize={[24, 40, 56]} color="blue.300">
                                Im blue
                            </Text>
                            <Text fontSize={[24, 40, 56]}  color="green.300">
                                Im green
                            </Text>
                        </Flex>
    

**!!Note**

Unfortunately, when you use the array syntax, you cannot skip a breakpoint. For example, you can use ‘base’, ‘md’ and ‘lg’ as breakpoints in the object syntax. In the array syntax, we cannot replicate this because it follows an ascending order meaning that we cannot skip the ‘sm’ breakpoint.

Check out the full responsive style documentation [here](https://chakra-ui.com/docs/styled-system/responsive-styles).
    
    **AN EXAMPLE from chakra website:**
This works for every style prop in the theme specification, which means you can change the style of most properties at a given breakpoint.


    
                      <>
                          <Box
                            height={{
                              base: '100%', // 0-48em
                              md: '50%', // 48em-80em,
                              xl: '25%', // 80em+
                            }}
                            bg='teal.400'
                            width={[
                              '100%', // 0-30em
                              '50%', // 30em-48em
                              '25%', // 48em-62em
                              '15%', // 62em+
                            ]}
                          />
                          {/* responsive font size */}
                          <Box fontSize={['sm', 'md', 'lg', 'xl']}>Font Size</Box>
                          {/* responsive margin */}
                          <Box mt={[2, 4, 6, 8]} width='full' height='24px' bg='tomato' />
                          {/* responsive padding */}
                          <Box bg='papayawhip' p={[2, 4, 6, 8]}>
                            Padding
                          </Box>
                        </>
    
    
## Exercise: Responsive design with Chakra
    
At the end of this exercise, you will be able to create a responsive design using the ChakraUI design system.

**Description**
    
It’s time to make our app a bit more responsive. Currently, the modal is not as mobile-friendly as we would like it to be. We would prefer the modal to take up the full width and height of the screen on mobile phones and remain as it is on bigger screens.

## Instructions

Implement the following requirements:

- On mobile, the modal is full-screen. On other devices, not. Use the size prop on <Modal />

https://chakra-ui.com/docs/components/modal#modal-sizes(opens in a new tab)

- On mobile, align the modal text towards the center. On larger screens, we would like it to remain as it is (to the left).

This is what the result should look like on mobile screens:
    
    ![open giff iage](add it)
    
**HINT-1** 
- ⚠️ How to change the modal size?
You can use the modal prop ‘size’ to change the size of the modal. It takes values such as ‘full’ and ‘md’.
**HINT-2** 
- ⚠️ How to center the text?
You can create a flexbox and change the height and alignItems or justifyContent props to adept the values so that it fits the requirements.
**HINT-3**
                                ...
                                <Modal size={['full' , 'md']} isOpen={isOpen} onClose={onClose}>
                                    <ModalOverlay />
                                    <ModalContent>
                                      <ModalHeader>Confirm your order</ModalHeader>
                                      <ModalCloseButton />
                                      <ModalBody
                                        height= {['full' , 'fit-content']}
                                        display="flex"
                                        justifyContent= "center"
                                        alignItems= {['center' , 'flex-start']}
                                        flexDir= "column"
                                      >
                                ...

## Bonus

If you haven’t done so already, you can implement Chakra components in <DrinkItems /> and use SimpleGrid, Stack, or Flex to place the items in columns and rows instead of just underneath each other for screens larger than mobile.

On mobile screens, we would like the items to be displayed stacked underneath each other.

The result should look similar to the following example:
                                          
        ! !DON'T FORGET to add [image/giff](download)

!**STUCK?**
                                          
Have a sneak peak at <DrinkItem /> from the solution code:

                                  import { Flex } from @chakra-ui/react;
                                  import { DrinkItem } from ./DrinkItem;

                                  export const DrinkItems = ({drinks, onClick}) => {
                                      return (
                                          <Flex
                                            gap= {16}
                                            w={['full' , '75%']}
                                            flexWrap= "wrap"
                                            flexDir={['column' , 'row']}
                                            justify="center"
                                            alignItems="center"
                                          >
                                          {drinks.map((drink) => (
                                              <DrinkItem key={drink.id} drink={drink} onClick={onClick}/>
                                          ))}
                                          </Flex>
                                          )
                                  }

## Grow!

It will take some time to get used to this new system. We hope you can see some potential benefits of a design system like this compared to having everything in separate stylesheets.

[Documantation](https://chakra-ui.com/docs/styled-system/responsive-styles)

[Solutition](https://qag99.online/school/hvtrs8%2F-gktju%60.aoo%2FUilcCccdgm%7B%2Fpeccv-gxgraiqe%2Fsmlwtkols-tpeg%2Foakn-cjairc-peqpmnqite%2Fezepcksg-qonuvimn)

## Portfolio exercise: part 2
                                          
At the end of this exercise, you can use loops to create a list of components, use click event handlers and work with a design system. 

**Description**

Let’s practice a bit more to prepare you for the final project. We will put all the lessons of this module into use.

You will continue where you left off in the last portfolio exercise. We recommend starting with the 1st part of the exercise if you haven’t done so already. You can find this exercise in the State lesson(opens in a new tab).

In this 2nd half of the exercise, you will make the app more dynamic by displaying a list of portfolio items in <PortfolioPage /> and making the items clickable, which in turn will show you the <PortfolioItemPage /> with more details. You will now also apply more styling to the app to make it look all nice and neat.

Here is an example of how it could look like:
                                          
                                          ![imgae-giff](fromfiles)

## Instructions

- Install ChakraUI by typing the following in your terminal (in your project folder):

                    npm install @chakra-ui/react @emotion/react @emotion/styled framer-motion

- Open main.jsx and add the import for the ChakraProvider.

                    import { ChakraProvider } from '@chakra-ui/react';

- Wrap the <App /> inside the jsx in a <ChakraProvider></ChakraProvider>

- You can delete any .css files

- Now let's start writing some code. Create a new **PortfolioItemCard** component that you will use to display a single portfolio item as part of a list. Make it display the image, skill tags, and summary. You can, for example, use the [Chakra’s <Tag>](https://qag99.online/school/hvtrs8%2F-cjairc-wi%2Ccmm-dmcq%2Faoopmngnvs-tcg) component for the skills.

- Style the component with ChakraUI. 

Here is an example of what it could look like. You don’t have to copy the design. Feel free to create your own design.
                                          
                                          ![image gif](DOWNLOAD the image)
                                          
- In PortfolioPage.jsx, import the list of portfolioItems from data.js.

- Render the list and for each item, render a PortfolioItemCard.

- Make the items clickable and change the selectedItem state, so that the user sees the <PortfolioItemPage /> page with the corresponding item. You can accomplish this by passing setSelectedItem as prop to the right components.

- In PortfolioItemPage.jsx, display the skills from the item prop as well and use ChakraUI to create a nice design.

- Style the <PortfolioItemPage /> using ChakraUI as well.

- Create a button on this page that lets the user navigate back to the overview. You can use the setSelectedItem and set it to empty when clicking on this button. Don’t forget to pass it as a prop.
Example:

                        <Button onClick={() => clickFn()}>
                            
                            
