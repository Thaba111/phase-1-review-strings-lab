// Write your code in this file!
const currentUser = 'Grace Hopper';
const welcomeMessage = `Welcome to Flatbook, ${currentUser}!`;
const excitedWelcomeMessage = welcomeMessage.toUpperCase();
const shortGreeting = `Welcome, ${currentUser.charAt(0)}!`;

expect(excitedWelcomeMessage).to.equal('WELCOME TO FLATBOOK, GRACE HOPPER!'); 
