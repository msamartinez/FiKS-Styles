## TIER 1 MVP Shopping Experience

As a customer/visitor, I want to be able to:
    [X]access a deployed version of the website so I can browse and purchase products.
    [X]view all available products so I can pick from a variety.
    [X]view a single product so I can see more details.
    [X]add a product to my cart so I can collect my desired products in one place.
    [X]edit my cart if I change my mind:
        [X]change the quantity of a product in my cart.
        [X]remove a product in my cart.
        [ ]No one else should be able to edit my cart except me.
    [X]"checkout" the items in my cart so I can purchase my desired goods.
        [ ]Think of a typical user experience on popular websites from a guest user and logged-in user perspective.
        [ ]You can just start with by simulating the experience of checking out with a simple confirmation page.
    [X]create an account so I can have a logged-in experience.
    

As a logged-in customer, I want to be able to:
    [ ]have a persistent cart so I can revisit and pick up where I left off.
        [ ]Logged-in-user across multiple devices: I'm logged in on my mobile device and add some items to my cart. When I open the browser on my laptop and log in, I want to see those items in my cart.
        [ ]No one else should be able to edit my cart except me.


As an administrator, I want to be able to:
    [X]have validated data to ensure reliability.
        [X]i.e. each customer that creates an account should only be able to do so once with a single email address.
    [X]have full rights to make backend requests to add, edit, and remove products.
        [X]No one else should have access.
    [X]view user information.
        [X]No one else should have access.


As an engineer, I want to:
    [X]have a well-seeded database so that I am able to simulate a number of different scenarios for the user stories below.
        [X]By doing this, you really set yourselves up to tackle many of the points throughout the tiers. In the long run, this will save you, potentially, tons of time.
        [ ]For example, seed hundreds of products with dummy data so that when you get to the “pagination” user story, you won’t have to worry about adding more products.
        [ ]Likewise, add a bunch of users with products in their carts so editing the cart can be worked on without already having the “add to cart” functionality built out.
    [ ]user data to be secure so that no one can unrightfully manipulate information.

## TIER 2 E-Commerce Essentials

As a customer, I want to be able to:
    [X]see all products that belong to a certain category.
        [X]Keep this simple. For example, a product can only belong to one category.
    [X]explore an aesthetically pleasing website so I can easily navigate around and enjoy the experience (UI/UX).
        [ ]This includes front-end data validations. For example, if certain fields of a form are required and must be in a specific format, this is obvious to the user.
    [ ]have a persistent cart so I can revisit and pick up where I left off.
        [ ]There are two more experiences to consider here. Explore your favorite websites to see what the intended behavior is for the following cases:
            [ ]Guest-only: I don't want to create an account, but I want my cart to persist between browser refreshes.
                Look into front-end storage for this one.
            [ ]Guest-to-logged-in-user: Initially, I'm not logged in, and I add items to my cart. When I eventually log in, I want to see those same items I added when I was logged in still in my cart, in addition to the items I may have had in my cart from a previous logged in session.


As a logged-in customer, I want to be able to:
    [ ]see my order history so I can remember my previously purchased items and their prices at the time of purchase.
    [ ]view and edit my user profile so I can update my information when necessary.


As an administrator, I want to be able to:
    [ ]allow customers to have a variety of payment method options in order to increase checkout conversion.
        [X]Begin by integrating Stripe, and, if interested, dive into integrating PayPal, Venmo, Braintree, or Bitcoin.
    [ ]edit products and manage users through a dashboard so I can easily make changes and assessments as necessary.