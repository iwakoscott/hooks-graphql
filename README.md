# Satoshi's Feedback

Hi Shruti, super cool little CRUD application. I really only have one big piece of feedback but, I am not sure if this was intended for the example application:

You might not need the `useReducer`/`useContext` pattern here since we can simply rely on Apollo Client to manage our application state (especialy state coming back from our GraphQL mutations/queries.) I was able to remove it entirely and rely entirely on Apollo Client Cache to hold onto my `songs`. When you use the `AddSong` mutation, you can use a property on the `Mutation` render prop pattern called - `refetchQueries` which will refetch a specific query to update the cache and then subsequently update your view.

But if the point of the example was to discuss how to use `useContext` and `useReducer` hooks to create global application state, then everything looks great!

- One thing to note however is that the `useEffect` hook's dependency array only does a direct comparison of values inside of it instead of a shallow one. Therefore, any objects - arrays, object literals passed into this array will appear new to the `useEffect` therefore,

```javascript
React.useEffect(() => {
  if (songs) {
    // ...
  }
}, [songs]);
```

this effect will rerun at each render.
