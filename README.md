# babyreactredux
Just react, redux, and an express server (also sass).

This will get you started on React and Redux without having to sift through a million tutorials (hopefully).

To get started, run `npm install`

To make changes, edit files in src folder, then run `npm run build` (This should work cross-platform, but hasn't actually been tested on Windows yet)

To run server, cd to server folder and run `node index.js`. Site will be available on http://localhost:3001/

That's it.

Postscript: A word about horrible names. The concept of using React and Redux together is simple: it's a global state manager (aka a model and event bus). You can emit events to change that state, and bind to state values inside React components, so they can update on the fly when anything anywhere in the app changes the global state.

But, "Provider?" "Store?" "Reducer??" These names create a huge learning curve. Basically a "store" contains the global state and the "reducer," which is a method that listens to events ("actions") and updates the global state. For whatever reason, the preferred way to give all your components access to this "store" (global state) is to wrap your app in a JSX tag called a "Provider," which takes in the store as a param. 

Inside each React component file, you export using a method called "connect" which takes two other methods as params: You can name them whatever you like, but I've seen tham called "mapStateToProps" and "mapDispatchToProps." They just need to take in "state" and "dispatch," respectively, as params. The former binds global state values to your component's "this.props," and the latter does the same with events ("actions") so that `this.props.myActionName()` will fire the action called "myActionName" specified in "mapDispatchToProps." This will in turn send an action to the Store (with an optional payload), where it will be handled by the reducer method, which updates the global state via its return value.

Hope that helps!
