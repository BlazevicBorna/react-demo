Running:

1) Open node console in root folder;
2) run commands: "npm install"
		 "npm start"
3)That should be it!

Technologies in comparison with Ivan's sample code that he sent me and with Zhydi's project:

This app is my way of getting familiar with the React+Redux way of creating webpages, however the other two projects
don't use the Redux technology so i went to look for good practices online.
App uses Express( as does Ivan's sample ) to create the webserver in the srcServerFile.
The focus was organising the React components, 
and I did so by dividing them into diffrent folders: Common => common components(header and inputs)
						     *Page =>components for a single page shown

I tried to use stateless(presentational/dumb) components as much as possible, so there is only one statefull(container/smart)
component which is the ManagerPage component and contains most of the logic.
The css is separated from the components(versus Zhydi's inline css and Ivan's file for file css) in the folder styles simply because there isnt much of it (the app relies on bootstrap).

The app's state is in the Redux Store and the components communicate with it using actions and reducers(standard Unidirectional Data Flow);
Considering the state in Redux is immutable i have some diffrent practises when changing it than Ivan and Zhydi and have 
enforced the immutability of the state in the code with the "redux-immutable-state-invariant" library.

For the data i have created a mock API which isn't really worth looking into, and I am communicating to it in the action files 
and to be able to return functions from the actions I am using the "react-thunk" library in.

I used the ESLinter for linting simply because I am comfortable with it.

In the project there are some unnecessary dependecies because I used a starter for the setup of the project and didn't 
clean the package.json file.

links to some interesting dependencies:

	https://github.com/gaearon/redux-thunk
	https://github.com/leoasis/redux-immutable-state-invariant
