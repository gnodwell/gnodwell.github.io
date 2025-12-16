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
      "Recognize, classify, authority",
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
  {
    id: "uf1",
    type: "truefalse",
    prompt:
      "Section 25 of the Criminal Code allows an officer to use force if they are authorized to act, are acting on reasonable grounds, and use no more force than necessary.",
    answer: true,
    explanation:
      "Section 25 requires lawful authority, reasonable grounds, and proportional/necessary force.",
    subject: "Federal",
    topic: "Use of Force",
    lecture: "FedLaw4: Use of Force and The Charter",
  },
  {
    id: "uf2",
    type: "truefalse",
    prompt:
      "The concept of necessity in use-of-force situations includes imminence, no reasonable alternatives, and proportionality.",
    answer: true,
    explanation:
      "Force must be imminent, unavoidable, and proportionate to the threat.",
    subject: "Federal",
    topic: "Use of Force",
    lecture: "FedLaw4: Use of Force and The Charter",
  },
  {
    id: "uf3",
    type: "truefalse",
    prompt:
      "Imminence is assessed by considering intent, means, and opportunity.",
    answer: true,
    explanation:
      "Imminent threat analysis considers intent, means, and opportunity.",
    subject: "Federal",
    topic: "Use of Force",
    lecture: "FedLaw4: Use of Force and The Charter",
  },
  {
    id: "uf4",
    type: "truefalse",
    prompt:
      "Section 26 of the Criminal Code addresses liability for excessive use of force.",
    answer: true,
    explanation: "Section 26 removes protection when force used is excessive.",
    subject: "Federal",
    topic: "Use of Force",
    lecture: "FedLaw4: Use of Force and The Charter",
  },
  {
    id: "uf5",
    type: "truefalse",
    prompt:
      "Section 25(4) outlines additional requirements that must be met when force is used against a fleeing subject.",
    answer: true,
    explanation:
      "Section 25(4) adds heightened requirements when dealing with fleeing suspects.",
    subject: "Federal",
    topic: "Use of Force",
    lecture: "FedLaw4: Use of Force and The Charter",
  },
  {
    id: "uf6",
    type: "single",
    prompt:
      "When the term 'justified' is used in relation to section 25 of the Criminal Code, what does it generally mean?",
    choices: [
      "Protected from criminal liability only",
      "Able to use unlimited force",
      "Protected from civil liability only",
      "Protected from both criminal and civil liability",
    ],
    answerIndex: 3,
    explanation:
      "Justification under s.25 protects against both criminal and civil liability when force is lawful.",
    subject: "Federal",
    topic: "Use of Force",
    lecture: "FedLaw4: Use of Force and The Charter",
  },
  {
    id: "uf7",
    type: "single",
    prompt: "Acting in good faith means:",
    choices: [
      "Acting to the best of your ability",
      "Having an honest intention",
      "Acting free from irregularity",
      "Acting with honest intention and without knowledge of irregularity",
    ],
    answerIndex: 3,
    explanation:
      "Good faith combines honest intent with the absence of known irregularity.",
    subject: "Federal",
    topic: "Use of Force",
    lecture: "FedLaw4: Use of Force and The Charter",
  },
  {
    id: "uf8",
    type: "single",
    prompt:
      "Under section 25 of the Criminal Code, a person must be acting on:",
    choices: [
      "Suspicion",
      "Reasonable suspicion",
      "Reasonable grounds",
      "A reasonable hunch",
    ],
    answerIndex: 2,
    explanation:
      "Section 25 requires reasonable grounds, not suspicion or hunches.",
    subject: "Federal",
    topic: "Use of Force",
    lecture: "FedLaw4: Use of Force and The Charter",
  },
  {
    id: "uf9",
    type: "truefalse",
    prompt:
      "An officer who is authorized to use force can never be held criminally liable, even if excessive force is used.",
    answer: false,
    explanation:
      "Excessive force removes the protection of section 25 and may result in liability.",
    subject: "Federal",
    topic: "Use of Force",
    lecture: "FedLaw4: Use of Force and The Charter",
  },
  {
    id: "hta-locate-1",
    type: "multi",
    prompt:
      "Which tools can be used to locate offences in the Highway Traffic Act? (Select ALL that apply)",
    choices: [
      "Table of Contents",
      "Index",
      "Margin references",
      "Short Form Wording Book",
    ],
    answerIndices: [0, 1, 2, 3],
    explanation:
      "Offences can be located using the Table of Contents, Index, margin references, and the Short Form Wording Book.",
    subject: "Provincial",
    topic: "Locating Offences",
    lecture: "HTA 1",
  },
  {
    id: "hta-locate-2",
    type: "truefalse",
    prompt:
      "The index in the Highway Traffic Act references page numbers rather than section numbers.",
    answer: true,
    explanation: "The HTA index directs users to page numbers, not sections.",
    subject: "Provincial",
    topic: "Locating Offences",
    lecture: "HTA 1",
  },
  {
    id: "hta-locate-3",
    type: "truefalse",
    prompt:
      "Officers should always read the full section of the Highway Traffic Act rather than relying only on the Short Form Wording Book.",
    answer: true,
    explanation:
      "The Short Form Wording Book lists offences, but the Act itself contains the required facts in issue.",
    subject: "Provincial",
    topic: "Locating Offences",
    lecture: "HTA 1",
  },
  {
    id: "hta-def-1",
    type: "single",
    prompt: "Under the Highway Traffic Act, a 'driver' is defined as:",
    choices: [
      "A person in care or control of a vehicle",
      "A person who operates a motor vehicle",
      "A person who drives a vehicle on a highway",
      "Any licensed operator",
    ],
    answerIndex: 2,
    explanation:
      "A driver is defined as a person who drives a vehicle on a highway.",
    subject: "Provincial",
    topic: "Definitions",
    lecture: "HTA 1",
  },
  {
    id: "hta-def-2",
    type: "truefalse",
    prompt:
      "The term 'highway' includes the area between the lateral property lines.",
    answer: true,
    explanation:
      "Highway is defined fence-line to fence-line, not just the travelled portion.",
    subject: "Provincial",
    topic: "Definitions",
    lecture: "HTA 1",
  },
  {
    id: "hta-def-3",
    type: "single",
    prompt: "What does the term 'roadway' refer to?",
    choices: [
      "The entire highway including shoulders",
      "The portion of the highway designed for vehicular travel",
      "The area between property lines",
      "Any paved surface",
    ],
    answerIndex: 1,
    explanation:
      "Roadway refers only to the travelled portion, excluding the shoulder.",
    subject: "Provincial",
    topic: "Definitions",
    lecture: "HTA 1",
  },
  {
    id: "hta-mv-1",
    type: "truefalse",
    prompt:
      "A motorized snow vehicle is considered a motor vehicle under the Highway Traffic Act.",
    answer: false,
    explanation:
      "Motorized snow vehicles are excluded from the definition of motor vehicle.",
    subject: "Provincial",
    topic: "Definitions",
    lecture: "HTA 1",
  },
  {
    id: "hta-mv-2",
    type: "single",
    prompt:
      "Which of the following is included in the definition of a motor vehicle?",
    choices: [
      "Street car",
      "Power-assisted bicycle",
      "Motor-assisted bicycle",
      "Farm tractor",
    ],
    answerIndex: 2,
    explanation:
      "Motor-assisted bicycles are included, while the others are excluded.",
    subject: "Provincial",
    topic: "Definitions",
    lecture: "HTA 1",
  },
  {
    id: "hta-vehicle-1",
    type: "truefalse",
    prompt: "A bicycle is considered a vehicle under the Highway Traffic Act.",
    answer: true,
    explanation: "The definition of vehicle includes bicycles.",
    subject: "Provincial",
    topic: "Definitions",
    lecture: "HTA 1",
  },
  {
    id: "hta-ob-1",
    type: "truefalse",
    prompt:
      "A person operating a bicycle is required to identify themselves under the Highway Traffic Act if they are contravening the Act or a municipal by-law.",
    answer: true,
    explanation:
      "HTA section 218(1) requires identification when a cyclist is in contravention.",
    subject: "Provincial",
    topic: "Open Book",
    lecture: "HTA 1",
  },

  // Source: Officer Safety 1 – The Ontario Public-Police Interactions Training Aid (2023) :contentReference[oaicite:0]{index=0}

  {
    id: "os1_purpose_1",
    type: "single",
    prompt:
      "The Ontario Public-Police Interactions Training Aid (2023) is intended for:",
    choices: [
      "Use-of-force incidents only",
      "All public-police interactions",
      "Firearms incidents only",
      "Traffic stops only",
    ],
    answerIndex: 1,
    explanation:
      "The training aid is for all interactions, not just use-of-force situations.",
    subject: "Officer Safety",
    topic: "Training Aid Overview",
    lecture: "Officer Safety 1: Ontario Public-Police Interactions (2023)",
  },
  {
    id: "os1_purpose_2",
    type: "single",
    prompt:
      "Which statement best describes the legal role of the Ontario Public-Police Interactions Training Aid?",
    choices: [
      "It is a legal justification for officer actions",
      "It replaces legislation and policy",
      "It is not a legal justification for officer actions",
      "It is only used in court testimony",
    ],
    answerIndex: 2,
    explanation:
      "The training aid is not a legal justification for an officer’s actions.",
    subject: "Officer Safety",
    topic: "Training Aid Overview",
    lecture: "Officer Safety 1: Ontario Public-Police Interactions (2023)",
  },
  {
    id: "os1_purpose_3",
    type: "multi",
    prompt:
      "Which of the following are stated purposes/uses of the Ontario Public-Police Interactions Training Aid? (Select ALL that apply)",
    choices: [
      "Assists the public and police to understand elements involved in interactions",
      "Assists in post-event articulation of interactions",
      "Tells officers exactly what to do in every scenario",
      "Is designed to be used as an articulation tool under OPC guidelines",
    ],
    answerIndices: [0, 1, 3],
    explanation:
      "It helps understanding and articulation, and is used as an articulation tool; it does not tell you what to do.",
    subject: "Officer Safety",
    topic: "Training Aid Overview",
    lecture: "Officer Safety 1: Ontario Public-Police Interactions (2023)",
  },
  {
    id: "os1_purpose_4",
    type: "truefalse",
    prompt:
      "True or False: The training aid tells officers exactly what steps to follow in every interaction.",
    answer: false,
    explanation:
      "The training aid supports decision-making and articulation but does not prescribe exact actions.",
    subject: "Officer Safety",
    topic: "Training Aid Overview",
    lecture: "Officer Safety 1: Ontario Public-Police Interactions (2023)",
  },

  // -------------------------------
  // Guiding Principles
  // -------------------------------
  {
    id: "os1_principles_1",
    type: "multi",
    prompt:
      "Which are listed as guiding principles in the training aid? (Select ALL that apply)",
    choices: [
      "Preservation and protection of life",
      "Public and officer safety",
      "Conflict prevention and de-escalation",
      "Relational approach",
      "Immediate enforcement at all costs",
    ],
    answerIndices: [0, 1, 2, 3],
    explanation:
      "Guiding principles include life preservation, safety, conflict prevention/de-escalation, and a relational approach.",
    subject: "Officer Safety",
    topic: "Guiding Principles",
    lecture: "Officer Safety 1: Ontario Public-Police Interactions (2023)",
  },
  {
    id: "os1_principles_2",
    type: "single",
    prompt:
      "Which of the following is NOT listed as part of the guiding principles set alongside law, regulations, training, and policy?",
    choices: [
      "Relational approach",
      "Preservation and protection of life",
      "Public and officer safety",
      "Guaranteed conviction outcomes",
    ],
    answerIndex: 3,
    explanation:
      "The training aid does not promise outcomes (like convictions); it sets principles to guide interactions.",
    subject: "Officer Safety",
    topic: "Guiding Principles",
    lecture: "Officer Safety 1: Ontario Public-Police Interactions (2023)",
  },

  // -------------------------------
  // De-escalation / Conflict Prevention
  // -------------------------------
  {
    id: "os1_deesc_1",
    type: "single",
    prompt: "De-escalation is best defined as:",
    choices: [
      "Using force quickly to end a situation",
      "Using verbal and non-verbal strategies to prevent escalation or reduce intensity",
      "Waiting for more officers before doing anything",
      "Only using tactical communication when someone is compliant",
    ],
    answerIndex: 1,
    explanation:
      "De-escalation uses verbal and non-verbal strategies to prevent escalation or reduce intensity.",
    subject: "Officer Safety",
    topic: "Conflict Prevention & De-escalation",
    lecture: "Officer Safety 1: Ontario Public-Police Interactions (2023)",
  },
  {
    id: "os1_deesc_2",
    type: "truefalse",
    prompt:
      "True or False: De-escalation includes reducing the amount of force if force becomes necessary and it is viable.",
    answer: true,
    explanation:
      "If force is necessary, de-escalation includes reducing the amount of force if viable.",
    subject: "Officer Safety",
    topic: "Conflict Prevention & De-escalation",
    lecture: "Officer Safety 1: Ontario Public-Police Interactions (2023)",
  },
  {
    id: "os1_confprev_1",
    type: "single",
    prompt: "Conflict prevention is described as:",
    choices: [
      "Avoiding all public contact",
      "The pre-emptive use of verbal/non-verbal strategies for situations/behaviours that may escalate",
      "Only calling for backup",
      "Using a higher level of force early",
    ],
    answerIndex: 1,
    explanation:
      "Conflict prevention is pre-emptive verbal/non-verbal strategies for situations and behaviours that could escalate.",
    subject: "Officer Safety",
    topic: "Conflict Prevention & De-escalation",
    lecture: "Officer Safety 1: Ontario Public-Police Interactions (2023)",
  },
  {
    id: "os1_confprev_2",
    type: "truefalse",
    prompt:
      "True or False: Conflict prevention and de-escalation are described as central to all interactions.",
    answer: true,
    explanation:
      "The training aid frames conflict prevention and de-escalation as central to all interactions.",
    subject: "Officer Safety",
    topic: "Conflict Prevention & De-escalation",
    lecture: "Officer Safety 1: Ontario Public-Police Interactions (2023)",
  },

  // -------------------------------
  // Duty of Care
  // -------------------------------
  {
    id: "os1_doc_1",
    type: "single",
    prompt: "Duty of care is emphasized especially when:",
    choices: [
      "A traffic ticket is issued",
      "An application of force results in injury and assistance is required",
      "A subject refuses to answer questions",
      "An officer is writing notes",
    ],
    answerIndex: 1,
    explanation:
      "Duty of care is highlighted especially when force results in injury and assistance is required.",
    subject: "Officer Safety",
    topic: "Duty of Care",
    lecture: "Officer Safety 1: Ontario Public-Police Interactions (2023)",
  },
  {
    id: "os1_doc_2",
    type: "multi",
    prompt:
      "Which actions are listed under duty of care considerations? (Select ALL that apply)",
    choices: [
      "Approach your subject/situation appropriately",
      "Secure a weapon",
      "Secure a subject",
      "Render appropriate assistance",
      "Delay all action until a supervisor arrives",
    ],
    answerIndices: [0, 1, 2, 3],
    explanation:
      "Duty of care includes appropriate approach, securing weapons/subjects, and rendering appropriate assistance.",
    subject: "Officer Safety",
    topic: "Duty of Care",
    lecture: "Officer Safety 1: Ontario Public-Police Interactions (2023)",
  },
  {
    id: "os1_doc_3",
    type: "truefalse",
    prompt:
      "True or False: Duty of care steps are always in a fixed order that must be followed exactly as listed.",
    answer: false,
    explanation:
      "The training notes state these are not in a specific order; priorities depend on assessment and needs.",
    subject: "Officer Safety",
    topic: "Duty of Care",
    lecture: "Officer Safety 1: Ontario Public-Police Interactions (2023)",
  },

  // -------------------------------
  // Assess - Plan - Act (APA)
  // -------------------------------
  {
    id: "os1_apa_1",
    type: "multi",
    prompt:
      "In the Assess-Plan-Act (APA) process, the officer should: (Select ALL that apply)",
    choices: [
      "Continuously assess and re-assess themselves and the situation",
      "Plan and select the most reasonable option(s) using available information",
      "Act based on level of risk, available time, and resources",
      "Ignore new information once a plan is chosen",
    ],
    answerIndices: [0, 1, 2],
    explanation:
      "APA includes continuous assessment, choosing reasonable options, and acting with risk/time/resources in mind.",
    subject: "Officer Safety",
    topic: "Assess-Plan-Act",
    lecture: "Officer Safety 1: Ontario Public-Police Interactions (2023)",
  },
  {
    id: "os1_apa_2",
    type: "single",
    prompt:
      "When selecting the most reasonable option(s) in APA, which factors are specifically highlighted?",
    choices: [
      "Public opinion and media coverage",
      "Level of risk, available time, and resources",
      "Officer seniority and years of service",
      "Whether the subject agrees with the plan",
    ],
    answerIndex: 1,
    explanation:
      "The APA model highlights level of risk, available time, and resources as key considerations.",
    subject: "Officer Safety",
    topic: "Assess-Plan-Act",
    lecture: "Officer Safety 1: Ontario Public-Police Interactions (2023)",
  },
  {
    id: "os1_apa_3",
    type: "single",
    prompt:
      "Which two concepts are identified as central to the Assess-Plan-Act process?",
    choices: [
      "Evidence collection and report writing",
      "Conflict prevention and de-escalation",
      "Arrest and detention",
      "Court testimony and disclosure",
    ],
    answerIndex: 1,
    explanation:
      "Conflict prevention and de-escalation are described as central to APA.",
    subject: "Officer Safety",
    topic: "Assess-Plan-Act",
    lecture: "Officer Safety 1: Ontario Public-Police Interactions (2023)",
  },

  // -------------------------------
  // SMEAC
  // -------------------------------
  {
    id: "os1_smeac_1",
    type: "dropdown",
    prompt: "SMEAC – What does the 'S' stand for?",
    options: ["Safety", "Situation", "Subject", "Strategy"],
    answerValue: "Situation",
    explanation: "SMEAC begins with Situation: what type of call is it?",
    subject: "Officer Safety",
    topic: "SMEAC",
    lecture: "Officer Safety 1: Ontario Public-Police Interactions (2023)",
  },
  {
    id: "os1_smeac_2",
    type: "dropdown",
    prompt: "SMEAC – What does the 'M' stand for?",
    options: ["Mission", "Movement", "Motivation", "Medical"],
    answerValue: "Mission",
    explanation: "Mission focuses on identified goals and outcomes.",
    subject: "Officer Safety",
    topic: "SMEAC",
    lecture: "Officer Safety 1: Ontario Public-Police Interactions (2023)",
  },
  {
    id: "os1_smeac_3",
    type: "dropdown",
    prompt: "SMEAC – What does the 'E' stand for?",
    options: ["Execution", "Equipment", "Emergency", "Engagement"],
    answerValue: "Execution",
    explanation: "Execution is how you will accomplish your goal.",
    subject: "Officer Safety",
    topic: "SMEAC",
    lecture: "Officer Safety 1: Ontario Public-Police Interactions (2023)",
  },
  {
    id: "os1_smeac_4",
    type: "dropdown",
    prompt: "SMEAC – What does the 'A' stand for?",
    options: ["Administration", "Assessment", "Authority", "Action"],
    answerValue: "Administration",
    explanation: "Administration covers resources and equipment needed.",
    subject: "Officer Safety",
    topic: "SMEAC",
    lecture: "Officer Safety 1: Ontario Public-Police Interactions (2023)",
  },
  {
    id: "os1_smeac_5",
    type: "single",
    prompt: "In SMEAC, 'Command, Control, Communication' focuses on:",
    choices: [
      "Who is in charge, chain of command, contact numbers, radio channel",
      "Only the use of radio codes",
      "Only the patrol zone boundaries",
      "The exact wording to use for all calls",
    ],
    answerIndex: 0,
    explanation:
      "This part clarifies leadership/chain of command and communication details.",
    subject: "Officer Safety",
    topic: "SMEAC",
    lecture: "Officer Safety 1: Ontario Public-Police Interactions (2023)",
  },

  // -------------------------------
  // ICEN
  // -------------------------------
  {
    id: "os1_icen_1",
    type: "dropdown",
    prompt: "ICEN – What does the 'I' stand for?",
    options: ["Intervene", "Isolate", "Identify", "Inform"],
    answerValue: "Isolate",
    explanation: "ICEN begins with Isolate: can you isolate a person or area?",
    subject: "Officer Safety",
    topic: "ICEN",
    lecture: "Officer Safety 1: Ontario Public-Police Interactions (2023)",
  },
  {
    id: "os1_icen_2",
    type: "dropdown",
    prompt: "ICEN – What does the 'C' stand for?",
    options: ["Contain", "Control", "Communicate", "Confirm"],
    answerValue: "Contain",
    explanation: "Contain: can you contain a person to an area?",
    subject: "Officer Safety",
    topic: "ICEN",
    lecture: "Officer Safety 1: Ontario Public-Police Interactions (2023)",
  },
  {
    id: "os1_icen_3",
    type: "dropdown",
    prompt: "ICEN – What does the 'E' stand for?",
    options: ["Evacuate/Shelter in place", "Engage", "Evidence", "Escort"],
    answerValue: "Evacuate/Shelter in place",
    explanation:
      "E is Evacuate/Shelter in place: can you protect potential victims?",
    subject: "Officer Safety",
    topic: "ICEN",
    lecture: "Officer Safety 1: Ontario Public-Police Interactions (2023)",
  },
  {
    id: "os1_icen_4",
    type: "dropdown",
    prompt: "ICEN – What does the 'N' stand for?",
    options: ["Negotiate", "Neutralize", "Notify", "Navigate"],
    answerValue: "Negotiate",
    explanation:
      "Negotiate: what can you do to understand/meet the subject’s needs (not always a trained negotiator).",
    subject: "Officer Safety",
    topic: "ICEN",
    lecture: "Officer Safety 1: Ontario Public-Police Interactions (2023)",
  },
  {
    id: "os1_icen_5",
    type: "truefalse",
    prompt:
      "True or False: Negotiation under ICEN always requires a trained negotiator.",
    answer: false,
    explanation:
      "The slide notes it does not always have to be a trained negotiator.",
    subject: "Officer Safety",
    topic: "ICEN",
    lecture: "Officer Safety 1: Ontario Public-Police Interactions (2023)",
  },

  // -------------------------------
  // I CLEAR
  // -------------------------------
  {
    id: "os1_iclear_1",
    type: "multi",
    prompt:
      "Which items are part of the I CLEAR framework? (Select ALL that apply)",
    choices: [
      "Isolate and identify subject and location",
      "Contain inner and outer perimeter",
      "Less lethal and/or long guns",
      "Evacuate or shelter in place",
      "Authorities (lawfully placed, arrest/apprehension, use of force)",
      "React plans (immediate action, breakout foot/vehicle, surrender)",
    ],
    answerIndices: [0, 1, 2, 3, 4, 5],
    explanation: "All listed items are included as components of I CLEAR.",
    subject: "Officer Safety",
    topic: "I CLEAR",
    lecture: "Officer Safety 1: Ontario Public-Police Interactions (2023)",
  },
  {
    id: "os1_iclear_2",
    type: "single",
    prompt: "In I CLEAR, the 'A' (Authorities) refers to:",
    choices: [
      "Writing warrants and subpoenas",
      "Lawfully placed authorities such as arrest/apprehension and use of force",
      "The chain of command for radio dispatch",
      "Authority to search any person at any time",
    ],
    answerIndex: 1,
    explanation:
      "Authorities include lawful placement, arrest/apprehension, and use of force authorities.",
    subject: "Officer Safety",
    topic: "I CLEAR",
    lecture: "Officer Safety 1: Ontario Public-Police Interactions (2023)",
  },
  {
    id: "os1_iclear_3",
    type: "single",
    prompt: "In I CLEAR, 'React plans' can include:",
    choices: [
      "Immediate action, breakout by foot/vehicle, surrender",
      "Only arrest processing steps",
      "Only report-writing steps",
      "Only medical response steps",
    ],
    answerIndex: 0,
    explanation:
      "React plans include immediate action options like breakout by foot/vehicle or surrender.",
    subject: "Officer Safety",
    topic: "I CLEAR",
    lecture: "Officer Safety 1: Ontario Public-Police Interactions (2023)",
  },

  // -------------------------------
  // Scenario: High-stakes Traffic Stop (Speeding 40km/h over)
  // -------------------------------
  {
    id: "os1_scenario_speed_1",
    type: "single",
    prompt:
      "Scenario: You stop a driver for 40 km/h over the limit and anticipate issuing a ticket, seizing the vehicle, and suspending the licence. What should a reasonable person anticipate about the driver's reaction?",
    choices: [
      "The driver will always remain calm and cooperative",
      "The driver may be upset, angry, or ready to engage in a heated roadside debate",
      "The driver must legally agree with the speed measurement",
      "The driver will immediately apologize and leave",
    ],
    answerIndex: 1,
    explanation:
      "The scenario highlights anticipating heightened emotions or heated debate.",
    subject: "Officer Safety",
    topic: "Scenario Awareness & Preparation",
    lecture: "Officer Safety 1: Ontario Public-Police Interactions (2023)",
  },
  {
    id: "os1_scenario_speed_2",
    type: "multi",
    prompt:
      "Scenario: During a heated roadside debate, which behaviours were specifically mentioned as possible from the driver? (Select ALL that apply)",
    choices: [
      "Insults intended to evoke an emotional response",
      "Debate over speed measurement methods",
      "Immediate physical assault is guaranteed",
      "Accusations of profiling",
    ],
    answerIndices: [0, 1, 3],
    explanation:
      "The slide mentions debate over speed measurement, profiling accusations, and insults to provoke emotion.",
    subject: "Officer Safety",
    topic: "Scenario Awareness & Preparation",
    lecture: "Officer Safety 1: Ontario Public-Police Interactions (2023)",
  },

  // -------------------------------
  // Apply the Intervention Strategies
  // -------------------------------
  {
    id: "os1_intervene_1",
    type: "single",
    prompt:
      "One intervention strategy emphasizes collecting and assessing information:",
    choices: [
      "Collect/Assess credible information impartially and identify gaps",
      "Assume the first report is always accurate",
      "Only rely on one source to avoid confusion",
      "Ignore gaps if time is limited",
    ],
    answerIndex: 0,
    explanation:
      "The training emphasizes impartial assessment and identifying gaps.",
    subject: "Officer Safety",
    topic: "Intervention Strategies",
    lecture: "Officer Safety 1: Ontario Public-Police Interactions (2023)",
  },
  {
    id: "os1_intervene_2",
    type: "single",
    prompt:
      "If gaps exist in information, the intervention strategy recommends:",
    choices: [
      "Proceed with assumptions",
      "Obtain additional information from credible sources and fill gaps",
      "Wait until after the incident to clarify",
      "Only use intuition",
    ],
    answerIndex: 1,
    explanation:
      "The strategy is to seek additional credible information to fill gaps.",
    subject: "Officer Safety",
    topic: "Intervention Strategies",
    lecture: "Officer Safety 1: Ontario Public-Police Interactions (2023)",
  },
  {
    id: "os1_intervene_3",
    type: "single",
    prompt: "Which intervention strategy relates to checking assumptions?",
    choices: [
      "Use observations to confirm or refute information/assumptions",
      "Never change your mind once you decide",
      "Treat all assumptions as facts",
      "Avoid observing to reduce bias",
    ],
    answerIndex: 0,
    explanation:
      "Observations should be used to confirm or refute information and assumptions.",
    subject: "Officer Safety",
    topic: "Intervention Strategies",
    lecture: "Officer Safety 1: Ontario Public-Police Interactions (2023)",
  },
  {
    id: "os1_intervene_4",
    type: "truefalse",
    prompt:
      "True or False: Consulting with others on perceptions, decisions, and plans is listed as an intervention strategy.",
    answer: true,
    explanation:
      "Consulting with others is explicitly listed as an intervention strategy.",
    subject: "Officer Safety",
    topic: "Intervention Strategies",
    lecture: "Officer Safety 1: Ontario Public-Police Interactions (2023)",
  },
  {
    id: "os1_intervene_5",
    type: "truefalse",
    prompt:
      "True or False: Officers should be willing to change their mind and make changes if necessary.",
    answer: true,
    explanation:
      "Being willing to change your mind and adjust is explicitly included.",
    subject: "Officer Safety",
    topic: "Intervention Strategies",
    lecture: "Officer Safety 1: Ontario Public-Police Interactions (2023)",
  },

  // -------------------------------
  // Impacts of Biased Policing Practices
  // -------------------------------
  {
    id: "os1_bias_1",
    type: "multi",
    prompt:
      "Which are listed impacts of biased policing practices? (Select ALL that apply)",
    choices: [
      "Reductions to perceptions of police legitimacy",
      "Reduction of public trust",
      "Violation of human rights",
      "Violation of Charter rights",
      "Trauma to the victim",
      "Trauma to the community",
      "Criminal and civil liabilities",
    ],
    answerIndices: [0, 1, 2, 3, 4, 5, 6],
    explanation:
      "All listed options are identified impacts of biased policing practices.",
    subject: "Officer Safety",
    topic: "Bias & Legitimacy",
    lecture: "Officer Safety 1: Ontario Public-Police Interactions (2023)",
  },
  {
    id: "os1_bias_2",
    type: "single",
    prompt:
      "Which option best captures a community-level impact listed for biased policing practices?",
    choices: [
      "Trauma to the community",
      "Higher ticket revenue",
      "Improved public trust",
      "Reduced need for de-escalation",
    ],
    answerIndex: 0,
    explanation:
      "The training explicitly notes trauma to the community as an impact.",
    subject: "Officer Safety",
    topic: "Bias & Legitimacy",
    lecture: "Officer Safety 1: Ontario Public-Police Interactions (2023)",
  },
  {
    id: "os1_bias_3",
    type: "single",
    prompt:
      "Which option is listed as a potential legal consequence of biased policing practices?",
    choices: [
      "Guaranteed conviction",
      "Criminal and civil liabilities",
      "Automatic promotion",
      "Mandatory dismissal in all cases",
    ],
    answerIndex: 1,
    explanation:
      "The slide includes criminal and civil liabilities as potential consequences.",
    subject: "Officer Safety",
    topic: "Bias & Legitimacy",
    lecture: "Officer Safety 1: Ontario Public-Police Interactions (2023)",
  },

  // -------------------------------
  // Situation & Subject Considerations + Resources
  // -------------------------------
  {
    id: "os1_ssc_1",
    type: "multi",
    prompt:
      "Which factors are listed under 'Situation' in Situation & Subject Consideration? (Select ALL that apply)",
    choices: [
      "Environment",
      "Number of subjects",
      "Perceived subject abilities",
      "Knowledge of the subject",
      "Time and distance",
      "Behavioural indicators",
      "Court availability",
    ],
    answerIndices: [0, 1, 2, 3, 4, 5],
    explanation:
      "Situation factors include environment, number of subjects, abilities, knowledge, time/distance, and behavioural indicators.",
    subject: "Officer Safety",
    topic: "Situation & Subject Considerations",
    lecture: "Officer Safety 1: Ontario Public-Police Interactions (2023)",
  },
  {
    id: "os1_ssc_2",
    type: "multi",
    prompt:
      "Which items are listed as 'Resources' in Situation & Subject Consideration? (Select ALL that apply)",
    choices: [
      "Additional officers",
      "MCIT",
      "TAC",
      "K9",
      "Less lethal",
      "Shield",
      "Court disclosure unit",
    ],
    answerIndices: [0, 1, 2, 3, 4, 5],
    explanation:
      "The slide lists additional officers, MCIT, TAC, K9, less lethal, and shield as resources.",
    subject: "Officer Safety",
    topic: "Situation & Subject Considerations",
    lecture: "Officer Safety 1: Ontario Public-Police Interactions (2023)",
  },
  {
    id: "os1_ssc_3",
    type: "single",
    prompt:
      "In Situation & Subject Consideration, which factor most directly relates to spacing and urgency?",
    choices: [
      "Time and distance",
      "Knowledge of the subject",
      "Environment",
      "Number of subjects",
    ],
    answerIndex: 0,
    explanation:
      "Time and distance directly relate to spacing, reaction time, and urgency.",
    subject: "Officer Safety",
    topic: "Situation & Subject Considerations",
    lecture: "Officer Safety 1: Ontario Public-Police Interactions (2023)",
  },

  // -------------------------------
  // Integration Questions (Mixing frameworks)
  // -------------------------------
  {
    id: "os1_integrate_1",
    type: "single",
    prompt:
      "Which framework is most focused on clarifying goals/outcomes and who is in charge for a call?",
    choices: ["ICEN", "SMEAC", "I CLEAR", "Duty of Care"],
    answerIndex: 1,
    explanation:
      "SMEAC includes Mission (goals/outcomes) and Command/Control/Communication (who is in charge).",
    subject: "Officer Safety",
    topic: "Framework Integration",
    lecture: "Officer Safety 1: Ontario Public-Police Interactions (2023)",
  },
  {
    id: "os1_integrate_2",
    type: "single",
    prompt:
      "Which framework contains 'Authorities' and 'React plans' as explicit components?",
    choices: ["ICEN", "SMEAC", "I CLEAR", "Assess-Plan-Act"],
    answerIndex: 2,
    explanation: "I CLEAR includes Authorities and React plans.",
    subject: "Officer Safety",
    topic: "Framework Integration",
    lecture: "Officer Safety 1: Ontario Public-Police Interactions (2023)",
  },
  {
    id: "os1_integrate_3",
    type: "single",
    prompt:
      "Which concept is stated as central to both APA and all interactions?",
    choices: [
      "Conflict prevention and de-escalation",
      "Evidence disclosure requirements",
      "Court scheduling",
      "Search warrant drafting",
    ],
    answerIndex: 0,
    explanation:
      "Conflict prevention and de-escalation are emphasized as central to APA and to all interactions.",
    subject: "Officer Safety",
    topic: "Framework Integration",
    lecture: "Officer Safety 1: Ontario Public-Police Interactions (2023)",
  },
  {
    id: "fed2_obj_1",
    type: "single",
    prompt: "The objective of Federal Law 2 (Open Book Concepts) is to:",
    choices: [
      "Memorize every Criminal Code offence word-for-word",
      "Develop strategies to quickly locate, understand, and apply laws/definitions in the Criminal Code or other statutes",
      "Focus only on courtroom testimony skills",
      "Learn provincial statutes only",
    ],
    answerIndex: 1,
    explanation:
      "The stated objective is to develop and use strategies/techniques to locate, understand, and apply pertinent laws and definitions in the Criminal Code (or other statutes).",
    subject: "Federal",
    topic: "Open Book Concepts",
    lecture: "Federal Law 2: Open Book Concepts",
  },
  {
    id: "fed2_setup_1",
    type: "multi",
    prompt:
      "What items are listed as what you need to start? (Select ALL that apply)",
    choices: [
      "Current Pocket Criminal Code (2026)",
      "Post-it tabs",
      "Highlighters",
      "2026 Token Access for Online Version",
      "Provincial Offences Act binder",
    ],
    answerIndices: [0, 1, 2, 3],
    explanation:
      "The slides list: Pocket Criminal Code (2026), post-it tabs, highlighters, and token access for the online version.",
    subject: "Federal",
    topic: "Open Book Concepts",
    lecture: "Federal Law 2: Open Book Concepts",
  },

  // -------------------------------
  // Navigating Federal Legislation (Search Areas)
  // -------------------------------
  {
    id: "fed2_nav_1",
    type: "multi",
    prompt:
      "Which are listed as ways to navigate federal legislation using the Criminal Code/statutes? (Select ALL that apply)",
    choices: [
      "Summary of Table of Contents",
      "Table of Contents",
      "Definitions in the Parts (including s.2 CC)",
      "Index (including definitions in index)",
      "Definitions in a Section",
      "Interpretation Act",
      "Your Experience",
    ],
    answerIndices: [0, 1, 2, 3, 4, 5, 6],
    explanation:
      "All of these were listed as navigation/search tools for federal legislation.",
    subject: "Federal",
    topic: "Navigation & Search Tools",
    lecture: "Federal Law 2: Open Book Concepts",
  },
  {
    id: "fed2_nav_2",
    type: "single",
    prompt:
      "According to the open-book approach, which search area is suggested as the place to START most searches?",
    choices: [
      "Interpretation Act",
      "Index",
      "Definitions in Part I",
      "Summary of Table of Contents",
    ],
    answerIndex: 1,
    explanation:
      "The slide suggests starting with the Index when searching for information.",
    subject: "Federal",
    topic: "Navigation & Search Tools",
    lecture: "Federal Law 2: Open Book Concepts",
  },
  {
    id: "fed2_nav_3",
    type: "single",
    prompt:
      "If you cannot find something in the Index, what is the suggested next step?",
    choices: [
      "Stop searching and guess",
      "Go to the front and use the Table of Contents in the relevant Part",
      "Go straight to the Interpretation Act every time",
      "Search only the online version",
    ],
    answerIndex: 1,
    explanation:
      "If you can't find it in the Index, go to the Table of Contents in the relevant Part and search there.",
    subject: "Federal",
    topic: "Navigation & Search Tools",
    lecture: "Federal Law 2: Open Book Concepts",
  },

  // -------------------------------
  // Acceptable Short Forms / Abbreviations
  // -------------------------------
  {
    id: "fed2_abbrev_1",
    type: "single",
    prompt: "Which abbreviation corresponds to the Criminal Code?",
    choices: ["C.C.", "I.A.", "C.E.A.", "Y.C.J.A."],
    answerIndex: 0,
    explanation: "Criminal Code is abbreviated as C.C.",
    subject: "Federal",
    topic: "Abbreviations",
    lecture: "Federal Law 2: Open Book Concepts",
  },
  {
    id: "fed2_abbrev_2",
    type: "multi",
    prompt:
      "Which of the following are listed acceptable short forms/abbreviations? (Select ALL that apply)",
    choices: [
      "C.C.",
      "I.A.",
      "F.A.",
      "C.D.A.",
      "C.E.A.",
      "C.A.",
      "Y.C.J.A.",
      "D.N.A.",
      "I.C.A.",
      "C.C.C.",
    ],
    answerIndices: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    explanation:
      "All listed options appear on the acceptable abbreviations slide.",
    subject: "Federal",
    topic: "Abbreviations",
    lecture: "Federal Law 2: Open Book Concepts",
  },
  {
    id: "fed2_abbrev_3",
    type: "single",
    prompt: "What does I.A. stand for?",
    choices: [
      "Information Act",
      "Interpretation Act",
      "Indictable Arrest",
      "Internal Affairs",
    ],
    answerIndex: 1,
    explanation: "I.A. stands for Interpretation Act.",
    subject: "Federal",
    topic: "Abbreviations",
    lecture: "Federal Law 2: Open Book Concepts",
  },
  {
    id: "fed2_abbrev_4",
    type: "single",
    prompt: "What does C.A. refer to in the abbreviation list?",
    choices: [
      "Canadian Arrest",
      "Constitution Act (Charter of Rights)",
      "Court Act",
      "Civil Authority",
    ],
    answerIndex: 1,
    explanation: "C.A. is listed as Constitution Act (Charter of Rights).",
    subject: "Federal",
    topic: "Abbreviations",
    lecture: "Federal Law 2: Open Book Concepts",
  },

  // -------------------------------
  // Summary Table of Contents vs Table of Contents
  // -------------------------------
  {
    id: "fed2_toc_1",
    type: "single",
    prompt:
      "The Summary Table of Contents in the pocket Criminal Code primarily tells you:",
    choices: [
      "Definitions for Criminal Code terms",
      "The different federal Acts in the book and their page locations",
      "Only the Criminal Code offences",
      "Only case law references",
    ],
    answerIndex: 1,
    explanation:
      "The summary lists the different federal Acts and where they are located (page location).",
    subject: "Federal",
    topic: "Using the TOC",
    lecture: "Federal Law 2: Open Book Concepts",
  },
  {
    id: "fed2_toc_2",
    type: "single",
    prompt: "Right after the summary, the actual Table of Contents is:",
    choices: [
      "A list of definitions only",
      "Divided by different Acts in the book",
      "Only about the Interpretation Act",
      "Only an index of offences",
    ],
    answerIndex: 1,
    explanation:
      "The Table of Contents is divided by the different Acts in the book.",
    subject: "Federal",
    topic: "Using the TOC",
    lecture: "Federal Law 2: Open Book Concepts",
  },
  {
    id: "fed2_parts_1",
    type: "single",
    prompt:
      "How many Parts does the Criminal Code have (as stated in the slides)?",
    choices: ["10", "18", "28", "35"],
    answerIndex: 2,
    explanation: "The slide states the Criminal Code has 28 parts.",
    subject: "Federal",
    topic: "Criminal Code Structure",
    lecture: "Federal Law 2: Open Book Concepts",
  },
  {
    id: "fed2_parts_2",
    type: "single",
    prompt: "Which Part is described as 'General' in the Criminal Code?",
    choices: ["Part I", "Part III", "Part XI", "Part XXVIII"],
    answerIndex: 0,
    explanation: "The slides state Part I is considered General.",
    subject: "Federal",
    topic: "Criminal Code Structure",
    lecture: "Federal Law 2: Open Book Concepts",
  },
  {
    id: "fed2_parts_3",
    type: "truefalse",
    prompt:
      "True or False: Offences in the Criminal Code are categorized into their respective Parts.",
    answer: true,
    explanation:
      "The slides note that offences are categorized in their respective part.",
    subject: "Federal",
    topic: "Criminal Code Structure",
    lecture: "Federal Law 2: Open Book Concepts",
  },

  // -------------------------------
  // Tabbing / Highlighting Strategy
  // -------------------------------
  {
    id: "fed2_tabs_1",
    type: "single",
    prompt: "The suggested highlighting/tabbing strategy includes:",
    choices: [
      "Highlight each Part in one colour, each Act in another, and tab the Parts for quick reference",
      "Never mark your Criminal Code",
      "Only tab the Index",
      "Only highlight offences, never definitions",
    ],
    answerIndex: 0,
    explanation:
      "The slides suggest color coding parts/acts and tabbing for quick reference.",
    subject: "Federal",
    topic: "Study & Navigation Techniques",
    lecture: "Federal Law 2: Open Book Concepts",
  },
  {
    id: "fed2_tabs_2",
    type: "single",
    prompt:
      "According to the tabbing slide, what is an additional built-in cue that helps locate different Acts?",
    choices: [
      "A black line at the top indicating different Acts are tabbed by that means",
      "Page numbers are colour coded automatically",
      "Every Act starts on page 1",
      "A QR code on each page",
    ],
    answerIndex: 0,
    explanation:
      "The slide mentions a black line on the top showing Acts are tabbed by that means.",
    subject: "Federal",
    topic: "Study & Navigation Techniques",
    lecture: "Federal Law 2: Open Book Concepts",
  },

  // -------------------------------
  // Definitions: s.2, Part Definitions, Section Definitions
  // -------------------------------
  {
    id: "fed2_defs_1",
    type: "multi",
    prompt:
      "Which statements about definitions are taught? (Select ALL that apply)",
    choices: [
      "Definitions may appear at the beginning of each Act and each Part",
      "Section 2 of the Criminal Code provides definitions pertinent to the Criminal Code",
      "Definitions are never found inside offence sections",
      "The section number is on the top left of the page and the Part is on the top of the right page",
    ],
    answerIndices: [0, 1, 3],
    explanation:
      "Definitions can appear at the start of Acts/Parts; s.2 CC is a key definitions list; and the slide notes where section/part info appears on the pages.",
    subject: "Federal",
    topic: "Definitions",
    lecture: "Federal Law 2: Open Book Concepts",
  },
  {
    id: "fed2_defs_2",
    type: "truefalse",
    prompt:
      "True or False: If you're investigating nudity, the offence section can include further clarification/definition in a subsection.",
    answer: true,
    explanation:
      "The slides give the nudity example where the section provides insight in a later subsection.",
    subject: "Federal",
    topic: "Definitions",
    lecture: "Federal Law 2: Open Book Concepts",
  },
  {
    id: "fed2_defs_3",
    type: "single",
    prompt:
      "In the nudity example, which section is referenced as describing the facts in issue for nudity?",
    choices: ["s.174(1)", "s.162(1)", "s.266", "s.495(2)"],
    answerIndex: 0,
    explanation:
      "The slide references s.174(1) as describing the facts in issue for nudity.",
    subject: "Federal",
    topic: "Definitions",
    lecture: "Federal Law 2: Open Book Concepts",
  },

  // -------------------------------
  // Index Use + "Definitions in Index"
  // -------------------------------
  {
    id: "fed2_index_1",
    type: "single",
    prompt: "The Index is best described as:",
    choices: [
      "A list of court cases",
      "An alphabetized list of terms to help find things faster",
      "A list of only definitions",
      "A list of only offences in Part I",
    ],
    answerIndex: 1,
    explanation:
      "The Index is an alphabetized list of terms to locate content faster.",
    subject: "Federal",
    topic: "Index Skills",
    lecture: "Federal Law 2: Open Book Concepts",
  },
  {
    id: "fed2_index_2",
    type: "single",
    prompt:
      "In the Index example (arrest), what was the investigative question used to demonstrate searching?",
    choices: [
      "Can you arrest for any offence without grounds?",
      "Can you enter a dwelling house to arrest without a warrant (in any situations)?",
      "Can you search any vehicle incident to arrest?",
      "Can you detain someone to ask questions?",
    ],
    answerIndex: 1,
    explanation:
      "The example asks about entering a dwelling house to arrest without a warrant and finding the path in the Index.",
    subject: "Federal",
    topic: "Index Skills",
    lecture: "Federal Law 2: Open Book Concepts",
  },
  {
    id: "fed2_index_defs_1",
    type: "single",
    prompt: "The 'Definitions' area in the Index is described as:",
    choices: [
      "A quick search area for more definitions for the entire Code",
      "Only definitions for Part I",
      "Only definitions for the Charter",
      "Not useful and should never be used",
    ],
    answerIndex: 0,
    explanation:
      "The slide describes Index→Definitions as a quick area for more definitions for the entire Code.",
    subject: "Federal",
    topic: "Index Skills",
    lecture: "Federal Law 2: Open Book Concepts",
  },
  {
    id: "fed2_index_defs_2",
    type: "single",
    prompt:
      "In the 'prohibited device' example, the Index indicates the definition can be found in:",
    choices: [
      "Only one location in the Code",
      "Two separate areas of connection (e.g., CC 84(1) or a Regulation reference)",
      "Only the Interpretation Act",
      "Only the Youth Criminal Justice Act",
    ],
    answerIndex: 1,
    explanation:
      "The slide shows prohibited device may connect to CC 84(1) and also a regulation reference, meaning it can be found in different places depending on what you need.",
    subject: "Federal",
    topic: "Index Skills",
    lecture: "Federal Law 2: Open Book Concepts",
  },

  // -------------------------------
  // Interpretation Act (Use + Concepts)
  // -------------------------------
  {
    id: "fed2_ia_1",
    type: "single",
    prompt: "The Interpretation Act is described as:",
    choices: [
      "The most-used search area for all offences",
      "A rarely used search engine but useful for time computations and similar interpretation questions",
      "Only relevant for provincial statutes",
      "Only used to define 'reasonable grounds'",
    ],
    answerIndex: 1,
    explanation:
      "The slide notes it's rarely used but helpful for computation of time, construction of year, time of day, etc.",
    subject: "Federal",
    topic: "Interpretation Act",
    lecture: "Federal Law 2: Open Book Concepts",
  },
  {
    id: "fed2_ia_2",
    type: "multi",
    prompt:
      "Which example topics are suggested to look up in the Interpretation Act? (Select ALL that apply)",
    choices: [
      "Time of day",
      "Indictable offence",
      "Construction of year",
      "Shall or May",
      "How to lay an information",
    ],
    answerIndices: [0, 1, 2, 3],
    explanation:
      "The slide suggests searching the Interpretation Act for time of day, indictable offence, construction of year, and 'shall or may'.",
    subject: "Federal",
    topic: "Interpretation Act",
    lecture: "Federal Law 2: Open Book Concepts",
  },

  // -------------------------------
  // Codification / Construction (Citing Authorities)
  // -------------------------------
  {
    id: "fed2_cite_1",
    type: "single",
    prompt:
      "According to the slides, there are a maximum of how many positions for authorities when citing legislation?",
    choices: ["3", "5", "7", "10"],
    answerIndex: 1,
    explanation:
      "The slides state there are a maximum of five positions for authorities.",
    subject: "Federal",
    topic: "Codification & Construction",
    lecture: "Federal Law 2: Open Book Concepts",
  },
  {
    id: "fed2_cite_2",
    type: "multi",
    prompt:
      "Which are the maximum positions for authorities listed in the slides? (Select ALL that apply)",
    choices: [
      "Section (numeric)",
      "Subsection (numeric)",
      "Paragraph (alpha)",
      "Sub-paragraph (roman numeral)",
      "Clause or item (alpha)",
      "Sub-clause (numeric)",
    ],
    answerIndices: [0, 1, 2, 3, 4],
    explanation:
      "The five positions listed are section, subsection, paragraph, sub-paragraph, and clause/item.",
    subject: "Federal",
    topic: "Codification & Construction",
    lecture: "Federal Law 2: Open Book Concepts",
  },
  {
    id: "fed2_cite_3",
    type: "single",
    prompt:
      "When quoting a particular area of legislation, it is referred to by:",
    choices: [
      "The first part of the citation",
      "The last part of the citation",
      "The middle number only",
      "The year of the statute",
    ],
    answerIndex: 1,
    explanation:
      "The slide states it is referred to by the name of the last part.",
    subject: "Federal",
    topic: "Codification & Construction",
    lecture: "Federal Law 2: Open Book Concepts",
  },
  {
    id: "fed2_decimal_1",
    type: "single",
    prompt: "A decimal system (e.g., 495.1) is used in the Criminal Code when:",
    choices: [
      "A section is removed",
      "New legislation is added to an existing section",
      "A statute becomes provincial",
      "A judge issues a decision",
    ],
    answerIndex: 1,
    explanation:
      "The slides state decimals are used when new legislation is added to a section.",
    subject: "Federal",
    topic: "Codification & Construction",
    lecture: "Federal Law 2: Open Book Concepts",
  },

  // -------------------------------
  // Precise English (Shall / May / Forthwith / And-Or)
  // -------------------------------
  {
    id: "fed2_words_1",
    type: "single",
    prompt: "In legislation, SHALL generally means:",
    choices: [
      "Discretion",
      "Imperative duty (must/must not)",
      "Suggestion",
      "Optional guideline",
    ],
    answerIndex: 1,
    explanation:
      "The slides describe SHALL as imperative: a duty to perform (must/must not).",
    subject: "Federal",
    topic: "Reading Statutory Language",
    lecture: "Federal Law 2: Open Book Concepts",
  },
  {
    id: "fed2_words_2",
    type: "single",
    prompt: "In legislation, MAY generally means:",
    choices: [
      "A mandatory requirement",
      "Permits discretion",
      "A criminal offence",
      "A police order",
    ],
    answerIndex: 1,
    explanation: "The slides state MAY permits discretion.",
    subject: "Federal",
    topic: "Reading Statutory Language",
    lecture: "Federal Law 2: Open Book Concepts",
  },
  {
    id: "fed2_words_3",
    type: "single",
    prompt: "FORTHWITH generally means:",
    choices: [
      "Within 7 days",
      "Immediately (generally), though interpretation can be up to a judge",
      "Only during business hours",
      "Before the end of shift",
    ],
    answerIndex: 1,
    explanation:
      "The slides state FORTHWITH generally means immediately, although ultimately interpreted by a judge.",
    subject: "Federal",
    topic: "Reading Statutory Language",
    lecture: "Federal Law 2: Open Book Concepts",
  },
  {
    id: "fed2_words_4",
    type: "single",
    prompt: "When reading 'AND/OR' in legislation, you should:",
    choices: [
      "Treat it loosely",
      "Ignore it unless you’re charging",
      "Take it literally (And = in addition to; Or = one or the other)",
      "Assume it always means 'and'",
    ],
    answerIndex: 2,
    explanation:
      "The slide says AND/OR must be taken literally: And = in addition to; Or = one or the other.",
    subject: "Federal",
    topic: "Reading Statutory Language",
    lecture: "Federal Law 2: Open Book Concepts",
  },

  // -------------------------------
  // Search Method (3-step approach)
  // -------------------------------
  {
    id: "fed2_search_1",
    type: "single",
    prompt: "Step 1 in searching for information is to:",
    choices: [
      "Start searching random sections",
      "Obtain ideas of search terms by recognizing what the question is asking",
      "Go directly to the Interpretation Act",
      "Only use the online token search",
    ],
    answerIndex: 1,
    explanation:
      "First: figure out what the question is asking and identify search terms.",
    subject: "Federal",
    topic: "Search Strategy",
    lecture: "Federal Law 2: Open Book Concepts",
  },
  {
    id: "fed2_search_2",
    type: "single",
    prompt: "Step 2 in searching for information is to:",
    choices: [
      "Decide the charge before reading",
      "Use the different search areas (Index, Definitions, Summary TOC, TOC, etc.)",
      "Call a supervisor",
      "Stop after one attempt",
    ],
    answerIndex: 1,
    explanation:
      "Second: use the various search areas in the Criminal Code/statutes.",
    subject: "Federal",
    topic: "Search Strategy",
    lecture: "Federal Law 2: Open Book Concepts",
  },
  {
    id: "fed2_search_3",
    type: "single",
    prompt: "Step 3 in searching for information is to:",
    choices: [
      "Start searching (preferably starting with the Index)",
      "Memorize the section number",
      "Use only case law",
      "Use only the Summary TOC",
    ],
    answerIndex: 0,
    explanation:
      "Third: start searching; the slide suggests beginning with the Index.",
    subject: "Federal",
    topic: "Search Strategy",
    lecture: "Federal Law 2: Open Book Concepts",
  },

  // -------------------------------
  // Applied Example: Breach of Probation Order (s.733.1)
  // -------------------------------
  {
    id: "fed2_prob_1",
    type: "single",
    prompt:
      "In the probation example, if a person is convicted of a new offence and the probation order says 'must not be involved in any criminal activity,' what issue arises?",
    choices: [
      "No legal issue because probation is only a guideline",
      "A clear violation (breach) of the terms of the probation order",
      "Only a provincial by-law concern",
      "Only a civil matter",
    ],
    answerIndex: 1,
    explanation:
      "The slide explains conviction would clearly violate the probation order condition.",
    subject: "Federal",
    topic: "Applied Search Example",
    lecture: "Federal Law 2: Open Book Concepts",
  },
  {
    id: "fed2_prob_2",
    type: "single",
    prompt:
      "According to the slides, the offence of violating/breaching a Probation Order (s.733.1) is classified as:",
    choices: [
      "Summary conviction",
      "Dual procedure (hybrid)",
      "Indictable",
      "Not an offence",
    ],
    answerIndex: 1,
    explanation: "The slide states s.733.1 is a Dual Procedure offence.",
    subject: "Federal",
    topic: "Applied Search Example",
    lecture: "Federal Law 2: Open Book Concepts",
  },
  {
    id: "fed2_prob_3",
    type: "multi",
    prompt:
      "In the probation example, which search terms were suggested? (Select ALL that apply)",
    choices: ["Probation", "Breach", "Violation", "Habeas corpus"],
    answerIndices: [0, 1, 2],
    explanation:
      "The slide suggests using terms like probation, breach, violation.",
    subject: "Federal",
    topic: "Applied Search Example",
    lecture: "Federal Law 2: Open Book Concepts",
  },

  // -------------------------------
  // Find the Answers (Practice Prompts from Slides)
  // -------------------------------
  {
    id: "fed2_practice_1",
    type: "single",
    prompt:
      "According to the slides, where is the answer found for 'When is sexual intercourse complete?'",
    choices: ["s.2", "s.4(5)", "s.153(2)", "s.733.1"],
    answerIndex: 1,
    explanation: "The slide directs that s.4(5) provides the answer.",
    subject: "Federal",
    topic: "Open Book Practice",
    lecture: "Federal Law 2: Open Book Concepts",
  },
  {
    id: "fed2_practice_2",
    type: "single",
    prompt:
      "According to the slides, where is the answer found for the age of a 'young person' relating to s.153(1)?",
    choices: ["s.153(2)", "s.6(1) Charter", "s.84(1)", "s.495.1"],
    answerIndex: 0,
    explanation: "The slide states s.153(2) provides the answer.",
    subject: "Federal",
    topic: "Open Book Practice",
    lecture: "Federal Law 2: Open Book Concepts",
  },
  {
    id: "fed2_practice_3",
    type: "single",
    prompt:
      "A question asks: 'Where does a Canadian citizen get the right to enter and leave Canada?' Where do you look first (per the slide guidance)?",
    choices: [
      "Criminal Code Part I",
      "Charter of Rights and Freedoms (Constitution Act)",
      "Firearms Act",
      "Canada Evidence Act",
    ],
    answerIndex: 1,
    explanation:
      "The slide says citizen rights typically point you to the Charter (Constitution Act).",
    subject: "Federal",
    topic: "Charter Open Book",
    lecture: "Federal Law 2: Open Book Concepts",
  },
  {
    id: "fed2_practice_4",
    type: "single",
    prompt:
      "According to the slides, mobility rights (enter/leave Canada) fall under which Charter section?",
    choices: ["s.2", "s.6(1)", "s.7", "s.10(b)"],
    answerIndex: 1,
    explanation:
      "The slide identifies mobility rights as section 6(1) of the Constitution Act (Charter).",
    subject: "Federal",
    topic: "Charter Open Book",
    lecture: "Federal Law 2: Open Book Concepts",
  },

  // -------------------------------
  // Test Your Knowledge (Slide Prompts)
  // -------------------------------
  {
    id: "fed2_test_1",
    type: "single",
    prompt:
      "Test your knowledge: A police officer acting in lawful execution of duties is justified in using as much force as is necessary if they act on:",
    choices: [
      "Reasonable suspicion",
      "Reasonable grounds",
      "A hunch",
      "Public opinion",
    ],
    answerIndex: 1,
    explanation:
      "The slide’s correct concept is 'reasonable grounds' (not suspicion).",
    subject: "Federal",
    topic: "Justification / Force (Concept)",
    lecture: "Federal Law 2: Open Book Concepts",
  },
  {
    id: "fed2_test_2",
    type: "single",
    prompt:
      "Test your knowledge: Is a replica firearm a prohibited device or prohibited weapon? (Open book concept prompt)",
    choices: ["Prohibited device", "Prohibited weapon", "Neither", "Both"],
    answerIndex: 0,
    explanation:
      "This is an open-book lookup concept question (students are expected to locate the correct classification in definitions). The slide prompts the lookup.",
    subject: "Federal",
    topic: "Weapons / Firearms Definitions",
    lecture: "Federal Law 2: Open Book Concepts",
  },

  // -------------------------------
  // Reading Law / Careful Reading Advice
  // -------------------------------
  {
    id: "fed2_reading_1",
    type: "single",
    prompt: "Helpful hints on reading law: 'DON’T BE LAZY' primarily means:",
    choices: [
      "Read only headings to save time",
      "Read every word because one word can change the context",
      "Only read the short form wording",
      "Skim until you find a keyword",
    ],
    answerIndex: 1,
    explanation:
      "The slide emphasizes reading every word because each word matters.",
    subject: "Federal",
    topic: "Reading & Interpretation Skills",
    lecture: "Federal Law 2: Open Book Concepts",
  },
  {
    id: "fed2_reading_2",
    type: "single",
    prompt: "Helpful hints on reading law: 'BE PATIENT' suggests you should:",
    choices: [
      "Read it once and move on",
      "Read it over as many times as necessary to understand",
      "Only rely on your partner’s interpretation",
      "Avoid re-reading because it causes confusion",
    ],
    answerIndex: 1,
    explanation:
      "The slide says read it over as many times as needed to understand it.",
    subject: "Federal",
    topic: "Reading & Interpretation Skills",
    lecture: "Federal Law 2: Open Book Concepts",
  },
  {
    id: "fed2_reading_3",
    type: "single",
    prompt: "Helpful hints on reading law: 'PRACTICE' means:",
    choices: [
      "The more time you spend reading the law, the easier it gets",
      "Avoid reading the law because it never gets easier",
      "Only memorize section numbers",
      "Only practice in court settings",
    ],
    answerIndex: 0,
    explanation: "The slide says practice makes it easier over time.",
    subject: "Federal",
    topic: "Reading & Interpretation Skills",
    lecture: "Federal Law 2: Open Book Concepts",
  },
  {
    id: "fed2_reading_4",
    type: "single",
    prompt: "Helpful hints on reading law: 'REMEMBER' emphasizes that:",
    choices: [
      "Your interpretation is always correct",
      "You must consider the intent/spirit of the law; interpretation varies and appeals exist",
      "Only judges interpret law; police should not interpret at all",
      "Intent never matters—only literal words matter",
    ],
    answerIndex: 1,
    explanation:
      "The slide notes interpretations vary and you must consider intent/spirit of the law, with appeals existing for differences.",
    subject: "Federal",
    topic: "Reading & Interpretation Skills",
    lecture: "Federal Law 2: Open Book Concepts",
  },

  // -------------------------------
  // Homework / Course Tasks
  // -------------------------------
  {
    id: "fed2_hw_1",
    type: "multi",
    prompt: "The homework assignment includes: (Select ALL that apply)",
    choices: [
      "Begin Federal Law 2 workbook questions",
      "Begin Federal Law Open Book Workbook Questions",
      "Read the 28 Parts of the Criminal Code in the front Table of Contents",
      "Memorize every definition in s.2",
    ],
    answerIndices: [1, 2],
    explanation:
      "The homework slide directs students to begin the open book workbook questions and read the 28 Parts in the Criminal Code TOC.",
    subject: "Federal",
    topic: "Homework / Tasks",
    lecture: "Federal Law 2: Open Book Concepts",
  },
  
];
