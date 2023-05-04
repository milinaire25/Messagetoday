const motivationalMessages = [
    "Believe you can and you're halfway there.",
    "Your limitation—it's only your imagination.",
    "Push yourself, because no one else is going to do it for you.",
    "You have to work hard to get your thinking clean to make it simple",
    "Anger is the punishment we give ourselves for someone else's mistake - Gautam Buddha",
    "If you want less competition, pick a harder problem",
    "The man who loves walking will walk further than the man who loves the destination",
    "It is fruitless to wish you had started years ago. In the future you will wish you had started today",
    // ... add more motivational messages (total 365 messages)
  ];
  
  function getMessageForToday() {
    const today = new Date();
    const startOfYear = new Date(today.getFullYear(), 0, 1);
    const dayOfYear = Math.floor((today - startOfYear) / (1000 * 60 * 60 * 24));
    return motivationalMessages[dayOfYear % motivationalMessages.length];
  }
  
  document.getElementById('motivationalMessage').textContent = getMessageForToday();
  