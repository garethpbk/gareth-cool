---
path: better-context-with-hooks
date: 2019-08-29T17:27:11.373Z
title: Better Context with React Hooks
tags:
  - coding
  - javascript
  - react
image: /assets/fishing-rod.jpg
---

_This is an adaptation of a talk I gave on March 13, 2019 at the_ [_San Diego JavaScript_](https://www.sandiegojs.org/) _React Meetup. Slides for that talk can be found here:_ [_https://better-context-with-hooks.netlify.com/_](https://better-context-with-hooks.netlify.com/)

Context is one of the most useful tools a React developer can have in their kit. In short, it allows state (or anything else) to be passed around an application without relying on prop drilling. Any component in a context provider's tree can access values passed into the context, and utilize them from there. Many developers find context useful as a way to help manage application state without the need to bring in a library like Redux or MobX.

If you'd like this learn more about context and when you might or might not want to use it, check out the [the official React documentation](https://reactjs.org/docs/context.html).

Historically, context relied on the render props pattern to give consumer components access to a provider's data. If you've ever used render props you'll probably agree that they're kind of a pain - specifically, they create extra levels of nesting and a **false hierarchy** that make viewing and debugging code difficult. With the introduction of React hooks, context has become _much_ easier to use. Let's take a look at some examples and see how the `useContext()` hook greatly simplifies implementing context.

_(Note: these code blocks are abbreviated and don't contain full component code. Please reference the talk slides linked above or the [GitHub repo](https://github.com/garethpbk/better-context-with-hooks) if you'd like to see the full code.)_

Here's the created context render method of a component that has two pieces of state `name` and `hasBall` and one method `fetch`. We pass these into a context provider's `value` prop. Now everything in that context provider's tree can access the and method.

```javascript
export const HookContext = createContext();

render() {
    const values = { name: this.state.name, hasBall: this.state.hasBall, fetch: this.fetch };

    return (
      <MyContext.Provider value={values}>
        <ChildOne />
      </MyContext.Provider>
    );
  }
```

One more level down the trees, here's the `<ChildOne />` component.

```javascript
const ChildOne = () => <ChildTwo />;
```

And here's `<ChildTwo />` - notice how there's no prop drilling going on here.

```javascript
const ChildTwo = () => (
  <MyContext.Consumer>
    {value => (
      <div>
        <h3>
          {value.name} {value.hasBall ? 'has' : 'does not have'} the ball.
        </h3>
        <button onClick={() => value.fetch()}>Play Fetch</button>
      </div>
    )}
  </MyContext.Consumer>
);
```

The consumer component allows us to access those values passed in, and utilize them in `<ChildTwo />` via the render prop pattern. This is a basic example of how context works.

Ok, this doesn't look too bad - `{value => ()}` is perfectly readable. But what if you need to access values from multiple context providers in a component that's nested in their trees? Bear with me, this gets a little ugly.

Here's the render method for a component called `<ContextOneParent />`:

```javascript
render() {
    return (
      <ContextOne.Provider value={this.state.firstValue}>
        <ContextTwoParent />
      </ContextOne.Provider>
    );
  }
```

Next `<ContextTwoParent /`>`:

```javascript
render() {
    return (
      <ContextTwo.Provider value={this.state.secondValue}>
        <ContextThreeParent />
      </ContextTwo.Provider>
    );
  }
```

And a third context provider component:

```javascript
render() {
    return (
      <ContextThree.Provider value={this.state.thirdValue}>
        <ContextChild />
      </ContextThree.Provider>
    );
  }
```

So we've got three different context providers now, nested inside of each other. The goal of this is to give `<ContextChild />` access to values from all three.

```javascript
function ContextChild() {
  return (
    <ContextOne.Consumer>
      {value => (
        <div>
          <p>{value}</p>
          <ContextTwo.Consumer>
            {value => (
              <div>
                <p>{value}</p>
                <ContextThree.Consumer>
                  {value => (
                    <div>
                      <p>{value}</p>
                    </div>
                  )}
                </ContextThree.Consumer>
              </div>
            )}
          </ContextTwo.Consumer>
        </div>
      )}
    </ContextOne.Consumer>
  );
}
```

😱😱😱

Does that look at gnarly to you as it does to me? This is a contrived scenario, sure - but I'm sad to report that in real-world situation it's actually worse. When you start using multiple packages or your own contexts that use render props and context...good luck. Routing is especially difficult to deal with. Here's a screenshot from the React dev tools in a production application using `@reach/router`:

![context is crazy](https://better-context-with-hooks.netlify.com/assets/context-lol.png)

Suffice to say that this makes debugging rather tedious. This isn't the fault of the router at all, it's just how React works.

This also creates a **false hierarchy** where it appears that the values of the inner context components depend on those higher up in the tree. In reality those three context consumers are totally separate, render props just has to have them nested within each other due to how the parent tree is constructed.

## 😍 `useContext()` to the Rescue 😍

Let's see now how React hooks make context fun again. In this example I'll show the whole component along with creating the context provider - we're also using `useState()` for state. Rather than returning a specific component, it also uses `props.children` to create a reusable component that can wrap anything.

```javascript
export const HookContext = createContext();

function HookProvider(props) {
  const [name, setName] = useState('Fido');
  const [item, setItem] = useState('BALL');

  const fetchItem = item => {
    const capitalizedItem = item.toUpperCase();
    setItem(capitalizedItem);
  };

  const contextValues = {
    state: {
      name,
      item,
    },
    functions: {
      setName,
      fetchItem,
    },
  };

  return (
    <HookContext.Provider value={contextValues}>
      {props.children}
    </HookContext.Provider>
  );
}
```

Here's how to use this, with another component that returns the context component, wrapping its children:

```javascript
const HookContainer = () => (
  <HookProvider>
    <HookFirstChild />
  </HookProvider>
);
```

As in the first set of example components, the first child just returns another component:

```javascript
const HookFirstChild = () => (
  <HookSecondChild />
);
```

Finally we can see `useContext()` in action! It takes one value, the object created by `createContext()`, and allows for access to anything passed into that context provider's `value` prop, in this case destructured:

```javascript
const HookSecondChild = () => {
  const { state, functions } = useContext(HookContext);

  return (
    <div>
      <p>
        <strong>{state.name}</strong> fetches the <em>{state.item}</em>.
      </p>
      <div>
        <label htmlFor="name">Set Name</label>
        <br />
        <input type="text" name="name" onChange={e => functions.setName(e.target.value)} />
      </div>
      <div>
        <label htmlFor="item">Set Item</label>
        <br />
        <input type="text" name="item" onChange={e => functions.fetchItem(e.target.value)} />
      </div>
    </div>
  );
};
```

This isn't too much an improvement on render props, but I do think it's cleaner. The real value starts to show itself when you have multiple contexts. Remember this thing from above?

```javascript
function ContextChild() {
  return (
    <ContextOne.Consumer>
      {value => (
        <div>
          <p>{value}</p>
          <ContextTwo.Consumer>
            {value => (
              <div>
                <p>{value}</p>
                <ContextThree.Consumer>
                  {value => (
                    <div>
                      <p>{value}</p>
                    </div>
                  )}
                </ContextThree.Consumer>
              </div>
            )}
          </ContextTwo.Consumer>
        </div>
      )}
    </ContextOne.Consumer>
  );
}
```

Here's what it looks like with hooks:

```javascript
function ContextHookChild() {
  const firstValue = useContext(ContextOne);
  const secondValue = useContext(ContextTwo);
  const thirdValue = useContext(ContextThree);

  return (
    <div>
      <p>{firstValue}</p>
      <p>{secondValue}</p>
      <p>{thirdValue}</p>
    </div>
  );
}
```

😂😂😂

No nesting, no render props...just values easily drawn out from `useContext()`, that can be used in the component. Side-by-side, the improvement is easy to see:

![hooks vs render props](https://better-context-with-hooks.netlify.com/assets/render-props-vs-hooks.png)

To wrap up, be sure to note that one disadvantage of `useContext()` is that the context created by `createContext()` can't be destructured - you have to pass the whole thing into the hook. This won't work:

```javascript
const { Consumer, Provider } = createContext();
```

A small price to pay for the improved readability and cleanliness that `useContext()` offers, if you ask me.
