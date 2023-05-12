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
    "Principles are far more important than education",
    "Life is compound interest",
    "A great man is hard on himself, a small man is hard on others.",
    "What we thik, we become.",
    "You can be competitive while still being a kind person.",
    "Rich people have money. Wealthy people have time.",
    "Complaining is not a strategy.You have to work with the world as you find it,not as you would have it be.",
    "Blaming others will never get you what you want",
    "I'm convinced that the key to greatness is simply having a delusional level of belief in your incredible future",
    "Happiness is being satisfied with what you have. Success comes from dis-satisfaction. Choose",
    "Make your vision so clear that your fears become irrelevant",
    "Your value isn't in your valuation",
    "A hungry stomach, an empty pocket and a broken heart can teach the best lessons of life",
    "You never know how strong you are until being strong is the only choice you have",
    "The most dangerous person is the one who listens, thinks and observe",
    "The reason most people are losing is because they're scared of losing",
    "Nothing is as priceless as the treasure of a clean conscience.Do good especially when it's the hardest",
    "Everyone you meet is fighting a battle you know nothing about. Be kind, always.",
    "The master has failed more times than the beginner has even tried",
    "I never met a strong person with an easy past",
    "The best fighter is never angry",
    "Your past was perfect it made you you",
    "A man once told me the most important thing every man should know, is what he would die for",
    "Great leaders dont blame the tools they are given,they work to sharpen them",
    
    // ... add more motivational messages (total 365 messages)
  ];
  
  function getMessageForToday() {
    const today = new Date();
    const startOfYear = new Date(today.getFullYear(), 0, 1);
    const dayOfYear = Math.floor((today - startOfYear) / (1000 * 60 * 60 * 24));
    return motivationalMessages[dayOfYear % motivationalMessages.length];
  }
  
  document.getElementById('motivationalMessage').textContent = getMessageForToday();
  
