const qBank = [
    {
      question:
        "In a complete graph G, which has 12 vertices, how many edges are there ?",
      answers: ["66", "24", "60", "36"],
      correct: "66",
      questionId: "099099"
    },
    {
      question:
        'In base 2, what is 1 + 1?',
      answers: ["10", "01", "11", "00"],
      correct: "10",
      questionId: "183452"
    },
    {
      question:
        "In the hexadecimal system, what number comes after 9?",
      answers: ["The Letter A", "The Letter D", "The Letter C", "The Letter B"],
      correct: "The Letter A",
      questionId: "267908"
    },
    {
      question: "What is the area of a circle with a diameter of 20 inches if &pi;= 3.1415?",
      answers: [
        "314.15 Inches",
        "314.10 Inches",
        "314.13 Inches",
        "314.157 Inches"
      ],
      correct: "314.15 Inches",
      questionId: "333247"
    },
    {
      question: "What is the most common surname Wales?",
      answers: ["Jones", "Williams", "Davies", "Evans"],
      correct: "Jones",
      questionId: "496293"
    },
    {
      question:
        "What was the name of the WWF professional wrestling tag team made up of the wrestlers Ax and Smash?",
      answers: [
        "Demolition",
        "The Dream Team",
        "The Bushwhackers",
        "The British Bulldogs"
      ],
      correct: "Demolition",
      questionId: "588909"
    },
    {
      question:
        'What name represents the letter "M" in the NATO phonetic alphabet?',
      answers: ["Mike", "Matthew", "Mark", "Max"],
      correct: "Mike",
      questionId: "648452"
    },
    
    {
      question: "What does a funambulist walk on?",
      answers: ["A Tight Rope", "Broken Glass", "Balls", "The Moon"],
      correct: "A Tight Rope",
      questionId: "1071006"
    },
    {
      question: "An isosceles triangle has two sides of equal length as opposed to three?",
      answers: ["True", "False", "Cannot Say"],
      correct: "True",
      questionId: "1174154"
    },
    {
      question: "Area 51 is located in which US state?",
      answers: ["Nevada", "Arizona", "New Mexico", "Utah"],
      correct: "Nevada",
      questionId: "1226535"
    },
    {
      question: "How would one say goodbye in Spanish?",
      answers: ["Adiós", " Hola", "Au Revoir", "Salir"],
      correct: "Adiós",
      questionId: "1310938"
    },
    {
      question: "What is the largest organ of the human body?",
      answers: ["Skin", "Heart", "large Intestine", "Liver"],
      correct: "Skin",
      questionId: "1436873"
    },
    {
      question: "Which sign of the zodiac is represented by the Crab?",
      answers: ["Cancer", "Libra", "Virgo", "Sagittarius"],
      correct: "Cancer",
      questionId: "1515110"
    },
   
   
  ];
  
  export default (n = 5) =>
    Promise.resolve(qBank.sort(() => 0.5 - Math.random()).slice(0, n));
  