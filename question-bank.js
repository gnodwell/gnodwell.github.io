const QUESTIONS = [
  {
    id: "s1",
    type: "single",
    prompt:
      "Scenario 1: I hire a contractor to pave my driveway and he does it using defective materials. My driveway falls short of what I expected. Is this issue a matter of private or public law?",
    choices: ["Private", "Public"],
    answerIndex: 0,
    explanation:
      "This is a private dispute (contract/civil issue) between you and the contractor.",
    subject: "Federal",
    topic: "Introduction to Federal Law",
    lecture: "FedLaw1: Introduction To The Law",
  },
  {
    id: "s2",
    type: "single",
    prompt:
      "Scenario 2: I hire a contractor to pave my driveway and give him $1000 down payment and he never returns. Is this issue a matter of private or public law?",
    choices: ["Public", "Private"],
    answerIndex: 0,
    explanation:
      "This can involve criminal/fraud/theft concerns → public law involvement.",
    subject: "Federal",
    topic: "Introduction to Federal Law",
    lecture: "FedLaw1: Introduction To The Law",
  },
  {
    id: "e1",
    type: "double",
    prompt: "EVENT: Todd parked in a handicap parking spot.",
    fields: [
      {
        label: "STATUTE",
        options: [
          "Municipal Bylaw",
          "Provincial Statute",
          "Federal Statute",
          "(no offence)",
        ],
      },
      {
        label: "OFFENCE",
        options: [
          "Unauthorized Parking",
          "Assault",
          "Red Light - Fail to Stop",
          "(no offence)",
        ],
      },
    ],
    answers: ["Municipal Bylaw", "Unauthorized Parking"],
    explanation:
      "Handicap parking enforcement is commonly handled under municipal bylaw; offence is unauthorized parking.",
    subject: "Federal",
    topic: "Introduction to Federal Law",
    lecture: "FedLaw1: Introduction To The Law",
  },
  {
    id: "e2",
    type: "double",
    prompt: "EVENT: James made a sly comment to Todd.",
    fields: [
      {
        label: "STATUTE",
        options: [
          "Municipal Bylaw",
          "Provincial Statute",
          "Federal Statute",
          "(no offence)",
        ],
      },
      {
        label: "OFFENCE",
        options: [
          "Unauthorized Parking",
          "Assault",
          "Red Light - Fail to Stop",
          "(no offence)",
        ],
      },
    ],
    answers: ["(no offence)", "(no offence)"],
    explanation: "A rude comment alone is not an offence in this scenario.",
    subject: "Federal",
    topic: "Introduction to Federal Law",
    lecture: "FedLaw1: Introduction To The Law",
  },
  {
    id: "e3",
    type: "double",
    prompt: "EVENT: Todd struck James in the face with a closed fist.",
    fields: [
      {
        label: "STATUTE",
        options: [
          "Municipal Bylaw",
          "Provincial Statute",
          "Federal Statute",
          "(no offence)",
        ],
      },
      {
        label: "OFFENCE",
        options: [
          "Unauthorized Parking",
          "Assault",
          "Red Light - Fail to Stop",
          "(no offence)",
        ],
      },
    ],
    answers: ["Federal Statute", "Assault"],
    explanation: "Assault is a Criminal Code offence (federal).",
    subject: "Federal",
    topic: "Introduction to Federal Law",
    lecture: "FedLaw1: Introduction To The Law",
  },
  {
    id: "e4",
    type: "double",
    prompt: "EVENT: Todd drove through a red light.",
    fields: [
      {
        label: "STATUTE",
        options: [
          "Municipal Bylaw",
          "Provincial Statute",
          "Federal Statute",
          "(no offence)",
        ],
      },
      {
        label: "OFFENCE",
        options: [
          "Unauthorized Parking",
          "Assault",
          "Red Light - Fail to Stop",
          "(no offence)",
        ],
      },
    ],
    answers: ["Provincial Statute", "Red Light - Fail to Stop"],
    explanation:
      "Traffic offences like failing to stop for a red light are typically under the HTA (provincial).",
    subject: "Federal",
    topic: "Introduction to Federal Law",
    lecture: "FedLaw1: Introduction To The Law",
  },
  {
    id: "c1",
    type: "multi",
    prompt:
      "What two right(s) does the driver (Todd Tucker) have at the time of their arrest? (Select TWO)",
    choices: [
      "to know the name, address and phone number of the complainant",
      "to keep his cell phone on him at all times.",
      "to retain and instruct counsel without delay and to be informed of that right",
      "to be informed promptly of the reasons therefore",
    ],
    answerIndices: [2, 3],
    explanation:
      "At arrest/detention: right to counsel without delay + right to be promptly informed of reasons.",
    subject: "Federal",
    topic: "Introduction to Federal Law",
    lecture: "FedLaw1: Introduction To The Law",
  },
  {
    id: "yn1",
    type: "single",
    prompt: "Can you ask the driver for their name?",
    choices: ["Yes", "No"],
    answerIndex: 0,
    explanation: "Yes.",
    subject: "Federal",
    topic: "Introduction to Federal Law",
    lecture: "FedLaw1: Introduction To The Law",
  },
  {
    id: "yn2",
    type: "single",
    prompt: "Can you ask for the name of the passenger in the back seat?",
    choices: ["Yes", "No"],
    answerIndex: 0,
    explanation: "Yes, you can ask.",
    subject: "Federal",
    topic: "Introduction to Federal Law",
    lecture: "FedLaw1: Introduction To The Law",
  },
  {
    id: "yn3",
    type: "single",
    prompt:
      "Is the person in the backseat obligated to give you their name if you ask?",
    choices: ["No", "Yes"],
    answerIndex: 0,
    explanation: "No.",
    subject: "Federal",
    topic: "Introduction to Federal Law",
    lecture: "FedLaw1: Introduction To The Law",
  },
  {
    id: "yn4",
    type: "single",
    prompt:
      "Can you ask to see what’s inside the bag that is beside the passenger?",
    choices: ["Yes", "No"],
    answerIndex: 1,
    explanation: "No (not just because you asked).",
    subject: "Federal",
    topic: "Introduction to Federal Law",
    lecture: "FedLaw1: Introduction To The Law",
  },
  {
    id: "yn5",
    type: "single",
    prompt:
      "If your questions focus more on the passenger, are you detaining the passenger?",
    choices: ["Yes", "No"],
    answerIndex: 0,
    explanation:
      "Yes (your focus can amount to detention depending on circumstances).",
    subject: "Federal",
    topic: "Introduction to Federal Law",
    lecture: "FedLaw1: Introduction To The Law",
  },
  {
    id: "court1",
    type: "single",
    prompt:
      "Based on the scenario with Todd Tucker (municipal bylaw + HTA + Criminal Code), which court will Todd attend for criminal and provincial charges?",
    choices: [
      "Provincial Offences Court",
      "Superior Court of Justice",
      "Divisional Court",
      "Ontario Court of Justice",
    ],
    answerIndex: 3,
    explanation: "Ontario Court of Justice.",
    subject: "Federal",
    topic: "Introduction to Federal Law",
    lecture: "FedLaw1: Introduction To The Law",
  },
  {
    id: "class1",
    type: "dropdown",
    prompt: "Offence: Trespass at Night — Classification",
    options: ["Summary Conviction", "Dual Procedure", "Indictable"],
    answerValue: "Summary Conviction",
    explanation: "Trespass at Night = Summary Conviction.",
    subject: "Federal",
    topic: "Introduction to Federal Law",
    lecture: "FedLaw1: Introduction To The Law",
  },
  {
    id: "class2",
    type: "dropdown",
    prompt: "Offence: Cause Disturbance — Classification",
    options: ["Summary Conviction", "Dual Procedure", "Indictable"],
    answerValue: "Summary Conviction",
    explanation: "Cause Disturbance = Summary Conviction.",
    subject: "Federal",
    topic: "Introduction to Federal Law",
    lecture: "FedLaw1: Introduction To The Law",
  },
  {
    id: "class3",
    type: "dropdown",
    prompt: "Offence: Theft Under — Classification",
    options: ["Summary Conviction", "Dual Procedure", "Indictable"],
    answerValue: "Dual Procedure",
    explanation: "Theft Under = Dual Procedure.",
    subject: "Federal",
    topic: "Introduction to Federal Law",
    lecture: "FedLaw1: Introduction To The Law",
  },
  {
    id: "class4",
    type: "dropdown",
    prompt: "Offence: Assault — Classification",
    options: ["Summary Conviction", "Dual Procedure", "Indictable"],
    answerValue: "Dual Procedure",
    explanation: "Assault = Dual Procedure.",
    subject: "Federal",
    topic: "Introduction to Federal Law",
    lecture: "FedLaw1: Introduction To The Law",
  },
  {
    id: "class5",
    type: "dropdown",
    prompt: "Offence: Murder — Classification",
    options: ["Summary Conviction", "Dual Procedure", "Indictable"],
    answerValue: "Indictable",
    explanation: "Murder = Indictable.",
    subject: "Federal",
    topic: "Introduction to Federal Law",
    lecture: "FedLaw1: Introduction To The Law",
  },
  {
    id: "class6",
    type: "dropdown",
    prompt: "Offence: Aggravated Assault — Classification",
    options: ["Summary Conviction", "Dual Procedure", "Indictable"],
    answerValue: "Indictable",
    explanation: "Aggravated Assault = Indictable.",
    subject: "Federal",
    topic: "Introduction to Federal Law",
    lecture: "FedLaw1: Introduction To The Law",
  },
  // -------------------------------
  // Intro to Law – Concept Questions
  // -------------------------------

  {
    id: "law1",
    type: "single",
    prompt:
      "Which option best describes the purpose of law in Canadian society?",
    choices: [
      "To punish people after crimes occur",
      "To protect individual rights and regulate behaviour",
      "To give police unlimited authority",
      "To replace moral values",
    ],
    answerIndex: 1,
    explanation:
      "Law exists to protect rights, regulate behaviour, and provide order in society.",
    subject: "Federal",
    topic: "Intro to Federal Law – Concept Questions",
    lecture: "FedLaw: Workbook Qs Session 1&2",
  },

  {
    id: "law2",
    type: "single",
    prompt:
      "Which type of law is created through decisions made by judges in court?",
    choices: ["Statute law", "Common law", "Procedural law", "Regulatory law"],
    answerIndex: 1,
    explanation:
      "Common law develops from previous court decisions and judicial interpretation.",
    subject: "Federal",
    topic: "Intro to Federal Law – Concept Questions",
    lecture: "FedLaw: Workbook Qs Session 1&2",
  },

  {
    id: "law3",
    type: "single",
    prompt: "What is the highest form of law in Canada?",
    choices: [
      "Criminal Code",
      "Common law",
      "The Constitution",
      "Federal statutes",
    ],
    answerIndex: 2,
    explanation: "The Constitution of Canada is the supreme law of the land.",
    subject: "Federal",
    topic: "Intro to Federal Law – Concept Questions",
    lecture: "FedLaw: Workbook Qs Session 1&2",
  },

  {
    id: "law4",
    type: "single",
    prompt: "Procedural law primarily provides instructions for whom?",
    choices: [
      "The general public",
      "The accused",
      "Police and courts",
      "Victims of crime",
    ],
    answerIndex: 2,
    explanation:
      "Procedural law governs how laws are enforced by police and courts.",
    subject: "Federal",
    topic: "Intro to Federal Law – Concept Questions",
    lecture: "FedLaw: Workbook Qs Session 1&2",
  },

  {
    id: "law5",
    type: "single",
    prompt: "Substantive law mainly tells citizens:",
    choices: [
      "How trials are conducted",
      "What behaviour is permitted or prohibited",
      "How evidence is collected",
      "What courts have jurisdiction",
    ],
    answerIndex: 1,
    explanation:
      "Substantive law defines rights, duties, and prohibited conduct.",
    subject: "Federal",
    topic: "Intro to Federal Law – Concept Questions",
    lecture: "FedLaw: Workbook Qs Session 1&2",
  },

  // -------------------------------
  // Criminal Law Fundamentals
  // -------------------------------

  {
    id: "crim1",
    type: "single",
    prompt:
      "Which court generally hears most Criminal Code matters at first instance in Ontario?",
    choices: [
      "Superior Court of Justice",
      "Ontario Court of Justice",
      "Divisional Court",
      "Federal Court",
    ],
    answerIndex: 1,
    explanation: "Most criminal matters begin in the Ontario Court of Justice.",
    subject: "Federal",
    topic: "Criminal Law Fundamentals",
    lecture: "FedLaw: Workbook Qs Session 1&2",
  },

  {
    id: "crim2",
    type: "multi",
    prompt:
      "Which of the following are classifications of criminal offences in Canada? (Select THREE)",
    choices: [
      "Indictable",
      "Hybrid (dual procedure)",
      "Regulatory",
      "Summary conviction",
    ],
    answerIndices: [0, 1, 3],
    explanation:
      "Criminal offences are classified as indictable, summary, or hybrid.",
    subject: "Federal",
    topic: "Criminal Law Fundamentals",
    lecture: "FedLaw: Workbook Qs Session 1&2",
  },

  {
    id: "crim3",
    type: "single",
    prompt: "A criminal information is best described as:",
    choices: [
      "A police report filed after an arrest",
      "A sworn document that begins a criminal charge",
      "A document issued only by Crown Attorneys",
      "A court summons for witnesses",
    ],
    answerIndex: 1,
    explanation:
      "An information is a sworn document that initiates a criminal charge.",
    subject: "Federal",
    topic: "Criminal Law Fundamentals",
    lecture: "FedLaw: Workbook Qs Session 1&2",
  },

  {
    id: "crim4",
    type: "single",
    prompt:
      "Who may lay a criminal information under oath if they have reasonable grounds?",
    choices: [
      "Only a police officer",
      "Only a Crown Attorney",
      "Only a justice of the peace",
      "Any person",
    ],
    answerIndex: 3,
    explanation:
      "Under the Criminal Code, anyone may lay an information if legal requirements are met.",
    subject: "Federal",
    topic: "Criminal Law Fundamentals",
    lecture: "FedLaw: Workbook Qs Session 1&2",
  },

  // -------------------------------
  // Evidence / Interpretation Concepts
  // -------------------------------

  {
    id: "interp1",
    type: "single",
    prompt: "Which word in legislation generally indicates a mandatory action?",
    choices: ["May", "Should", "Shall", "Could"],
    answerIndex: 2,
    explanation: "'Shall' is interpreted as mandatory or imperative.",
    subject: "Federal",
    topic: "Evidence / Interpretation Concepts",
    lecture: "FedLaw: Workbook Qs Session 1&2",
  },

  {
    id: "interp2",
    type: "single",
    prompt:
      "In statutory interpretation, the word 'may' is usually understood to mean:",
    choices: [
      "Mandatory action",
      "Judicial discretion",
      "Police authority",
      "Immediate action",
    ],
    answerIndex: 1,
    explanation: "'May' generally indicates discretion, not obligation.",
    subject: "Federal",
    topic: "Evidence / Interpretation Concepts",
    lecture: "FedLaw: Workbook Qs Session 1&2",
  },

  {
    id: "interp3",
    type: "single",
    prompt:
      "Which term generally means 'without delay' in legal interpretation?",
    choices: ["Eventually", "Forthwith", "Subsequently", "Thereafter"],
    answerIndex: 1,
    explanation:
      "'Forthwith' is commonly interpreted as immediately or without delay.",
    subject: "Federal",
    topic: "Evidence / Interpretation Concepts",
    lecture: "FedLaw: Workbook Qs Session 1&2",
  },

  // -------------------------------
  // Court Process / Police Authority
  // -------------------------------

  {
    id: "proc1",
    type: "single",
    prompt:
      "Which document is typically used to compel a witness to attend court and bring documents?",
    choices: ["Arrest warrant", "Information", "Subpoena", "Recognizance"],
    answerIndex: 2,
    explanation:
      "A subpoena orders a witness to attend court and may require documents.",
    subject: "Federal",
    topic: "Court Process / Police Authority",
    lecture: "FedLaw: Workbook Qs Session 1&2",
  },

  {
    id: "proc2",
    type: "single",
    prompt: "R.C.A. is commonly used by police as a framework to:",
    choices: [
      "Investigate offences",
      "Determine court jurisdiction",
      "Recognize, classify, and apply authority",
      "Assess credibility of witnesses",
    ],
    answerIndex: 2,
    explanation: "RCA stands for Recognize, Classify, and Authority.",
    subject: "Federal",
    topic: "Court Process / Police Authority",
    lecture: "FedLaw: Workbook Qs Session 1&2",
  },

  {
    id: "proc3",
    type: "truefalse",
    prompt:
      "True or False: All criminal offences in Canada are indictable offences.",
    answer: false,
    explanation: "Criminal offences may be summary, indictable, or hybrid.",
    subject: "Federal",
    topic: "Court Process / Police Authority",
    lecture: "FedLaw: Workbook Qs Session 1&2",
  },
];
