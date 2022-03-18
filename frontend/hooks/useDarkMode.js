import { useState } from 'react';

export const useDarkMode = (initialValue) => {
    const [darkMode, setDarkMode] = useState(initialValue);
    return [darkMode, setDarkMode];
};

/**
 * Notes from recorded Lecture
 * 
 * * We're thinking about SEPARATING CONCERNS and making REUSABLE CODE *
 * 
 * * When you first receive a design file, you'll typically start boxing/dividing different parts of the UI into different components or parts to code
 * 
 * Window.localStorage is a read-only property that returns a reference to the local storage object used to store data that is only accessible to the origin that created it.
 * 
 * To use localStorage in your web applications, there are five methods to choose from:
 * 1. setItem() : Add key and value to localStorage
 *      takes two parameters: key and value
 *          window.localStorage.setItem('name', 'Obaseki Nosa')
 *      to store arrays or objects, you have to convert to strings
 *          to do this, use JSON.stringify()
 *              const person = {
 *                  name: 'Obaseki Nosa',
 *                  location: 'Lagos',
 *              }
 *              window.localStorage.setItem('user', JSON.stringify(person));
 * 2. getItem() : How you get items from localStorage
 *      accepts KEY and returns VALUE as a string
 *          for example, when returning an object, value might be:
 *              "{"name":"Obaseki Nosa","location":"Lagos"}"
 *      to use VALUE, use JSON.parse() to convert string to JS object
 *          JSON.parse(window.localStorage.getItem('user'));
 * 
 * 3. removeItem() : Remove an item by key from localStorage
 *      e.g. window.localStorage.removeItem('name');
 * 
 * 4. clear() : Clear all localStorage
 *      window.localStorage.clear();
 * 
 * 5. key() : Pass a number to retrieve the key of a localStorage
 *      comes in handy when you need to loop through keys, allowing you to pass a number or index to localStorage to retrieve the name of the key
 *          let KeyName = window.localStorage.key(index);
 * 
 *  LOCAL STORAGE - kept on window
 *  SESSION STORAGE - per tab, a bit bigger, never server-side
 *  COOKIE - small, can be encrypted, sent to server for handling
 * 
 *  CUSTOM HOOKS
 *      A custom hook is a JS function whose name starts with "use" and that may call other hooks.
 *      EXAMPLE
 *          function useFriendStatus(friendID) {
 *              const [isOnline, setIsOnline] = useState(null);
 *              useEffect(() => {
 *                  function handleStatusChange(status) {
 *                      setIsOnline(status.isOnline);
 *                  }
 *                  ChatAPI.subscribeToFriendStatus(friendID, handleStatusChange);
 *                  return() => {
 *                      ChatAPI.unsubscribeFromFriendStatus(friendID, handleStatusChange);
 *                  };
 *              });
 *              return isOnline;
 *          }
 *  
 *  COMPOSING REACT HOOKS
 *      You can wrap hooks with other hooks
 *      Let's say that usePerson() returns a "person" object with first and last names
 *      You could furthermore create custom hooks for both of these names, using the usePerson() hook
 *          const useFirstName =()=>{
 *              const person = usePerson();
 *              return person.firstName;
 *          }
 * 
 *  COMPUTED PROPERTY NAMES
 *      ES6's "computed property names" allows you to have expression computed as a property name in an object
 *      Consider:
 *          function objectify (key, value) {
 *              let obj = {};
 *              obj[key] = value;
 *              return obj;
 *          }
 *          objectify('name','Tyler') // { name: 'Tyler' }
 * 
 *      Using CPN's:
 *          function objectify (key, value) {
 *              return {
 *                  [key]: value;
 *              };
 *          }
 *          objectify('name','Tyler') // { name: 'Tyler' }
 */
