# React Sample E-Commerce Clothing Store

This project is built with React, Redux, Firebase, and Stripe. You will need to setup your own Firebase and Stripe accounts if you want to use this app yourself.

## Instructions

### Running locally

- Clone this repo via `git clone git@github.com:cbaucom/react-clothing-store-demo.git`
- Setup Firebase and Stripe accounts and grab config information as noted in the instructions below before proceeding.
- `cd react-clothing-store-demo` and install server dependencies via `yarn install`
- `cd client` and install client dependencies via `yarn install`
- `cd ..` to return to the base directory
- Execute `yarn dev` to begin both the client and server.
- You should be able to reach the project at http://localhost:3000/

_The project structure/boilerplate is based around [create-react-app](https://github.com/facebookincubator/create-react-app#create-react-app).
 This means you don't have to worry about setting up any dependencies, build steps, boilerplate, etc... Everything just works right out of the box including ES6+ syntax among many other modern development conveniences and features.  For additional information specific to `create-react-app` see [the docs](https://github.com/facebookincubator/create-react-app#create-react-app-)._


### Firebase

Setup a new [Firebase project](https://console.firebase.google.com) and update `client/firebase/firebase.utils.js` with your new Firebase web app config information.

### Stripe

Sign up for a Stripe account if you haven't already, login and navigate to the Developers > API Keys section. Grab your Publishable key and define it in `client/src/components/stripe-button/stripe-button.component.jsx` as `publishableKey`

In the base directory of the project, create a `.env` file and define
`STRIPE_SECRET_KEY=your_secret_test_code_here`


