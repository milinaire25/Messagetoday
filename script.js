const motivationalMessages = [
    "Believe you can and you're halfway there.",
    "Your limitation—it's only your imagination.",
    "Push yourself, because no one else is going to do it for you.",
    "You have to work hard to get your thinking clean to make it simple",
    "Anger is the punishment we give ourselves for someone else's mistake - Gautam Buddha",
    "If you want less competition, pick a harder problem",
    "The man who loves walking will walk further than the man who loves the destination",
    "It is fruitless to wish you had started years ago. In the future you will wish you had started today",
    "Be a problem Solving machibe. Everyday there will be many problesm.They will never end.The more successful you are bigger your problems will be.To achieve your goals you must be a problem solving machine",
    "Be the person who still tries.After failure,after frustration,after disappointment,after exhaustion,after heartache, be the person who musters up the courage to believe that a new attempt can manifest a new outcome.Be the person who still tries",
    "Chase real dopamine.Sun,Weights,Runs,Walks,Tennis,Hard work,Breathwork,Meditate,Visualize,Design,Serve,Connect,Create.Do real work",
    "Everyone must choose one of two pains, The pain of discipline or the pain of regret",
    "No man is free who cannot control himself",
    "Replace, Why this is happening to me? With, What is it trying to teach me",
    "Just a reminder,wearing that expensive watch won't make you healthy",
    "He who poses as a fool is not a fool",
    "The Truth is like a lion, you dont have to defend it. Let it loose ,It will defend itself",
    "I'm not upset that you lied to me,I'm upset that from now on i cant believe you",
    "Be the kind of person that your kids would look up to, If you weren't their parents",
    "Space I can recover.Time, never",
    "You are only entitled to the action,never to its fruits",
    
    // ... add more motivational messages (total 365 messages)
  ];
  
  function getMessageForToday() {
    const today = new Date();
    const startOfYear = new Date(today.getFullYear(), 0, 1);
    const dayOfYear = Math.floor((today - startOfYear) / (1000 * 60 * 60 * 24));
    return motivationalMessages[dayOfYear % motivationalMessages.length];
  }
  
  document.getElementById('motivationalMessage').textContent = getMessageForToday();
  
