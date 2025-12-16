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
  // -------------------------------
  // Traffic Quiz #1 – Definitions
  // -------------------------------
  {
    id: "hta2_q1_driver_def",
    type: "single",
    prompt: "The Highway Traffic Act defines a ‘driver’ as:",
    choices: [
      "Anyone who drives a motor vehicle or streetcar on a highway",
      "Anyone who operates a motor vehicle",
      "A person who drives a vehicle on a highway",
      "A person who operates a motor vehicle on a roadway",
    ],
    answerIndex: 2,
    explanation:
      "The HTA definition of driver is: a person who drives a vehicle on a highway.",
    subject: "Highway Traffic Act",
    topic: "Definitions",
    lecture: "Traffic 2: HTA #2 (Jan 2024)",
  },
  {
    id: "hta2_q2_highway_not",
    type: "single",
    prompt:
      "Which of the following does NOT meet the definition of a highway pursuant to the Highway Traffic Act?",
    choices: [
      "Street, avenue, parkway…",
      "Shopping plaza exit driveway…",
      "Common and public highway…",
      "Bridge, viaduct or trestle…",
    ],
    answerIndex: 1,
    explanation:
      "The quiz contrasts locations; the shopping plaza exit driveway is treated as the option that does not meet the HTA highway definition in this question set.",
    subject: "Highway Traffic Act",
    topic: "Definitions",
    lecture: "Traffic 2: HTA #2 (Jan 2024)",
  },
  {
    id: "hta2_q3_motor_vehicle",
    type: "single",
    prompt:
      "Which of the following is a motor vehicle as defined in the Highway Traffic Act?",
    choices: [
      "Motor assisted bicycle",
      "Road building machine",
      "Farm tractor",
      "Snow machine",
    ],
    answerIndex: 0,
    explanation:
      "The quiz identifies a motor assisted bicycle as the correct option for 'motor vehicle' in this set.",
    subject: "Highway Traffic Act",
    topic: "Definitions",
    lecture: "Traffic 2: HTA #2 (Jan 2024)",
  },
  {
    id: "hta2_q4_roadway_def",
    type: "single",
    prompt:
      "Choose the statement that best defines a ‘roadway’ pursuant to the Highway Traffic Act.",
    choices: [
      "Part of the highway that is improved, designed or ordinarily used for vehicular traffic",
      "Part of the highway that is improved, designed or ordinarily used for vehicular traffic including the shoulder",
      "Part of the highway designed or ordinarily used for vehicular traffic intended for traffic flow in one direction only",
      "Part of the highway that is improved, designed or ordinarily used for vehicular traffic, but does not include the shoulder",
    ],
    answerIndex: 3,
    explanation:
      "Roadway is the part designed/ordinarily used for vehicular traffic and does not include the shoulder.",
    subject: "Highway Traffic Act",
    topic: "Definitions",
    lecture: "Traffic 2: HTA #2 (Jan 2024)",
  },
  {
    id: "hta2_q5_bicycle_is",
    type: "single",
    prompt: "A bicycle is …",
    choices: [
      "Not a motor vehicle",
      "A motor vehicle",
      "A self propelled implement of husbandry",
      "A self propelled vehicle having a seat or saddle for the use of the operator",
    ],
    answerIndex: 0,
    explanation:
      "A bicycle is not a motor vehicle (it is a 'vehicle' under HTA, but not a motor vehicle).",
    subject: "Highway Traffic Act",
    topic: "Definitions",
    lecture: "Traffic 2: HTA #2 (Jan 2024)",
  },

  // -------------------------------
  // Review – Locating Offences
  // -------------------------------
  {
    id: "hta2_locate_1",
    type: "multi",
    prompt:
      "Which tools are listed for locating offences in the Highway Traffic Act? (Select ALL that apply)",
    choices: [
      "Table of Contents",
      "Index",
      "Margin references",
      "Short Form Wording book",
      "Case law digest",
    ],
    answerIndices: [0, 1, 2, 3],
    explanation:
      "The slides list: Table of Contents, Index, Margin references, and the Short Form Wording book.",
    subject: "Highway Traffic Act",
    topic: "Locating Offences",
    lecture: "Traffic 2: HTA #2 (Jan 2024)",
  },
  {
    id: "hta2_locate_2",
    type: "truefalse",
    prompt:
      "True or False: When using the Short Form Wording Book, you should still look up the actual section in the Act.",
    answer: true,
    explanation:
      "The slide includes a caution to look up the section (don’t rely only on short form).",
    subject: "Highway Traffic Act",
    topic: "Locating Offences",
    lecture: "Traffic 2: HTA #2 (Jan 2024)",
  },

  // -------------------------------
  // HTA as “Two Books” (Act vs Regulations)
  // -------------------------------
  {
    id: "hta2_two_books_1",
    type: "single",
    prompt:
      "The Highway Traffic Act is described as “two books” because it includes:",
    choices: [
      "The Act (primary law) and Regulations (secondary law/technical details)",
      "The Criminal Code and the Charter",
      "Municipal by-laws and federal statutes",
      "Court rules and police policy manuals",
    ],
    answerIndex: 0,
    explanation:
      "The Act is primary law; regulations are secondary law and often contain technical details.",
    subject: "Highway Traffic Act",
    topic: "Act vs Regulations",
    lecture: "Traffic 2: HTA #2 (Jan 2024)",
  },
  {
    id: "hta2_two_books_2",
    type: "single",
    prompt: "Regulations under the HTA are best described as:",
    choices: [
      "Primary law",
      "Secondary law that often contains technical details",
      "Common law decisions",
      "Municipal by-laws",
    ],
    answerIndex: 1,
    explanation:
      "The slides call regulations secondary law and note they often contain technical/implementation details.",
    subject: "Highway Traffic Act",
    topic: "Act vs Regulations",
    lecture: "Traffic 2: HTA #2 (Jan 2024)",
  },

  // -------------------------------
  // Assignment (HTA Authorities)
  // -------------------------------
  {
    id: "hta2_assign_1_age",
    type: "single",
    prompt: "What is the minimum age to operate a motor vehicle in Ontario?",
    choices: ["14 years", "15 years", "16 years", "18 years"],
    answerIndex: 2,
    explanation: "Minimum age is 16 years. Authority: HTA 37(1).",
    subject: "Highway Traffic Act",
    topic: "Driver Licensing / Requirements",
    lecture: "Traffic 2: HTA #2 (Jan 2024)",
  },
  {
    id: "hta2_assign_2_headlights",
    type: "single",
    prompt:
      "What is the minimum number of headlights required on the front of a motor vehicle?",
    choices: ["1", "2", "3", "4"],
    answerIndex: 1,
    explanation: "Minimum is 2 headlights. Authority: HTA 62(1).",
    subject: "Highway Traffic Act",
    topic: "Equipment Requirements",
    lecture: "Traffic 2: HTA #2 (Jan 2024)",
  },
  {
    id: "hta2_assign_3_high_beams",
    type: "single",
    prompt:
      "When are you required to lower your high beam headlights when approaching a motor vehicle?",
    choices: [
      "Within 50 metres",
      "Within 100 metres",
      "Within 150 metres",
      "Within 200 metres",
    ],
    answerIndex: 2,
    explanation: "Within 150 metres. Authority: HTA 168(a).",
    subject: "Highway Traffic Act",
    topic: "Rules of the Road (Lighting)",
    lecture: "Traffic 2: HTA #2 (Jan 2024)",
  },
  {
    id: "hta2_assign_4_plate_light",
    type: "single",
    prompt:
      "What is the strength of the bulb that illuminates the rear licence plate?",
    choices: ["1 candela", "2 candela", "3 candela", "5 candela"],
    answerIndex: 2,
    explanation: "3 candela. Authority: HTA 62(19).",
    subject: "Highway Traffic Act",
    topic: "Equipment Requirements",
    lecture: "Traffic 2: HTA #2 (Jan 2024)",
  },

  // -------------------------------
  // Objectives (Interpreting / Facts in Issue / Open Book)
  // -------------------------------
  {
    id: "hta2_obj_1",
    type: "multi",
    prompt:
      "Which are listed as objectives of this session? (Select ALL that apply)",
    choices: [
      "Interpreting HTA sections",
      "Facts in issue",
      "Open book skills",
      "Courtroom advocacy",
    ],
    answerIndices: [0, 1, 2],
    explanation:
      "Objectives include interpreting HTA sections, facts in issue, and open book skills.",
    subject: "Highway Traffic Act",
    topic: "Session Objectives",
    lecture: "Traffic 2: HTA #2 (Jan 2024)",
  },

  // -------------------------------
  // Updates / e-Laws / Shaded (Not Yet Proclaimed)
  // -------------------------------
  {
    id: "hta2_updates_1",
    type: "truefalse",
    prompt:
      "True or False: The Highway Traffic Act is updated often, so you should keep your copy up to date.",
    answer: true,
    explanation:
      "The slides emphasize the HTA is updated often and officers should keep their materials current.",
    subject: "Highway Traffic Act",
    topic: "Keeping Current (Updates)",
    lecture: "Traffic 2: HTA #2 (Jan 2024)",
  },
  {
    id: "hta2_updates_2",
    type: "single",
    prompt:
      "According to the slides, the most up to date information for the HTA is available through:",
    choices: [
      "Wikipedia",
      "e-Laws",
      "The Short Form Wording Book only",
      "Old printed copies",
    ],
    answerIndex: 1,
    explanation:
      "The slides state e-Laws contains the most up-to-date information.",
    subject: "Highway Traffic Act",
    topic: "Keeping Current (Updates)",
    lecture: "Traffic 2: HTA #2 (Jan 2024)",
  },
  {
    id: "hta2_updates_3",
    type: "truefalse",
    prompt:
      "True or False: Some sections may be passed but not yet proclaimed, meaning they are not in force until proclaimed.",
    answer: true,
    explanation:
      "The slides explain some provisions are passed but not in force until proclaimed.",
    subject: "Highway Traffic Act",
    topic: "Keeping Current (Updates)",
    lecture: "Traffic 2: HTA #2 (Jan 2024)",
  },
  {
    id: "hta2_updates_4",
    type: "single",
    prompt:
      "In Macbeth/Carswell, sections not yet proclaimed are indicated by:",
    choices: [
      "Highlighted in yellow",
      "Underlined in blue",
      "Shaded in grey",
      "A red stamp",
    ],
    answerIndex: 2,
    explanation: "The slides state unproclaimed sections are shaded in grey.",
    subject: "Highway Traffic Act",
    topic: "Keeping Current (Updates)",
    lecture: "Traffic 2: HTA #2 (Jan 2024)",
  },
  {
    id: "hta2_updates_5",
    type: "single",
    prompt: "When an area of the HTA is shaded in grey, it means:",
    choices: [
      "It has already been repealed",
      "It is changing but has not yet been proclaimed (not in force yet)",
      "It is only relevant to commercial vehicles",
      "It is a regulation, not an Act section",
    ],
    answerIndex: 1,
    explanation:
      "Grey shading indicates the item will be changing but has not yet been proclaimed.",
    subject: "Highway Traffic Act",
    topic: "Keeping Current (Updates)",
    lecture: "Traffic 2: HTA #2 (Jan 2024)",
  },

  // -------------------------------
  // Regulations Examples + General Regulation
  // -------------------------------
  {
    id: "hta2_regs_1",
    type: "multi",
    prompt:
      "Which regulations are listed as examples created for a specific purpose? (Select ALL that apply)",
    choices: [
      "Vehicle Permits – O. Reg. 628",
      "Driver’s Licence – O. Reg. 340/94",
      "General Regulation – O. Reg. 596",
      "O. Reg. 339/94 (Demerit Points)",
    ],
    answerIndices: [0, 1],
    explanation:
      "The slide lists Vehicle Permits (O. Reg. 628) and Driver’s Licence (O. Reg. 340/94) as examples created for specific purposes.",
    subject: "Highway Traffic Act",
    topic: "Regulations",
    lecture: "Traffic 2: HTA #2 (Jan 2024)",
  },
  {
    id: "hta2_regs_2",
    type: "single",
    prompt: "Which regulation is described as the 'catch all' regulation?",
    choices: ["O. Reg. 628", "O. Reg. 340/94", "O. Reg. 596", "O. Reg. 339/94"],
    answerIndex: 2,
    explanation:
      "The slides describe General Regulation – O. Reg. 596 as the catch all.",
    subject: "Highway Traffic Act",
    topic: "Regulations",
    lecture: "Traffic 2: HTA #2 (Jan 2024)",
  },

  // -------------------------------
  // HTA 75(4) – Three Offences + Who/Where
  // -------------------------------
  {
    id: "hta2_754_1",
    type: "multi",
    prompt:
      "Reading HTA 75(4), what three offences are created? (Select ALL that apply)",
    choices: [
      "Unreasonable noise – signaling device",
      "Unreasonable smoke",
      "Unnecessary noise",
      "Fail to remain",
    ],
    answerIndices: [0, 1, 2],
    explanation:
      "The slides identify three offences under 75(4): unreasonable noise (signaling device), unreasonable smoke, and unnecessary noise.",
    subject: "Highway Traffic Act",
    topic: "Offences (HTA 75(4))",
    lecture: "Traffic 2: HTA #2 (Jan 2024)",
  },
  {
    id: "hta2_754_2",
    type: "single",
    prompt:
      "HTA 75(4) – Unreasonable noise (signaling device) is an offence by:",
    choices: ["Driver only", "Owner only", "Person", "Passenger only"],
    answerIndex: 2,
    explanation:
      "The slide notes this is an offence by 'person' and can occur anywhere.",
    subject: "Highway Traffic Act",
    topic: "Offences (HTA 75(4))",
    lecture: "Traffic 2: HTA #2 (Jan 2024)",
  },
  {
    id: "hta2_754_3",
    type: "single",
    prompt: "HTA 75(4) – Unreasonable smoke is an offence by:",
    choices: [
      "Person (anywhere)",
      "Driver (on a highway)",
      "Owner (anywhere)",
      "Passenger (on a highway)",
    ],
    answerIndex: 1,
    explanation:
      "The slide specifies unreasonable smoke is a highway offence by the driver.",
    subject: "Highway Traffic Act",
    topic: "Offences (HTA 75(4))",
    lecture: "Traffic 2: HTA #2 (Jan 2024)",
  },
  {
    id: "hta2_754_4",
    type: "single",
    prompt: "HTA 75(4) – Unnecessary noise is an offence by:",
    choices: [
      "Person (anywhere)",
      "Driver (on a highway)",
      "Owner (anywhere)",
      "Passenger (on a highway)",
    ],
    answerIndex: 1,
    explanation:
      "The slide specifies unnecessary noise is a highway offence by the driver.",
    subject: "Highway Traffic Act",
    topic: "Offences (HTA 75(4))",
    lecture: "Traffic 2: HTA #2 (Jan 2024)",
  },
  {
    id: "hta2_754_5",
    type: "single",
    prompt:
      "According to the slides, the set fine for each HTA 75(4) offence listed is:",
    choices: ["$65", "$85", "$110", "$150"],
    answerIndex: 1,
    explanation: "The slides list each 75(4) offence at $85 set fine.",
    subject: "Highway Traffic Act",
    topic: "Offences (HTA 75(4))",
    lecture: "Traffic 2: HTA #2 (Jan 2024)",
  },

  // -------------------------------
  // Reporting Accidents – $2,000 threshold (HTA + O. Reg. 596 / s.199)
  // -------------------------------
  {
    id: "hta2_accident_1",
    type: "single",
    prompt:
      "Where is it written that an accident with damage apparently exceeding $2,000 must be reported to police (per the slide’s index example)?",
    choices: [
      "HTA s.37(1)",
      "O. Reg. 596 s.11 and HTA s.199",
      "HTA s.62(1)",
      "O. Reg. 339/94",
    ],
    answerIndex: 1,
    explanation:
      "The slide shows the index path pointing to O. Reg. 596 s.11 and also s.199.",
    subject: "Highway Traffic Act",
    topic: "Collisions / Reporting",
    lecture: "Traffic 2: HTA #2 (Jan 2024)",
  },

  // -------------------------------
  // Facts in Issue (T.I.P.P.)
  // -------------------------------
  {
    id: "hta2_facts_1",
    type: "single",
    prompt: "Facts in Issue are best described as:",
    choices: [
      "The officer’s opinion about what happened",
      "Elements that must be proven",
      "Only the vehicle description",
      "Only the driver’s admission",
    ],
    answerIndex: 1,
    explanation: "Facts in issue are the elements that must be proven.",
    subject: "Highway Traffic Act",
    topic: "Facts in Issue",
    lecture: "Traffic 2: HTA #2 (Jan 2024)",
  },
  {
    id: "hta2_facts_2",
    type: "multi",
    prompt:
      "Which are included in Facts in Issue (T.I.P.P.)? (Select ALL that apply)",
    choices: [
      "Time and Date (When)",
      "Identity (Who)",
      "Place (Where)",
      "Specific facts for the charge (What)",
      "The accused’s criminal record",
    ],
    answerIndices: [0, 1, 2, 3],
    explanation:
      "The slide lists Time/Date, Identity, Place, plus specific facts for the particular charge (T.I.P.P.).",
    subject: "Highway Traffic Act",
    topic: "Facts in Issue",
    lecture: "Traffic 2: HTA #2 (Jan 2024)",
  },

  // -------------------------------
  // Scenario: Unsafe Lane Change + Fail to Signal
  // -------------------------------
  {
    id: "hta2_scenario_1",
    type: "single",
    prompt:
      "Scenario: A Mustang changes lanes right without signaling, forcing another vehicle to brake sharply to avoid a collision. Which is the primary offending action to locate in the HTA?",
    choices: [
      "Fail to remain",
      "Unsafe lane change / Change lane - not in safety",
      "Careless driving (automatically)",
      "Speeding",
    ],
    answerIndex: 1,
    explanation:
      "The slides focus on unsafe lane change / change lane not in safety as the offending action to locate.",
    subject: "Highway Traffic Act",
    topic: "Offences (Lane Change / Signals)",
    lecture: "Traffic 2: HTA #2 (Jan 2024)",
  },
  {
    id: "hta2_scenario_2",
    type: "multi",
    prompt:
      "Which HTA sections are referenced on the slide for the unsafe lane change concept? (Select ALL that apply)",
    choices: ["HTA 142", "HTA 154(1)(a)", "HTA 75(4)", "HTA 168(a)"],
    answerIndices: [0, 1],
    explanation:
      "The slides reference unsafe lane change at HTA 142 or HTA 154(1)(a).",
    subject: "Highway Traffic Act",
    topic: "Offences (Lane Change / Signals)",
    lecture: "Traffic 2: HTA #2 (Jan 2024)",
  },
  {
    id: "hta2_scenario_3",
    type: "single",
    prompt:
      "Which short form wording is listed for HTA 142(1) / 154(1)(a) in the slides?",
    choices: [
      "Change lane - not in safety",
      "Fail to obey sign",
      "Fail to report accident",
      "Drive without insurance",
    ],
    answerIndex: 0,
    explanation:
      "The short form wording shown is 'Change lane - not in safety' (and also 'Fail to signal - lane change' as a separate option).",
    subject: "Highway Traffic Act",
    topic: "Short Form Wordings",
    lecture: "Traffic 2: HTA #2 (Jan 2024)",
  },
  {
    id: "hta2_scenario_4",
    type: "single",
    prompt:
      "Which short form wording is listed for failing to signal a lane change?",
    choices: [
      "Fail to signal - lane change",
      "Fail to stop",
      "Fail to yield",
      "Improper turn",
    ],
    answerIndex: 0,
    explanation:
      "The slide lists 'Fail to signal - lane change' under HTA 142(1).",
    subject: "Highway Traffic Act",
    topic: "Short Form Wordings",
    lecture: "Traffic 2: HTA #2 (Jan 2024)",
  },
  {
    id: "hta2_scenario_5",
    type: "single",
    prompt:
      "According to the slides, offences like 'Change lane - not in safety' and 'Fail to signal - lane change' are:",
    choices: [
      "Part I Provincial Offences Act offences",
      "Part III Provincial Offences Act offences only",
      "Criminal Code offences",
      "Municipal by-law offences",
    ],
    answerIndex: 0,
    explanation:
      "The slide states all offences discussed here are Part I POA offences.",
    subject: "Highway Traffic Act",
    topic: "Provincial Offences Act Process",
    lecture: "Traffic 2: HTA #2 (Jan 2024)",
  },
  {
    id: "hta2_scenario_6",
    type: "single",
    prompt:
      "According to the slides, the out-of-court settlement amount for these Part I offences is shown as:",
    choices: [
      "$85 + $25 = $110",
      "$110 + $25 = $135",
      "$85 flat",
      "$150 + $25 = $175",
    ],
    answerIndex: 0,
    explanation:
      "The slide shows $85 set fine + $25 surcharge = $110 out-of-court settlement.",
    subject: "Highway Traffic Act",
    topic: "Set Fines / Surcharges",
    lecture: "Traffic 2: HTA #2 (Jan 2024)",
  },

  // -------------------------------
  // Facts in Issue – Lane change not in safety + signal
  // -------------------------------
  {
    id: "hta2_fii_lane_1",
    type: "multi",
    prompt:
      "For 'Change lane - not in safety' facts in issue, which are specifically listed on the slide? (Select ALL that apply)",
    choices: [
      "Highway / Vehicle",
      "From one lane to another",
      "Shall see that such movement can be made in safety",
      "Driver gave a signal plainly visible to all pedestrians",
      "The other vehicle was forced to brake sharply (always required)",
    ],
    answerIndices: [0, 1, 2],
    explanation:
      "The slide lists: highway/vehicle, movement from one lane to another, and ensuring movement can be made safely.",
    subject: "Highway Traffic Act",
    topic: "Facts in Issue (Lane Change)",
    lecture: "Traffic 2: HTA #2 (Jan 2024)",
  },
  {
    id: "hta2_fii_signal_1",
    type: "single",
    prompt:
      "For 'Fail to signal - lane change' (HTA 142(1)), the slide adds the requirement to signal when:",
    choices: [
      "Any pedestrian is present",
      "Operation of any other vehicle may be affected",
      "The lane change is on a rural road",
      "The driver is turning right",
    ],
    answerIndex: 1,
    explanation:
      "The slide states a signal must be given when operation of any other vehicle may be affected.",
    subject: "Highway Traffic Act",
    topic: "Facts in Issue (Signals)",
    lecture: "Traffic 2: HTA #2 (Jan 2024)",
  },

  // -------------------------------
  // Owner Liability / Owner Cannot Be Convicted for 142(1)
  // -------------------------------
  {
    id: "hta2_owner_1",
    type: "truefalse",
    prompt:
      "True or False: A vehicle owner can be convicted under HTA s.207(1)-(2) for some offences, even if they were not the driver.",
    answer: true,
    explanation:
      "The slides note owner may be convicted under s.207(1)-(2) in certain circumstances.",
    subject: "Highway Traffic Act",
    topic: "Owner Liability",
    lecture: "Traffic 2: HTA #2 (Jan 2024)",
  },
  {
    id: "hta2_owner_2",
    type: "truefalse",
    prompt:
      "True or False: An owner can be convicted of HTA 142(1) (change lane / signalling) as the owner if they were not driving.",
    answer: false,
    explanation:
      "The slides explicitly state owner cannot be convicted of 142(1) HTA (as owner).",
    subject: "Highway Traffic Act",
    topic: "Owner Liability",
    lecture: "Traffic 2: HTA #2 (Jan 2024)",
  },

  // -------------------------------
  // Demerit Points – HTA s.56 + O. Reg. 339/94
  // -------------------------------
  {
    id: "hta2_demerit_1",
    type: "single",
    prompt: "Which HTA section allows for a demerit point system?",
    choices: ["HTA 56", "HTA 62", "HTA 142", "HTA 207"],
    answerIndex: 0,
    explanation:
      "The slides state section 56 HTA allows for a demerit point system.",
    subject: "Highway Traffic Act",
    topic: "Demerit Points",
    lecture: "Traffic 2: HTA #2 (Jan 2024)",
  },
  {
    id: "hta2_demerit_2",
    type: "single",
    prompt:
      "Which regulation spells out the technical application of the demerit point system?",
    choices: ["O. Reg. 596", "O. Reg. 340/94", "O. Reg. 339/94", "O. Reg. 628"],
    answerIndex: 2,
    explanation:
      "The slides state O. Reg. 339/94 contains the technical application of the demerit point system.",
    subject: "Highway Traffic Act",
    topic: "Demerit Points",
    lecture: "Traffic 2: HTA #2 (Jan 2024)",
  },
  {
    id: "hta2_demerit_3",
    type: "single",
    prompt:
      "The slides prompt discretion considerations by comparing demerit points for:",
    choices: [
      "Change lane - not in safety 142(1) vs Unsafe lane change 154(1)(a)",
      "Speeding vs stunt driving",
      "Fail to stop vs careless driving",
      "Seatbelt vs distracted driving",
    ],
    answerIndex: 0,
    explanation:
      "The lecture asks you to compare demerit points for 142(1) vs 154(1)(a) and consider discretion.",
    subject: "Highway Traffic Act",
    topic: "Officer Discretion",
    lecture: "Traffic 2: HTA #2 (Jan 2024)",
  },

  // -------------------------------
  // Wrap-up / Assignment Reminder
  // -------------------------------
  {
    id: "hta2_wrap_1",
    type: "single",
    prompt:
      "The final assignment reminder in the slides is to complete and keep up to date:",
    choices: [
      "Traffic Workbook",
      "Criminal Code Pocket Book",
      "Charter Workbook",
      "Case Law Digest",
    ],
    answerIndex: 0,
    explanation:
      "The slides end with an assignment reminder: Traffic Workbook (to be completed; keep up to date).",
    subject: "Highway Traffic Act",
    topic: "Assignments",
    lecture: "Traffic 2: HTA #2 (Jan 2024)",
  },
  // -------------------------------
  // Session Overview / Learning Outcomes
  // -------------------------------
  {
    id: "ev1_overview_1",
    type: "multi",
    prompt:
      "Evidence 1 (Police Duty Notebooks) covers which topics? (Select ALL that apply)",
    choices: [
      "Legal and duty requirements of note-taking",
      "The purpose of note-taking",
      "Who will want to see your notes",
      "Your key responsibilities",
      "OPC expectations",
      "Important aspects of note-taking",
      "Getting started on note-taking",
      "Applying what you learned",
      "How to write subpoenas",
    ],
    answerIndices: [0, 1, 2, 3, 4, 5, 6, 7],
    explanation:
      "The session outlines these learning topics; it does not teach subpoena drafting in this deck.",
    subject: "Evidence",
    topic: "Session Overview",
    lecture: "Evidence 1: Police Duty Notebooks",
  },

  // -------------------------------
  // Origins of Requirement (Authority Sources)
  // -------------------------------
  {
    id: "ev1_sources_1",
    type: "multi",
    prompt:
      "Which sources are listed as origins of the note-taking requirement? (Select ALL that apply)",
    choices: [
      "Community Safety and Police Act (CSPA)",
      "Code of Conduct – Reg. 407/23",
      "Policing Standards Manual – LE-022",
      "Your Law Enforcement Agency’s policy",
      "Case law",
      "The Highway Traffic Act",
    ],
    answerIndices: [0, 1, 2, 3, 4],
    explanation:
      "The slide lists CSPA duties, Code of Conduct regulation, Policing Standards Manual, agency policy, and case law.",
    subject: "Evidence",
    topic: "Legal & Duty Requirements",
    lecture: "Evidence 1: Police Duty Notebooks",
  },
  {
    id: "ev1_sources_2",
    type: "single",
    prompt:
      "The training deck lists which CSPA section relating to duties of a police officer as part of note-taking origins?",
    choices: ["CSPA s.12", "CSPA s.82", "CSPA s.117", "CSPA s.6"],
    answerIndex: 1,
    explanation:
      "The slide references Community Safety and Police Act s.82 (duties of a police officer).",
    subject: "Evidence",
    topic: "Legal & Duty Requirements",
    lecture: "Evidence 1: Police Duty Notebooks",
  },

  // -------------------------------
  // Duty Bound (Court language)
  // -------------------------------
  {
    id: "ev1_duty_1",
    type: "multi",
    prompt:
      "According to the deck, officers are duty-bound to contemporaneously record important facts relating to which constitutionally-related subjects? (Select ALL that apply)",
    choices: [
      "Consent",
      "Rights to counsel",
      "Warrantless searches",
      "Bail hearings",
      "Judicial pre-trial motions",
    ],
    answerIndices: [0, 1, 2],
    explanation:
      "The slide highlights constitutionally-related subjects like consent, right to counsel, and warrantless searches.",
    subject: "Evidence",
    topic: "Court Expectations / Duty Bound",
    lecture: "Evidence 1: Police Duty Notebooks",
  },
  {
    id: "ev1_duty_2",
    type: "multi",
    prompt:
      "The deck says officers should contemporaneously record relevant utterances by which people? (Select ALL that apply)",
    choices: [
      "Investigative target",
      "Accused",
      "Other principal actor",
      "Only the complainant",
    ],
    answerIndices: [0, 1, 2],
    explanation:
      "Notes should capture relevant utterances by investigative targets/accused/other principal actors.",
    subject: "Evidence",
    topic: "Court Expectations / Duty Bound",
    lecture: "Evidence 1: Police Duty Notebooks",
  },

  // -------------------------------
  // Purpose of Notes (Guiding principles)
  // -------------------------------
  {
    id: "ev1_purpose_1",
    type: "single",
    prompt: "Which statement best reflects how courts view police notes?",
    choices: [
      "Notes are only a personal memory aid",
      "Notes are more than an aide memoire; they are a record to check the Crown’s evidence",
      "Notes are not evidence unless typed",
      "Notes are only for supervisors",
    ],
    answerIndex: 1,
    explanation:
      "The deck states courts view notes as more than an aide memoire—they are a record against which Crown evidence can be checked.",
    subject: "Evidence",
    topic: "Purpose of Notes",
    lecture: "Evidence 1: Police Duty Notebooks",
  },
  {
    id: "ev1_purpose_2",
    type: "multi",
    prompt: "Why take notes (per the deck)? (Select ALL that apply)",
    choices: [
      "To refresh your memory",
      "To prevent a fruitful cross-examination",
      "To add strength to the Crown’s case",
      "To replace all reports",
    ],
    answerIndices: [0, 1, 2],
    explanation:
      "The deck lists these purposes; notes do not replace required reports.",
    subject: "Evidence",
    topic: "Purpose of Notes",
    lecture: "Evidence 1: Police Duty Notebooks",
  },
  {
    id: "ev1_purpose_3",
    type: "multi",
    prompt:
      "Note-taking should fully document which two broad areas? (Select TWO)",
    choices: [
      "Tour of Duty",
      "Procedures",
      "Investigations",
      "Court testimony",
    ],
    answerIndices: [0, 2],
    explanation:
      "The deck emphasizes documenting your Tour of Duty and your Investigations.",
    subject: "Evidence",
    topic: "Purpose of Notes",
    lecture: "Evidence 1: Police Duty Notebooks",
  },

  // -------------------------------
  // Investigations: what to capture
  // -------------------------------
  {
    id: "ev1_invest_1",
    type: "multi",
    prompt:
      "For investigations, notes should capture which items? (Select ALL that apply)",
    choices: [
      "Evidence through your five senses",
      "Who, What, Where, When, Why, How",
      "Evidence gathering / investigative efforts",
      "Your rationale to act (reasonable grounds)",
      "Your authorities to act",
      "Your actions and actions of others",
      "Only your final conclusion",
    ],
    answerIndices: [0, 1, 2, 3, 4, 5],
    explanation:
      "The deck emphasizes full documentation including senses, 5Ws+H, grounds, authority, and actions.",
    subject: "Evidence",
    topic: "Investigative Note-Taking",
    lecture: "Evidence 1: Police Duty Notebooks",
  },

  // -------------------------------
  // Who will see notes
  // -------------------------------
  {
    id: "ev1_who_1",
    type: "multi",
    prompt: "Who may see your notes? (Select ALL that apply)",
    choices: [
      "Supervisors",
      "Other investigators (e.g., Major Case Management)",
      "Professional Standards",
      "FOI Coordinator",
      "Records Management",
      "Crown Attorneys",
      "Defense Counsel",
      "Judges",
      "SIU",
      "LECA (formerly OIPRD)",
    ],
    answerIndices: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    explanation:
      "The deck lists internal, judicial process, and external agencies that may access notes.",
    subject: "Evidence",
    topic: "Disclosure / Access to Notes",
    lecture: "Evidence 1: Police Duty Notebooks",
  },

  // -------------------------------
  // Notebook Responsibility / Security
  // -------------------------------
  {
    id: "ev1_resp_1",
    type: "multi",
    prompt:
      "Which statements about police notebooks are correct? (Select ALL that apply)",
    choices: [
      "Notebooks are the property of your law enforcement agency",
      "Notebooks are evidence and must always be secured",
      "Notebooks can be left unattended if locked in a vehicle",
      "Notebooks are only for professional purposes",
    ],
    answerIndices: [0, 1, 3],
    explanation:
      "The deck states notebooks are agency property, are evidence and must be secured, and are for professional purposes only.",
    subject: "Evidence",
    topic: "Notebook Responsibilities",
    lecture: "Evidence 1: Police Duty Notebooks",
  },
  {
    id: "ev1_resp_2",
    type: "truefalse",
    prompt:
      "True or False: Your police notebook should never be left unattended.",
    answer: true,
    explanation:
      "The deck explicitly states notebooks must always be secured and never left unattended.",
    subject: "Evidence",
    topic: "Notebook Responsibilities",
    lecture: "Evidence 1: Police Duty Notebooks",
  },

  // -------------------------------
  // OPC Expectations
  // -------------------------------
  {
    id: "ev1_opc_1",
    type: "single",
    prompt: "At OPC, you are expected to take notes:",
    choices: [
      "Only during scenarios",
      "Only during academic classes",
      "Each workday (offsite online portion and at OPC)",
      "Only when instructed by a supervisor",
    ],
    answerIndex: 2,
    explanation:
      "The deck states you are expected to take notes each workday both offsite and at OPC.",
    subject: "Evidence",
    topic: "OPC Expectations",
    lecture: "Evidence 1: Police Duty Notebooks",
  },
  {
    id: "ev1_opc_2",
    type: "truefalse",
    prompt:
      "True or False: Notebooks may be inspected at any time by any supervisor or instructor.",
    answer: true,
    explanation:
      "The deck states notebooks may be inspected at any time by supervisors/instructors.",
    subject: "Evidence",
    topic: "OPC Expectations",
    lecture: "Evidence 1: Police Duty Notebooks",
  },
  {
    id: "ev1_opc_3",
    type: "single",
    prompt:
      "At OPC, your notebooks will be peer reviewed by classmates how often (per intake)?",
    choices: ["Once", "2–3 times", "Every day", "Never"],
    answerIndex: 1,
    explanation: "The deck states peer review happens 2–3 times per intake.",
    subject: "Evidence",
    topic: "OPC Expectations",
    lecture: "Evidence 1: Police Duty Notebooks",
  },

  // -------------------------------
  // Important aspects / best practices
  // -------------------------------
  {
    id: "ev1_best_1",
    type: "multi",
    prompt:
      "Which are listed as important aspects of taking notes? (Select ALL that apply)",
    choices: [
      "Take notes during the incident (contemporaneously) or ASAP",
      "Write in chronological order",
      "Complete notes before end of shift",
      "Collaborate with other officers to produce one shared account",
      "Mark non-chronological entries as Late Entry (L.E.)",
    ],
    answerIndices: [0, 1, 2, 4],
    explanation:
      "The deck emphasizes contemporaneous/ASAP, chronological order, completion before end of shift, and using Late Entry when needed (not collaborative note writing).",
    subject: "Evidence",
    topic: "Best Practices",
    lecture: "Evidence 1: Police Duty Notebooks",
  },
  {
    id: "ev1_best_2",
    type: "truefalse",
    prompt:
      "True or False: Notes should be made in collaboration with other officers whenever possible.",
    answer: false,
    explanation:
      "The deck says notes should not be made in collaboration—each officer should provide an independent account.",
    subject: "Evidence",
    topic: "Best Practices",
    lecture: "Evidence 1: Police Duty Notebooks",
  },
  {
    id: "ev1_best_3",
    type: "single",
    prompt:
      "If an entry is not in chronological order, it should be marked as:",
    choices: [
      "Addendum",
      "Late Entry (L.E.)",
      "Correction Note",
      "Supplemental Report",
    ],
    answerIndex: 1,
    explanation: "Non-chronological entries must be marked Late Entry (L.E.).",
    subject: "Evidence",
    topic: "Best Practices",
    lecture: "Evidence 1: Police Duty Notebooks",
  },
  {
    id: "ev1_best_4",
    type: "multi",
    prompt:
      "A Late Entry (L.E.) should include which items? (Select ALL that apply)",
    choices: [
      "Current date and time",
      "Reason for the late entry",
      "Cross-reference page number(s)",
      "A supervisor’s signature",
    ],
    answerIndices: [0, 1, 2],
    explanation:
      "The deck says L.E. should reflect current date/time, give a reason, and be cross-referenced by page number.",
    subject: "Evidence",
    topic: "Late Entries",
    lecture: "Evidence 1: Police Duty Notebooks",
  },

  // -------------------------------
  // Treat every class like a call for service
  // -------------------------------
  {
    id: "ev1_class_1",
    type: "multi",
    prompt:
      "At OPC, for every class you should record which details? (Select ALL that apply)",
    choices: [
      "Name of class",
      "Time of arrival",
      "Class location",
      "Instructor(s)",
      "Objectives and homework (for academic classes)",
      "Badge number of every student in class",
    ],
    answerIndices: [0, 1, 2, 3, 4],
    explanation:
      "The deck lists class name, arrival time, location, instructor(s), and objectives/homework for academic classes.",
    subject: "Evidence",
    topic: "OPC Notebook Standards",
    lecture: "Evidence 1: Police Duty Notebooks",
  },
  {
    id: "ev1_class_2",
    type: "single",
    prompt: "How should every scenario be treated in your notebook at OPC?",
    choices: [
      "As a Late Entry",
      "As a report only",
      "As optional notes",
      "As a supervisor-only entry",
    ],
    answerIndex: 0,
    explanation:
      "The deck says: every scenario should be treated as a late entry.",
    subject: "Evidence",
    topic: "OPC Notebook Standards",
    lecture: "Evidence 1: Police Duty Notebooks",
  },
  {
    id: "ev1_additional_1",
    type: "multi",
    prompt:
      "Additionally at OPC, you should document which items? (Select ALL that apply)",
    choices: [
      "Assigned details (student duty officer, flag orderly, etc.)",
      "Meetings with staff members/police service/liaison officer",
      "Workshops",
      "Personal errands",
    ],
    answerIndices: [0, 1, 2],
    explanation:
      "The deck lists assigned details, meetings with staff/service/liaison, and workshops.",
    subject: "Evidence",
    topic: "OPC Notebook Standards",
    lecture: "Evidence 1: Police Duty Notebooks",
  },

  // -------------------------------
  // Body-worn cameras / In-car cameras
  // -------------------------------
  {
    id: "ev1_bwc_1",
    type: "truefalse",
    prompt:
      "True or False: Body-worn cameras are intended to supplement, but not replace, detailed notebook entries and applicable reports.",
    answer: true,
    explanation:
      "The deck states BWC/ICC are meant to supplement and shall not replace detailed notes/reports.",
    subject: "Evidence",
    topic: "Technology & Note-Taking",
    lecture: "Evidence 1: Police Duty Notebooks",
  },
  {
    id: "ev1_bwc_2",
    type: "single",
    prompt:
      "The deck warns that body-worn/in-car cameras can often show what is happening, but not always:",
    choices: ["Who", "Where", "Why", "When"],
    answerIndex: 2,
    explanation:
      "The slide says cameras can answer what is happening but not always why.",
    subject: "Evidence",
    topic: "Technology & Note-Taking",
    lecture: "Evidence 1: Police Duty Notebooks",
  },

  // -------------------------------
  // Getting started (Notebook setup)
  // -------------------------------
  {
    id: "ev1_start_1",
    type: "multi",
    prompt:
      "The deck suggests getting started with which notebook components? (Select ALL that apply)",
    choices: [
      "Front cover/spine information",
      "Tour of Duty notes (start/end workday)",
      "Procedures of professional note-taking",
      "Investigative note-taking (5Ws+H, reasonable grounds, authorities, actions)",
      "Only writing arrest notes",
    ],
    answerIndices: [0, 1, 2, 3],
    explanation: "The deck outlines these core components for getting started.",
    subject: "Evidence",
    topic: "Getting Started",
    lecture: "Evidence 1: Police Duty Notebooks",
  },

  // -------------------------------
  // Procedures example (quality standards)
  // -------------------------------
  {
    id: "ev1_proc_1",
    type: "multi",
    prompt:
      "Which practices are listed as being 'well done' in the procedures example? (Select ALL that apply)",
    choices: [
      "Use of black or blue ink",
      "All lines accounted for",
      "Consistent spacing",
      "Documenting names/DOB/phone/email/address",
      "Squeezing extra info into margins to save space",
      "Good penmanship/legibility",
      "24-hour clock in left margin",
      "Proper error correction (line through + initial)",
      "No writing in the spine",
    ],
    answerIndices: [0, 1, 2, 3, 5, 6, 7, 8],
    explanation:
      "The example highlights ink colour, using lines properly, spacing, details, legibility, 24-hour time, error correction, and not writing in the spine.",
    subject: "Evidence",
    topic: "Notebook Format & Quality",
    lecture: "Evidence 1: Police Duty Notebooks",
  },
  {
    id: "ev1_proc_2",
    type: "single",
    prompt: "Proper error correction in a notebook is done by:",
    choices: [
      "Erasing the mistake",
      "Using white-out",
      "Putting a line through the error and initialling it",
      "Tearing out the page",
    ],
    answerIndex: 2,
    explanation:
      "The deck describes crossing out the error with a line and initialling it.",
    subject: "Evidence",
    topic: "Notebook Format & Quality",
    lecture: "Evidence 1: Police Duty Notebooks",
  },
  {
    id: "ev1_proc_3",
    type: "truefalse",
    prompt:
      "True or False: Writing in the notebook spine is recommended to fit more information.",
    answer: false,
    explanation: "The deck highlights 'No writing in spine.'",
    subject: "Evidence",
    topic: "Notebook Format & Quality",
    lecture: "Evidence 1: Police Duty Notebooks",
  },

  // -------------------------------
  // Other Items to Consider
  // -------------------------------
  {
    id: "ev1_other_1",
    type: "multi",
    prompt:
      "Which 'other items to consider' are included in the deck? (Select ALL that apply)",
    choices: [
      "Always include the date at the top of every page",
      "Indicate your homework",
      "Don’t skip pages in your notebook",
      "Prepare to start a new notebook near the end and cross out remaining pages",
      "Obscure page numbers to prevent disclosure",
      "Do not write over page numbers; circle them instead",
    ],
    answerIndices: [0, 1, 2, 3, 5],
    explanation:
      "The deck lists all of these (except obscuring page numbers—it's the opposite).",
    subject: "Evidence",
    topic: "Notebook Maintenance",
    lecture: "Evidence 1: Police Duty Notebooks",
  },
  {
    id: "ev1_other_2",
    type: "truefalse",
    prompt:
      "True or False: You should skip blank pages so your notebook lasts longer.",
    answer: false,
    explanation: "The deck explicitly says: don’t skip pages.",
    subject: "Evidence",
    topic: "Notebook Maintenance",
    lecture: "Evidence 1: Police Duty Notebooks",
  },

  // -------------------------------
  // Late Entries (how to do it)
  // -------------------------------
  {
    id: "ev1_le_1",
    type: "multi",
    prompt:
      "The late entry (L.E.) process described includes which steps? (Select ALL that apply)",
    choices: [
      "At the time the event occurred, make a left margin note with L.E.",
      "Include the page number you will cross-reference where the late entry is made",
      "Add the additional information later",
      "Then add L.E. with the page number where you noted the time the event actually occurred",
      "Rewrite the entire notebook page to keep it clean",
    ],
    answerIndices: [0, 1, 2, 3],
    explanation:
      "The deck shows the cross-referenced L.E. process (time-of-event note + later entry + reciprocal cross-reference).",
    subject: "Evidence",
    topic: "Late Entries",
    lecture: "Evidence 1: Police Duty Notebooks",
  },

  // -------------------------------
  // Investigative Notes examples (content checklist)
  // -------------------------------
  {
    id: "ev1_inv_2",
    type: "multi",
    prompt:
      "The investigative notes example lists which items to include? (Select ALL that apply)",
    choices: [
      "Date",
      "Location",
      "Weather",
      "Vehicles",
      "Dress",
      "Event",
      "Court outcome",
    ],
    answerIndices: [0, 1, 2, 3, 4, 5],
    explanation:
      "The example highlights documenting date, location, weather, vehicles, dress, and the event.",
    subject: "Evidence",
    topic: "Investigative Notes",
    lecture: "Evidence 1: Police Duty Notebooks",
  },
  {
    id: "ev1_inv_3",
    type: "multi",
    prompt:
      "The investigative notes continuation highlights documenting: (Select ALL that apply)",
    choices: [
      "Vehicle and plate number",
      "Noting questions asked and the driver’s response",
      "Laying out grounds for arrest",
      "Forming reasonable grounds to arrest",
      "Placing offender under arrest and telling them why",
      "Search incident to arrest",
    ],
    answerIndices: [0, 1, 2, 3, 4, 5],
    explanation:
      "The examples show these being captured in investigative notes.",
    subject: "Evidence",
    topic: "Investigative Notes",
    lecture: "Evidence 1: Police Duty Notebooks",
  },
  {
    id: "ev1_inv_4",
    type: "single",
    prompt: "DYWTCALN stands for:",
    choices: [
      "Do you want to call a lawyer now?",
      "Do you wish to call a lawyer now?",
      "Did you waive the caution and lawyer now?",
      "Do you want to contact a lawyer next?",
    ],
    answerIndex: 1,
    explanation:
      "The deck defines DYWTCALN as 'Do you wish to call a lawyer now?'",
    subject: "Evidence",
    topic: "Charter / Rights Notes",
    lecture: "Evidence 1: Police Duty Notebooks",
  },
  {
    id: "ev1_inv_5",
    type: "truefalse",
    prompt:
      "True or False: Rights to counsel and the caution should be read verbatim and the offender’s responses noted verbatim.",
    answer: true,
    explanation:
      "The slide stresses reading rights/caution verbatim and noting responses verbatim.",
    subject: "Evidence",
    topic: "Charter / Rights Notes",
    lecture: "Evidence 1: Police Duty Notebooks",
  },

  // -------------------------------
  // Articulation / Court comments
  // -------------------------------
  {
    id: "ev1_artic_1",
    type: "single",
    prompt:
      "The deck states 'Detail is critical' and your notes should include articulation of:",
    choices: [
      "Why you are doing what you are doing",
      "Only what the accused did",
      "Only what dispatch said",
      "Only your personal opinions",
    ],
    answerIndex: 0,
    explanation:
      "The deck emphasizes articulating why you did what you did (e.g., reasons/authority/purpose).",
    subject: "Evidence",
    topic: "Articulation",
    lecture: "Evidence 1: Police Duty Notebooks",
  },
  {
    id: "ev1_artic_2",
    type: "multi",
    prompt:
      "Which examples are listed as things officers should articulate in notes? (Select ALL that apply)",
    choices: [
      "Search incidental to arrest",
      "Safety search",
      "Delay in reading rights to counsel",
      "P.I.C.",
      "P.R.I.C.E.",
      "How the judge should sentence",
    ],
    answerIndices: [0, 1, 2, 3, 4],
    explanation:
      "The deck lists these as examples of articulation items; sentencing is not part of this note-taking point.",
    subject: "Evidence",
    topic: "Articulation",
    lecture: "Evidence 1: Police Duty Notebooks",
  },
  {
    id: "ev1_artic_3",
    type: "truefalse",
    prompt:
      "True or False: Judges may criticize notes if they do not record the purpose of a search or the authority relied upon.",
    answer: true,
    explanation:
      "The deck provides judicial commentary examples criticizing missing authority/purpose articulation.",
    subject: "Evidence",
    topic: "Articulation",
    lecture: "Evidence 1: Police Duty Notebooks",
  },

  // -------------------------------
  // First Officer Contact (When to write)
  // -------------------------------
  {
    id: "ev1_contact_1",
    type: "single",
    prompt: "When do you take out your notebook (per the deck’s guidance)?",
    choices: [
      "Immediately on approach, no matter what",
      "Only after the arrest is made",
      "After officer safety is addressed and the situation is safe",
      "Only when a supervisor tells you",
    ],
    answerIndex: 2,
    explanation:
      "The deck says officer safety is first; use the notebook once it is safe to record investigative info.",
    subject: "Evidence",
    topic: "First Officer Contact",
    lecture: "Evidence 1: Police Duty Notebooks",
  },
  {
    id: "ev1_contact_2",
    type: "single",
    prompt:
      "After identifying yourself, what is the best question to ask (per the deck)?",
    choices: [
      "Why did you do it?",
      "Tell me what happened?",
      "Do you admit it?",
      "Where is your ID?",
    ],
    answerIndex: 1,
    explanation:
      "The slide states: after identifying self, the best question is 'Tell me what happened?'",
    subject: "Evidence",
    topic: "First Officer Contact",
    lecture: "Evidence 1: Police Duty Notebooks",
  },

  // -------------------------------
  // Assignment / Homework
  // -------------------------------
  {
    id: "ev1_hw_1",
    type: "multi",
    prompt: "Homework for Evidence 1 includes: (Select ALL that apply)",
    choices: [
      "Read the Blue Line article 'Your Backup Memory' (on OPCVA)",
      "Read the Notebook Rubric Guide (suggested reading on OPCVA)",
      "Complete a traffic workbook",
      "Memorize the entire Criminal Code index",
    ],
    answerIndices: [0, 1],
    explanation:
      "The assignment slide lists the Blue Line article and suggests reading the Notebook Rubric Guide.",
    subject: "Evidence",
    topic: "Homework",
    lecture: "Evidence 1: Police Duty Notebooks",
  },
  // -------------------------------
  // Intro / Learning Outcomes
  // -------------------------------
  {
    id: "prov1_intro_1",
    type: "single",
    prompt:
      "Provincial Law 1 emphasizes that police officers must understand and enforce provincial laws in Ontario primarily because:",
    choices: [
      "Provincial laws apply only to civil disputes",
      "Provincial laws regulate many day-to-day public activities officers enforce",
      "Provincial laws replace federal criminal law",
      "Provincial laws only apply to youth offences",
    ],
    answerIndex: 1,
    explanation:
      "Provincial statutes regulate common public-welfare activities (traffic, licensing, alcohol, etc.) and are frequently enforced by officers.",
    subject: "Provincial",
    topic: "Introduction",
    lecture: "Provincial Law 1",
  },
  {
    id: "prov1_intro_2",
    type: "multi",
    prompt:
      "This module prepares officers to do which of the following? (Select ALL that apply)",
    choices: [
      "Locate and interpret provincial legislation",
      "Apply relevant sections correctly during enforcement",
      "Memorize every provincial statute section number",
      "Understand POA definitions and terminology",
    ],
    answerIndices: [0, 1, 3],
    explanation:
      "The focus is on locating/interpreting/applying legislation and learning POA definitions/terminology (not memorizing everything).",
    subject: "Provincial",
    topic: "Introduction",
    lecture: "Provincial Law 1",
  },
  {
    id: "prov1_intro_3",
    type: "single",
    prompt:
      "Why is the Highway Traffic Act (HTA) emphasized early in Provincial Law training?",
    choices: [
      "It is federal law and applies across Canada",
      "It is one of the most commonly enforced provincial statutes",
      "It only applies to commercial vehicles",
      "It replaces the Provincial Offences Act (POA)",
    ],
    answerIndex: 1,
    explanation:
      "The HTA is one of the most commonly enforced provincial statutes, so familiarity is essential.",
    subject: "Provincial",
    topic: "Introduction",
    lecture: "Provincial Law 1",
  },
  {
    id: "prov1_outcomes_1",
    type: "multi",
    prompt:
      "By the end of this module, learners should be able to: (Select ALL that apply)",
    choices: [
      "Identify the Provincial Offences Act and related definitions",
      "Recognize the importance of provincial legislation to police work",
      "Use POA terminology in officer duties",
      "Draft Criminal Code indictments",
    ],
    answerIndices: [0, 1, 2],
    explanation:
      "The learning outcomes focus on identifying POA definitions, importance, and applying terminology in officer work.",
    subject: "Provincial",
    topic: "Learning Outcomes",
    lecture: "Provincial Law 1",
  },

  // -------------------------------
  // Key Terms / Concepts
  // -------------------------------
  {
    id: "prov1_terms_1",
    type: "single",
    prompt: "The Provincial Offences Act (POA) is best described as:",
    choices: [
      "A substantive law that creates most provincial offences",
      "A procedural law that sets the process for charging and prosecuting provincial offences",
      "A federal statute used for criminal offences",
      "A municipal by-law enforcement guide",
    ],
    answerIndex: 1,
    explanation:
      "The POA is a procedural act — it governs the process for enforcing provincial offences.",
    subject: "Provincial",
    topic: "Key Terms",
    lecture: "Provincial Law 1",
  },
  {
    id: "prov1_terms_2",
    type: "single",
    prompt: "Substantive law is best described as law that:",
    choices: [
      "Explains how court processes work (tickets, summons, timelines)",
      "Defines offences, rights, duties, and prohibited conduct",
      "Only applies to evidence and disclosure",
      "Is only written by judges",
    ],
    answerIndex: 1,
    explanation:
      "Substantive law defines the actual offences/rights/obligations (e.g., HTA rules).",
    subject: "Provincial",
    topic: "Procedural vs Substantive",
    lecture: "Provincial Law 1",
  },
  {
    id: "prov1_terms_3",
    type: "single",
    prompt: "Procedural law is best described as law that:",
    choices: [
      "Defines what behaviour is illegal",
      "Describes the methods and processes for enforcing the law",
      "Only applies to federal statutes",
      "Creates municipal by-laws",
    ],
    answerIndex: 1,
    explanation:
      "Procedural law focuses on the “how” — the process used to enforce offences (POA).",
    subject: "Provincial",
    topic: "Procedural vs Substantive",
    lecture: "Provincial Law 1",
  },

  // -------------------------------
  // Criminal Code vs POA (General Differences)
  // -------------------------------
  {
    id: "prov1_cc_vs_poa_1",
    type: "single",
    prompt: "The Criminal Code is best described as:",
    choices: [
      "Ontario procedural law (blue book)",
      "Federal law that applies across Canada (red book)",
      "Municipal by-law enforcement law",
      "A regulation made under the POA",
    ],
    answerIndex: 1,
    explanation: "The Criminal Code is federal law and applies nationwide.",
    subject: "Provincial",
    topic: "Criminal Code vs POA",
    lecture: "Provincial Law 1",
  },
  {
    id: "prov1_cc_vs_poa_2",
    type: "single",
    prompt: "The Provincial Offences Act (POA) is best described as:",
    choices: [
      "Federal law that creates crimes",
      "Ontario law that provides procedures for enforcing provincial statutes",
      "A by-law that applies only in cities",
      "A regulation about driving offences only",
    ],
    answerIndex: 1,
    explanation:
      "The POA is Ontario’s procedural framework for provincial offences.",
    subject: "Provincial",
    topic: "Criminal Code vs POA",
    lecture: "Provincial Law 1",
  },
  {
    id: "prov1_cc_vs_poa_3",
    type: "multi",
    prompt:
      "Which are typical examples of Criminal Code offences? (Select ALL that apply)",
    choices: [
      "Murder",
      "Robbery",
      "Sexual assault",
      "Speeding",
      "Noise by-law",
    ],
    answerIndices: [0, 1, 2],
    explanation:
      "Murder, robbery, and sexual assault are Criminal Code offences; speeding and noise by-laws are regulatory/provincial/municipal.",
    subject: "Provincial",
    topic: "Criminal Code vs POA",
    lecture: "Provincial Law 1",
  },
  {
    id: "prov1_cc_vs_poa_4",
    type: "multi",
    prompt:
      "Which are typical examples of Provincial Offences / regulatory offences? (Select ALL that apply)",
    choices: [
      "Speeding",
      "Drinking in public",
      "Parking offences",
      "Unsafe workplace practices",
      "Aggravated assault",
    ],
    answerIndices: [0, 1, 2, 3],
    explanation:
      "Regulatory offences include traffic, by-law/public conduct, workplace, and similar public welfare rules.",
    subject: "Provincial",
    topic: "Criminal Code vs POA",
    lecture: "Provincial Law 1",
  },
  {
    id: "prov1_cc_vs_poa_5",
    type: "single",
    prompt:
      "Which enforcement standard is noted for laying provincial offence charges?",
    choices: [
      "Reasonable suspicion",
      "Belief only (always)",
      "Reasonable and probable grounds",
      "Absolute certainty",
    ],
    answerIndex: 2,
    explanation:
      "Provincial offences are laid on reasonable and probable grounds (effectively same as reasonable grounds; provincial phrasing).",
    subject: "Provincial",
    topic: "Criminal Code vs POA",
    lecture: "Provincial Law 1",
  },
  {
    id: "prov1_cc_vs_poa_6",
    type: "single",
    prompt:
      "A key stated impact difference between Criminal Code convictions vs POA convictions is that:",
    choices: [
      "POA convictions usually affect border crossing more than criminal convictions",
      "Criminal convictions can affect international travel; POA convictions typically do not",
      "Neither affects travel",
      "Only parking convictions affect travel",
    ],
    answerIndex: 1,
    explanation:
      "Criminal convictions may impact travel; POA convictions typically do not.",
    subject: "Provincial",
    topic: "Criminal Code vs POA",
    lecture: "Provincial Law 1",
  },
  {
    id: "prov1_cc_vs_poa_7",
    type: "single",
    prompt: "Time limits to lay charges are generally described as:",
    choices: [
      "No time limits for any offence",
      "Indictable offences have no time limit; many POA charges often have a 6-month limit unless stated otherwise",
      "All offences must be laid within 30 days",
      "All POA offences have no time limit",
    ],
    answerIndex: 1,
    explanation: "Indictable: no limit; POA: often 6 months unless specified.",
    subject: "Provincial",
    topic: "Criminal Code vs POA",
    lecture: "Provincial Law 1",
  },
  {
    id: "prov1_cc_vs_poa_8",
    type: "single",
    prompt: "Officer discretion is generally described as:",
    choices: [
      "Greater under the Criminal Code and limited under POA",
      "Limited for serious Criminal Code offences; greater discretion under POA (warnings/education/charges)",
      "Always unlimited discretion for any offence",
      "Discretion does not exist in policing",
    ],
    answerIndex: 1,
    explanation:
      "Serious criminal offences limit discretion; POA enforcement often allows greater discretion.",
    subject: "Provincial",
    topic: "Criminal Code vs POA",
    lecture: "Provincial Law 1",
  },

  // -------------------------------
  // POA as “Mother Act” + Authority Limits
  // -------------------------------
  {
    id: "prov1_motheract_1",
    type: "single",
    prompt: "The POA is called the “Mother Act” because it:",
    choices: [
      "Creates all provincial offences in Ontario",
      "Provides the procedures used to enforce other provincial statutes and regulations",
      "Contains all arrest and search authorities",
      "Only applies to Highway Traffic Act offences",
    ],
    answerIndex: 1,
    explanation:
      "The POA provides the procedural framework used to enforce other provincial statutes/regulations.",
    subject: "Provincial",
    topic: "POA Overview",
    lecture: "Provincial Law 1",
  },
  {
    id: "prov1_motheract_2",
    type: "truefalse",
    prompt:
      "True or False: The POA contains general arrest and search authorities for provincial offences.",
    answer: false,
    explanation:
      "The POA governs the process; arrest/search authorities come from specific statutes or the Criminal Code.",
    subject: "Provincial",
    topic: "POA Overview",
    lecture: "Provincial Law 1",
  },

  // -------------------------------
  // Procedural vs Substantive Example (HTA vs POA)
  // -------------------------------
  {
    id: "prov1_proc_vs_sub_1",
    type: "double",
    prompt:
      "EVENT: A person drives in Ontario without a valid driver’s licence.",
    fields: [
      {
        label: "SUBSTANTIVE LAW (creates offence)",
        options: [
          "Highway Traffic Act",
          "Provincial Offences Act",
          "Criminal Code",
          "Municipal By-law",
        ],
      },
      {
        label: "PROCEDURAL LAW (process to charge)",
        options: [
          "Highway Traffic Act",
          "Provincial Offences Act",
          "Criminal Code",
          "Municipal By-law",
        ],
      },
    ],
    answers: ["Highway Traffic Act", "Provincial Offences Act"],
    explanation:
      "HTA defines the offence (substantive). POA sets out the process to issue/serve/file or summons (procedural).",
    subject: "Provincial",
    topic: "Procedural vs Substantive",
    lecture: "Provincial Law 1",
  },

  // -------------------------------
  // Statutes in Ontario + Naming Rule
  // -------------------------------
  {
    id: "prov1_statutes_1",
    type: "single",
    prompt:
      "Ontario has (approximately) how many provincial statutes, according to the notes?",
    choices: ["Over 54", "Over 140", "Over 540", "Over 5,400"],
    answerIndex: 2,
    explanation: "The notes state Ontario has over 540 provincial statutes.",
    subject: "Provincial",
    topic: "Statutes & Charge Wording",
    lecture: "Provincial Law 1",
  },
  {
    id: "prov1_statutes_2",
    type: "single",
    prompt:
      "When writing charges on Certificates of Offence and Summons, officers should:",
    choices: [
      "Use abbreviations like HTA to save time",
      "Always write the full name of the Act",
      "Only write the section number",
      "Only write the offence wording (no Act needed)",
    ],
    answerIndex: 1,
    explanation:
      "You must write the full name of the Act to avoid confusion (abbreviations may overlap).",
    subject: "Provincial",
    topic: "Statutes & Charge Wording",
    lecture: "Provincial Law 1",
  },
  {
    id: "prov1_statutes_3",
    type: "single",
    prompt:
      "Why is using short forms like 'HTA' discouraged on charging documents?",
    choices: [
      "Short forms are illegal in Ontario",
      "Abbreviations can match multiple Acts, causing confusion",
      "Courts refuse to accept any abbreviations ever",
      "HTA is not enforceable without full wording",
    ],
    answerIndex: 1,
    explanation:
      "Abbreviations can overlap with other statutes (e.g., 'HTA' could refer to different Acts).",
    subject: "Provincial",
    topic: "Statutes & Charge Wording",
    lecture: "Provincial Law 1",
  },

  // -------------------------------
  // Provincial Law Curriculum (Acts Covered)
  // -------------------------------
  {
    id: "prov1_curriculum_1",
    type: "multi",
    prompt:
      "Which Acts are listed as substantive Acts covered in the provincial law curriculum? (Select ALL that apply)",
    choices: [
      "Residential Tenancies Act",
      "Liquor Licence and Control Act",
      "Cannabis Control Act",
      "Trespass to Property Act",
      "Mental Health Act",
      "Child, Youth and Family Services Act",
      "Family Law Act",
      "Children’s Law Reform Act",
      "Highway Traffic Act",
      "Interpretation Act",
    ],
    answerIndices: [0, 1, 2, 3, 4, 5, 6, 7, 8],
    explanation:
      "These are listed substantive Acts in the course; the Interpretation Act is not listed in that curriculum list.",
    subject: "Provincial",
    topic: "Course Scope",
    lecture: "Provincial Law 1",
  },

  // -------------------------------
  // Short Form Wording Book
  // -------------------------------
  {
    id: "prov1_sfw_1",
    type: "single",
    prompt: "The Short Form Wording Book is primarily used by officers to:",
    choices: [
      "Find standardized offence wording and set fines",
      "Replace reading the actual statute",
      "Determine guilt at the roadside",
      "Draft Criminal Code informations",
    ],
    answerIndex: 0,
    explanation:
      "It provides standardized offence wording and set fines for many offences, organized by Act/regulation.",
    subject: "Provincial",
    topic: "Short Form Wording Book",
    lecture: "Provincial Law 1",
  },
  {
    id: "prov1_sfw_2",
    type: "multi",
    prompt:
      "Which statements about the Short Form Wording Book are correct? (Select ALL that apply)",
    choices: [
      "It is organized by Act and Regulation",
      "It includes set fines for many minor offences",
      "It can include offences without set fines (NSF)",
      "It contains useful reference information about HTA authorities",
      "It replaces the need to verify the exact statute section",
    ],
    answerIndices: [0, 1, 2, 3],
    explanation:
      "It’s organized by Act/regulation, includes set fines, may include NSF offences, and can contain reference info; it should not replace verifying the statute.",
    subject: "Provincial",
    topic: "Short Form Wording Book",
    lecture: "Provincial Law 1",
  },
  {
    id: "prov1_sfw_3",
    type: "truefalse",
    prompt:
      "True or False: If no approved short form wording exists, an officer is never allowed to create one.",
    answer: false,
    explanation:
      "Sections 13 and 25 POA allow an officer to create a short form wording if none exists, provided it is clear and understandable.",
    subject: "Provincial",
    topic: "Short Form Wording Book",
    lecture: "Provincial Law 1",
  },
  {
    id: "prov1_sfw_4",
    type: "multi",
    prompt:
      "If an officer must create a short form wording under POA s.13 & s.25, the wording must: (Select ALL that apply)",
    choices: [
      "Be clear and understandable",
      "Allow the defendant to research the charge themselves",
      "Use police shorthand and acronyms only",
      "Be vague to preserve officer discretion",
    ],
    answerIndices: [0, 1],
    explanation:
      "The wording must be clear/understandable and allow the defendant to research the charge.",
    subject: "Provincial",
    topic: "Short Form Wording Book",
    lecture: "Provincial Law 1",
  },
  {
    id: "prov1_sfw_5",
    type: "single",
    prompt:
      "If the short form wording is not approved/accurate, the charge may be dismissed as:",
    choices: ["Time-barred", "Unknown to law", "Charter breach", "Vexatious"],
    answerIndex: 1,
    explanation:
      "An unapproved/inaccurate short form wording can make the charge 'unknown to law' and lead to dismissal.",
    subject: "Provincial",
    topic: "Short Form Wording Book",
    lecture: "Provincial Law 1",
  },
  {
    id: "prov1_sfw_practice_1",
    type: "single",
    prompt:
      "Practice: Locate the short form wording for 'HTA 106(2) – Driver – Fail to properly wear seat belt.' What is the correct next step after locating it?",
    choices: [
      "Use it without checking the Act",
      "Confirm the statute section and required elements in the HTA",
      "Write only the wording (no Act name/section)",
      "Convert it automatically into a Part III summons",
    ],
    answerIndex: 1,
    explanation:
      "Short form helps you write the charge, but you still must confirm the actual statutory wording/elements in the HTA.",
    subject: "Provincial",
    topic: "Short Form Wording Book",
    lecture: "Provincial Law 1",
  },

  // -------------------------------
  // Two Paths: Part I vs Part III
  // -------------------------------
  {
    id: "prov1_paths_1",
    type: "single",
    prompt:
      "Under the POA, the two main ways officers commence a proceeding are:",
    choices: [
      "Part I and Part II",
      "Part I and Part III",
      "Part II and Part IV",
      "Part III and Part V",
    ],
    answerIndex: 1,
    explanation:
      "The notes describe Part I and Part III as the two main ways to commence proceedings for provincial offences.",
    subject: "Provincial",
    topic: "Commencing Proceedings",
    lecture: "Provincial Law 1",
  },
  {
    id: "prov1_part1_1",
    type: "single",
    prompt: "Part I (Certificate of Offence) is generally used for:",
    choices: [
      "More serious offences without set fines",
      "Minor offences where a less formal ticket process is appropriate",
      "Criminal Code offences",
      "Offences that always carry jail",
    ],
    answerIndex: 1,
    explanation:
      "Part I is typically used for minor offences and is less formal (often set fines).",
    subject: "Provincial",
    topic: "Part I vs Part III",
    lecture: "Provincial Law 1",
  },
  {
    id: "prov1_part3_1",
    type: "single",
    prompt: "Part III (Summons) is generally used for:",
    choices: [
      "Minor offences with set fines",
      "More serious offences, including those with no set fine (NSF)",
      "Parking offences only",
      "Only offences under the HTA",
    ],
    answerIndex: 1,
    explanation:
      "Part III is more formal and is used for more serious offences and NSF offences requiring court-determined penalty.",
    subject: "Provincial",
    topic: "Part I vs Part III",
    lecture: "Provincial Law 1",
  },
  {
    id: "prov1_nsf_1",
    type: "single",
    prompt:
      "If an offence has no set fine (NSF), the notes state the officer must generally proceed by:",
    choices: [
      "Part I Offence Notice",
      "Part III Summons",
      "Verbal warning only",
      "Criminal Code information",
    ],
    answerIndex: 1,
    explanation:
      "NSF offences require a summons under Part III so the court can set the penalty.",
    subject: "Provincial",
    topic: "No Set Fine (NSF)",
    lecture: "Provincial Law 1",
  },
  {
    id: "prov1_thresholds_1",
    type: "single",
    prompt: "The grounds standard described for Part I issuance is based on:",
    choices: [
      "A belief that an offence occurred",
      "Reasonable and probable grounds",
      "Reasonable suspicion",
      "Proof beyond a reasonable doubt",
    ],
    answerIndex: 0,
    explanation:
      "Part I is described as based on an officer’s belief (lower threshold than Part III).",
    subject: "Provincial",
    topic: "Grounds / Thresholds",
    lecture: "Provincial Law 1",
  },
  {
    id: "prov1_thresholds_2",
    type: "single",
    prompt: "The grounds standard described for Part III is:",
    choices: [
      "Belief only",
      "Reasonable and probable grounds",
      "No grounds required",
      "Suspicion only",
    ],
    answerIndex: 1,
    explanation:
      "Part III is described as requiring reasonable and probable grounds (same concept as reasonable grounds).",
    subject: "Provincial",
    topic: "Grounds / Thresholds",
    lecture: "Provincial Law 1",
  },

  // -------------------------------
  // Choosing the Best Option
  // -------------------------------
  {
    id: "prov1_decision_1",
    type: "multi",
    prompt:
      "When detecting a provincial offence, the notes say an officer should ask: (Select ALL that apply)",
    choices: [
      "Is an offence being committed? (statute/section)",
      "What is the best option? (warning/education/ticket/summons)",
      "If laying a charge, which POA Part applies?",
      "Will the defendant definitely plead guilty?",
    ],
    answerIndices: [0, 1, 2],
    explanation:
      "Decision-making includes identifying the offence, choosing the best enforcement option, and selecting the correct POA Part.",
    subject: "Provincial",
    topic: "Officer Decision-Making",
    lecture: "Provincial Law 1",
  },

  // -------------------------------
  // Factors: Part I vs Part III
  // -------------------------------
  {
    id: "prov1_factors_1",
    type: "multi",
    prompt:
      "Which factors are listed for deciding Part I vs Part III? (Select ALL that apply)",
    choices: [
      "Whether there is a set fine",
      "Timing since the offence",
      "Seriousness of the offence",
      "Potential consequences/penalties (e.g., jail/high fine)",
      "Circumstances and context (risk, intent, aggravating factors)",
      "Whether the officer personally prefers court",
    ],
    answerIndices: [0, 1, 2, 3, 4],
    explanation:
      "The notes list set fines, timing, seriousness, consequences, and context; personal preference is not a listed factor.",
    subject: "Provincial",
    topic: "Part Selection Factors",
    lecture: "Provincial Law 1",
  },
  {
    id: "prov1_penalty_part1_1",
    type: "single",
    prompt:
      "Under POA Part I, the maximum fine after conviction cannot exceed:",
    choices: ["$300", "$500", "$1,000", "$5,000"],
    answerIndex: 2,
    explanation:
      "Part I convictions are capped at $1,000 (excluding victim fine surcharge), even if the statute lists higher.",
    subject: "Provincial",
    topic: "Penalties (Part I vs Part III)",
    lecture: "Provincial Law 1",
  },
  {
    id: "prov1_penalty_part1_2",
    type: "truefalse",
    prompt: "True or False: Imprisonment penalties can apply under Part I.",
    answer: false,
    explanation:
      "Part I cannot be used where imprisonment is a possible penalty; no jail under Part I.",
    subject: "Provincial",
    topic: "Penalties (Part I vs Part III)",
    lecture: "Provincial Law 1",
  },
  {
    id: "prov1_penalty_part3_1",
    type: "single",
    prompt:
      "Under POA Part III (general maximum), the notes state the fine can be up to:",
    choices: ["$1,000", "$2,000", "$5,000", "$10,000"],
    answerIndex: 2,
    explanation:
      "Part III general maximum fine is up to $5,000 unless another statute states otherwise.",
    subject: "Provincial",
    topic: "Penalties (Part I vs Part III)",
    lecture: "Provincial Law 1",
  },
  {
    id: "prov1_penalty_part3_2",
    type: "truefalse",
    prompt:
      "True or False: Under Part III, imprisonment may be possible if the substantive statute authorizes it.",
    answer: true,
    explanation:
      "Part III can include imprisonment if authorized by the statute creating the offence.",
    subject: "Provincial",
    topic: "Penalties (Part I vs Part III)",
    lecture: "Provincial Law 1",
  },

  // -------------------------------
  // Part I Three-Step Process: Issue → Serve → File
  // -------------------------------
  {
    id: "prov1_part1_steps_1",
    type: "single",
    prompt: "Part I enforcement follows which three-step process?",
    choices: [
      "Arrest → Search → Release",
      "Issue → Serve → File",
      "Warn → Charge → Convict",
      "Stop → Identify → Tow",
    ],
    answerIndex: 1,
    explanation: "Part I uses Issue → Serve → File.",
    subject: "Provincial",
    topic: "Part I Process",
    lecture: "Provincial Law 1",
  },
  {
    id: "prov1_issue_1",
    type: "single",
    prompt: "In Part I, 'ISSUE' means:",
    choices: [
      "Handing the ticket to the defendant",
      "Filling out the Certificate of Offence (snap-set form)",
      "Filing the charge at the courthouse",
      "Scheduling the trial date",
    ],
    answerIndex: 1,
    explanation:
      "Issue = complete the Certificate of Offence (the ticket form).",
    subject: "Provincial",
    topic: "Part I Process",
    lecture: "Provincial Law 1",
  },
  {
    id: "prov1_serve_1",
    type: "single",
    prompt: "In Part I, 'SERVE' means:",
    choices: [
      "Mailing the Offence Notice to the defendant",
      "Leaving the Offence Notice on a windshield",
      "Personally delivering the signed Offence Notice to the defendant",
      "Submitting the Certificate to your detachment drop box",
    ],
    answerIndex: 2,
    explanation:
      "Serve = personal service: hand the signed Offence Notice directly to the defendant.",
    subject: "Provincial",
    topic: "Part I Process",
    lecture: "Provincial Law 1",
  },
  {
    id: "prov1_file_1",
    type: "single",
    prompt: "In Part I, 'FILE' means:",
    choices: [
      "Entering your notes into your notebook",
      "Submitting the signed Certificate of Offence to the court office (through your agency process)",
      "Serving the Offence Notice",
      "Issuing a Part III summons",
    ],
    answerIndex: 1,
    explanation:
      "File = submit the signed Certificate of Offence to be filed with the court (via your detachment/court process).",
    subject: "Provincial",
    topic: "Part I Process",
    lecture: "Provincial Law 1",
  },
  {
    id: "prov1_commence_1",
    type: "single",
    prompt: "For Part I offences, proceedings commence when:",
    choices: [
      "The offence is observed",
      "The ticket is issued",
      "The Offence Notice is served",
      "The Certificate of Offence is filed with the court",
    ],
    answerIndex: 3,
    explanation:
      "For Part I, the court process begins only when the Certificate of Offence is filed.",
    subject: "Provincial",
    topic: "Commencement of Proceedings",
    lecture: "Provincial Law 1",
  },

  // -------------------------------
  // Part I Timelines
  // -------------------------------
  {
    id: "prov1_timelines_1",
    type: "multi",
    prompt: "Part I timelines include which rules? (Select ALL that apply)",
    choices: [
      "Issue within 30 days of offence date",
      "Serve within 30 days of offence date",
      "File as soon as practicable after service, but no later than 7 days after service",
      "File within 30 days of offence date no matter what",
    ],
    answerIndices: [0, 1, 2],
    explanation:
      "Issue/serve within 30 days; file ASAP after service but no later than 7 days after service.",
    subject: "Provincial",
    topic: "Part I Timelines",
    lecture: "Provincial Law 1",
  },
  {
    id: "prov1_timelines_2",
    type: "single",
    prompt:
      "If the Offence Notice is NOT served within 30 days of the offence date, the notes indicate:",
    choices: [
      "Proceedings still commence as long as it is filed",
      "Part I can no longer be used and another method (often Part III) may be required",
      "The charge automatically becomes a criminal offence",
      "The defendant is automatically convicted",
    ],
    answerIndex: 1,
    explanation:
      "Late service prevents Part I use; you must consider other lawful options (often Part III).",
    subject: "Provincial",
    topic: "Part I Timelines",
    lecture: "Provincial Law 1",
  },
  {
    id: "prov1_timelines_3",
    type: "single",
    prompt:
      "After serving the defendant, the Certificate of Offence must be filed no later than:",
    choices: ["24 hours", "3 days", "7 days", "15 days"],
    answerIndex: 2,
    explanation: "The filing deadline is no later than 7 days after service.",
    subject: "Provincial",
    topic: "Part I Timelines",
    lecture: "Provincial Law 1",
  },

  // -------------------------------
  // Issue/Serve Details (Signing Order)
  // -------------------------------
  {
    id: "prov1_signing_1",
    type: "single",
    prompt: "Before serving a Part I Offence Notice, the officer must:",
    choices: [
      "Sign the Certificate of Offence first",
      "Sign the Offence Notice first (before serving it)",
      "Have the defendant sign the Offence Notice",
      "File the ticket before service",
    ],
    answerIndex: 1,
    explanation:
      "The officer signs the Offence Notice first, before personal service.",
    subject: "Provincial",
    topic: "Part I Process (Signing/Service)",
    lecture: "Provincial Law 1",
  },
  {
    id: "prov1_service_2",
    type: "truefalse",
    prompt:
      "True or False: Leaving an Offence Notice in a mailbox or on a windshield counts as proper Part I service.",
    answer: false,
    explanation:
      "Part I service must be personal service—handed directly to the defendant.",
    subject: "Provincial",
    topic: "Part I Process (Service)",
    lecture: "Provincial Law 1",
  },

  // -------------------------------
  // Part I Limitations (Offence Notice vs Summons, Youth, Max fine)
  // -------------------------------
  {
    id: "prov1_limit_1",
    type: "multi",
    prompt:
      "Under Part I, officers may issue which documents? (Select ALL that apply)",
    choices: [
      "Offence Notice",
      "Summons",
      "Criminal Code Appearance Notice",
      "Bench Warrant",
    ],
    answerIndices: [0, 1],
    explanation:
      "Part I allows for an Offence Notice (set fine) or a Summons (court date, no set fine listed).",
    subject: "Provincial",
    topic: "Part I Limitations",
    lecture: "Provincial Law 1",
  },
  {
    id: "prov1_limit_2",
    type: "single",
    prompt:
      "A key difference stated in the notes: an Offence Notice vs a Summons is that:",
    choices: [
      "Offence Notice orders court attendance; Summons gives a choice",
      "Offence Notice gives options/choice; Summons orders court attendance",
      "Both always require court attendance",
      "Neither involves any court process",
    ],
    answerIndex: 1,
    explanation:
      "Offence Notice: defendant chooses options; Summons: defendant is ordered to attend court.",
    subject: "Provincial",
    topic: "Part I Limitations",
    lecture: "Provincial Law 1",
  },
  {
    id: "prov1_youth_1",
    type: "single",
    prompt: "Under Part I, youth aged 12–15 may ONLY be served with a:",
    choices: [
      "Offence Notice",
      "Part I Summons",
      "Part III Summons",
      "Written warning",
    ],
    answerIndex: 1,
    explanation:
      "The notes state youth aged 12–15 may only be served with a Part I Summons.",
    subject: "Provincial",
    topic: "Youth Considerations",
    lecture: "Provincial Law 1",
  },
  {
    id: "prov1_youth_2",
    type: "single",
    prompt: "Under Part I, the maximum fine for a youth aged 12–15 is:",
    choices: ["$300", "$500", "$1,000", "$5,000"],
    answerIndex: 0,
    explanation:
      "The notes state youth maximum fine is $300 (not including surcharges).",
    subject: "Provincial",
    topic: "Youth Considerations",
    lecture: "Provincial Law 1",
  },

  // -------------------------------
  // Defendant Options (Back of Offence Notice)
  // -------------------------------
  {
    id: "prov1_options_1",
    type: "multi",
    prompt:
      "On the back of an Offence Notice, defendants have which three options? (Select ALL that apply)",
    choices: [
      "Plea of Guilty (pay the set fine)",
      "Early Resolution (meet with prosecutor)",
      "Trial (dispute in court)",
      "Appeal to Superior Court immediately",
    ],
    answerIndices: [0, 1, 2],
    explanation:
      "The three options are guilty plea/payment, early resolution, or trial.",
    subject: "Provincial",
    topic: "Offence Notice Options",
    lecture: "Provincial Law 1",
  },
  {
    id: "prov1_options_2",
    type: "truefalse",
    prompt:
      "True or False: When serving an Offence Notice, it is best practice to explain the options to the defendant and note that you did so.",
    answer: true,
    explanation:
      "The notes state it’s best practice to explain the options and record that service/options were explained.",
    subject: "Provincial",
    topic: "Offence Notice Options",
    lecture: "Provincial Law 1",
  },

  // -------------------------------
  // Failure to Respond (15 days)
  // -------------------------------
  {
    id: "prov1_fail_1",
    type: "single",
    prompt:
      "If a defendant does nothing within 15 days of being served with an Offence Notice, they are deemed to:",
    choices: [
      "Have requested a trial",
      "Not dispute the charge",
      "Have the charge withdrawn",
      "Be automatically acquitted",
    ],
    answerIndex: 1,
    explanation:
      "After 15 days with no response, the defendant is deemed not to dispute the charge.",
    subject: "Provincial",
    topic: "Failure to Respond",
    lecture: "Provincial Law 1",
  },
  {
    id: "prov1_fail_2",
    type: "multi",
    prompt:
      "A conviction may be entered after failure to respond provided the Certificate of Offence is: (Select ALL that apply)",
    choices: [
      "Complete",
      "Accurate",
      "Regular on its face (no fatal errors)",
      "Signed by the defendant",
    ],
    answerIndices: [0, 1, 2],
    explanation:
      "The notes state conviction can be entered if the filed certificate is complete, accurate, and regular on its face.",
    subject: "Provincial",
    topic: "Failure to Respond",
    lecture: "Provincial Law 1",
  },
  // -------------------------------
  // Review: Facts in Issue / T.I.P.P.
  // -------------------------------
  {
    id: "hta3_fii_1",
    type: "multi",
    prompt:
      "In a Highway Traffic Act charge, common 'facts in issue' include: (Select ALL that apply)",
    choices: [
      "Time and date (when)",
      "Identity (who)",
      "Place (where)",
      "Specific facts for the particular charge (what)",
      "The accused's criminal record",
    ],
    answerIndices: [0, 1, 2, 3],
    explanation:
      "Facts in issue generally include when, who, where, and the specific elements for the charge (what).",
    subject: "Highway Traffic Act",
    topic: "Facts in Issue",
    lecture: "Highway Traffic Act 3: Police Authorities",
  },
  {
    id: "hta3_fii_2",
    type: "single",
    prompt: "The slide deck summarizes facts in issue using which acronym?",
    choices: ["RCA", "T.I.P.P.", "PRICES", "L.E."],
    answerIndex: 1,
    explanation:
      "The deck lists 'T.I.P.P.' as part of the facts-in-issue review.",
    subject: "Highway Traffic Act",
    topic: "Facts in Issue",
    lecture: "Highway Traffic Act 3: Police Authorities",
  },

  // -------------------------------
  // Objectives / Where Authorities Come From
  // -------------------------------
  {
    id: "hta3_obj_1",
    type: "multi",
    prompt: "The objectives of this session include: (Select ALL that apply)",
    choices: [
      "Authority to stop motor vehicles",
      "Other police authorities under the HTA",
      "How to draft subpoenas",
      "How to lay Criminal Code informations",
    ],
    answerIndices: [0, 1],
    explanation:
      "This session focuses on HTA authorities, especially stopping vehicles and other police powers under the HTA.",
    subject: "Highway Traffic Act",
    topic: "Objectives",
    lecture: "Highway Traffic Act 3: Police Authorities",
  },
  {
    id: "hta3_sources_1",
    type: "multi",
    prompt:
      "According to the session, police authorities discussed here are found in: (Select ALL that apply)",
    choices: [
      "Highway Traffic Act and Regulations",
      "Macbeth (Short Form Wording) book",
      "Only municipal by-laws",
      "Only the Criminal Code",
    ],
    answerIndices: [0, 1],
    explanation:
      "The deck points to the HTA/Regs and the Macbeth Short Form Wording book as sources used in this context.",
    subject: "Highway Traffic Act",
    topic: "Authorities Sources",
    lecture: "Highway Traffic Act 3: Police Authorities",
  },

  // -------------------------------
  // Authority to Stop Vehicles (HTA 216(1))
  // -------------------------------
  {
    id: "hta3_stop_216_1",
    type: "single",
    prompt: "HTA 216(1) generally authorizes a police officer to:",
    choices: [
      "Arrest any driver without grounds",
      "Require the driver of a vehicle to stop (lawful execution of duties)",
      "Search any vehicle for any reason",
      "Seize a driver’s licence in every stop",
    ],
    answerIndex: 1,
    explanation:
      "HTA 216(1) provides authority to require a driver to stop when the officer is in lawful execution of duties and readily identifiable.",
    subject: "Highway Traffic Act",
    topic: "Authority to Stop",
    lecture: "Highway Traffic Act 3: Police Authorities",
  },
  {
    id: "hta3_stop_216_2",
    type: "truefalse",
    prompt:
      "True or False: Under HTA 216(1), when signaled to stop by a readily identifiable officer, a driver shall immediately come to a safe stop.",
    answer: true,
    explanation:
      "The section requires an immediate safe stop when properly signaled/requested by a readily identifiable officer acting lawfully.",
    subject: "Highway Traffic Act",
    topic: "Authority to Stop",
    lecture: "Highway Traffic Act 3: Police Authorities",
  },

  // -------------------------------
  // Authority to Stop for Impairment Screening (HTA 48(1))
  // -------------------------------
  {
    id: "hta3_stop_48_1",
    type: "single",
    prompt:
      "HTA 48(1) allows an officer to require a driver to stop for the purpose of:",
    choices: [
      "Checking vehicle modifications",
      "Determining whether there is evidence to justify making a Criminal Code demand (s.320.27 or s.320.28)",
      "Issuing parking tickets",
      "Inspecting cargo manifests only",
    ],
    answerIndex: 1,
    explanation:
      "HTA 48(1) is tied to impairment demand grounds (Criminal Code screening/demand provisions).",
    subject: "Highway Traffic Act",
    topic: "Authority to Stop (Impairment)",
    lecture: "Highway Traffic Act 3: Police Authorities",
  },
  {
    id: "hta3_stop_48_2",
    type: "multi",
    prompt:
      "HTA 48(1) is described as allowing spot checks such as: (Select ALL that apply)",
    choices: [
      "RIDE program stops",
      "Stops where evidence of impairment exists",
      "Only collisions",
      "Only commercial vehicle scales",
    ],
    answerIndices: [0, 1],
    explanation:
      "The deck describes RIDE-style spot checks and stops where impairment evidence exists.",
    subject: "Highway Traffic Act",
    topic: "Authority to Stop (Impairment)",
    lecture: "Highway Traffic Act 3: Police Authorities",
  },
  {
    id: "hta3_stop_48_3",
    type: "multi",
    prompt:
      "For HTA 48(1), the definition of 'motor vehicle' for that section is stated as including: (Select ALL that apply)",
    choices: ["Street car", "Motorized snow vehicle", "Bicycle", "Wheelchair"],
    answerIndices: [0, 1],
    explanation:
      "The slide notes MV definition for this section includes a street car and a motorized snow vehicle.",
    subject: "Highway Traffic Act",
    topic: "Authority to Stop (Impairment)",
    lecture: "Highway Traffic Act 3: Police Authorities",
  },

  // -------------------------------
  // Case law: reason for stop / not arbitrary
  // -------------------------------
  {
    id: "hta3_case_1",
    type: "single",
    prompt:
      "Case law in the deck emphasizes that officers must be able to articulate a reason for a traffic stop so it is not:",
    choices: ["Delayed", "Arbitrary", "Written", "Recorded"],
    answerIndex: 1,
    explanation:
      "The deck stresses you must articulate/explain your reason so the stop is not arbitrary.",
    subject: "Highway Traffic Act",
    topic: "Case Law – Traffic Stops",
    lecture: "Highway Traffic Act 3: Police Authorities",
  },
  {
    id: "hta3_case_2",
    type: "single",
    prompt:
      "According to the deck, the reason to stop a motor vehicle on a highway:",
    choices: [
      "Must always be based on an HTA offence",
      "Does not have to be an unlawful reason (public safety can be enough)",
      "Must always be approved by a supervisor first",
      "Must always be based on a Criminal Code investigation",
    ],
    answerIndex: 1,
    explanation:
      "The deck explains you need a reason for the stop, and it doesn't have to be an unlawful reason (public safety qualifies).",
    subject: "Highway Traffic Act",
    topic: "Case Law – Traffic Stops",
    lecture: "Highway Traffic Act 3: Police Authorities",
  },

  // -------------------------------
  // Arrest authority + POA Release (POA s.149)
  // -------------------------------
  {
    id: "hta3_release_1",
    type: "truefalse",
    prompt:
      "True or False: The deck states arrest authority is found in the HTA, while release options are found in POA s.149.",
    answer: true,
    explanation:
      "Arrest authorities are under HTA sections; release framework is referenced under POA 149.",
    subject: "Highway Traffic Act",
    topic: "Arrest & Release",
    lecture: "Highway Traffic Act 3: Police Authorities",
  },
  {
    id: "hta3_release_2",
    type: "single",
    prompt:
      "Under POA 149(1), after arresting under a warrant or other power of arrest, the officer shall (generally):",
    choices: [
      "Hold the person until trial",
      "Release as soon as practicable after serving a summons or offence notice (unless criteria apply)",
      "Release only if the person pays a deposit",
      "Release only with a surety present",
    ],
    answerIndex: 1,
    explanation:
      "POA 149 emphasizes release as soon as practicable after serving a summons/offence notice, unless exceptions apply.",
    subject: "Highway Traffic Act",
    topic: "Arrest & Release",
    lecture: "Highway Traffic Act 3: Police Authorities",
  },
  {
    id: "hta3_release_3",
    type: "multi",
    prompt:
      "POA 149 lists release exceptions where detention may be necessary to: (Select ALL that apply)",
    choices: [
      "Establish identity",
      "Secure or preserve evidence",
      "Prevent continuation/repetition of the offence or commission of another offence",
      "Punish the person immediately",
    ],
    answerIndices: [0, 1, 2],
    explanation:
      "The listed reasons include identity, evidence, and preventing continuation/repetition/another offence.",
    subject: "Highway Traffic Act",
    topic: "Arrest & Release",
    lecture: "Highway Traffic Act 3: Police Authorities",
  },
  {
    id: "hta3_release_4",
    type: "single",
    prompt:
      "POA 149 also notes an exception related to a person who is ordinarily resident:",
    choices: [
      "Outside Ontario",
      "Outside Canada",
      "Outside the city",
      "Outside the detachment area",
    ],
    answerIndex: 0,
    explanation:
      "An exception is where the person is ordinarily resident outside Ontario and will not respond to a summons/offence notice.",
    subject: "Highway Traffic Act",
    topic: "Arrest & Release",
    lecture: "Highway Traffic Act 3: Police Authorities",
  },
  {
    id: "hta3_release_5",
    type: "multi",
    prompt:
      "Provincial release criteria acronym shown as 'P.R.I.E.R.' includes which items? (Select ALL that apply)",
    choices: [
      "Public Interest",
      "Repetition",
      "Identity",
      "Evidence",
      "Resides outside Ontario",
      "Court",
    ],
    answerIndices: [0, 1, 2, 3, 4],
    explanation:
      "The deck contrasts federal PRICES with provincial PRIER (Public Interest, Repetition, Identity, Evidence, Resides outside Ontario).",
    subject: "Highway Traffic Act",
    topic: "Release Criteria",
    lecture: "Highway Traffic Act 3: Police Authorities",
  },

  // -------------------------------
  // Arrestable offences overview (HTA 217(2))
  // -------------------------------
  {
    id: "hta3_arrest_217_1",
    type: "single",
    prompt: "HTA 217(2) is described as allowing arrest (on RPG) for:",
    choices: [
      "Any HTA offence",
      "Certain listed offences (arrestable offences are italicized in the SFW book)",
      "Only Criminal Code offences",
      "Only offences with set fines",
    ],
    answerIndex: 1,
    explanation:
      "The deck explains HTA 217(2) provides arrest authority on RPG for listed offences (not all offences).",
    subject: "Highway Traffic Act",
    topic: "Arrest Authorities",
    lecture: "Highway Traffic Act 3: Police Authorities",
  },

  // -------------------------------
  // Driver fail to identify (HTA 33(3))
  // -------------------------------
  {
    id: "hta3_ident_33_1",
    type: "multi",
    prompt:
      "For arrest authority under HTA 33(3) (Driver fail to identify), the deck says you must have BOTH: (Select TWO)",
    choices: [
      "Unable/refuses to surrender driver’s licence",
      "Fail to give reasonable identification",
      "Vehicle is unplated",
      "Driver admits the offence",
    ],
    answerIndices: [0, 1],
    explanation:
      "The slide states both conditions must exist to arrest without warrant under 33(3).",
    subject: "Highway Traffic Act",
    topic: "Identification",
    lecture: "Highway Traffic Act 3: Police Authorities",
  },
  {
    id: "hta3_ident_33_2",
    type: "single",
    prompt:
      "In the context of HTA 33(3), 'reasonable inspection' of a driver’s licence means:",
    choices: [
      "Looking at it through the windshield",
      "Holding it in your hand to determine validity",
      "Taking a photo only",
      "Letting the driver read it to you",
    ],
    answerIndex: 1,
    explanation:
      "The deck explains reasonable inspection means holding it in hand to determine validity (not viewing through a window).",
    subject: "Highway Traffic Act",
    topic: "Identification",
    lecture: "Highway Traffic Act 3: Police Authorities",
  },
  {
    id: "hta3_ident_33_3",
    type: "single",
    prompt:
      "For HTA 33(3), reasonable identification is described as including verbally providing a correct:",
    choices: [
      "Name only",
      "Name and address",
      "Name and phone number",
      "DOB only",
    ],
    answerIndex: 1,
    explanation:
      "The deck states reasonable identification includes verbally providing a correct name and address.",
    subject: "Highway Traffic Act",
    topic: "Identification",
    lecture: "Highway Traffic Act 3: Police Authorities",
  },

  // -------------------------------
  // Passenger ID general rule + seatbelt exception (HTA 106(8.2))
  // -------------------------------
  {
    id: "hta3_passenger_1",
    type: "single",
    prompt:
      "As a general rule, is a passenger who appears to be over 16 required to identify themselves on demand?",
    choices: ["Yes", "No"],
    answerIndex: 1,
    explanation: "The deck states the general rule is NO, with exceptions.",
    subject: "Highway Traffic Act",
    topic: "Identification",
    lecture: "Highway Traffic Act 3: Police Authorities",
  },
  {
    id: "hta3_passenger_106_1",
    type: "multi",
    prompt:
      "HTA 106(8.2) creates an exception where a passenger must identify if: (Select ALL that apply)",
    choices: [
      "Passenger is in a motor vehicle on a highway",
      "Passenger appears to be at least 16",
      "There is reason to believe they are contravening seat belt legislation",
      "Passenger is sitting in the back seat",
    ],
    answerIndices: [0, 1, 2],
    explanation:
      "The slide lists the conditions: on highway, appears 16+, reason to believe seatbelt contravention.",
    subject: "Highway Traffic Act",
    topic: "Seatbelts / Passenger ID",
    lecture: "Highway Traffic Act 3: Police Authorities",
  },
  {
    id: "hta3_passenger_106_2",
    type: "multi",
    prompt:
      "Under HTA 106(8.2), 'reasonable identification' for the passenger is described as: (Select ALL that apply)",
    choices: [
      "Correct name",
      "Date of birth",
      "Address",
      "Driver’s licence number",
    ],
    answerIndices: [0, 1, 2],
    explanation:
      "The deck states reasonable ID includes correct name, DOB, and address.",
    subject: "Highway Traffic Act",
    topic: "Seatbelts / Passenger ID",
    lecture: "Highway Traffic Act 3: Police Authorities",
  },

  // -------------------------------
  // Careless driving (HTA 130) + CSZ NSF mention
  // -------------------------------
  {
    id: "hta3_careless_1",
    type: "single",
    prompt:
      "Careless driving in the deck is referenced under which HTA section?",
    choices: ["HTA 106", "HTA 130", "HTA 172", "HTA 216"],
    answerIndex: 1,
    explanation: "Careless driving is listed as HTA 130 in the session.",
    subject: "Highway Traffic Act",
    topic: "Arrestable Offences",
    lecture: "Highway Traffic Act 3: Police Authorities",
  },
  {
    id: "hta3_careless_2",
    type: "single",
    prompt:
      "The deck notes that 'Careless Driving – Community Safety Zone' is:",
    choices: [
      "A set fine offence",
      "No set fine (NSF)",
      "A municipal by-law only",
      "Not an offence",
    ],
    answerIndex: 1,
    explanation:
      "The slide indicates Careless Driving in a Community Safety Zone is NSF in this context.",
    subject: "Highway Traffic Act",
    topic: "Arrestable Offences",
    lecture: "Highway Traffic Act 3: Police Authorities",
  },

  // -------------------------------
  // Stunt driving / race contest (HTA 172) + specified place
  // -------------------------------
  {
    id: "hta3_stunt_1",
    type: "multi",
    prompt:
      "HTA 172 prohibits driving a motor vehicle on a highway: (Select ALL that apply)",
    choices: [
      "In a race or contest",
      "While performing a stunt",
      "On a bet or wager",
      "While listening to loud music",
    ],
    answerIndices: [0, 1, 2],
    explanation:
      "The slide lists race/contest, stunt, and bet/wager as prohibited conduct under HTA 172.",
    subject: "Highway Traffic Act",
    topic: "Arrestable Offences",
    lecture: "Highway Traffic Act 3: Police Authorities",
  },
  {
    id: "hta3_stunt_2",
    type: "multi",
    prompt:
      "As described, HTA 172 now includes certain 'specified places' such as: (Select ALL that apply)",
    choices: [
      "Parking lot",
      "Beach",
      "Park",
      "Bike path or trail",
      "Farm field",
      "Sports field",
      "Private living room",
    ],
    answerIndices: [0, 1, 2, 3, 4, 5],
    explanation:
      "The deck lists these locations as examples of specified places included in HTA 172 coverage.",
    subject: "Highway Traffic Act",
    topic: "Stunt Driving",
    lecture: "Highway Traffic Act 3: Police Authorities",
  },

  // -------------------------------
  // Pedestrian apprehension (HTA 185(3)) + focus on safety
  // -------------------------------
  {
    id: "hta3_ped_185_1",
    type: "single",
    prompt:
      "HTA 185(3) involves a pedestrian on a highway prohibited to pedestrians who may be required to:",
    choices: [
      "Pay a fine immediately",
      "Accompany an officer to the nearest intersecting highway where pedestrians are not prohibited",
      "Attend court the next day",
      "Provide fingerprints",
    ],
    answerIndex: 1,
    explanation:
      "The deck states the officer may require the pedestrian to accompany them to a safer location (nearest intersecting highway).",
    subject: "Highway Traffic Act",
    topic: "Pedestrian Authorities",
    lecture: "Highway Traffic Act 3: Police Authorities",
  },
  {
    id: "hta3_ped_185_2",
    type: "truefalse",
    prompt:
      "True or False: The pedestrian authority in HTA 185(3) is described as being focused on safety rather than being punitive.",
    answer: true,
    explanation:
      "The deck notes the authority is focused on taking the individual to a safe place rather than punishment.",
    subject: "Highway Traffic Act",
    topic: "Pedestrian Authorities",
    lecture: "Highway Traffic Act 3: Police Authorities",
  },

  // -------------------------------
  // Fail to stop for police (HTA 216(1)) + off-duty note
  // -------------------------------
  {
    id: "hta3_failstop_1",
    type: "multi",
    prompt:
      "Fail to stop for police (as presented) requires: (Select ALL that apply)",
    choices: [
      "Driver fails to stop immediately when signaled/requested",
      "Officer is in lawful execution of duty",
      "Officer is readily identifiable",
      "Driver is on private property only",
    ],
    answerIndices: [0, 1, 2],
    explanation:
      "The slide lists immediate stop requirement when signaled by a readily identifiable officer acting lawfully.",
    subject: "Highway Traffic Act",
    topic: "Fail to Stop",
    lecture: "Highway Traffic Act 3: Police Authorities",
  },
  {
    id: "hta3_failstop_2",
    type: "single",
    prompt:
      "The deck notes off-duty enforcement for fail-to-stop is generally:",
    choices: [
      "Required",
      "Not recommended except for imminent injury or death situations",
      "Always preferred",
      "Only allowed on weekends",
    ],
    answerIndex: 1,
    explanation:
      "The slide cautions off-duty enforcement is not recommended except for imminent injury/death (e.g., severely impaired driving).",
    subject: "Highway Traffic Act",
    topic: "Fail to Stop",
    lecture: "Highway Traffic Act 3: Police Authorities",
  },

  // -------------------------------
  // Squeegee kids / solicitation on roadway (HTA 177(2) + 217(3.1))
  // -------------------------------
  {
    id: "hta3_177_1",
    type: "single",
    prompt:
      "HTA 177(2) generally relates to a person on a roadway stopping/approaching vehicles to:",
    choices: [
      "Ask for directions",
      "Offer, sell, or provide a commodity or service (e.g., squeegee kids)",
      "Check tire pressure",
      "Offer a ride share",
    ],
    answerIndex: 1,
    explanation:
      "The deck references HTA 177(2) as roadway solicitation for commodity/service (example given: squeegee kids).",
    subject: "Highway Traffic Act",
    topic: "Roadway Solicitation",
    lecture: "Highway Traffic Act 3: Police Authorities",
  },
  {
    id: "hta3_21731_1",
    type: "multi",
    prompt:
      "Under HTA 217(3.1), an officer may arrest related to HTA 177(2) if: (Select ALL that apply)",
    choices: [
      "The person has contravened HTA 177(2)",
      "The person has been directed to stop",
      "There are RPG it is necessary to establish identity or prevent continuation/repetition",
      "The person refuses to buy the service",
    ],
    answerIndices: [0, 1, 2],
    explanation:
      "The slide lists contravention + directed to stop, and/or RPG necessity for identity or prevention purposes.",
    subject: "Highway Traffic Act",
    topic: "Arrest Authorities",
    lecture: "Highway Traffic Act 3: Police Authorities",
  },

  // -------------------------------
  // Picking up passengers for compensation without authorization (HTA 39.1(7))
  // -------------------------------
  {
    id: "hta3_391_1",
    type: "single",
    prompt: "HTA 39.1(7) arrest authority is described in relation to someone:",
    choices: [
      "Driving without insurance",
      "Picking up passengers for compensation without required licence/permit/authorization and failing to provide ID",
      "Failing to signal a turn",
      "Speeding in a school zone",
    ],
    answerIndex: 1,
    explanation:
      "The slide describes arrest authority tied to picking up passengers for compensation without authorization + failing to provide ID (name/DOB/address).",
    subject: "Highway Traffic Act",
    topic: "Arrest Authorities",
    lecture: "Highway Traffic Act 3: Police Authorities",
  },

  // -------------------------------
  // Cyclist stop/identify (HTA 218(4))
  // -------------------------------
  {
    id: "hta3_cyclist_1",
    type: "multi",
    prompt:
      "Under HTA 218(4), a cyclist may be required to stop and identify when: (Select ALL that apply)",
    choices: [
      "The cyclist is contravening the HTA or a by-law",
      "A police officer requires them to stop",
      "The cyclist is riding on a sidewalk where permitted",
      "The cyclist is in a bike race with a permit",
    ],
    answerIndices: [0, 1],
    explanation:
      "The slide states: cyclist contravening HTA/by-law may be required to stop; shall stop and identify.",
    subject: "Highway Traffic Act",
    topic: "Cyclist Authorities",
    lecture: "Highway Traffic Act 3: Police Authorities",
  },
  {
    id: "hta3_cyclist_2",
    type: "single",
    prompt:
      "For HTA 218(4), the deck describes the cyclist’s required identification as:",
    choices: [
      "Name and address",
      "Name only",
      "DOB only",
      "Driver’s licence number",
    ],
    answerIndex: 0,
    explanation:
      "The slide specifies name and address for cyclist identification under this authority.",
    subject: "Highway Traffic Act",
    topic: "Cyclist Authorities",
    lecture: "Highway Traffic Act 3: Police Authorities",
  },

  // -------------------------------
  // Demand surrender documents (HTA 33(1), 33(2), 7(5), 16(4), CAIA 3(1))
  // -------------------------------
  {
    id: "hta3_docs_1",
    type: "single",
    prompt: "HTA 33(1) requires a driver to:",
    choices: [
      "Carry and surrender their driver’s licence for reasonable inspection on demand",
      "Carry their passport",
      "Provide fingerprints on demand",
      "Surrender their phone to police",
    ],
    answerIndex: 0,
    explanation:
      "The slide states driver shall carry licence and surrender for reasonable inspection upon demand.",
    subject: "Highway Traffic Act",
    topic: "Surrender of Documents",
    lecture: "Highway Traffic Act 3: Police Authorities",
  },
  {
    id: "hta3_docs_2",
    type: "single",
    prompt: "HTA 33(2) applies specifically to the:",
    choices: [
      "Passenger",
      "Accompanying driver (G1 driver situation)",
      "Vehicle owner only",
      "Tow truck operator",
    ],
    answerIndex: 1,
    explanation:
      "The slide identifies 33(2) as the accompanying driver (G1) carrying and surrendering their licence for inspection.",
    subject: "Highway Traffic Act",
    topic: "Surrender of Documents",
    lecture: "Highway Traffic Act 3: Police Authorities",
  },
  {
    id: "hta3_docs_3",
    type: "multi",
    prompt:
      "The deck lists documents that must be surrendered on demand, including: (Select ALL that apply)",
    choices: [
      "Driver’s licence (HTA 33(1))",
      "Vehicle permit or true copy (HTA 7(5))",
      "CVOR (HTA 16(4)) for commercial motor vehicles",
      "Insurance card (CAIA 3(1))",
      "Birth certificate",
    ],
    answerIndices: [0, 1, 2, 3],
    explanation:
      "The slide lists DL, permit/true copy, CVOR, and proof of insurance as demand-surrender documents.",
    subject: "Highway Traffic Act",
    topic: "Surrender of Documents",
    lecture: "Highway Traffic Act 3: Police Authorities",
  },
  {
    id: "hta3_docs_4",
    type: "truefalse",
    prompt:
      "True or False: Proof of insurance may be provided electronically (as noted in the deck).",
    answer: true,
    explanation:
      "The slide notes electronic proof of insurance is acceptable (date referenced in the deck).",
    subject: "Highway Traffic Act",
    topic: "Surrender of Documents",
    lecture: "Highway Traffic Act 3: Police Authorities",
  },

  // -------------------------------
  // Search authorities: radar detector (79(3)), interlock (79.2), pre-empt device (79.1(3))
  // -------------------------------
  {
    id: "hta3_search_79_1",
    type: "single",
    prompt:
      "HTA 79(3) provides authority (without warrant) to stop/enter/search a motor vehicle when an officer believes it contains a:",
    choices: [
      "Breathalyzer",
      "Speed measuring warning device (radar detector)",
      "Dash camera",
      "Winter tire gauge",
    ],
    answerIndex: 1,
    explanation:
      "The slide describes radar detector searches/seizure under 79(3).",
    subject: "Highway Traffic Act",
    topic: "Search Authorities",
    lecture: "Highway Traffic Act 3: Police Authorities",
  },
  {
    id: "hta3_search_79_2",
    type: "truefalse",
    prompt:
      "True or False: The radar detector search authority includes authority to search the driver or occupants.",
    answer: false,
    explanation:
      "The deck notes no search authority for driver or occupants (vehicle search/seizure only).",
    subject: "Highway Traffic Act",
    topic: "Search Authorities",
    lecture: "Highway Traffic Act 3: Police Authorities",
  },
  {
    id: "hta3_search_792_1",
    type: "single",
    prompt:
      "HTA 79.2 relates to searching a vehicle (without warrant) to check for:",
    choices: [
      "Tinted windows",
      "Ignition interlock device presence/tampering when the driver’s licence has condition “I”",
      "Seatbelt compliance",
      "Insurance validity",
    ],
    answerIndex: 1,
    explanation:
      "The slide describes interlock search authority when it has been determined the driver is subject to condition “I”.",
    subject: "Highway Traffic Act",
    topic: "Search Authorities",
    lecture: "Highway Traffic Act 3: Police Authorities",
  },
  {
    id: "hta3_search_791_1",
    type: "single",
    prompt: "HTA 79.1(3) relates to searching for a:",
    choices: [
      "Pre-empting traffic control signal device",
      "Radar detector",
      "Stolen licence plate",
      "Illegal muffler",
    ],
    answerIndex: 0,
    explanation:
      "The slide describes pre-empting traffic control signal device search/seizure under 79.1(3).",
    subject: "Highway Traffic Act",
    topic: "Search Authorities",
    lecture: "Highway Traffic Act 3: Police Authorities",
  },
  {
    id: "hta3_search_791_2",
    type: "truefalse",
    prompt:
      "True or False: Under the pre-empting traffic control signal device authority, the officer may seize the device found in or upon the motor vehicle.",
    answer: true,
    explanation:
      "The deck states the officer may seize any such device found in or upon the vehicle.",
    subject: "Highway Traffic Act",
    topic: "Search Authorities",
    lecture: "Highway Traffic Act 3: Police Authorities",
  },

  // -------------------------------
  // Seizure: driver’s licence (35(3)) + plates (14(1)(a), 82(13))
  // -------------------------------
  {
    id: "hta3_seize_dl_1",
    type: "single",
    prompt:
      "HTA 35(3) is described as allowing a police officer to take possession of a driver’s licence and forward it to the Registrar when:",
    choices: [
      "The driver refuses a breath demand",
      "A person is in possession of a licence contrary to s.35(1)",
      "The driver has no insurance card",
      "The vehicle has a burnt-out headlight",
    ],
    answerIndex: 1,
    explanation:
      "The slide describes seizure of licence under 35(3) when possession is contrary to 35(1).",
    subject: "Highway Traffic Act",
    topic: "Seizure Authorities",
    lecture: "Highway Traffic Act 3: Police Authorities",
  },
  {
    id: "hta3_seize_plate_1",
    type: "single",
    prompt:
      "Improper number plate attached to a motor vehicle is referenced under:",
    choices: ["HTA 14(1)(a)", "HTA 33(1)", "HTA 79(3)", "HTA 159(1)"],
    answerIndex: 0,
    explanation:
      "The deck lists improper number plate authority under 14(1)(a).",
    subject: "Highway Traffic Act",
    topic: "Seizure Authorities",
    lecture: "Highway Traffic Act 3: Police Authorities",
  },
  {
    id: "hta3_seize_plate_2",
    type: "single",
    prompt:
      "For an unsafe motor vehicle (HTA 82(13)), are you authorized to seize the number plates (per the deck)?",
    choices: ["Yes", "No"],
    answerIndex: 0,
    explanation:
      "The slide asks and answers 'Yes' for plate seizure in the unsafe motor vehicle context (on a highway).",
    subject: "Highway Traffic Act",
    topic: "Seizure Authorities",
    lecture: "Highway Traffic Act 3: Police Authorities",
  },

  // -------------------------------
  // Towing authorities (170(7), 170(15), 217(4), 221(1), 134.1)
  // -------------------------------
  {
    id: "hta3_tow_1",
    type: "multi",
    prompt:
      "The deck lists towing/removal authorities for situations including: (Select ALL that apply)",
    choices: [
      "Vehicle parked in a place prohibited by HTA (170(7))",
      "Vehicle parked/stopped interfering with traffic or snow removal, or municipal by-law contravention (170(15))",
      "Detaining vehicle when arrest is made (217(4))",
      "Vehicle apparently abandoned on or near a highway (221(1))",
      "Towing any vehicle for minor speeding",
    ],
    answerIndices: [0, 1, 2, 3],
    explanation:
      "The slides list multiple towing/removal authorities; towing for minor speeding is not listed as an authority.",
    subject: "Highway Traffic Act",
    topic: "Towing / Removal",
    lecture: "Highway Traffic Act 3: Police Authorities",
  },
  {
    id: "hta3_tow_2",
    type: "single",
    prompt:
      "HTA 134.1 is described as allowing removal/storage when reasonably necessary to:",
    choices: [
      "Ensure orderly movement of traffic or prevent injury/damage where traffic is impeded/blocked",
      "Punish the driver",
      "Search occupants for contraband",
      "Issue set fines faster",
    ],
    answerIndex: 0,
    explanation:
      "The slide describes removal/storage for traffic flow and preventing injury/damage when traffic is impeded/blocked.",
    subject: "Highway Traffic Act",
    topic: "Towing / Removal",
    lecture: "Highway Traffic Act 3: Police Authorities",
  },

  // -------------------------------
  // Emergency vehicles / Move over (159(1), 159(2)(3))
  // -------------------------------
  {
    id: "hta3_emerg_1",
    type: "single",
    prompt: "HTA 159(1) requires drivers to:",
    choices: [
      "Speed up to clear the lane",
      "Immediately bring the vehicle to a standstill (when required for emergency vehicles)",
      "Stop only if the emergency vehicle is a fire truck",
      "Stop only at intersections",
    ],
    answerIndex: 1,
    explanation:
      "The slide states drivers shall immediately bring such vehicle to a standstill under 159(1) (in the appropriate context).",
    subject: "Highway Traffic Act",
    topic: "Emergency Vehicles",
    lecture: "Highway Traffic Act 3: Police Authorities",
  },
  {
    id: "hta3_emerg_2",
    type: "multi",
    prompt:
      "Approaching a stopped emergency vehicle (red/red-blue flashes) or tow truck (amber) on a highway requires: (Select ALL that apply)",
    choices: [
      "Slow down and proceed with caution",
      "Move into another lane if it can be done safely",
      "Ignore it if you are late",
      "Stop immediately in your lane no matter what",
    ],
    answerIndices: [0, 1],
    explanation: "The slide lists slow down/caution and change lanes if safe.",
    subject: "Highway Traffic Act",
    topic: "Emergency Vehicles",
    lecture: "Highway Traffic Act 3: Police Authorities",
  },

  // -------------------------------
  // Exemptions (lights/siren/high beams; closed highway; backing; speed; red light; seatbelts)
  // -------------------------------
  {
    id: "hta3_exempt_1",
    type: "multi",
    prompt:
      "The deck lists exemptions relating to emergency equipment including: (Select ALL that apply)",
    choices: [
      "Red/Blue lights to the front (HTA 62 provisions)",
      "Siren (HTA 75(6))",
      "Alternating high beams (HTA 169(1))",
      "Exemption to use a handheld phone while driving",
    ],
    answerIndices: [0, 1, 2],
    explanation:
      "Slides list lights, siren, and alternating high beams exemptions; not a general phone exemption.",
    subject: "Highway Traffic Act",
    topic: "Exemptions",
    lecture: "Highway Traffic Act 3: Police Authorities",
  },
  {
    id: "hta3_exempt_2",
    type: "multi",
    prompt:
      "The deck lists exemptions involving highways including: (Select ALL that apply)",
    choices: [
      "Driving on a closed highway (HTA 134(4))",
      "Backing on certain high-speed divided highways (HTA 157(1))",
      "Passing a school bus with signals flashing",
      "Stopping at every green light",
    ],
    answerIndices: [0, 1],
    explanation:
      "Slides reference exemptions tied to closed highways and backing in certain high-speed divided highway contexts.",
    subject: "Highway Traffic Act",
    topic: "Exemptions",
    lecture: "Highway Traffic Act 3: Police Authorities",
  },
  {
    id: "hta3_exempt_speed_1",
    type: "single",
    prompt:
      "The deck notes the speed exemption (HTA 128(13)(b)) applies to vehicles used in lawful duty by:",
    choices: [
      "Police, fire, ambulances (not conservation vehicles)",
      "Only police vehicles",
      "Any government vehicle",
      "Tow trucks",
    ],
    answerIndex: 0,
    explanation:
      "The slide specifies police/fire/ambulances; it states it does not include conservation vehicles.",
    subject: "Highway Traffic Act",
    topic: "Exemptions",
    lecture: "Highway Traffic Act 3: Police Authorities",
  },
  {
    id: "hta3_exempt_red_1",
    type: "multi",
    prompt:
      "For the red-light exemption (HTA 144(20)) described, conditions include: (Select ALL that apply)",
    choices: [
      "Must stop for the red light",
      "Must be safe to proceed",
      "Vehicle is used in lawful performance of duty",
      "Siren must be continuously sounding",
      "Flashes of red light visible in all directions",
    ],
    answerIndices: [0, 1, 2, 3, 4],
    explanation:
      "The slide lists these conditions (stop first, proceed only if safe, lawful duty, siren continuous, red flashes all directions).",
    subject: "Highway Traffic Act",
    topic: "Exemptions",
    lecture: "Highway Traffic Act 3: Police Authorities",
  },
  {
    id: "hta3_exempt_red_2",
    type: "truefalse",
    prompt:
      "True or False: The deck notes conservation vehicles are exempted under the red-light exemption described.",
    answer: false,
    explanation:
      "The slide notes conservation vehicles are not exempted in this context.",
    subject: "Highway Traffic Act",
    topic: "Exemptions",
    lecture: "Highway Traffic Act 3: Police Authorities",
  },
  {
    id: "hta3_exempt_seatbelt_1",
    type: "single",
    prompt:
      "The deck notes a seatbelt exemption (O. Reg. 613 s.2) applies when a police/peace officer is:",
    choices: [
      "Driving above the speed limit",
      "Transporting a person in custody while in lawful performance of duty",
      "Driving an unmarked vehicle",
      "Off duty and commuting",
    ],
    answerIndex: 1,
    explanation:
      "The slide states the exemption applies when transporting a person in custody in lawful duty performance.",
    subject: "Highway Traffic Act",
    topic: "Exemptions",
    lecture: "Highway Traffic Act 3: Police Authorities",
  },
  {
    id: "hta3_exempt_seatbelt_2",
    type: "truefalse",
    prompt:
      "True or False: The deck states 'peace officer' includes a Conservation Officer for the seatbelt exemption noted.",
    answer: true,
    explanation:
      "The slide notes peace officer includes a Conservation Officer in that context.",
    subject: "Highway Traffic Act",
    topic: "Exemptions",
    lecture: "Highway Traffic Act 3: Police Authorities",
  },

  // -------------------------------
  // Scenario-style questions (stop/search/seize/tow)
  // -------------------------------
  {
    id: "hta3_scn_1",
    type: "single",
    prompt:
      "SCENARIO: You stop a vehicle and see a device mounted that you believe is a radar detector (speed measuring warning device). Which HTA authority best matches a warrantless stop/enter/search of the vehicle and seizure of that device?",
    choices: ["HTA 79(3)", "HTA 33(1)", "HTA 159(2)", "HTA 14(1)(a)"],
    answerIndex: 0,
    explanation:
      "HTA 79(3) is described as authorizing stop/enter/search of the vehicle and seizure of a speed measuring warning device.",
    subject: "Highway Traffic Act",
    topic: "Scenario Applications",
    lecture: "Highway Traffic Act 3: Police Authorities",
  },
  {
    id: "hta3_scn_2",
    type: "single",
    prompt:
      "SCENARIO: A passenger (appears 17) is not wearing a seat belt and you have reason to believe they are contravening seat belt legislation. Are they required to provide reasonable identification on request?",
    choices: ["Yes", "No"],
    answerIndex: 0,
    explanation:
      "The deck lists HTA 106(8.2) as an exception requiring ID from certain passengers where seatbelt contravention is suspected.",
    subject: "Highway Traffic Act",
    topic: "Scenario Applications",
    lecture: "Highway Traffic Act 3: Police Authorities",
  },
  {
    id: "hta3_scn_3",
    type: "single",
    prompt:
      "SCENARIO: A pedestrian is walking on a controlled-access highway where pedestrians are prohibited. What is the primary purpose of the HTA 185(3) authority described?",
    choices: [
      "Punish the pedestrian with a large fine",
      "Take the pedestrian to a safe place (nearest intersecting highway where pedestrians are not prohibited)",
      "Arrest and fingerprint the pedestrian",
      "Issue a Criminal Code appearance notice",
    ],
    answerIndex: 1,
    explanation:
      "The deck describes the authority as safety-focused—moving the pedestrian to a safe location.",
    subject: "Highway Traffic Act",
    topic: "Scenario Applications",
    lecture: "Highway Traffic Act 3: Police Authorities",
  },
  // -------------------------------
  // Module Outcomes / Big Picture
  // -------------------------------
  {
    id: "hta_cc2_outcomes_1",
    type: "multi",
    prompt:
      "By the end of this module, learners should be able to: (Select ALL that apply)",
    choices: [
      "Identify definitions used in everyday investigative duties",
      "Recognize what is occurring in situations faced as an officer",
      "Apply pertinent Criminal Code laws/definitions to a situation",
      "Memorize every Criminal Code section number",
    ],
    answerIndices: [0, 1, 2],
    explanation:
      "The outcomes focus on using definitions, recognizing situations, and applying Criminal Code law/definitions (not memorizing every section).",
    subject: "Highway Traffic Act",
    topic: "Module Outcomes",
    lecture: "Federal Law – Definitions & Grounds",
  },

  // -------------------------------
  // Criminal offence classification
  // -------------------------------
  {
    id: "hta_cc2_class_1",
    type: "single",
    prompt: "A 'criminal offence' in this module is described as:",
    choices: [
      "Any breach of a municipal by-law",
      "Any violation of a federal statute (summary or indictable)",
      "Any breach of a provincial statute",
      "Only violent offences",
    ],
    answerIndex: 1,
    explanation:
      "The notes define a criminal offence as a violation of a federal statute, whether summary or indictable.",
    subject: "Highway Traffic Act",
    topic: "Criminal Offences",
    lecture: "Federal Law – Definitions & Grounds",
  },
  {
    id: "hta_cc2_class_2",
    type: "single",
    prompt:
      "If a Criminal Code offence does NOT state it is indictable, the Interpretation Act concept described says it is deemed:",
    choices: ["Indictable", "Summary conviction", "Hybrid", "Regulatory"],
    answerIndex: 1,
    explanation:
      "As described, if it does not say indictable, it is deemed summary conviction (Interpretation Act approach noted).",
    subject: "Highway Traffic Act",
    topic: "Offence Classification",
    lecture: "Federal Law – Definitions & Grounds",
  },
  {
    id: "hta_cc2_class_3",
    type: "single",
    prompt:
      "If a Criminal Code offence does NOT state it is summary, the Interpretation Act concept described says it is deemed:",
    choices: ["Summary conviction", "Indictable", "Hybrid", "Administrative"],
    answerIndex: 1,
    explanation:
      "As described, if it does not say summary, it is deemed indictable (Interpretation Act approach noted).",
    subject: "Highway Traffic Act",
    topic: "Offence Classification",
    lecture: "Federal Law – Definitions & Grounds",
  },
  {
    id: "hta_cc2_class_4",
    type: "single",
    prompt: "A 'dual procedure' (hybrid) offence means:",
    choices: [
      "It is always indictable",
      "The Crown can choose to proceed by summary conviction or indictment",
      "It is always summary",
      "Only police decide how it proceeds",
    ],
    answerIndex: 1,
    explanation:
      "Hybrid offences allow the Crown to elect summary or indictable procedure.",
    subject: "Highway Traffic Act",
    topic: "Offence Classification",
    lecture: "Federal Law – Definitions & Grounds",
  },
  {
    id: "hta_cc2_class_5",
    type: "single",
    prompt: "For arrest purposes, officers should treat hybrid offences as:",
    choices: ["Summary", "Indictable", "Provincial", "By-law"],
    answerIndex: 1,
    explanation:
      "The notes state officers treat hybrid offences as indictable for arrest authority purposes.",
    subject: "Highway Traffic Act",
    topic: "Offence Classification",
    lecture: "Federal Law – Definitions & Grounds",
  },
  {
    id: "hta_cc2_class_6",
    type: "single",
    prompt:
      "For strictly summary conviction offences, the notes state an officer must ________ to arrest.",
    choices: [
      "Have a warrant",
      "Find committing",
      "Have reasonable suspicion only",
      "Ask for consent",
    ],
    answerIndex: 1,
    explanation:
      "The notes emphasize find committing is required to arrest for strictly summary offences.",
    subject: "Highway Traffic Act",
    topic: "Arrest Authority",
    lecture: "Federal Law – Definitions & Grounds",
  },

  // -------------------------------
  // RCA / Funnel / articulation / TIPP
  // -------------------------------
  {
    id: "hta_cc2_rca_1",
    type: "single",
    prompt:
      "The decision-making flow chart is described as helping officers organize information into a logical:",
    choices: ["Loop", "Funnel", "Timeline", "Checklist only"],
    answerIndex: 1,
    explanation:
      "The notes describe the chart as a logical funnel for organizing information for exams and real-world decisions.",
    subject: "Highway Traffic Act",
    topic: "Decision-Making Process",
    lecture: "Federal Law – Definitions & Grounds",
  },
  {
    id: "hta_cc2_rca_2",
    type: "single",
    prompt: "In the chart, R/G stands for:",
    choices: [
      "Reasonable Guess",
      "Reasonable Grounds",
      "Required Grounds",
      "Regulated Grounds",
    ],
    answerIndex: 1,
    explanation: "R/G = Reasonable Grounds.",
    subject: "Highway Traffic Act",
    topic: "Key Terms",
    lecture: "Federal Law – Definitions & Grounds",
  },
  {
    id: "hta_cc2_rca_3",
    type: "single",
    prompt: "In the chart, F/C stands for:",
    choices: [
      "Facts Confirmed",
      "Finds Committing",
      "File Charges",
      "Further Check",
    ],
    answerIndex: 1,
    explanation: "F/C = Finds Committing.",
    subject: "Highway Traffic Act",
    topic: "Key Terms",
    lecture: "Federal Law – Definitions & Grounds",
  },
  {
    id: "hta_cc2_charge_1",
    type: "single",
    prompt:
      "To charge someone criminally, an officer must lay an Information by swearing it before a:",
    choices: ["Judge", "Justice of the Peace", "Crown Attorney", "Court Clerk"],
    answerIndex: 1,
    explanation:
      "Charging basics described: lay an Information by swearing it before a Justice of the Peace.",
    subject: "Highway Traffic Act",
    topic: "Charging Process",
    lecture: "Federal Law – Definitions & Grounds",
  },
  {
    id: "hta_cc2_tipp_1",
    type: "multi",
    prompt: "TIPP refers to: (Select ALL that apply)",
    choices: [
      "Time",
      "Identity",
      "Place",
      "Plus the elements of the offence",
      "Penalty",
    ],
    answerIndices: [0, 1, 2, 3],
    explanation:
      "TIPP = Time, Identity, Place, Plus the elements of the offence.",
    subject: "Highway Traffic Act",
    topic: "Charging Process",
    lecture: "Federal Law – Definitions & Grounds",
  },
  {
    id: "hta_cc2_artic_1",
    type: "single",
    prompt: "Why is articulation emphasized in the decision-making process?",
    choices: [
      "Because notes are optional in policing",
      "Because what is said/written forms the basis of evidence",
      "Because courts only accept body-worn video",
      "Because articulation replaces grounds",
    ],
    answerIndex: 1,
    explanation:
      "Notes and articulation are emphasized because what you say/write becomes evidence and supports decisions.",
    subject: "Highway Traffic Act",
    topic: "Articulation & Notes",
    lecture: "Federal Law – Definitions & Grounds",
  },
  {
    id: "hta_cc2_questions_1",
    type: "multi",
    prompt:
      "Key questions to ask yourself during investigation include: (Select ALL that apply)",
    choices: [
      "What do I know?",
      "What is my source of information?",
      "Do my observations corroborate the information?",
      "Will the accused confess if I ask again?",
    ],
    answerIndices: [0, 1, 2],
    explanation:
      "The notes list: what do I know, source of info, and corroboration by observation.",
    subject: "Highway Traffic Act",
    topic: "Decision-Making Process",
    lecture: "Federal Law – Definitions & Grounds",
  },

  // -------------------------------
  // Peace Officer vs Police Officer
  // -------------------------------
  {
    id: "hta_cc2_peace_1",
    type: "single",
    prompt:
      "The definition of 'peace officer' is located in which part of the Criminal Code (as described)?",
    choices: ["Section 1", "Section 2", "Section 25", "Section 495"],
    answerIndex: 1,
    explanation:
      "The notes state Peace Officer is defined in Section 2 of the Criminal Code.",
    subject: "Highway Traffic Act",
    topic: "Definitions – Peace Officer",
    lecture: "Federal Law – Definitions & Grounds",
  },
  {
    id: "hta_cc2_peace_2",
    type: "single",
    prompt: "Which statement is correct?",
    choices: [
      "All peace officers are police officers",
      "All police officers are peace officers, but not all peace officers are police officers",
      "Peace officer and police officer mean the exact same thing",
      "Only pilots are peace officers",
    ],
    answerIndex: 1,
    explanation:
      "The notes state all police are peace officers, but peace officer includes more roles than police.",
    subject: "Highway Traffic Act",
    topic: "Definitions – Peace Officer",
    lecture: "Federal Law – Definitions & Grounds",
  },
  {
    id: "hta_cc2_peace_3",
    type: "multi",
    prompt:
      "The notes describe peace officers as including: (Select ALL that apply)",
    choices: [
      "Police officers/constables",
      "Bailiffs and constables",
      "Any person employed for preservation and maintenance of the public peace",
      "Any person employed for service/execution of civil process",
      "Any citizen who witnesses a crime",
    ],
    answerIndices: [0, 1, 2, 3],
    explanation:
      "The notes list these categories within the peace officer definition; not every citizen is a peace officer.",
    subject: "Highway Traffic Act",
    topic: "Definitions – Peace Officer",
    lecture: "Federal Law – Definitions & Grounds",
  },
  {
    id: "hta_cc2_peace_4",
    type: "single",
    prompt: "Why does the full definition of peace officer matter in practice?",
    choices: [
      "It affects legal consequences like 'assault on a peace officer'",
      "It only matters for traffic tickets",
      "It replaces the need for grounds",
      "It only matters in civil court",
    ],
    answerIndex: 0,
    explanation:
      "The notes explain charges and legal consequences can depend on whether a person qualifies as a peace officer.",
    subject: "Highway Traffic Act",
    topic: "Definitions – Peace Officer",
    lecture: "Federal Law – Definitions & Grounds",
  },

  // -------------------------------
  // Finds Committing (F/C)
  // -------------------------------
  {
    id: "hta_cc2_fc_1",
    type: "single",
    prompt: "Finds committing means:",
    choices: [
      "You suspect an offence occurred",
      "An offence is directly observed, or observed and immediately/continuously pursued until arrest",
      "A witness reports the offence",
      "The accused has a prior record",
    ],
    answerIndex: 1,
    explanation:
      "F/C is direct observation, including immediate and continuous pursuit after observation.",
    subject: "Highway Traffic Act",
    topic: "Finds Committing",
    lecture: "Federal Law – Definitions & Grounds",
  },
  {
    id: "hta_cc2_fc_2",
    type: "multi",
    prompt:
      "Words that strongly signal a 'find committing' scenario include: (Select ALL that apply)",
    choices: ["Saw", "Witnessed", "Observed", "Watched", "Heard about"],
    answerIndices: [0, 1, 2, 3],
    explanation:
      "The notes emphasize direct observation language like saw/witnessed/observed/watched.",
    subject: "Highway Traffic Act",
    topic: "Finds Committing",
    lecture: "Federal Law – Definitions & Grounds",
  },
  {
    id: "hta_cc2_fc_3",
    type: "single",
    prompt:
      "SCENARIO: A citizen says, 'I saw him throw a rock through the window.' This is best described as:",
    choices: [
      "Suspicion",
      "Reasonable suspicion",
      "Find committing information",
      "Proof beyond a reasonable doubt",
    ],
    answerIndex: 2,
    explanation:
      "This is direct observation by a witness—information consistent with a find committing-style description.",
    subject: "Highway Traffic Act",
    topic: "Finds Committing",
    lecture: "Federal Law – Definitions & Grounds",
  },

  // -------------------------------
  // Reasonable Grounds (R/G) and R. v. Storrey test
  // -------------------------------
  {
    id: "hta_cc2_rg_1",
    type: "single",
    prompt:
      "Reasonable grounds are described as the standard required to justify a(n):",
    choices: ["Arrest", "Traffic warning", "Parking ticket", "Jury verdict"],
    answerIndex: 0,
    explanation:
      "The notes describe reasonable grounds as the standard required to justify an arrest.",
    subject: "Highway Traffic Act",
    topic: "Reasonable Grounds",
    lecture: "Federal Law – Definitions & Grounds",
  },
  {
    id: "hta_cc2_rg_2",
    type: "single",
    prompt:
      "Under the R. v. Storrey test described, reasonable grounds require:",
    choices: [
      "Only subjective belief",
      "Only objective facts",
      "Subjective belief AND objective justification",
      "Proof beyond a reasonable doubt",
    ],
    answerIndex: 2,
    explanation:
      "Storrey requires both: the officer’s genuine belief (subjective) and objective justification to a reasonable person.",
    subject: "Highway Traffic Act",
    topic: "Reasonable Grounds",
    lecture: "Federal Law – Definitions & Grounds",
  },
  {
    id: "hta_cc2_rg_3",
    type: "single",
    prompt: "In simple terms, the 'objective' part of reasonable grounds asks:",
    choices: [
      "Do I feel strongly about it?",
      "Would a reasonable person in my position reach the same conclusion based on the facts?",
      "Did the accused confess?",
      "Is it more likely than not?",
    ],
    answerIndex: 1,
    explanation:
      "Objective = facts that would justify the belief to a reasonable person in the circumstances.",
    subject: "Highway Traffic Act",
    topic: "Reasonable Grounds",
    lecture: "Federal Law – Definitions & Grounds",
  },
  {
    id: "hta_cc2_rg_4",
    type: "single",
    prompt: "Reasonable grounds are described as being:",
    choices: [
      "More than suspicion, but less than proof beyond a reasonable doubt",
      "Less than suspicion, but more than proof beyond a reasonable doubt",
      "The same as proof beyond a reasonable doubt",
      "The same as a hunch",
    ],
    answerIndex: 0,
    explanation:
      "The notes place reasonable grounds above suspicion but below proof beyond a reasonable doubt.",
    subject: "Highway Traffic Act",
    topic: "Reasonable Grounds",
    lecture: "Federal Law – Definitions & Grounds",
  },

  // -------------------------------
  // 3 C’s for forming grounds
  // -------------------------------
  {
    id: "hta_cc2_3c_1",
    type: "multi",
    prompt:
      "The notes describe the '3 C’s' for how reasonable grounds can be formed as: (Select ALL that apply)",
    choices: [
      "Confession",
      "Credible witness / communicated information",
      "Circumstantial evidence",
      "Certainty",
      "Cross-examination",
    ],
    answerIndices: [0, 1, 2],
    explanation:
      "The 3 C’s described are Confession, Credible witness/Communicated, and Circumstantial evidence.",
    subject: "Highway Traffic Act",
    topic: "Reasonable Grounds",
    lecture: "Federal Law – Definitions & Grounds",
  },
  {
    id: "hta_cc2_3c_2",
    type: "single",
    prompt: "Circumstantial evidence supports reasonable grounds when it:",
    choices: [
      "Is strong enough to go beyond suspicion",
      "Always proves guilt beyond a reasonable doubt",
      "Is based only on a hunch",
      "Comes only from anonymous tips",
    ],
    answerIndex: 0,
    explanation:
      "Circumstantial evidence must be strong enough to move beyond suspicion toward a reasonable belief.",
    subject: "Highway Traffic Act",
    topic: "Reasonable Grounds",
    lecture: "Federal Law – Definitions & Grounds",
  },

  // -------------------------------
  // Inferences / Totality / Spectrum
  // -------------------------------
  {
    id: "hta_cc2_infer_1",
    type: "single",
    prompt: "Inferences are best described as:",
    choices: [
      "Random guesses",
      "Logical conclusions drawn from objective facts and circumstances",
      "The same as proof beyond a reasonable doubt",
      "Statements made only by witnesses",
    ],
    answerIndex: 1,
    explanation:
      "The notes explain officers use objective facts to draw inferences, which build beliefs.",
    subject: "Highway Traffic Act",
    topic: "Inferences & Reasonableness",
    lecture: "Federal Law – Definitions & Grounds",
  },
  {
    id: "hta_cc2_totality_1",
    type: "single",
    prompt: "The 'totality of the circumstances' means:",
    choices: [
      "Only the most important fact",
      "All the evidence and surrounding circumstances considered together",
      "Only what the accused says",
      "Only what dispatch reports",
    ],
    answerIndex: 1,
    explanation:
      "Totality means all the facts/evidence together, not one factor alone.",
    subject: "Highway Traffic Act",
    topic: "Inferences & Reasonableness",
    lecture: "Federal Law – Definitions & Grounds",
  },
  {
    id: "hta_cc2_spectrum_1",
    type: "single",
    prompt:
      "On the spectrum of reasonableness described, moving from mere suspicion toward reasonable grounds generally requires:",
    choices: [
      "Less evidence",
      "More objective reasons/evidence and stronger corroboration",
      "Only officer intuition",
      "A confession every time",
    ],
    answerIndex: 1,
    explanation:
      "The notes emphasize more objective reasons and corroboration move you rightward toward reasonable suspicion/grounds.",
    subject: "Highway Traffic Act",
    topic: "Spectrum of Reasonableness",
    lecture: "Federal Law – Definitions & Grounds",
  },
  {
    id: "hta_cc2_spectrum_2",
    type: "truefalse",
    prompt:
      "True or False: Suspicious circumstances alone are never sufficient to establish reasonable grounds.",
    answer: true,
    explanation:
      "The notes explicitly state suspicious circumstances alone are not sufficient.",
    subject: "Highway Traffic Act",
    topic: "Spectrum of Reasonableness",
    lecture: "Federal Law – Definitions & Grounds",
  },

  // -------------------------------
  // Standards: suspicion vs reasonable suspicion vs R/G vs BRD
  // -------------------------------
  {
    id: "hta_cc2_standards_1",
    type: "single",
    prompt: "Which standard is the highest on the spectrum described?",
    choices: [
      "Suspicion",
      "Reasonable suspicion",
      "Reasonable grounds",
      "Beyond a reasonable doubt",
    ],
    answerIndex: 3,
    explanation:
      "Beyond a reasonable doubt is the highest standard (used for conviction at trial).",
    subject: "Highway Traffic Act",
    topic: "Standards of Proof / Belief",
    lecture: "Federal Law – Definitions & Grounds",
  },
  {
    id: "hta_cc2_standards_2",
    type: "single",
    prompt: "Reasonable grounds are generally best described as:",
    choices: [
      "A hunch without reasons",
      "A belief supported by objective, justifiable facts",
      "Proof the person is guilty",
      "Any suspicion based on vibes",
    ],
    answerIndex: 1,
    explanation:
      "Reasonable grounds require objective, articulable facts that justify the belief.",
    subject: "Highway Traffic Act",
    topic: "Standards of Proof / Belief",
    lecture: "Federal Law – Definitions & Grounds",
  },

  // -------------------------------
  // Arrest vs Detention vs Psychological detention
  // -------------------------------
  {
    id: "hta_cc2_arrest_1",
    type: "single",
    prompt: "An arrest occurs when an officer:",
    choices: [
      "Asks someone questions",
      "Takes physical control of a person with the intent to detain",
      "Writes notes about an incident",
      "Requests identification politely",
    ],
    answerIndex: 1,
    explanation:
      "The notes define arrest as taking physical control with intent to detain (loss of liberty).",
    subject: "Highway Traffic Act",
    topic: "Arrest & Detention",
    lecture: "Federal Law – Definitions & Grounds",
  },
  {
    id: "hta_cc2_arrest_2",
    type: "truefalse",
    prompt:
      "True or False: Telling someone 'you are under arrest' without taking control is always sufficient to make it an arrest.",
    answer: false,
    explanation:
      "The notes state simply saying it without taking control is not sufficient.",
    subject: "Highway Traffic Act",
    topic: "Arrest & Detention",
    lecture: "Federal Law – Definitions & Grounds",
  },
  {
    id: "hta_cc2_arrest_charge_1",
    type: "multi",
    prompt:
      "Which statements about arrest vs charge are correct? (Select ALL that apply)",
    choices: [
      "You can arrest without charging",
      "You can charge without arrest",
      "Arrest and charge are the same thing",
      "Officers arrest to detain, not to charge",
    ],
    answerIndices: [0, 1, 3],
    explanation:
      "The notes emphasize arrest ≠ charge; arrest is to detain and can occur without a charge (and vice versa).",
    subject: "Highway Traffic Act",
    topic: "Arrest & Detention",
    lecture: "Federal Law – Definitions & Grounds",
  },
  {
    id: "hta_cc2_detention_1",
    type: "single",
    prompt: "A detention is best described as:",
    choices: [
      "A temporary suspension of liberty short of arrest",
      "A conviction in court",
      "A warrantless search",
      "A mandatory jail sentence",
    ],
    answerIndex: 0,
    explanation:
      "The notes define detention as a temporary suspension of liberty that does not rise to arrest.",
    subject: "Highway Traffic Act",
    topic: "Arrest & Detention",
    lecture: "Federal Law – Definitions & Grounds",
  },
  {
    id: "hta_cc2_psychdet_1",
    type: "single",
    prompt: "Psychological detention occurs when:",
    choices: [
      "A person is handcuffed",
      "A person reasonably believes they have no choice but to comply due to police conduct or legal obligation",
      "A person refuses to answer questions",
      "An officer feels unsafe",
    ],
    answerIndex: 1,
    explanation:
      "The notes define psychological detention as a perceived compulsion to comply (even without physical restraint).",
    subject: "Highway Traffic Act",
    topic: "Psychological Detention",
    lecture: "Federal Law – Definitions & Grounds",
  },
  {
    id: "hta_cc2_psychdet_2",
    type: "multi",
    prompt:
      "Courts assess psychological detention by looking at: (Select ALL that apply)",
    choices: [
      "Circumstances of the encounter",
      "Police conduct (language, positioning, duration, location, presence of others)",
      "Individual characteristics (age, vulnerability, sophistication)",
      "Whether the person is guilty",
    ],
    answerIndices: [0, 1, 2],
    explanation:
      "The notes list encounter circumstances, police conduct, and individual characteristics (not guilt).",
    subject: "Highway Traffic Act",
    topic: "Psychological Detention",
    lecture: "Federal Law – Definitions & Grounds",
  },
  {
    id: "hta_cc2_psychdet_3",
    type: "multi",
    prompt:
      "Which factors are specifically mentioned as relevant to psychological detention? (Select ALL that apply)",
    choices: [
      "Singling out",
      "Minority status",
      "Physical stature",
      "Mental condition",
      "Location",
      "Duration",
      "Age",
      "Language used",
      "Level of sophistication",
      "Favourite colour",
    ],
    answerIndices: [0, 1, 2, 3, 4, 5, 6, 7, 8],
    explanation:
      "The notes list these factors as relevant; favourite colour is not relevant.",
    subject: "Highway Traffic Act",
    topic: "Psychological Detention",
    lecture: "Federal Law – Definitions & Grounds",
  },

  // -------------------------------
  // Good faith / mistakes of fact vs law
  // -------------------------------
  {
    id: "hta_cc2_goodfaith_1",
    type: "single",
    prompt: "Acting in good faith means acting with:",
    choices: [
      "Perfect judgment at all times",
      "Honest intention and without knowingly relying on false/irregular information",
      "Aggressive enforcement at all times",
      "A guarantee the courts will agree with you",
    ],
    answerIndex: 1,
    explanation:
      "Good faith is described as honest intention without knowingly relying on false or irregular information.",
    subject: "Highway Traffic Act",
    topic: "Good Faith",
    lecture: "Federal Law – Definitions & Grounds",
  },
  {
    id: "hta_cc2_goodfaith_2",
    type: "single",
    prompt: "Courts are described as generally more lenient with:",
    choices: [
      "Mistakes of law",
      "Mistakes of fact made honestly",
      "Intentional deception",
      "No mistakes ever",
    ],
    answerIndex: 1,
    explanation:
      "The notes state courts are generally lenient with honest mistakes of fact, but not mistakes of law.",
    subject: "Highway Traffic Act",
    topic: "Good Faith",
    lecture: "Federal Law – Definitions & Grounds",
  },
  {
    id: "hta_cc2_goodfaith_3",
    type: "single",
    prompt: "Mistakes of law are described as:",
    choices: [
      "Generally excused if the officer is busy",
      "Not excused (not knowing/misunderstanding the law is not acceptable)",
      "Always forgiven if the accused is polite",
      "Only relevant in civil cases",
    ],
    answerIndex: 1,
    explanation: "The notes emphasize mistakes of law are not excused.",
    subject: "Highway Traffic Act",
    topic: "Good Faith",
    lecture: "Federal Law – Definitions & Grounds",
  },

  // -------------------------------
  // Justified / lawful authority / execution of duty
  // -------------------------------
  {
    id: "hta_cc2_justified_1",
    type: "single",
    prompt: "In the notes, being 'justified' generally means:",
    choices: [
      "Protected from criminal liability only",
      "Protected from civil liability only",
      "Protected from both criminal and civil liability (when lawful conditions are met)",
      "Allowed to use unlimited force",
    ],
    answerIndex: 2,
    explanation:
      "Justified is described as protection from criminal and civil liability when acting lawfully on reasonable grounds with necessary force.",
    subject: "Highway Traffic Act",
    topic: "Justification",
    lecture: "Federal Law – Definitions & Grounds",
  },
  {
    id: "hta_cc2_justified_2",
    type: "multi",
    prompt:
      "The notes describe justification under s.25 Criminal Code as depending on: (Select ALL that apply)",
    choices: [
      "Lawful authority",
      "Reasonable grounds",
      "Only as much force as necessary",
      "Winning the case in court first",
    ],
    answerIndices: [0, 1, 2],
    explanation:
      "Justification is tied to lawful authority, reasonable grounds, and proportional/necessary force.",
    subject: "Highway Traffic Act",
    topic: "Justification",
    lecture: "Federal Law – Definitions & Grounds",
  },
  {
    id: "hta_cc2_lawfulauth_1",
    type: "single",
    prompt: "Lawful authority means:",
    choices: [
      "Being authorized by law to act",
      "Being asked nicely by a supervisor",
      "Having a strong suspicion",
      "Having the public agree with you",
    ],
    answerIndex: 0,
    explanation: "Lawful authority is described as being authorized by law.",
    subject: "Highway Traffic Act",
    topic: "Lawful Authority",
    lecture: "Federal Law – Definitions & Grounds",
  },
  {
    id: "hta_cc2_execduty_1",
    type: "single",
    prompt: "Execution of duty refers to:",
    choices: [
      "Lawfully performing a specific, identifiable duty authorized by statute or common law",
      "Any action an officer decides to take",
      "Only writing reports",
      "Only making arrests",
    ],
    answerIndex: 0,
    explanation:
      "Execution of duty is described as lawful performance of an identifiable duty authorized by law.",
    subject: "Highway Traffic Act",
    topic: "Execution of Duty",
    lecture: "Federal Law – Definitions & Grounds",
  },

  // -------------------------------
  // Accused definition
  // -------------------------------
  {
    id: "hta_cc2_accused_1",
    type: "multi",
    prompt: "In the notes, an 'accused' includes: (Select ALL that apply)",
    choices: [
      "A person issued an appearance notice by a peace officer",
      "A person arrested for a criminal offence",
      "Any person questioned by police",
      "A person who witnesses a crime",
    ],
    answerIndices: [0, 1],
    explanation:
      "Accused includes someone issued an appearance notice or someone arrested for a criminal offence.",
    subject: "Highway Traffic Act",
    topic: "Accused",
    lecture: "Federal Law – Definitions & Grounds",
  },

  // -------------------------------
  // Scenario-style: recognize → classify → authority
  // -------------------------------
  {
    id: "hta_cc2_scn_1",
    type: "single",
    prompt:
      "SCENARIO: Two people are yelling and screaming in public and disturbing others. In the notes, this is used as an example of:",
    choices: [
      "A strictly indictable offence",
      "A summary conviction offence (cause disturbance)",
      "A hybrid offence (utter threats)",
      "A provincial regulatory offence",
    ],
    answerIndex: 1,
    explanation:
      "The notes use cause disturbance as a summary conviction example.",
    subject: "Highway Traffic Act",
    topic: "Recognize & Classify",
    lecture: "Federal Law – Definitions & Grounds",
  },
  {
    id: "hta_cc2_scn_2",
    type: "single",
    prompt:
      "SCENARIO: During a disturbance, one person threatens to kill the other. The notes use this as an example of:",
    choices: [
      "A strictly summary offence",
      "A hybrid offence (treated as indictable for arrest purposes)",
      "A municipal by-law offence",
      "Not an offence unless violence occurs",
    ],
    answerIndex: 1,
    explanation:
      "The notes use utter threats to kill as a hybrid offence example (treated as indictable for arrest authority).",
    subject: "Highway Traffic Act",
    topic: "Recognize & Classify",
    lecture: "Federal Law – Definitions & Grounds",
  },
  {
    id: "hta_cc2_scn_3",
    type: "single",
    prompt:
      "SCENARIO: A robbery occurs where a real firearm is pointed and a wallet is demanded. The notes use this as an example of:",
    choices: [
      "A strictly indictable offence with heavier penalties",
      "A summary conviction offence",
      "A hybrid offence always treated as summary",
      "A provincial offence under POA",
    ],
    answerIndex: 0,
    explanation:
      "The notes present robbery with a firearm as a strictly indictable, more serious offence.",
    subject: "Highway Traffic Act",
    topic: "Recognize & Classify",
    lecture: "Federal Law – Definitions & Grounds",
  },
  // -------------------------------
  // Module Learning Outcomes
  // -------------------------------
  {
    id: "poa_summons_outcomes_1",
    type: "multi",
    prompt:
      "By the end of this module, learners should be able to: (Select ALL that apply)",
    choices: [
      "List differences between Part I and Part III processes",
      "Identify stages in issuing a Part I summons and Affidavit of Service",
      "Explain the elements and process of a Part III summons",
      "Explain how to lay Criminal Code indictable charges",
    ],
    answerIndices: [0, 1, 2],
    explanation:
      "The module focuses on Part I vs Part III, issuing Part I summons + Affidavit of Service, and Part III summons process.",
    subject: "Provincial",
    topic: "Module Outcomes",
    lecture: "Provincial Law 1",
  },

  // -------------------------------
  // Key Terms (quick checks)
  // -------------------------------
  {
    id: "poa_summons_terms_1",
    type: "single",
    prompt: "Which term is most associated with Part I ticketing documents?",
    choices: ["Information", "Certificate of Offence", "Form 105", "Form 106"],
    answerIndex: 1,
    explanation:
      "Part I uses a Certificate of Offence (with an Offence Notice or Part I Summons).",
    subject: "Provincial",
    topic: "Key Terms",
    lecture: "Provincial Law 1",
  },
  {
    id: "poa_summons_terms_2",
    type: "single",
    prompt:
      "Which form number is identified as the Short Form Part III summons?",
    choices: ["Form 104", "Form 105", "Form 106", "Form 107"],
    answerIndex: 0,
    explanation: "Short Form Part III summons is Form 104.",
    subject: "Provincial",
    topic: "Part III Forms",
    lecture: "Provincial Law 1",
  },
  {
    id: "poa_summons_terms_3",
    type: "single",
    prompt:
      "Which form number is identified as the Long Form Part III summons?",
    choices: ["Form 104", "Form 105", "Form 106", "Form 101"],
    answerIndex: 2,
    explanation: "Long Form Part III summons is Form 106.",
    subject: "Provincial",
    topic: "Part III Forms",
    lecture: "Provincial Law 1",
  },
  {
    id: "poa_summons_terms_4",
    type: "single",
    prompt:
      "Which form number is identified as the Information used in the Part III process?",
    choices: ["Form 104", "Form 105", "Form 106", "Form 109"],
    answerIndex: 1,
    explanation: "The Part III Information is Form 105.",
    subject: "Provincial",
    topic: "Part III Forms",
    lecture: "Provincial Law 1",
  },

  // -------------------------------
  // Part I – Summons basics (POA 3(1) & (2))
  // -------------------------------
  {
    id: "poa_part1_auth_1",
    type: "single",
    prompt:
      "Under POA s.3(1) & (2), a provincial offences officer may issue a Certificate of Offence when they:",
    choices: [
      "Have reasonable and probable grounds",
      "Believe an offence has been committed",
      "Have proof beyond a reasonable doubt",
      "Receive permission from a Justice first",
    ],
    answerIndex: 1,
    explanation:
      "Part I begins on the officer’s belief an offence was committed (lower threshold than Part III).",
    subject: "Provincial",
    topic: "Part I – Authority",
    lecture: "Provincial Law 1",
  },
  {
    id: "poa_part1_docs_1",
    type: "multi",
    prompt:
      "With a Part I Certificate of Offence, the officer may issue: (Select ALL that apply)",
    choices: ["Offence Notice", "Summons", "Information", "Arrest Warrant"],
    answerIndices: [0, 1],
    explanation:
      "Part I allows a Certificate of Offence with either an Offence Notice or a Part I Summons.",
    subject: "Provincial",
    topic: "Part I – Documents",
    lecture: "Provincial Law 1",
  },
  {
    id: "poa_part1_summons_1",
    type: "multi",
    prompt: "A Part I summons (as described) means: (Select ALL that apply)",
    choices: [
      "Court appearance is required",
      "There is no out-of-court settlement option",
      "The court has greater discretion in setting the penalty (within Part I limits)",
      "Imprisonment is available upon conviction",
    ],
    answerIndices: [0, 1, 2],
    explanation:
      "A Part I summons requires court, removes out-of-court settlement, and gives court discretion—but no jail under Part I.",
    subject: "Provincial",
    topic: "Part I – Summons",
    lecture: "Provincial Law 1",
  },
  {
    id: "poa_part1_summons_2",
    type: "truefalse",
    prompt:
      "True or False: A Part I summons must be personally served on the defendant within 30 days of the offence date.",
    answer: true,
    explanation:
      "Part I summons service must be personal and within 30 days of the offence date.",
    subject: "Provincial",
    topic: "Part I – Summons",
    lecture: "Provincial Law 1",
  },
  {
    id: "poa_part1_limits_1",
    type: "multi",
    prompt: "Limitations of a Part I summons include: (Select ALL that apply)",
    choices: [
      "No set fine can be used",
      "No imprisonment upon conviction",
      "Court appearance is mandatory",
      "Maximum fine is $5,000 for adults",
    ],
    answerIndices: [0, 1, 2],
    explanation:
      "Part I summons: no set fine, no jail, mandatory court. Max fine is not $5,000 under Part I.",
    subject: "Provincial",
    topic: "Part I – Limitations",
    lecture: "Provincial Law 1",
  },
  {
    id: "poa_part1_limits_2",
    type: "single",
    prompt:
      "What is the maximum fine for an adult upon conviction under Part I (as described)?",
    choices: ["$300", "$1,000", "$2,000", "$5,000"],
    answerIndex: 1,
    explanation: "The notes state Part I maximum fine is $1,000 for adults.",
    subject: "Provincial",
    topic: "Part I – Limitations",
    lecture: "Provincial Law 1",
  },
  {
    id: "poa_part1_limits_3",
    type: "single",
    prompt:
      "What is the maximum fine for a young person (12–15) upon conviction under Part I (as described)?",
    choices: ["$300", "$1,000", "$2,000", "$5,000"],
    answerIndex: 0,
    explanation:
      "The notes state Part I maximum fine is $300 for young persons (12–15).",
    subject: "Provincial",
    topic: "Youth",
    lecture: "Provincial Law 1",
  },

  // -------------------------------
  // Part I Summons logistics (ticket book / colors)
  // -------------------------------
  {
    id: "poa_part1_colors_1",
    type: "single",
    prompt:
      "Part I summons forms are described as being which color and located where?",
    choices: [
      "Pink, at the back of the Provincial Offences Ticket book",
      "Green, at the front of the Provincial Offences Ticket book",
      "Blue, issued only by a Justice",
      "White, printed at the courthouse",
    ],
    answerIndex: 0,
    explanation:
      "The notes state Part I summons forms are pink and located at the back of the ticket book.",
    subject: "Provincial",
    topic: "Part I – Forms",
    lecture: "Provincial Law 1",
  },
  {
    id: "poa_part1_colors_2",
    type: "multi",
    prompt:
      "When issuing a Part I summons, the officer should: (Select ALL that apply)",
    choices: [
      "Remove the green copy",
      "Insert the pink summons in its place",
      "Keep the green copy for potential Notice to Parent use for youth",
      "Discard the entire snap-set",
    ],
    answerIndices: [0, 1, 2],
    explanation:
      "The notes describe removing green, inserting pink summons, and using green as Notice to Parent when needed.",
    subject: "Provincial",
    topic: "Part I – Forms",
    lecture: "Provincial Law 1",
  },

  // -------------------------------
  // Court date rules (Part I summons)
  // -------------------------------
  {
    id: "poa_part1_courtdate_1",
    type: "single",
    prompt:
      "Issuing a Part I summons eliminates which option for the defendant?",
    choices: [
      "Trial",
      "Early resolution meeting",
      "Out-of-court settlement",
      "Disclosure request",
    ],
    answerIndex: 2,
    explanation:
      "The notes state issuing a summons eliminates the out-of-court settlement option.",
    subject: "Provincial",
    topic: "Part I – Court Date",
    lecture: "Provincial Law 1",
  },
  {
    id: "poa_part1_courtdate_2",
    type: "single",
    prompt: "Provincial Offences matters (as described) are heard in the:",
    choices: [
      "Superior Court of Justice",
      "Ontario Court of Justice",
      "Provincial Offences Court (separate court)",
      "Federal Court",
    ],
    answerIndex: 1,
    explanation:
      "The notes state Provincial Offences matters are heard in the Ontario Court of Justice.",
    subject: "Provincial",
    topic: "Courts",
    lecture: "Provincial Law 1",
  },
  {
    id: "poa_part1_courtdate_3",
    type: "single",
    prompt:
      "When selecting a Part I summons court date, the notes recommend allowing at least:",
    choices: ["1–2 weeks", "2–3 weeks", "4–5 weeks", "10–12 weeks"],
    answerIndex: 2,
    explanation:
      "The notes recommend allowing at least 4–5 weeks between the offence date and court date.",
    subject: "Provincial",
    topic: "Part I – Court Date",
    lecture: "Provincial Law 1",
  },
  {
    id: "poa_part1_courtdate_4",
    type: "truefalse",
    prompt:
      "True or False: The notes state that different jurisdictions may have separate court dates for Part I matters and Part III matters.",
    answer: true,
    explanation:
      "The notes say courts sit on different days and jurisdictions may separate Part I and Part III court dates.",
    subject: "Provincial",
    topic: "Part I vs Part III",
    lecture: "Provincial Law 1",
  },

  // -------------------------------
  // Youth Summons rules
  // -------------------------------
  {
    id: "poa_youth_1",
    type: "single",
    prompt: "In these notes, a 'youth' is defined as being:",
    choices: ["10–12", "12–15", "16–17", "Under 18 only"],
    answerIndex: 1,
    explanation: "The notes define youth as ages 12–15.",
    subject: "Provincial",
    topic: "Youth",
    lecture: "Provincial Law 1",
  },
  {
    id: "poa_youth_2",
    type: "single",
    prompt: "According to the notes, youth (12–15) can be issued:",
    choices: [
      "A Certificate of Offence only",
      "An Offence Notice with set fine",
      "A Summons (not a Certificate of Offence)",
      "A Part III Information only",
    ],
    answerIndex: 2,
    explanation:
      "The notes state youth cannot be issued a Certificate of Offence; a summons must be issued.",
    subject: "Provincial",
    topic: "Youth",
    lecture: "Provincial Law 1",
  },
  {
    id: "poa_youth_3",
    type: "truefalse",
    prompt:
      "True or False: When a summons is issued to a youth, a parent must be notified.",
    answer: true,
    explanation:
      "The notes state a parent must be notified when a summons is issued to a youth.",
    subject: "Provincial",
    topic: "Youth",
    lecture: "Provincial Law 1",
  },
  {
    id: "poa_youth_4",
    type: "single",
    prompt:
      "In the notes, which copy is used as the 'Notice to Parent' when issuing a youth summons?",
    choices: [
      "Pink summons",
      "Offence Notice (green copy)",
      "Certificate of Offence (white copy)",
      "Affidavit of Service (yellow copy)",
    ],
    answerIndex: 1,
    explanation:
      "The notes describe using the green Offence Notice copy as the Notice to Parent for youth summons situations.",
    subject: "Provincial",
    topic: "Youth",
    lecture: "Provincial Law 1",
  },

  // -------------------------------
  // Affidavit of Service (issuer vs server) + POA 3(5) / 3(6)
  // -------------------------------
  {
    id: "poa_aos_1",
    type: "single",
    prompt: "An Affidavit of Service is required when:",
    choices: [
      "The defendant pays early",
      "The Offence Notice or summons is served by someone other than the issuing officer",
      "The officer issued a warning",
      "The offence is indictable",
    ],
    answerIndex: 1,
    explanation:
      "The notes state an Affidavit of Service is required when the issuer and server are not the same person.",
    subject: "Provincial",
    topic: "Affidavit of Service",
    lecture: "Provincial Law 1",
  },
  {
    id: "poa_aos_2",
    type: "single",
    prompt: "The Affidavit of Service is found on:",
    choices: [
      "The front of the Offence Notice",
      "The reverse side of the Certificate of Offence",
      "A separate form from the courthouse only",
      "The back of the driver’s licence",
    ],
    answerIndex: 1,
    explanation:
      "The notes state the reverse side of the Certificate of Offence is used as the Affidavit of Service.",
    subject: "Provincial",
    topic: "Affidavit of Service",
    lecture: "Provincial Law 1",
  },
  {
    id: "poa_aos_3",
    type: "single",
    prompt: "In the notes, the 'issuer' is:",
    choices: [
      "The person who receives the ticket",
      "The officer who issued the Certificate of Offence",
      "The prosecutor in court",
      "The Justice who signs the summons",
    ],
    answerIndex: 1,
    explanation: "Issuer = officer who issued the Certificate of Offence.",
    subject: "Provincial",
    topic: "Affidavit of Service",
    lecture: "Provincial Law 1",
  },
  {
    id: "poa_aos_4",
    type: "single",
    prompt: "In the notes, the 'server' is:",
    choices: [
      "The officer (or person) who actually serves the Offence Notice/summons",
      "The court clerk",
      "The defendant",
      "The informant who swears the Information",
    ],
    answerIndex: 0,
    explanation:
      "Server = the person who actually serves the Offence Notice or summons.",
    subject: "Provincial",
    topic: "Affidavit of Service",
    lecture: "Provincial Law 1",
  },
  {
    id: "poa_aos_5",
    type: "truefalse",
    prompt:
      "True or False: If the issuing officer personally serves the Offence Notice/summons, they must certify service and record the date of service on the Certificate of Offence (POA s.3(5) concept).",
    answer: true,
    explanation:
      "The notes state personal service by the issuer requires certification on the Certificate and recording the date of service.",
    subject: "Provincial",
    topic: "Affidavit of Service",
    lecture: "Provincial Law 1",
  },
  {
    id: "poa_aos_6",
    type: "truefalse",
    prompt:
      "True or False: If someone other than the issuing officer serves the document, an Affidavit of Service must be completed (POA s.3(6) concept).",
    answer: true,
    explanation:
      "The notes state service by someone else requires an Affidavit of Service in the prescribed form.",
    subject: "Provincial",
    topic: "Affidavit of Service",
    lecture: "Provincial Law 1",
  },

  // -------------------------------
  // Part III Summons – Overview / Differences
  // -------------------------------
  {
    id: "poa_part3_overview_1",
    type: "multi",
    prompt: "Part III summons are described as: (Select ALL that apply)",
    choices: [
      "Used for more serious provincial offences",
      "More formal and costly than Part I",
      "Having more sentencing options upon conviction",
      "Always involving set fines",
    ],
    answerIndices: [0, 1, 2],
    explanation:
      "Part III is for more serious matters, more formal/costly, and allows more sentencing options. It is not based on set fines.",
    subject: "Provincial",
    topic: "Part III – Overview",
    lecture: "Provincial Law 1",
  },
  {
    id: "poa_part3_grounds_1",
    type: "single",
    prompt:
      "The notes compare grounds as: Part I = ________, Part III = ________.",
    choices: [
      "Suspicion; Reasonable suspicion",
      "Belief; Reasonable and probable grounds",
      "Reasonable grounds; Proof beyond a reasonable doubt",
      "Belief; Proof beyond a reasonable doubt",
    ],
    answerIndex: 1,
    explanation:
      "Part I is based on belief; Part III requires reasonable and probable grounds.",
    subject: "Provincial",
    topic: "Part I vs Part III",
    lecture: "Provincial Law 1",
  },
  {
    id: "poa_part3_doc_1",
    type: "single",
    prompt: "The charging document that commences Part III proceedings is the:",
    choices: [
      "Certificate of Offence",
      "Information",
      "Offence Notice",
      "Notice of Intent",
    ],
    answerIndex: 1,
    explanation:
      "Part III proceedings are commenced by laying an Information (not a Certificate of Offence).",
    subject: "Provincial",
    topic: "Part III – Information",
    lecture: "Provincial Law 1",
  },
  {
    id: "poa_part3_anyone_1",
    type: "truefalse",
    prompt:
      "True or False: The notes state that any person may lay an Information for Part III proceedings.",
    answer: true,
    explanation: "The notes explicitly state anyone may lay an Information.",
    subject: "Provincial",
    topic: "Part III – Information",
    lecture: "Provincial Law 1",
  },
  {
    id: "poa_part3_limits_1",
    type: "single",
    prompt:
      "Unless another statute provides otherwise, an Information must be laid within:",
    choices: ["30 days", "6 months", "1 year", "No time limit"],
    answerIndex: 1,
    explanation:
      "The notes state an Information must be laid within 6 months unless otherwise stated.",
    subject: "Provincial",
    topic: "Part III – Information",
    lecture: "Provincial Law 1",
  },

  // -------------------------------
  // Commencement of Proceedings (Part I vs Part III)
  // -------------------------------
  {
    id: "poa_commence_1",
    type: "single",
    prompt: "According to the notes, Part I proceedings commence when:",
    choices: [
      "The Offence Notice is served",
      "The Certificate of Offence is filed before a Justice",
      "The officer writes notes",
      "The defendant appears in court",
    ],
    answerIndex: 1,
    explanation:
      "The notes state Part I commences when the Certificate of Offence is filed before a Justice.",
    subject: "Provincial",
    topic: "Commencement of Proceedings",
    lecture: "Provincial Law 1",
  },
  {
    id: "poa_commence_2",
    type: "single",
    prompt: "According to the notes, Part III proceedings commence when:",
    choices: [
      "The summons is served at roadside",
      "An Information is laid at the court office",
      "A set fine is paid",
      "A Justice convicts by default",
    ],
    answerIndex: 1,
    explanation:
      "The notes state Part III commences when an Information is laid at the court office.",
    subject: "Provincial",
    topic: "Commencement of Proceedings",
    lecture: "Provincial Law 1",
  },

  // -------------------------------
  // Minimum requirements of a Part III summons
  // -------------------------------
  {
    id: "poa_part3_minreq_1",
    type: "multi",
    prompt:
      "Minimum requirements of a Part III summons include: (Select ALL that apply)",
    choices: [
      "Directed to the defendant",
      "Describes the alleged offence",
      "Requires the defendant to attend court on the specified date and as required thereafter",
      "Includes a set fine amount",
    ],
    answerIndices: [0, 1, 2],
    explanation:
      "The notes list these minimum requirements; Part III summons is not based on set fines.",
    subject: "Provincial",
    topic: "Part III – Summons Requirements",
    lecture: "Provincial Law 1",
  },

  // -------------------------------
  // Part III Prosecution – two-step process
  // -------------------------------
  {
    id: "poa_part3_2step_1",
    type: "multi",
    prompt:
      "The Part III prosecution process is described as two steps: (Select BOTH)",
    choices: [
      "Informant swears a completed Information (Form 105) before a Justice",
      "Defendant is served with a Summons to attend court",
      "Defendant pays a set fine to avoid court",
      "Officer files a Certificate of Offence within 7 days",
    ],
    answerIndices: [0, 1],
    explanation:
      "The notes describe: swear Information (Form 105), then serve summons requiring attendance.",
    subject: "Provincial",
    topic: "Part III – Process",
    lecture: "Provincial Law 1",
  },

  // -------------------------------
  // Two types of Part III summons (Short vs Long)
  // -------------------------------
  {
    id: "poa_part3_types_1",
    type: "single",
    prompt:
      "Which sequence matches the 'Short Form' Part III method described?",
    choices: [
      "Information first, then summons",
      "Summons first, then Information",
      "Certificate of Offence first, then summons",
      "Offence Notice first, then Information",
    ],
    answerIndex: 1,
    explanation:
      "Short Form (Form 104) is described as summons first (immediate service), then Information.",
    subject: "Provincial",
    topic: "Part III – Short vs Long",
    lecture: "Provincial Law 1",
  },
  {
    id: "poa_part3_types_2",
    type: "single",
    prompt: "Which sequence matches the 'Long Form' Part III method described?",
    choices: [
      "Information first, then summons",
      "Summons first, then Information",
      "Offence Notice first, then Certificate",
      "Ticket first, then early resolution",
    ],
    answerIndex: 0,
    explanation:
      "Long Form (Form 106) is described as Information first, then summons served after-the-fact.",
    subject: "Provincial",
    topic: "Part III – Short vs Long",
    lecture: "Provincial Law 1",
  },
  {
    id: "poa_part3_purpose_1",
    type: "multi",
    prompt: "The notes describe the purposes as: (Select ALL that apply)",
    choices: [
      "Summons: require the defendant to attend court",
      "Information: place the offence before the court",
      "Summons: set the fine amount",
      "Information: acts as a sworn document outlining allegations",
    ],
    answerIndices: [0, 1, 3],
    explanation:
      "Summons compels attendance; Information puts the offence before court and is sworn outlining allegations.",
    subject: "Provincial",
    topic: "Part III – Purpose",
    lecture: "Provincial Law 1",
  },

  // -------------------------------
  // Form 104 (Short Form) specifics
  // -------------------------------
  {
    id: "poa_104_when_1",
    type: "multi",
    prompt: "A Short Form 104 Summons is used when: (Select ALL that apply)",
    choices: [
      "Defendant is found at or near the place of the offence",
      "Officer has reasonable and probable grounds the offence was committed",
      "Follow-up investigation is required months later",
      "A Part I service deadline has already been missed",
    ],
    answerIndices: [0, 1],
    explanation:
      "The notes state 104 is used for immediate service near the scene when RPG exist.",
    subject: "Provincial",
    topic: "Form 104 – Short Form",
    lecture: "Provincial Law 1",
  },
  {
    id: "poa_104_steps_1",
    type: "multi",
    prompt: "The Short Form (104) process includes: (Select ALL that apply)",
    choices: [
      "Issue and serve the Form 104 summons, complete Affidavit of Service on the back",
      "Swear the Affidavit of Service and have the summons confirmed by a Justice",
      "Swear the Information regarding the offence(s)",
      "File a Certificate of Offence within 7 days",
    ],
    answerIndices: [0, 1, 2],
    explanation:
      "The notes list: issue/serve + AOS, swear/confirm by Justice, then swear the Information.",
    subject: "Provincial",
    topic: "Form 104 – Process",
    lecture: "Provincial Law 1",
  },
  {
    id: "poa_104_date_1",
    type: "single",
    prompt:
      "For a Form 104 summons, the court date should be set far enough in the future primarily to:",
    choices: [
      "Allow completion of the remaining steps (confirmation and Information)",
      "Ensure the defendant forgets the offence",
      "Ensure a set fine can be added",
      "Allow the officer to avoid notes",
    ],
    answerIndex: 0,
    explanation:
      "The notes state the date must be far enough out to complete the remaining steps after service.",
    subject: "Provincial",
    topic: "Form 104 – Court Date",
    lecture: "Provincial Law 1",
  },

  // -------------------------------
  // Form 106 (Long Form) specifics
  // -------------------------------
  {
    id: "poa_106_when_1",
    type: "multi",
    prompt: "A Long Form 106 Summons is used for: (Select ALL that apply)",
    choices: [
      "Follow-up investigation for NSF offences where charges aren’t laid at/near the scene",
      "Less serious offences where Part I timeline is exceeded (use Part III up to 6 months)",
      "Immediate roadside service when offender is present",
      "Offences that must always have a set fine",
    ],
    answerIndices: [0, 1],
    explanation:
      "The notes describe long form use for follow-up/NSF and when Part I timing has been exceeded (extending up to 6 months).",
    subject: "Provincial",
    topic: "Form 106 – Long Form",
    lecture: "Provincial Law 1",
  },
  {
    id: "poa_106_issued_1",
    type: "single",
    prompt: "A Form 106 Long Form summons is issued by a Justice after:",
    choices: [
      "A Certificate of Offence is served",
      "An Information is sworn",
      "A set fine is paid",
      "Disclosure is requested",
    ],
    answerIndex: 1,
    explanation:
      "The notes state Form 106 is issued by a Justice after an Information is sworn.",
    subject: "Provincial",
    topic: "Form 106 – Long Form",
    lecture: "Provincial Law 1",
  },
  {
    id: "poa_106_service_1",
    type: "multi",
    prompt:
      "According to the notes, a Form 106 summons may be served: (Select ALL that apply)",
    choices: [
      "Personally",
      "Substitutionally (left with an 'inmate' who resides with the defendant and is 16+)",
      "By registered mail if the defendant does not reside in Ontario",
      "By registered mail if the defendant is a corporation",
      "By leaving it on the windshield",
    ],
    answerIndices: [0, 1, 2, 3],
    explanation:
      "The notes list personal service, substituted service with a 16+ co-resident, and registered mail for out-of-province defendants or corporations.",
    subject: "Provincial",
    topic: "Form 106 – Service",
    lecture: "Provincial Law 1",
  },
  {
    id: "poa_106_process_1",
    type: "multi",
    prompt: "The Long Form (106) process includes: (Select ALL that apply)",
    choices: [
      "Swear Form 105 (Information) before a Justice",
      "Justice endorses Form 105 and issues Form 106 if satisfied RPG exist",
      "Serve Form 106 and swear the Affidavit of Service (back of the summons)",
      "Issue a Certificate of Offence within 30 days",
    ],
    answerIndices: [0, 1, 2],
    explanation:
      "The notes list: swear Information, Justice issues summons if RPG exist, then service and sworn AOS.",
    subject: "Provincial",
    topic: "Form 106 – Process",
    lecture: "Provincial Law 1",
  },

  // -------------------------------
  // Comparison questions (Part I vs Part III)
  // -------------------------------
  {
    id: "poa_compare_1",
    type: "double",
    prompt: "MATCH: Process → Grounds threshold",
    fields: [
      {
        label: "PART I",
        options: [
          "Belief",
          "Reasonable and probable grounds",
          "Proof beyond a reasonable doubt",
          "Suspicion",
        ],
      },
      {
        label: "PART III",
        options: [
          "Belief",
          "Reasonable and probable grounds",
          "Proof beyond a reasonable doubt",
          "Suspicion",
        ],
      },
    ],
    answers: ["Belief", "Reasonable and probable grounds"],
    explanation:
      "The notes describe Part I as belief, Part III as reasonable and probable grounds.",
    subject: "Provincial",
    topic: "Part I vs Part III",
    lecture: "Provincial Law 1",
  },
  {
    id: "poa_compare_2",
    type: "double",
    prompt: "MATCH: Process → Document that commences proceedings",
    fields: [
      {
        label: "PART I",
        options: [
          "Certificate of Offence",
          "Information",
          "Subpoena",
          "Warrant",
        ],
      },
      {
        label: "PART III",
        options: [
          "Certificate of Offence",
          "Information",
          "Offence Notice",
          "Warning",
        ],
      },
    ],
    answers: ["Certificate of Offence", "Information"],
    explanation:
      "Part I proceedings begin with filing a Certificate of Offence; Part III begins by laying an Information.",
    subject: "Provincial",
    topic: "Commencement of Proceedings",
    lecture: "Provincial Law 1",
  },

  // -------------------------------
  // Scenario questions
  // -------------------------------
  {
    id: "poa_scn_1",
    type: "single",
    prompt:
      "SCENARIO: You have a minor provincial offence but want mandatory court attendance and no set fine option. Which Part I document best fits?",
    choices: [
      "Offence Notice",
      "Part I Summons",
      "Form 104 Summons",
      "Form 106 Summons",
    ],
    answerIndex: 1,
    explanation:
      "A Part I summons requires court attendance and does not use a set fine.",
    subject: "Provincial",
    topic: "Scenario Applications",
    lecture: "Provincial Law 1",
  },
  {
    id: "poa_scn_2",
    type: "single",
    prompt:
      "SCENARIO: Officer A issued the Part I summons, but Officer B personally served it. What extra step is required?",
    choices: [
      "No extra step",
      "Affidavit of Service (prescribed form) must be completed",
      "Serve it again within 7 days",
      "Lay an Information instead",
    ],
    answerIndex: 1,
    explanation:
      "If issuer and server are different, an Affidavit of Service is required (per notes).",
    subject: "Provincial",
    topic: "Affidavit of Service",
    lecture: "Provincial Law 1",
  },
  {
    id: "poa_scn_3",
    type: "single",
    prompt:
      "SCENARIO: You need to proceed on a more serious provincial offence and must commence by laying a sworn document before the court. What is that document called?",
    choices: [
      "Certificate of Offence",
      "Information",
      "Offence Notice",
      "Early Resolution Request",
    ],
    answerIndex: 1,
    explanation:
      "Part III proceedings start with laying an Information (sworn).",
    subject: "Provincial",
    topic: "Part III – Information",
    lecture: "Provincial Law 1",
  },
  {
    id: "poa_scn_4",
    type: "single",
    prompt:
      "SCENARIO: You missed the 30-day Part I time limit after a minor offence, but you still want to lay a charge within a longer window (up to 6 months). Which approach from the notes fits best?",
    choices: [
      "Part I Offence Notice",
      "Part I Summons",
      "Part III process (Long Form 106)",
      "Withdraw the matter automatically",
    ],
    answerIndex: 2,
    explanation:
      "The notes state long-form Part III (106) can extend time to lay a charge up to 6 months when Part I timeline is exceeded.",
    subject: "Provincial",
    topic: "Form 106 – Long Form",
    lecture: "Provincial Law 1",
  },
  // =========================
  // POA #3 (Session #3a) Review
  // =========================

  {
    id: "poa3-1",
    type: "single",
    prompt:
      "Under this lesson, the Provincial Offences Act (POA) is best described as:",
    choices: [
      "A substantive act",
      "A procedural act",
      "A municipal by-law",
      "A federal statute",
    ],
    answerIndex: 1,
    explanation:
      "The POA is taught as a regulatory/procedural act (the “rule book” for provincial offence processes).",
    subject: "Provincial",
    topic: "POA Review",
    lecture: "Provincial Law 3",
  },
  {
    id: "poa3-2",
    type: "truefalse",
    prompt:
      "The POA provides general arrest authority for provincial offences.",
    answer: false,
    explanation:
      "The POA review notes state there is no general arrest authority in the POA.",
    subject: "Provincial",
    topic: "POA Review",
    lecture: "Provincial Law 3",
  },
  {
    id: "poa3-3",
    type: "truefalse",
    prompt:
      "The POA provides general search authority for provincial offences.",
    answer: false,
    explanation:
      "The POA review notes state there is no general search authority in the POA.",
    subject: "Provincial",
    topic: "POA Review",
    lecture: "Provincial Law 3",
  },
  {
    id: "poa3-4",
    type: "single",
    prompt:
      "In plain language, “commencement of proceedings” was described in class as:",
    choices: [
      "The officer writing notes in their notebook",
      "The wheels of justice starting to turn",
      "The defendant being warned roadside",
      "The Crown reviewing disclosure",
    ],
    answerIndex: 1,
    explanation:
      "The slide describes commencement as “the wheels of justice starting to turn.”",
    subject: "Provincial",
    topic: "Commencement of Proceedings",
    lecture: "Provincial Law 3",
  },
  {
    id: "poa3-5",
    type: "single",
    prompt: "When do proceedings commence under POA Part I?",
    choices: [
      "When the officer issues the ticket",
      "When the officer serves the ticket",
      "When the Certificate of Offence is filed with the court",
      "When the defendant pays the set fine",
    ],
    answerIndex: 2,
    explanation:
      "Part I commencement begins when the Certificate of Offence is filed with the court.",
    subject: "Provincial",
    topic: "Commencement of Proceedings",
    lecture: "Provincial Law 3",
  },
  {
    id: "poa3-6",
    type: "single",
    prompt: "When do proceedings commence under POA Part III?",
    choices: [
      "When a summons is printed",
      "When an Information is laid before a Justice",
      "When the defendant is warned",
      "When the set fine is paid",
    ],
    answerIndex: 1,
    explanation:
      "Part III commencement begins when an Information is laid before a Justice.",
    subject: "Provincial",
    topic: "Commencement of Proceedings",
    lecture: "Provincial Law 3",
  },
  {
    id: "poa3-7",
    type: "single",
    prompt: "In the POA ticket set described, the white copy is called:",
    choices: [
      "Offence Notice",
      "Certificate of Offence",
      "Part I Summons",
      "Information",
    ],
    answerIndex: 1,
    explanation: "The white copy is the Certificate of Offence.",
    subject: "Provincial",
    topic: "Forms & Copies",
    lecture: "Provincial Law 3",
  },
  {
    id: "poa3-8",
    type: "single",
    prompt: "In the POA ticket set described, the green/blue copy is called:",
    choices: [
      "Offence Notice",
      "Certificate of Offence",
      "Information",
      "Affidavit of Service",
    ],
    answerIndex: 0,
    explanation: "The green/blue copy is the Offence Notice.",
    subject: "Provincial",
    topic: "Forms & Copies",
    lecture: "Provincial Law 3",
  },
  {
    id: "poa3-9",
    type: "single",
    prompt: "In the POA ticket set described, the pink copy is used for:",
    choices: [
      "A set fine payment receipt",
      "A Part I summons",
      "A Part III information",
      "A warning notice",
    ],
    answerIndex: 1,
    explanation: "The pink copy is used as the Part I summons.",
    subject: "Provincial",
    topic: "Forms & Copies",
    lecture: "Provincial Law 3",
  },
  {
    id: "poa3-10",
    type: "dropdown",
    prompt:
      "POA Part I — Grounds required to lay/issue (as taught in these slides)",
    options: [
      "Suspicion",
      "Belief",
      "Reasonable and probable grounds",
      "Beyond a reasonable doubt",
    ],
    answerValue: "Belief",
    explanation: "The slides state a “belief” is grounds for laying Part I.",
    subject: "Provincial",
    topic: "Grounds & Thresholds",
    lecture: "Provincial Law 3",
  },
  {
    id: "poa3-11",
    type: "dropdown",
    prompt:
      "POA Part III — Grounds required to lay an Information (as taught in these slides)",
    options: [
      "Belief",
      "Reasonable and probable grounds",
      "Suspicion",
      "Proof beyond a reasonable doubt",
    ],
    answerValue: "Reasonable and probable grounds",
    explanation:
      "The slides use “Reasonable and Probable (P for Provincial) Grounds” for Part III.",
    subject: "Provincial",
    topic: "Grounds & Thresholds",
    lecture: "Provincial Law 3",
  },
  {
    id: "poa3-12",
    type: "single",
    prompt: "Who may lay an Information under the POA (per the lesson)?",
    choices: [
      "Only Provincial Offences Officers",
      "Only police officers",
      "Anyone",
      "Only Justices of the Peace",
    ],
    answerIndex: 2,
    explanation:
      "The slides state anyone may lay an Information to a JP under the POA.",
    subject: "Provincial",
    topic: "Part III Foundations",
    lecture: "Provincial Law 3",
  },
  {
    id: "poa3-13",
    type: "truefalse",
    prompt:
      "For a Part III summons, you must swear/affirm an Affidavit of Service after serving the defendant.",
    answer: true,
    explanation:
      "The POA review Q/A indicates an Affidavit of Service must be sworn/remembered for Part III service.",
    subject: "Provincial",
    topic: "Service & Affidavits",
    lecture: "Provincial Law 3",
  },
  {
    id: "poa3-14",
    type: "single",
    prompt:
      "For substitutional service of a Part III summons (directed to someone else), the person accepting service must be apparently:",
    choices: [
      "12+ years old",
      "15+ years old",
      "16+ years old",
      "18+ years old",
    ],
    answerIndex: 2,
    explanation:
      "The review notes indicate the person must be apparently 16 or more for substitutional service.",
    subject: "Provincial",
    topic: "Service & Affidavits",
    lecture: "Provincial Law 3",
  },
  {
    id: "poa3-15",
    type: "single",
    prompt:
      "Under Part I in these slides, how many days does an officer have to issue an offence notice or summons?",
    choices: ["7 days", "15 days", "30 days", "45 days"],
    answerIndex: 2,
    explanation: "The review question identifies 30 days for Part I issuing.",
    subject: "Provincial",
    topic: "Part I Timelines",
    lecture: "Provincial Law 3",
  },
  {
    id: "poa3-16",
    type: "single",
    prompt: "After serving a Part I offence notice or summons, filing must be:",
    choices: [
      "Within 48 hours",
      "Within 15 days",
      "As soon as practicable but no later than 7 days",
      "Any time before trial",
    ],
    answerIndex: 2,
    explanation:
      "The slides list “file ASAP but no later than 7 days after service” as the filing requirement for Part I forms.",
    subject: "Provincial",
    topic: "Part I Timelines",
    lecture: "Provincial Law 3",
  },
  {
    id: "poa3-17",
    type: "single",
    prompt:
      "If no limitation period is prescribed for a POA offence, proceedings must not be commenced after:",
    choices: ["Six months", "Twelve months", "Two years", "Three years"],
    answerIndex: 0,
    explanation:
      "The review question indicates six months where no limitation period is prescribed.",
    subject: "Provincial",
    topic: "Limitation Periods",
    lecture: "Provincial Law 3",
  },
  {
    id: "poa3-18",
    type: "multi",
    prompt:
      "Which of the following are listed as Offence Notice (Part I) limitations in these slides? (Select ALL that apply)",
    choices: [
      "Must have a set fine",
      "30 days to serve after offence date",
      "Must file in court ASAP but no later than 7 days after service",
      "Imprisonment is available on conviction",
      "Fine not to exceed $1,000 (before surcharges)",
      "Can be used for anyone aged 12–15",
    ],
    answerIndices: [0, 1, 2, 4],
    explanation:
      "The slide lists: must have set fine, 30 days to serve, file ASAP/no later than 7 days, fine cap $1,000, and no imprisonment; also notes it can’t be used for ages 12–15.",
    subject: "Provincial",
    topic: "Part I Offence Notice",
    lecture: "Provincial Law 3",
  },
  {
    id: "poa3-19",
    type: "multi",
    prompt:
      "Which of the following are listed as Part I Summons (Pink) limitations in these slides? (Select ALL that apply)",
    choices: [
      "Requires court appearance",
      "Has a set fine",
      "30 days to serve after offence date",
      "Must file ASAP but no later than 7 days after service",
      "Adult fine cap $1,000; youth (12–15) cap $300",
      "Imprisonment is available on conviction",
    ],
    answerIndices: [0, 2, 3, 4],
    explanation:
      "The slide notes the Part I summons requires court, has 30 days to serve, filing ASAP/no later than 7 days, fine caps ($1,000 adult / $300 youth), and no imprisonment.",
    subject: "Provincial",
    topic: "Part I Summons",
    lecture: "Provincial Law 3",
  },
  {
    id: "poa3-20",
    type: "truefalse",
    prompt:
      "In these slides, the Part I summons (pink) is described as having no set fine and requiring a court date.",
    answer: true,
    explanation:
      "The slide says the Part I summons has no set fine and the defendant must be issued a court date.",
    subject: "Provincial",
    topic: "Part I Summons",
    lecture: "Provincial Law 3",
  },
  {
    id: "poa3-21",
    type: "single",
    prompt:
      "In the “more serious POA offences” diagram, who can issue the Part III short-form summons at or near the scene?",
    choices: [
      "Any person",
      "Only Provincial Offences Officers",
      "Only Crown Attorneys",
      "Only court staff",
    ],
    answerIndex: 1,
    explanation:
      "The diagram notes Part III short-form at/near scene is Provincial Offences Officer only.",
    subject: "Provincial",
    topic: "Part III Paths",
    lecture: "Provincial Law 3",
  },
  {
    id: "poa3-22",
    type: "truefalse",
    prompt:
      "Under POA Part III (either path), the time limit is 6 months unless the act creating the offence specifies otherwise.",
    answer: true,
    explanation:
      "The diagram lists a “6 month time limit unless specified in act creating offence.”",
    subject: "Provincial",
    topic: "Part III Limitations",
    lecture: "Provincial Law 3",
  },
  {
    id: "poa3-23",
    type: "single",
    prompt:
      "Under POA Part III (either path), maximum fines/jail are determined by:",
    choices: [
      "A universal POA $1,000 cap",
      "The officer’s discretion",
      "The act creating the offence",
      "Municipal policy manuals",
    ],
    answerIndex: 2,
    explanation:
      "The diagram states maximum fines/jail are as specified in the act creating the offence.",
    subject: "Provincial",
    topic: "Part III Limitations",
    lecture: "Provincial Law 3",
  },
  {
    id: "poa3-24",
    type: "single",
    prompt:
      "In the practical exercise shown, what offence is the driver charged with using a Part III Short Form Summons?",
    choices: [
      "Careless driving (HTA 130)",
      "Drive motor vehicle without insurance",
      "Driving while under suspension (HTA 53(1))",
      "Fail to surrender licence (HTA 33(3))",
    ],
    answerIndex: 2,
    explanation:
      "The slide’s practical directs charging Driving While Under Suspension under HTA 53(1).",
    subject: "Provincial",
    topic: "Part III Practical",
    lecture: "Provincial Law 3",
  },

  // =========================
  // Residential Tenancies Act (Session #3b)
  // =========================

  {
    id: "rta-1",
    type: "single",
    prompt:
      "In this lesson, police role in the Residential Tenancies Act (RTA) is compared to:",
    choices: [
      "A judge in court",
      "A referee in hockey",
      "A landlord’s representative",
      "A Crown prosecutor",
    ],
    answerIndex: 1,
    explanation:
      "The slide says the police role in the RTA is similar to a referee in hockey (keep the peace, remain objective, referrals).",
    subject: "Provincial",
    topic: "RTA: Police Role",
    lecture: "Provincial Law 3",
  },
  {
    id: "rta-2",
    type: "multi",
    prompt:
      "Which tasks are listed as part of the police role in RTA calls? (Select ALL that apply)",
    choices: [
      "Keep the peace",
      "Remain objective",
      "Give legal advice to the landlord",
      "Make sure parties are safe and property is protected",
      "Ask to see pertinent documentation",
      "Provide referrals",
    ],
    answerIndices: [0, 1, 3, 4, 5],
    explanation:
      "Slides list: keep the peace, remain objective, avoid giving legal advice, ensure safety/property protection, ask for documentation, provide referrals.",
    subject: "Provincial",
    topic: "RTA: Police Role",
    lecture: "Provincial Law 3",
  },
  {
    id: "rta-3",
    type: "truefalse",
    prompt:
      "The slides suggest police should avoid giving legal advice during RTA disputes.",
    answer: true,
    explanation:
      "“Avoid giving legal advice” is explicitly listed under Role of Police.",
    subject: "Provincial",
    topic: "RTA: Police Role",
    lecture: "Provincial Law 3",
  },
  {
    id: "rta-4",
    type: "truefalse",
    prompt:
      "Police evidence/notes may be required at the tribunal and/or court in RTA matters.",
    answer: true,
    explanation:
      "Slides state police evidence may be required at tribunal/court—make good notes.",
    subject: "Provincial",
    topic: "RTA: Police Role",
    lecture: "Provincial Law 3",
  },
  {
    id: "rta-5",
    type: "single",
    prompt:
      "Which body is listed as resolving disputes about rights/responsibilities like rent increases, evictions, and privacy issues?",
    choices: [
      "Ontario Court of Justice",
      "Landlord and Tenant Board (LTB)",
      "Ministry of Transportation",
      "Provincial Offences Court",
    ],
    answerIndex: 1,
    explanation:
      "The referral slide lists the Landlord and Tenant Board as resolving disputes regarding rights/responsibilities (rent increases, evictions, privacy issues).",
    subject: "Provincial",
    topic: "RTA: Referrals",
    lecture: "Provincial Law 3",
  },
  {
    id: "rta-6",
    type: "single",
    prompt:
      "The slides identify which unit as responsible for ensuring compliance/enforcement under the RTA (contact when considering charges)?",
    choices: [
      "Ministry of Municipal Affairs and Housing – Investigative Unit",
      "Ministry of the Attorney General – Crown Office",
      "Municipal Licensing Office",
      "Ontario Human Rights Commission",
    ],
    answerIndex: 0,
    explanation:
      "The “Investigative Unit” slide references the Ministry of Municipal Affairs and Housing as responsible for compliance/enforcement under the RTA.",
    subject: "Provincial",
    topic: "RTA: Referrals",
    lecture: "Provincial Law 3",
  },
  {
    id: "rta-7",
    type: "multi",
    prompt:
      "According to the slides, the purpose of the RTA includes: (Select ALL that apply)",
    choices: [
      "Ensure rights/obligations between landlords and tenants are clearly understood",
      "Balance power to encourage security of tenure (right to remain) where possible",
      "Eliminate the need for any eviction process",
      "Guarantee landlords can enter whenever they want",
    ],
    answerIndices: [0, 1],
    explanation:
      "Purpose slide lists understanding rights/obligations + balancing power to encourage security of tenure.",
    subject: "Provincial",
    topic: "RTA: Purpose",
    lecture: "Provincial Law 3",
  },
  {
    id: "rta-8",
    type: "single",
    prompt:
      "The slides describe the RTA as creating two regimes. Which pair matches the slides?",
    choices: [
      "Criminal regime and sentencing regime",
      "Civil regime (LTB) and compliance regime (provincial offences under RTA)",
      "Municipal regime and federal regime",
      "Insurance regime and licensing regime",
    ],
    answerIndex: 1,
    explanation:
      "Slides list: 1) Civil Regime via LTB; 2) Compliance Regime (Provincial Offences under RTA) enforced under POA Part III.",
    subject: "Provincial",
    topic: "RTA: Structure",
    lecture: "Provincial Law 3",
  },
  {
    id: "rta-9",
    type: "truefalse",
    prompt:
      "A matter may be pursued in both the LTB (civil) forum and the compliance (provincial offence) forum at the same time.",
    answer: true,
    explanation:
      "The slide notes a matter may be pursued in both forums at the same time.",
    subject: "Provincial",
    topic: "RTA: Structure",
    lecture: "Provincial Law 3",
  },
  {
    id: "rta-10",
    type: "single",
    prompt:
      "Under the slides, the landlord’s right of entry WITH notice requires:",
    choices: [
      "No notice if it’s daytime",
      "24 hours written notice",
      "48 hours verbal notice",
      "Only police presence",
    ],
    answerIndex: 1,
    explanation:
      "The slide states “WITH NOTICE: 24 hrs written notice to enter – s 27(1).”",
    subject: "Provincial",
    topic: "RTA: Entry",
    lecture: "Provincial Law 3",
  },
  {
    id: "rta-11",
    type: "multi",
    prompt:
      "Which reasons are listed under landlord entry WITH NOTICE (s.27(1))? (Select ALL that apply)",
    choices: [
      "Repair or replacement work",
      "Mortgagee or insurer to view",
      "Engineer or architect to inspect (Condominium Act)",
      "Carry out health/safety/housing/maintenance inspections",
      "To seize tenant property for unpaid rent",
    ],
    answerIndices: [0, 1, 2, 3],
    explanation:
      "The slide lists these four examples under entry with notice; seizing tenant property is not listed as a valid entry reason.",
    subject: "Provincial",
    topic: "RTA: Entry",
    lecture: "Provincial Law 3",
  },
  {
    id: "rta-12",
    type: "multi",
    prompt:
      "Which situations are listed for landlord entry WITHOUT NOTICE (s.26(1))? (Select ALL that apply)",
    choices: [
      "On consent",
      "In an emergency (e.g., water/fire) — enter any time",
      "To clean or as specified in the lease agreement",
      "To show the unit to potential renters (with conditions)",
      "Any time the landlord wants if rent is late",
    ],
    answerIndices: [0, 1, 2, 3],
    explanation:
      "The slide lists consent, emergency, cleaning/lease-specified, and showing unit to potential renters (with conditions).",
    subject: "Provincial",
    topic: "RTA: Entry",
    lecture: "Provincial Law 3",
  },
  {
    id: "rta-13",
    type: "single",
    prompt:
      "When showing a unit to potential renters without notice (as listed), entry must occur between:",
    choices: ["0600–1800", "0700–1900", "0800–2000", "0900–2100"],
    answerIndex: 2,
    explanation:
      "The slide specifies entry between 0800–2000 hours for that scenario.",
    subject: "Provincial",
    topic: "RTA: Entry",
    lecture: "Provincial Law 3",
  },
  {
    id: "rta-14",
    type: "truefalse",
    prompt:
      "The slides list that withholding vital services is prohibited (s.21(1)).",
    answer: true,
    explanation:
      "The “Vital Services” slide states withholding services is prohibited (s.21(1)).",
    subject: "Provincial",
    topic: "RTA: Vital Services & Restrictions",
    lecture: "Provincial Law 3",
  },
  {
    id: "rta-15",
    type: "truefalse",
    prompt:
      "According to the slides, if rent is paid and up to date, the unit is NOT considered abandoned.",
    answer: true,
    explanation:
      "The slide notes: if rent is paid and up to date, it’s not abandoned.",
    subject: "Provincial",
    topic: "RTA: Vital Services & Restrictions",
    lecture: "Provincial Law 3",
  },
  {
    id: "rta-16",
    type: "truefalse",
    prompt:
      "The slides indicate seizing a tenant’s property is prohibited (s.40).",
    answer: true,
    explanation: "The slide lists: seizing tenants property prohibited – s.40.",
    subject: "Provincial",
    topic: "RTA: Vital Services & Restrictions",
    lecture: "Provincial Law 3",
  },
  {
    id: "rta-17",
    type: "single",
    prompt:
      "According to the slides, a lease/contract can supersede the RTA if both parties agree.",
    choices: ["True", "False"],
    answerIndex: 1,
    explanation:
      "The slide states a lease/contract cannot supersede provisions of the RTA.",
    subject: "Provincial",
    topic: "RTA: Vital Services & Restrictions",
    lecture: "Provincial Law 3",
  },
  {
    id: "rta-18",
    type: "single",
    prompt: "According to the slides, a landlord may not change locks without:",
    choices: [
      "Calling police first",
      "Giving the tenant a key",
      "Posting a notice on the door for 7 days",
      "LTB approval in every situation",
    ],
    answerIndex: 1,
    explanation:
      "The slide states landlord may not change locks without giving tenant key (s.24).",
    subject: "Provincial",
    topic: "RTA: Locks",
    lecture: "Provincial Law 3",
  },
  {
    id: "rta-19",
    type: "single",
    prompt: "According to the slides, a tenant may not change locks without:",
    choices: [
      "Police permission",
      "Landlord consent",
      "A court order",
      "A written warning",
    ],
    answerIndex: 1,
    explanation:
      "The slide states tenant may not change lock without consent (s.35(1)).",
    subject: "Provincial",
    topic: "RTA: Locks",
    lecture: "Provincial Law 3",
  },
  {
    id: "rta-20",
    type: "multi",
    prompt:
      "Which are listed as examples of accommodation the RTA applies to? (Select ALL that apply)",
    choices: [
      "Mobile home",
      "Units in care homes (e.g., seniors facility)",
      "Rooming/boarding houses",
      "Non-profit housing",
      "Motels/hotels/inns when used as a primary residence (at times)",
    ],
    answerIndices: [0, 1, 2, 3, 4],
    explanation:
      "The “RTA applies to” slide lists all of these as included examples (with the hotel/motel caveat).",
    subject: "Provincial",
    topic: "RTA: Application",
    lecture: "Provincial Law 3",
  },
  {
    id: "rta-21",
    type: "multi",
    prompt:
      "Which situations are listed as RTA exemptions? (Select ALL that apply)",
    choices: [
      "Transient accommodation in a hotel/motel/inn/B&B",
      "Occupancy conditional upon employment (e.g., farm labour, apt over store)",
      "Occupancy for correctional purposes",
      "Roommate of a tenant",
      "Short-term emergency shelters",
      "Occupancy provided by an educational institution (e.g., university campus, OPC)",
      "Shared occupancy where boarder shares bathroom/kitchen with owner/spouse/child",
    ],
    answerIndices: [0, 1, 2, 3, 4, 5, 6],
    explanation:
      "The exemption slides list all of these as exemption situations.",
    subject: "Provincial",
    topic: "RTA: Exemptions",
    lecture: "Provincial Law 3",
  },
  {
    id: "rta-22",
    type: "single",
    prompt:
      "According to the slide, the first step for a lawful eviction is to:",
    choices: [
      "Change the locks immediately",
      "Serve tenant a valid Notice of Termination",
      "Call police to remove the tenant",
      "Apply directly to the Sheriff",
    ],
    answerIndex: 1,
    explanation:
      "The eviction steps slide begins with serving a valid Notice of Termination.",
    subject: "Provincial",
    topic: "RTA: Eviction Process",
    lecture: "Provincial Law 3",
  },
  {
    id: "rta-23",
    type: "single",
    prompt: "According to the slide, who enforces the eviction order?",
    choices: [
      "The landlord",
      "Police",
      "The Sheriff’s office",
      "The LTB Chair",
    ],
    answerIndex: 2,
    explanation:
      "The slide states the order is enforced by the Sheriff’s office (police may assist).",
    subject: "Provincial",
    topic: "RTA: Eviction Process",
    lecture: "Provincial Law 3",
  },
  {
    id: "rta-24",
    type: "truefalse",
    prompt:
      "The slides indicate police may be called upon to assist the Sheriff during an eviction enforcement.",
    answer: true,
    explanation:
      "Eviction slide notes police may be called upon to assist Sheriff.",
    subject: "Provincial",
    topic: "RTA: Eviction Process",
    lecture: "Provincial Law 3",
  },
  {
    id: "rta-25",
    type: "double",
    prompt:
      "EVENT: A landlord shows up with police and tries to physically remove a tenant without an eviction order.",
    fields: [
      {
        label: "BEST POLICE ROLE",
        options: [
          "Remove the tenant for the landlord",
          "Keep the peace and refer to LTB / proper process",
          "Give the landlord legal advice on forms",
          "Arrest the tenant for trespass (always)",
        ],
      },
      {
        label: "KEY IDEA (FROM SLIDES)",
        options: [
          "Police act like a referee; stay objective",
          "Landlord can evict anytime with 24h notice",
          "Seizing tenant property is permitted",
          "Lease terms override the RTA",
        ],
      },
    ],
    answers: [
      "Keep the peace and refer to LTB / proper process",
      "Police act like a referee; stay objective",
    ],
    explanation:
      "The RTA slides stress police act like a referee: keep the peace, remain objective, avoid legal advice, and provide referrals.",
    subject: "Provincial",
    topic: "RTA: Police Response Scenarios",
    lecture: "Provincial Law 3",
  },
  // -------------------------------
  // Learning Outcomes / Key Terms
  // -------------------------------
  {
    id: "fedlaw4_outcomes_1",
    type: "multi",
    prompt:
      "By the end of FedLaw4, learners should be able to: (Select ALL that apply)",
    choices: [
      "Articulate statutory requirements and limitations related to applying force",
      "Explain criminal and civil responsibility surrounding use of force and the Charter",
      "Explain POA Part I timelines for serving tickets",
      "Explain how to file a Certificate of Offence within 7 days",
    ],
    answerIndices: [0, 1],
    explanation:
      "This module focuses on use of force authority/limits and the criminal/civil responsibility + Charter impacts.",
    subject: "Federal",
    topic: "Module Outcomes",
    lecture: "FedLaw4: Use of Force and The Charter",
  },
  {
    id: "fedlaw4_terms_1",
    type: "multi",
    prompt:
      "Which of the following are listed as key terms in this module? (Select ALL that apply)",
    choices: [
      "Reasonable Grounds",
      "Subjective Justification",
      "Objective Justification",
      "Authorized or Required by Law",
      "Set Fines",
      "Imminent",
      "Proportional",
      "Charter of Rights",
    ],
    answerIndices: [0, 1, 2, 3, 5, 6, 7],
    explanation:
      "Key terms include RG, subjective/objective justification, authorized/required by law, necessary, good faith, imminent, proportional, and Charter rights.",
    subject: "Federal",
    topic: "Key Terms",
    lecture: "FedLaw4: Use of Force and The Charter",
  },

  // -------------------------------
  // Reasonable Grounds fundamentals
  // -------------------------------
  {
    id: "fedlaw4_rg_1",
    type: "single",
    prompt: "Reasonable grounds are best described as:",
    choices: [
      "Less than suspicion but more than proof",
      "More than reasonable suspicion but less than proof beyond a reasonable doubt",
      "The same as proof beyond a reasonable doubt",
      "A hunch based on experience",
    ],
    answerIndex: 1,
    explanation:
      "Reasonable grounds sit above reasonable suspicion and below proof beyond a reasonable doubt, based on the totality of circumstances.",
    subject: "Federal",
    topic: "Reasonable Grounds",
    lecture: "FedLaw4: Use of Force and The Charter",
  },
  {
    id: "fedlaw4_rg_2",
    type: "truefalse",
    prompt:
      "Reasonable grounds require absolute proof that an offence occurred.",
    answer: false,
    explanation:
      "Reasonable grounds do not require certainty or absolute proof—only an objectively justifiable basis plus the officer’s honest belief.",
    subject: "Federal",
    topic: "Reasonable Grounds",
    lecture: "FedLaw4: Use of Force and The Charter",
  },
  {
    id: "fedlaw4_rg_3",
    type: "truefalse",
    prompt:
      "Suspicious circumstances alone are never sufficient to establish reasonable grounds.",
    answer: true,
    explanation:
      "Suspicion alone isn’t enough—grounds must be based on facts and circumstances that are objectively justifiable.",
    subject: "Federal",
    topic: "Reasonable Grounds",
    lecture: "FedLaw4: Use of Force and The Charter",
  },
  {
    id: "fedlaw4_rg_4",
    type: "multi",
    prompt:
      "Reasonable grounds should NOT be based on: (Select ALL that apply)",
    choices: [
      "Mere suspicion",
      "Conjecture",
      "Hypothesis",
      "Fishing expeditions",
      "Totality of circumstances",
      "Corroborated facts",
    ],
    answerIndices: [0, 1, 2, 3],
    explanation:
      "Grounds must be based on facts/circumstances, not guessing or searching without a basis.",
    subject: "Federal",
    topic: "Reasonable Grounds",
    lecture: "FedLaw4: Use of Force and The Charter",
  },
  {
    id: "fedlaw4_rg_5",
    type: "multi",
    prompt: "Reasonable grounds may arise from: (Select ALL that apply)",
    choices: [
      "A confession",
      "A credible witness",
      "Circumstantial evidence",
      "A gut feeling with no facts",
    ],
    answerIndices: [0, 1, 2],
    explanation:
      "The notes list confession, credible witness, and circumstantial evidence as sources of grounds.",
    subject: "Federal",
    topic: "Reasonable Grounds",
    lecture: "FedLaw4: Use of Force and The Charter",
  },

  // -------------------------------
  // Subjective + Objective (R. v. Storrey concept)
  // -------------------------------
  {
    id: "fedlaw4_so_1",
    type: "single",
    prompt: "The reasonable-grounds test requires:",
    choices: [
      "Only the officer’s honest belief (subjective)",
      "Only what a reasonable person would believe (objective)",
      "Both subjective belief and objective justification",
      "Proof beyond a reasonable doubt",
    ],
    answerIndex: 2,
    explanation:
      "Both are required: the officer must honestly believe grounds exist AND the belief must be objectively justifiable.",
    subject: "Federal",
    topic: "Subjective vs Objective",
    lecture: "FedLaw4: Use of Force and The Charter",
  },
  {
    id: "fedlaw4_so_2",
    type: "single",
    prompt: "Objective justification means:",
    choices: [
      "The officer feels strongly something happened",
      "Facts/circumstances would cause a reasonable person to believe an offence was committed or about to be committed",
      "Any suspicion equals grounds",
      "A supervisor agrees with the officer",
    ],
    answerIndex: 1,
    explanation:
      "Objective justification is about whether the facts would convince a reasonable person.",
    subject: "Federal",
    topic: "Subjective vs Objective",
    lecture: "FedLaw4: Use of Force and The Charter",
  },
  {
    id: "fedlaw4_so_3",
    type: "single",
    prompt: "Subjective justification means:",
    choices: [
      "The officer personally (honestly) believes they have reasonable grounds",
      "The officer has proof beyond a reasonable doubt",
      "The suspect admits guilt in court",
      "The officer can’t explain their decision",
    ],
    answerIndex: 0,
    explanation:
      "Subjective = the officer’s honest belief, actually held, that grounds exist.",
    subject: "Federal",
    topic: "Subjective vs Objective",
    lecture: "FedLaw4: Use of Force and The Charter",
  },
  {
    id: "fedlaw4_so_4",
    type: "truefalse",
    prompt:
      "If an officer honestly believes grounds exist, that alone is enough—even if the facts would not convince a reasonable person.",
    answer: false,
    explanation:
      "Subjective belief alone isn’t enough; the belief must also be objectively justifiable.",
    subject: "Federal",
    topic: "Subjective vs Objective",
    lecture: "FedLaw4: Use of Force and The Charter",
  },

  // -------------------------------
  // Interaction continuum + standards
  // -------------------------------
  {
    id: "fedlaw4_continuum_1",
    type: "single",
    prompt:
      "Which option best matches the concept of a police interaction continuum taught in these notes?",
    choices: [
      "Authority decreases as evidence increases",
      "Authority increases as grounds develop (no grounds → suspicion → RG → arrest)",
      "Detention always requires proof beyond a reasonable doubt",
      "Conversation is never permitted without grounds",
    ],
    answerIndex: 1,
    explanation:
      "As information develops, an officer may move along the continuum, increasing lawful authority as grounds strengthen.",
    subject: "Federal",
    topic: "Police Interaction Continuum",
    lecture: "FedLaw4: Use of Force and The Charter",
  },
  {
    id: "fedlaw4_rs_1",
    type: "single",
    prompt: "Reasonable suspicion primarily authorizes:",
    choices: [
      "Conviction in court",
      "Investigative detention",
      "A search warrant",
      "Automatic arrest",
    ],
    answerIndex: 1,
    explanation:
      "Reasonable suspicion supports investigative detention, not arrest.",
    subject: "Federal",
    topic: "Reasonable Suspicion",
    lecture: "FedLaw4: Use of Force and The Charter",
  },
  {
    id: "fedlaw4_rs_2",
    type: "single",
    prompt: "Reasonable suspicion is described as:",
    choices: [
      "A constellation of objectively discernible facts leading an officer to suspect criminal involvement",
      "Absolute certainty of guilt",
      "An officer’s intuition",
      "A finding of guilt by a judge",
    ],
    answerIndex: 0,
    explanation:
      "It’s a fact-based suspicion grounded in objectively discernible facts.",
    subject: "Federal",
    topic: "Reasonable Suspicion",
    lecture: "FedLaw4: Use of Force and The Charter",
  },
  {
    id: "fedlaw4_brd_1",
    type: "single",
    prompt: "Beyond a reasonable doubt is:",
    choices: [
      "The officer’s standard to arrest",
      "The Crown’s burden of proof at trial for conviction",
      "The standard for investigative detention",
      "The same as suspicion",
    ],
    answerIndex: 1,
    explanation:
      "BRD is the trial standard required to convict, and it’s higher than reasonable grounds.",
    subject: "Federal",
    topic: "Standards of Proof",
    lecture: "FedLaw4: Use of Force and The Charter",
  },
  {
    id: "fedlaw4_compare_1",
    type: "double",
    prompt: "MATCH: Standard → Typical legal action (as taught here)",
    fields: [
      {
        label: "REASONABLE SUSPICION",
        options: [
          "Conviction",
          "Investigative detention",
          "Arrest/search/use of force",
          "No police interaction allowed",
        ],
      },
      {
        label: "REASONABLE GROUNDS",
        options: [
          "Conviction",
          "Investigative detention",
          "Arrest/search/use of force",
          "No police interaction allowed",
        ],
      },
    ],
    answers: ["Investigative detention", "Arrest/search/use of force"],
    explanation:
      "Reasonable suspicion supports investigative detention; reasonable grounds supports stronger powers like arrest/search/use of force.",
    subject: "Federal",
    topic: "Standards Comparison",
    lecture: "FedLaw4: Use of Force and The Charter",
  },

  // -------------------------------
  // Use of Force authority (s.25(1) concept)
  // -------------------------------
  {
    id: "fedlaw4_s25_core_1",
    type: "single",
    prompt:
      "In Canada, the primary Criminal Code authority for police use of force is:",
    choices: ["s.24 Charter", "s.25 Criminal Code", "s.61 POA", "s.494 HTA"],
    answerIndex: 1,
    explanation:
      "The notes identify Criminal Code s.25 as the authority to use force.",
    subject: "Federal",
    topic: "Use of Force Authority",
    lecture: "FedLaw4: Use of Force and The Charter",
  },
  {
    id: "fedlaw4_justified_1",
    type: "single",
    prompt: "In this module, “justified” generally means:",
    choices: [
      "Protected from criminal liability only",
      "Protected from civil liability only",
      "Protected from both criminal and civil liability (if requirements are met)",
      "Allowed to use unlimited force",
    ],
    answerIndex: 2,
    explanation:
      "Justified = protected from criminal and civil liability when acting lawfully on RG and using only necessary force.",
    subject: "Federal",
    topic: "Justification",
    lecture: "FedLaw4: Use of Force and The Charter",
  },

  // -------------------------------
  // Three-Branch Test (s.25 framework)
  // -------------------------------
  {
    id: "fedlaw4_threebranch_1",
    type: "multi",
    prompt:
      "The three-branch test for lawful force under s.25 (as taught here) requires: (Select ALL that apply)",
    choices: [
      "Authorized/required by law",
      "Reasonable grounds",
      "As much force as necessary",
      "Proof beyond a reasonable doubt",
      "A supervisor’s approval",
    ],
    answerIndices: [0, 1, 2],
    explanation: "All three branches must be met to maintain s.25 protection.",
    subject: "Federal",
    topic: "Three-Branch Test",
    lecture: "FedLaw4: Use of Force and The Charter",
  },
  {
    id: "fedlaw4_threebranch_2",
    type: "truefalse",
    prompt:
      "If any one branch of the three-branch test fails, an officer may lose s.25 protection.",
    answer: true,
    explanation:
      "All branches must be satisfied; failure of any branch can remove justification under s.25.",
    subject: "Federal",
    topic: "Three-Branch Test",
    lecture: "FedLaw4: Use of Force and The Charter",
  },
  {
    id: "fedlaw4_threebranch_3",
    type: "single",
    prompt:
      "In the three-branch test, the “necessary force” requirement means:",
    choices: [
      "Use the maximum force allowed to end it quickly",
      "Use force that is objectively reasonable and the minimum necessary to achieve the lawful objective",
      "Use force only after a conviction",
      "Use force only if the suspect is armed",
    ],
    answerIndex: 1,
    explanation:
      "Force must be objectively reasonable and limited to what is necessary to achieve the lawful purpose.",
    subject: "Federal",
    topic: "Necessary Force",
    lecture: "FedLaw4: Use of Force and The Charter",
  },

  // -------------------------------
  // De-escalation and articulation
  // -------------------------------
  {
    id: "fedlaw4_deesc_1",
    type: "truefalse",
    prompt:
      "The notes emphasize that de-escalation is often the priority, but if it fails, officers may still need to apply force to ensure safety.",
    answer: true,
    explanation:
      "De-escalation is preferred, but force may be necessary if safety is at risk and other efforts fail.",
    subject: "Federal",
    topic: "De-escalation",
    lecture: "FedLaw4: Use of Force and The Charter",
  },
  {
    id: "fedlaw4_articulation_1",
    type: "single",
    prompt:
      "Why is articulation (what you say and write in notes) emphasized in use-of-force decisions?",
    choices: [
      "Because notes replace body-worn video",
      "Because articulation becomes the basis of evidence and must justify decisions to courts/supervisors/public",
      "Because officers must use legal terms only, not facts",
      "Because it guarantees charges are laid",
    ],
    answerIndex: 1,
    explanation:
      "Your notes and articulation are evidence and must explain lawful authority, grounds, and necessity of force.",
    subject: "Federal",
    topic: "Articulation",
    lecture: "FedLaw4: Use of Force and The Charter",
  },
  {
    id: "fedlaw4_template_1",
    type: "multi",
    prompt:
      "Which lines best match the “articulation template” from the notes? (Select ALL that apply)",
    choices: [
      "I was authorized to ____ because ____.",
      "My reasonable grounds were ____ which led me to believe ____.",
      "I used force that was necessary because ____; I attempted/considered de-escalation by ____.",
      "I used force because the person annoyed me.",
    ],
    answerIndices: [0, 1, 2],
    explanation:
      "The template: authority → grounds (facts + belief) → necessary force + de-escalation considerations.",
    subject: "Federal",
    topic: "Articulation",
    lecture: "FedLaw4: Use of Force and The Charter",
  },

  // -------------------------------
  // Good faith (acting in good faith)
  // -------------------------------
  {
    id: "fedlaw4_goodfaith_def_1",
    type: "single",
    prompt: "Acting in good faith means acting:",
    choices: [
      "With honest intention and free from any knowledge of irregularity",
      "With perfect judgment in every situation",
      "With a supervisor’s permission",
      "With force as long as you are stressed",
    ],
    answerIndex: 0,
    explanation:
      "Good faith = honest intention + no knowledge of irregularity.",
    subject: "Federal",
    topic: "Good Faith",
    lecture: "FedLaw4: Use of Force and The Charter",
  },
  {
    id: "fedlaw4_goodfaith_1",
    type: "truefalse",
    prompt:
      "Good faith protection can apply even if a process or sentence was defective or issued without jurisdiction, as long as the officer acted in good faith (as taught here).",
    answer: true,
    explanation:
      "The notes describe good faith protection when executing process/sentence despite defects, if acting honestly without knowledge of irregularity.",
    subject: "Federal",
    topic: "Good Faith",
    lecture: "FedLaw4: Use of Force and The Charter",
  },
  {
    id: "fedlaw4_mistake_1",
    type: "single",
    prompt: "Good faith generally protects officers for reasonable:",
    choices: [
      "Mistakes of law",
      "Mistakes of fact",
      "Intentional violations",
      "Any use of force",
    ],
    answerIndex: 1,
    explanation:
      "The notes emphasize good faith protects reasonable mistakes of fact, not mistakes of law.",
    subject: "Federal",
    topic: "Good Faith",
    lecture: "FedLaw4: Use of Force and The Charter",
  },
  {
    id: "fedlaw4_mistake_2",
    type: "single",
    prompt:
      "A warrant still showing active on CPIC due to a court error is best described as:",
    choices: [
      "Mistake of law",
      "Mistake of fact",
      "Proof beyond a reasonable doubt",
      "No error at all",
    ],
    answerIndex: 1,
    explanation:
      "Reliance on incorrect system information is a mistake of fact; good faith may apply if the officer had no reason to know it was wrong.",
    subject: "Federal",
    topic: "Good Faith",
    lecture: "FedLaw4: Use of Force and The Charter",
  },
  {
    id: "fedlaw4_mistake_3",
    type: "single",
    prompt:
      "An officer arrests someone for a strictly summary offence two days after it happened (when find-committing is required). This is best categorized as:",
    choices: [
      "Mistake of fact",
      "Mistake of law",
      "Reasonable suspicion",
      "Objective justification",
    ],
    answerIndex: 1,
    explanation:
      "Misunderstanding or not knowing arrest authority is a mistake of law and is not protected the same way as mistake of fact.",
    subject: "Federal",
    topic: "Good Faith",
    lecture: "FedLaw4: Use of Force and The Charter",
  },

  // -------------------------------
  // Deadly force: s.25(4) fleeing subject (5 criteria / ANDs)
  // -------------------------------
  {
    id: "fedlaw4_254_1",
    type: "truefalse",
    prompt:
      "Deadly force under s.25(4) is justified only if ALL listed criteria are satisfied (every 'AND' must be met).",
    answer: true,
    explanation:
      "The notes stress strict compliance: each element must be satisfied or deadly force is not justified.",
    subject: "Federal",
    topic: "Deadly Force – Fleeing Subject",
    lecture: "FedLaw4: Use of Force and The Charter",
  },
  {
    id: "fedlaw4_254_2",
    type: "multi",
    prompt:
      "Which are required criteria for deadly force against a fleeing subject under s.25(4) (as taught here)? (Select ALL that apply)",
    choices: [
      "Lawful arrest is being made",
      "The person may be lawfully arrested without a warrant",
      "The person takes flight to avoid arrest",
      "Officer has RG deadly force is necessary to protect from imminent or future death/GBH",
      "The flight cannot be prevented by reasonable means in a less violent manner",
      "A set fine exists",
    ],
    answerIndices: [0, 1, 2, 3, 4],
    explanation:
      "The module lists these five requirements (and stresses all must be met).",
    subject: "Federal",
    topic: "Deadly Force – Fleeing Subject",
    lecture: "FedLaw4: Use of Force and The Charter",
  },
  {
    id: "fedlaw4_254_3",
    type: "single",
    prompt:
      "Under the notes, deadly force under s.25(4) must be necessary to protect against:",
    choices: [
      "Any minor injury",
      "Property damage only",
      "Death or grievous bodily harm",
      "Embarrassment or disrespect",
    ],
    answerIndex: 2,
    explanation:
      "Deadly force is tied to preventing death or grievous bodily harm (imminent or future), not minor harm.",
    subject: "Federal",
    topic: "Deadly Force – Fleeing Subject",
    lecture: "FedLaw4: Use of Force and The Charter",
  },

  // -------------------------------
  // Escaping inmate (penitentiary) deadly force criteria
  // -------------------------------
  {
    id: "fedlaw4_inmate_1",
    type: "multi",
    prompt:
      "Deadly force for an escaping penitentiary inmate (as taught) requires: (Select BOTH)",
    choices: [
      "RG the inmate poses a threat of death or grievous bodily harm to officer or any person",
      "The escape cannot be prevented by reasonable means in a less violent manner",
      "The inmate committed a summary offence",
      "A warrant is endorsed by a Justice",
    ],
    answerIndices: [0, 1],
    explanation:
      "The notes describe a narrow authority: threat of death/GBH + no lesser reasonable option.",
    subject: "Federal",
    topic: "Deadly Force – Escaping Inmate",
    lecture: "FedLaw4: Use of Force and The Charter",
  },
  {
    id: "fedlaw4_inmate_2",
    type: "truefalse",
    prompt:
      "This 'escaping inmate' deadly-force authority applies to any prisoner in any detention setting.",
    answer: false,
    explanation:
      "The notes describe it as narrow and tied to penitentiary inmates (not all prisoners).",
    subject: "Federal",
    topic: "Deadly Force – Escaping Inmate",
    lecture: "FedLaw4: Use of Force and The Charter",
  },

  // -------------------------------
  // s.25(3) necessity + family of terms
  // -------------------------------
  {
    id: "fedlaw4_253_1",
    type: "single",
    prompt:
      "Under the notes, s.25(3) emphasizes that deadly force is NOT justified unless it is necessary for:",
    choices: [
      "Arresting any fleeing suspect",
      "Self-preservation or preserving anyone under the officer’s protection from death/GBH",
      "Preventing any property offence",
      "Punishing violent behaviour",
    ],
    answerIndex: 1,
    explanation:
      "The notes describe deadly force as last resort: necessary to preserve life/prevent death or grievous bodily harm.",
    subject: "Federal",
    topic: "Deadly Force – Necessity",
    lecture: "FedLaw4: Use of Force and The Charter",
  },
  {
    id: "fedlaw4_necessity_1",
    type: "multi",
    prompt:
      "In this module, 'necessity' requires ALL THREE: (Select ALL that apply)",
    choices: [
      "Imminent peril or danger",
      "No reasonable legal alternatives",
      "Proportionality between harm caused and harm avoided",
      "Supervisor approval",
    ],
    answerIndices: [0, 1, 2],
    explanation:
      "Necessity is broken down into imminence, no reasonable alternatives, and proportionality.",
    subject: "Federal",
    topic: "Necessity",
    lecture: "FedLaw4: Use of Force and The Charter",
  },
  {
    id: "fedlaw4_imminence_1",
    type: "multi",
    prompt: "Imminence is assessed by considering: (Select ALL that apply)",
    choices: ["Intent", "Means", "Opportunity", "Rank", "Uniform type"],
    answerIndices: [0, 1, 2],
    explanation:
      "Imminence is evaluated through intent, means, and opportunity—danger capable of being carried out now.",
    subject: "Federal",
    topic: "Imminence",
    lecture: "FedLaw4: Use of Force and The Charter",
  },
  {
    id: "fedlaw4_proportionality_1",
    type: "single",
    prompt: "Proportionality in deadly force means the harm caused must:",
    choices: [
      "Always be greater than the harm avoided",
      "Not exceed the harm avoided",
      "Match the suspect’s attitude",
      "Be based on public opinion",
    ],
    answerIndex: 1,
    explanation:
      "Proportionality means the harm caused should not exceed the harm avoided (and deadly force is tied to preventing death/GBH).",
    subject: "Federal",
    topic: "Proportionality",
    lecture: "FedLaw4: Use of Force and The Charter",
  },

  // -------------------------------
  // s.26 excess force (credit card analogy + reassess)
  // -------------------------------
  {
    id: "fedlaw4_s26_1",
    type: "single",
    prompt: "Criminal Code s.26 is best summarized as:",
    choices: [
      "Permission to use unlimited force",
      "Criminal responsibility for any excess force used",
      "Authority to arrest without warrant",
      "Rules for serving summons",
    ],
    answerIndex: 1,
    explanation:
      "s.26 means even if you’re authorized to use force, you’re criminally responsible for any excess.",
    subject: "Federal",
    topic: "Excess Force",
    lecture: "FedLaw4: Use of Force and The Charter",
  },
  {
    id: "fedlaw4_s26_2",
    type: "truefalse",
    prompt:
      "Protection under s.25 can end mid-interaction if force becomes excessive.",
    answer: true,
    explanation:
      "The notes emphasize continuous reassessment; once force becomes excessive, s.26 applies and protection can be lost.",
    subject: "Federal",
    topic: "Excess Force",
    lecture: "FedLaw4: Use of Force and The Charter",
  },
  {
    id: "fedlaw4_creditcard_1",
    type: "single",
    prompt:
      "The “credit card” analogy in the notes describes s.25 as the permission to use force and s.26 as:",
    choices: [
      "The police budget",
      "The credit limit (no exceeding what’s reasonable/necessary)",
      "The arrest warrant",
      "The disclosure package",
    ],
    answerIndex: 1,
    explanation:
      "s.26 is framed as the limit: you can’t exceed what is reasonable and necessary.",
    subject: "Federal",
    topic: "Excess Force",
    lecture: "FedLaw4: Use of Force and The Charter",
  },

  // -------------------------------
  // s.27 prevention of offence
  // -------------------------------
  {
    id: "fedlaw4_s27_1",
    type: "single",
    prompt: "Criminal Code s.27 is primarily about using force to:",
    choices: [
      "Punish an offender after the fact",
      "Prevent the commission of certain serious offences (or what you reasonably believe will become such an offence)",
      "Serve a summons",
      "Convict an accused",
    ],
    answerIndex: 1,
    explanation:
      "s.27 is framed as prevention-focused, with force limited to what is reasonably necessary.",
    subject: "Federal",
    topic: "Preventing an Offence",
    lecture: "FedLaw4: Use of Force and The Charter",
  },
  {
    id: "fedlaw4_s27_2",
    type: "multi",
    prompt:
      "Under the notes, s.27 justifies force to prevent an offence when: (Select ALL that apply)",
    choices: [
      "The offence would allow arrest without warrant",
      "The offence would likely cause immediate and serious injury to a person or property",
      "The person reasonably believes something would become such an offence",
      "A set fine exists",
    ],
    answerIndices: [0, 1, 2],
    explanation:
      "The notes outline these conditions and emphasize force must still be reasonable/necessary/proportionate.",
    subject: "Federal",
    topic: "Preventing an Offence",
    lecture: "FedLaw4: Use of Force and The Charter",
  },

  // -------------------------------
  // Self-defence s.34(1) + s.34(2) factors
  // -------------------------------
  {
    id: "fedlaw4_s34_test_1",
    type: "multi",
    prompt:
      "Self-defence under s.34(1) requires ALL THREE elements: (Select ALL that apply)",
    choices: [
      "Reasonable belief that force or threat of force is being used (against self or another)",
      "Purpose of defending self or another (not vindictive)",
      "Response was reasonable in the circumstances",
      "The accused must retreat in every situation",
    ],
    answerIndices: [0, 1, 2],
    explanation:
      "The notes use the trigger → motive → response structure: belief, defensive purpose, reasonable response.",
    subject: "Federal",
    topic: "Self-Defence",
    lecture: "FedLaw4: Use of Force and The Charter",
  },
  {
    id: "fedlaw4_s34_defothers_1",
    type: "truefalse",
    prompt:
      "Defence of others under s.34 is limited only to people 'under the defender’s protection.'",
    answer: false,
    explanation:
      "The notes state defence of others can apply to any other person; relationship is a factor courts consider.",
    subject: "Federal",
    topic: "Self-Defence",
    lecture: "FedLaw4: Use of Force and The Charter",
  },
  {
    id: "fedlaw4_s34_factors_1",
    type: "multi",
    prompt:
      "When assessing reasonableness under s.34(2), courts consider (as taught): (Select ALL that apply)",
    choices: [
      "Nature of the force or threat",
      "Imminence and availability of other options",
      "Person’s role in the incident (conduct from beginning to end)",
      "Size/age/gender/physical capabilities",
      "History/nature of relationship (including prior violence)",
      "Whether the response was proportional",
      "Whether the accused’s uniform was visible",
    ],
    answerIndices: [0, 1, 2, 3, 4, 5],
    explanation:
      "The notes describe a holistic assessment of all relevant circumstances; uniform visibility isn’t listed as a factor here.",
    subject: "Federal",
    topic: "Self-Defence",
    lecture: "FedLaw4: Use of Force and The Charter",
  },

  // -------------------------------
  // Charter impacts on s.25 protection + remedies (s.24)
  // -------------------------------
  {
    id: "fedlaw4_charter_1",
    type: "truefalse",
    prompt:
      "A Charter violation can cause an officer to lose protection under s.25 of the Criminal Code.",
    answer: true,
    explanation:
      "The notes state Charter breaches can remove s.25 protection and expose criminal/civil liability.",
    subject: "Federal",
    topic: "Charter & Use of Force",
    lecture: "FedLaw4: Use of Force and The Charter",
  },
  {
    id: "fedlaw4_charter_2",
    type: "multi",
    prompt:
      "Which Charter rights are commonly engaged in police encounters (as listed)? (Select ALL that apply)",
    choices: [
      "s.8 unreasonable search or seizure",
      "s.9 arbitrary detention or imprisonment",
      "s.10(a) informed promptly of reason for arrest/detention",
      "s.10(b) right to counsel without delay",
      "s.11 right to vote",
    ],
    answerIndices: [0, 1, 2, 3],
    explanation:
      "The notes list s.8, s.9, and s.10 rights as common in police encounters.",
    subject: "Federal",
    topic: "Charter Rights",
    lecture: "FedLaw4: Use of Force and The Charter",
  },
  {
    id: "fedlaw4_charter_12",
    type: "single",
    prompt: "Charter s.12 protects against:",
    choices: [
      "Unreasonable search",
      "Cruel and unusual treatment or punishment",
      "Arbitrary detention",
      "Loss of privacy in public",
    ],
    answerIndex: 1,
    explanation:
      "s.12 is the protection from cruel and unusual treatment or punishment.",
    subject: "Federal",
    topic: "Charter Rights",
    lecture: "FedLaw4: Use of Force and The Charter",
  },
  {
    id: "fedlaw4_241_1",
    type: "single",
    prompt:
      "Charter s.24(1) allows a person whose rights were infringed/denied to:",
    choices: [
      "Automatically get all evidence excluded",
      "Apply to a court for a remedy that is appropriate and just in the circumstances",
      "Demand a jury trial in every case",
      "Force police to withdraw charges immediately",
    ],
    answerIndex: 1,
    explanation:
      "s.24(1) is the general remedy provision for Charter breaches.",
    subject: "Federal",
    topic: "Charter Remedies",
    lecture: "FedLaw4: Use of Force and The Charter",
  },
  {
    id: "fedlaw4_242_1",
    type: "single",
    prompt: "Charter s.24(2) deals with:",
    choices: [
      "Arrest powers",
      "Excluding evidence obtained through a Charter breach when admission would bring the administration of justice into disrepute",
      "Civil lawsuits against police",
      "Court scheduling rules",
    ],
    answerIndex: 1,
    explanation:
      "s.24(2) is the exclusionary rule based on disrepute to the administration of justice.",
    subject: "Federal",
    topic: "Charter Remedies",
    lecture: "FedLaw4: Use of Force and The Charter",
  },
  {
    id: "fedlaw4_lsda_1",
    type: "single",
    prompt:
      "The memory aid 'LSDA' in the notes points you to which Charter section for remedies?",
    choices: ["s.1", "s.7", "s.24", "s.52"],
    answerIndex: 2,
    explanation:
      "LSDA (Liberty, Search, Detention, Arrest) → remedies under s.24.",
    subject: "Federal",
    topic: "Exam Memory Aids",
    lecture: "FedLaw4: Use of Force and The Charter",
  },

  // -------------------------------
  // Scenario-style application questions
  // -------------------------------
  {
    id: "fedlaw4_scn_1",
    type: "single",
    prompt:
      "SCENARIO: You are lawfully arresting a subject, have reasonable grounds, and apply only the minimum force needed to safely handcuff. Under s.25, you are most likely:",
    choices: [
      "Not justified because any force is illegal",
      "Justified (protected criminally and civilly) if all 3 branches are met",
      "Automatically guilty under s.26",
      "Justified even if the arrest was unlawful",
    ],
    answerIndex: 1,
    explanation:
      "If authorized/required by law + RG + necessary force are satisfied, s.25 justification applies.",
    subject: "Federal",
    topic: "Scenario Applications",
    lecture: "FedLaw4: Use of Force and The Charter",
  },
  {
    id: "fedlaw4_scn_2",
    type: "single",
    prompt:
      "SCENARIO: You continue striking a subject after they are fully controlled and no longer resisting. Which principle is most directly engaged?",
    choices: [
      "s.26 excess force liability",
      "s.24(1) remedies",
      "Reasonable suspicion",
      "Investigative detention",
    ],
    answerIndex: 0,
    explanation:
      "Even if initial force was justified, continued force can become excessive → s.26 criminal responsibility.",
    subject: "Federal",
    topic: "Scenario Applications",
    lecture: "FedLaw4: Use of Force and The Charter",
  },
  {
    id: "fedlaw4_scn_3",
    type: "single",
    prompt:
      "SCENARIO: You psychologically detain a person but fail to advise them of the reason and right to counsel. The most relevant Charter sections are:",
    choices: [
      "s.8 and s.12",
      "s.10(a) and s.10(b)",
      "s.24(2) only",
      "s.1 only",
    ],
    answerIndex: 1,
    explanation:
      "On arrest/detention, the person must be informed promptly of reasons (10a) and right to counsel (10b).",
    subject: "Federal",
    topic: "Scenario Applications",
    lecture: "FedLaw4: Use of Force and The Charter",
  },
  // -------------------------------
  // Core Concepts Review
  // -------------------------------
  {
    id: "fed5_arrest_1",
    type: "single",
    prompt: "Arrest is accomplished when you:",
    choices: [
      "Ask a person questions in public",
      "Take or get physical control of a person with intent to detain",
      "Suspect someone committed an offence",
      "Tell someone they are under arrest, without taking control",
    ],
    answerIndex: 1,
    explanation:
      "Arrest is accomplished when you take/get physical control of a person with intent to detain. :contentReference[oaicite:1]{index=1}",
    subject: "Federal",
    topic: "Arrest vs Detention",
    lecture: "Federal Law 5",
  },
  {
    id: "fed5_detention_1",
    type: "single",
    prompt: "Detention is best described as:",
    choices: [
      "A restraint of liberty short of arrest",
      "Physical control with intent to detain",
      "A conviction in court",
      "A search incident to arrest",
    ],
    answerIndex: 0,
    explanation:
      "Detention is a restraint of liberty short of arrest. :contentReference[oaicite:2]{index=2}",
    subject: "Federal",
    topic: "Arrest vs Detention",
    lecture: "Federal Law 5",
  },
  {
    id: "fed5_psychdet_1",
    type: "single",
    prompt: "“Psychological detention” is:",
    choices: [
      "A suspension of an individual's liberty by psychological restraint",
      "Only detention that involves handcuffs",
      "Any time police speak to someone",
      "Only possible inside a police station",
    ],
    answerIndex: 0,
    explanation:
      "The slide defines psychological detention as a suspension of liberty by psychological restraint. :contentReference[oaicite:3]{index=3}",
    subject: "Federal",
    topic: "Psychological Detention",
    lecture: "Federal Law 5",
  },

  // -------------------------------
  // Charter s.10 on Arrest/Detention
  // -------------------------------
  {
    id: "fed5_charter10_1",
    type: "multi",
    prompt:
      "On arrest or detention, a person has the right to: (Select ALL that apply)",
    choices: [
      "Be informed promptly of the reason for the arrest/detention",
      "Retain and instruct counsel without delay and be informed of that right",
      "Refuse to identify themselves in every situation",
      "Demand the officer’s notes immediately",
    ],
    answerIndices: [0, 1],
    explanation:
      "Charter s.10 rights on arrest/detention include being informed promptly of the reason and right to counsel without delay. :contentReference[oaicite:4]{index=4}",
    subject: "Federal",
    topic: "Charter Rights",
    lecture: "Federal Law 5",
  },
  {
    id: "fed5_charter10_tf1",
    type: "truefalse",
    prompt:
      "True or False: Charter s.10 rights apply only on arrest, not on detention.",
    answer: false,
    explanation:
      "The slide states rights apply on arrest OR detention. :contentReference[oaicite:5]{index=5}",
    subject: "Federal",
    topic: "Charter Rights",
    lecture: "Federal Law 5",
  },

  // -------------------------------
  // Find Committing vs Reasonable Grounds
  // -------------------------------
  {
    id: "fed5_fc_rg_1",
    type: "single",
    prompt: "“Find committing” is accomplished when:",
    choices: [
      "A person observes another commit the criminal offence",
      "A person thinks someone committed an offence with no observation",
      "A person reads about an offence online",
      "A person hears a rumor about an offence",
    ],
    answerIndex: 0,
    explanation:
      "Find committing is when a person observes another commit the criminal offence. :contentReference[oaicite:6]{index=6}",
    subject: "Federal",
    topic: "Find Committing vs Reasonable Grounds",
    lecture: "Federal Law 5",
  },
  {
    id: "fed5_rg_standard_1",
    type: "single",
    prompt:
      "Reasonable grounds (to believe) is best described as a standard that is:",
    choices: [
      "Greater than reasonable suspicion but less than balance of probabilities (considering totality of circumstances)",
      "Equal to proof beyond a reasonable doubt",
      "The same as a prima facie case",
      "Lower than a hunch",
    ],
    answerIndex: 0,
    explanation:
      "The slide describes RG as greater than reasonable suspicion but less than balance of probabilities, and not equivalent to BRD or prima facie case. :contentReference[oaicite:7]{index=7}",
    subject: "Federal",
    topic: "Reasonable Grounds",
    lecture: "Federal Law 5",
  },
  {
    id: "fed5_rg_tf1",
    type: "truefalse",
    prompt:
      "True or False: Reasonable grounds to believe is equivalent to proof beyond a reasonable doubt.",
    answer: false,
    explanation:
      "The slide explicitly notes RG is not equivalent to proof beyond a reasonable doubt. :contentReference[oaicite:8]{index=8}",
    subject: "Federal",
    topic: "Reasonable Grounds",
    lecture: "Federal Law 5",
  },
  {
    id: "fed5_storrey_1",
    type: "single",
    prompt:
      "R v. Storrey establishes that for arrest, reasonable grounds must be:",
    choices: [
      "Only subjectively believed by the officer",
      "Only objectively justifiable to a reasonable person",
      "Both subjectively held AND objectively justifiable",
      "Proven beyond a reasonable doubt",
    ],
    answerIndex: 2,
    explanation:
      "Storrey requires subjective grounds + objective justification (reasonable person test). :contentReference[oaicite:9]{index=9}",
    subject: "Federal",
    topic: "Reasonable Grounds",
    lecture: "Federal Law 5",
  },
  {
    id: "fed5_rg_principles_1",
    type: "multi",
    prompt:
      "Which statements about reasonable grounds are TRUE? (Select ALL that apply)",
    choices: [
      "Reasonable grounds is always a question of fact depending on the circumstances",
      "Suspicious circumstances will never be enough on their own",
      "Reasonable grounds requires facts that would cause a reasonable person to believe an offence was committed or about to be committed",
      "Reasonable grounds is purely subjective and cannot be tested objectively",
    ],
    answerIndices: [0, 1, 2],
    explanation:
      "The slides emphasize RG is fact-based, suspicion alone is insufficient, and RG must be objectively and subjectively justifiable. :contentReference[oaicite:10]{index=10}",
    subject: "Federal",
    topic: "Reasonable Grounds",
    lecture: "Federal Law 5",
  },

  // -------------------------------
  // “3+ C’s” for getting to RG
  // -------------------------------
  {
    id: "fed5_3cs_1",
    type: "multi",
    prompt:
      "The “3+ C’s” ways to be led into reasonable grounds include: (Select ALL that apply)",
    choices: [
      "Confession",
      "Credible Witness (+ Communicated)",
      "Circumstantial",
      "Convenience",
    ],
    answerIndices: [0, 1, 2],
    explanation:
      "The slides list Confession, Credible Witness (+ Communicated), and Circumstantial evidence. :contentReference[oaicite:11]{index=11}",
    subject: "Federal",
    topic: "Building Reasonable Grounds",
    lecture: "Federal Law 5",
  },
  {
    id: "fed5_confession_tipp_1",
    type: "single",
    prompt:
      "In the “Confession” pathway to reasonable grounds, the slides connect the objective element to checking whether what is met?",
    choices: ["TIPP", "Hearsay", "Prima facie", "Balance of probabilities"],
    answerIndex: 0,
    explanation:
      "The slide notes the substance of the confession is the objective element (is TIPP met?). :contentReference[oaicite:12]{index=12}",
    subject: "Federal",
    topic: "Building Reasonable Grounds",
    lecture: "Federal Law 5",
  },

  // -------------------------------
  // Definitions
  // -------------------------------
  {
    id: "fed5_defs_justified_1",
    type: "single",
    prompt: "In these slides, “Justified” means:",
    choices: [
      "Protected from criminal liability only",
      "Protected from civil liability only",
      "Protected from criminal and civil liability",
      "Allowed to do anything without consequences",
    ],
    answerIndex: 2,
    explanation:
      "The definitions slide states: Justified = protected from criminal and civil liability. :contentReference[oaicite:13]{index=13}",
    subject: "Federal",
    topic: "Definitions",
    lecture: "Federal Law 5",
  },
  {
    id: "fed5_defs_executed_1",
    type: "single",
    prompt: "In these slides, “Executed” means:",
    choices: [
      "Completed, carried to full effect (act/course of conduct carried to completion)",
      "Started but not finished",
      "Only refers to executing a warrant",
      "Only refers to court testimony",
    ],
    answerIndex: 0,
    explanation:
      "Executed is defined as completed/carried to full effect. :contentReference[oaicite:14]{index=14}",
    subject: "Federal",
    topic: "Definitions",
    lecture: "Federal Law 5",
  },
  {
    id: "fed5_defs_execduty_1",
    type: "single",
    prompt: "“Execution of Duty” refers to:",
    choices: [
      "Doing any task your supervisor suggests",
      "Lawfully performing an identifiable and specific duty authorized by statute or common law",
      "Doing anything you think is helpful",
      "Only duties done while in uniform",
    ],
    answerIndex: 1,
    explanation:
      "Execution of Duty is defined as lawfully performing an identifiable/specific duty authorized by statute or common law. :contentReference[oaicite:15]{index=15}",
    subject: "Federal",
    topic: "Definitions",
    lecture: "Federal Law 5",
  },
  {
    id: "fed5_defs_lawfulauth_1",
    type: "single",
    prompt: "“Lawful Authority” means:",
    choices: [
      "Authorized by law",
      "Authorized by a citizen",
      "Authorized by rumor",
      "Authorized by convenience",
    ],
    answerIndex: 0,
    explanation:
      "Lawful Authority = authorized by law. :contentReference[oaicite:16]{index=16}",
    subject: "Federal",
    topic: "Definitions",
    lecture: "Federal Law 5",
  },
  {
    id: "fed5_defs_goodfaith_1",
    type: "single",
    prompt: "“Acting in Good Faith” means:",
    choices: [
      "Doing your best",
      "With an honest intention and free from any knowledge of irregularity",
      "Doing what the public wants",
      "Always avoiding force",
    ],
    answerIndex: 1,
    explanation:
      "Acting in good faith is defined as honest intention with no knowledge of irregularity. :contentReference[oaicite:17]{index=17}",
    subject: "Federal",
    topic: "Definitions",
    lecture: "Federal Law 5",
  },
  {
    id: "fed5_defs_forthwith_1",
    type: "single",
    prompt: "In these slides, “Forthwith” is defined as:",
    choices: [
      "Immediately (always within seconds)",
      "Within a reasonable time considering the circumstances and the object",
      "Within 24 hours",
      "Before the end of the week",
    ],
    answerIndex: 1,
    explanation:
      "Forthwith = within a reasonable time considering the circumstances and the object. :contentReference[oaicite:18]{index=18}",
    subject: "Federal",
    topic: "Definitions",
    lecture: "Federal Law 5",
  },

  // -------------------------------
  // Citizen’s Arrest: Purpose + Safety Warning
  // -------------------------------
  {
    id: "fed5_warning_1",
    type: "truefalse",
    prompt:
      "True or False: The slides emphasize that a citizen’s arrest is a serious and potentially dangerous undertaking.",
    answer: true,
    explanation:
      "The slides include a warning that citizen’s arrest is serious and potentially dangerous, and citizens are not trained like police. :contentReference[oaicite:19]{index=19}",
    subject: "Federal",
    topic: "Citizen’s Arrest Overview",
    lecture: "Federal Law 5",
  },
  {
    id: "fed5_citizenwhy_1",
    type: "multi",
    prompt:
      "According to the slides, citizens may make arrests because: (Select ALL that apply)",
    choices: [
      "To protect someone and/or property",
      "They are frustrated with lack of police resources and want to effect 'justice'",
      "They have the same duty as police to preserve public peace",
      "They must arrest anyone who commits a crime",
    ],
    answerIndices: [0, 1],
    explanation:
      "The slides list protection of people/property and frustration with police resources as reasons. :contentReference[oaicite:20]{index=20}",
    subject: "Federal",
    topic: "Citizen’s Arrest Overview",
    lecture: "Federal Law 5",
  },
  {
    id: "fed5_gov_advice_1",
    type: "multi",
    prompt:
      "Gov’t advice in the slides for making a citizen’s arrest includes: (Select ALL that apply)",
    choices: [
      "Tell the suspect plainly you are making a citizen’s arrest and holding them until police arrive",
      "Call police",
      "Avoid using force if possible and use the minimum if needed",
      "Question and search the suspect to gather evidence",
      "Do not question or search the suspect or their possessions (purpose is temporary detention until police arrive)",
    ],
    answerIndices: [0, 1, 2, 4],
    explanation:
      "The slides list steps including calling police, minimizing force, and not questioning/searching. :contentReference[oaicite:21]{index=21}",
    subject: "Federal",
    topic: "Citizen’s Arrest Safety",
    lecture: "Federal Law 5",
  },

  // -------------------------------
  // Criminal Code s.494 – Any Person (Citizen Arrest)
  // -------------------------------
  {
    id: "fed5_494_1a_1",
    type: "single",
    prompt:
      "Under s.494(1)(a) (as taught on the slides), anyone may arrest without warrant:",
    choices: [
      "A person they find committing an indictable offence",
      "A person they suspect committed a summary offence last week",
      "Any person with a criminal record",
      "Any person who refuses to answer questions",
    ],
    answerIndex: 0,
    explanation:
      "s.494(1)(a) is the “find committing” clause for indictable offences. :contentReference[oaicite:22]{index=22}",
    subject: "Federal",
    topic: "s.494(1)(a) – Find Committing Clause",
    lecture: "Federal Law 5",
  },
  {
    id: "fed5_hybrid_indictable_1",
    type: "truefalse",
    prompt:
      "True or False: The slides state that all dual procedure (hybrid) offences are treated as indictable for arrest purposes.",
    answer: true,
    explanation:
      "The slide notes dual procedure offences are indictable for arrest purposes. :contentReference[oaicite:23]{index=23}",
    subject: "Federal",
    topic: "Hybrid Offences (Arrest Purposes)",
    lecture: "Federal Law 5",
  },
  {
    id: "fed5_494_1b_1",
    type: "multi",
    prompt:
      "s.494(1)(b) (the “helper clause”) requires: (Select ALL that apply)",
    choices: [
      "Reasonable grounds belief the person committed a criminal offence",
      "The person is escaping from persons who have lawful authority to arrest",
      "The person is freshly pursued",
      "The arrest must be on or in relation to the arrester’s property",
    ],
    answerIndices: [0, 1, 2],
    explanation:
      "The helper clause includes RG belief + escaping from + freshly pursued by those with lawful authority. :contentReference[oaicite:24]{index=24}",
    subject: "Federal",
    topic: "s.494(1)(b) – Helper Clause",
    lecture: "Federal Law 5",
  },
  {
    id: "fed5_494_2_owner_1",
    type: "multi",
    prompt:
      "Under s.494(2) (the “owner clause”), who MAY arrest without warrant? (Select ALL that apply)",
    choices: [
      "Owner of property",
      "Person in lawful possession of property",
      "Person authorized by the owner/person in lawful possession",
      "Any bystander who saw a theft last week",
    ],
    answerIndices: [0, 1, 2],
    explanation:
      "s.494(2) applies to owner/lawful possessor/authorized person. :contentReference[oaicite:25]{index=25}",
    subject: "Federal",
    topic: "s.494(2) – Owner Clause",
    lecture: "Federal Law 5",
  },
  {
    id: "fed5_494_2_conditions_1",
    type: "multi",
    prompt:
      "Under s.494(2) (owner clause), the arrest may be made: (Select ALL that apply)",
    choices: [
      "At the time the offence is committed on or in relation to the property",
      "Within a reasonable time after the offence, AND RG it was not feasible for a peace officer to make the arrest",
      "Any time within 6 months, as long as the owner is angry",
      "Only if the suspect confesses",
    ],
    answerIndices: [0, 1],
    explanation:
      "The owner clause allows arrest at the time OR within a reasonable time after, with the added ‘not feasible for peace officer’ requirement. :contentReference[oaicite:26]{index=26}",
    subject: "Federal",
    topic: "s.494(2) – Owner Clause",
    lecture: "Federal Law 5",
  },
  {
    id: "fed5_luckymoose_1",
    type: "single",
    prompt:
      "The “Lucky Moose” example in the slides is used to illustrate what key change/idea?",
    choices: [
      "That citizens can search suspects for evidence",
      "That s.494(2) was extended to allow owners a reasonable time after an offence (but police should be called ASAP)",
      "That only police can arrest for property offences",
      "That citizens can arrest for any indictable offence after a delay",
    ],
    answerIndex: 1,
    explanation:
      "The slides explain the Lucky Moose case and that s.494(2)(b) was added to provide owners a reasonable time, while still needing police ASAP. :contentReference[oaicite:27]{index=27}",
    subject: "Federal",
    topic: "Case/Example: Lucky Moose",
    lecture: "Federal Law 5",
  },

  // -------------------------------
  // s.494(3) + s.494(4)
  // -------------------------------
  {
    id: "fed5_494_3_1",
    type: "single",
    prompt:
      "Under s.494(3), a person (other than a peace officer) who arrests without warrant SHALL:",
    choices: [
      "Question the suspect and write a statement",
      "Search the suspect for weapons and evidence",
      "Forthwith deliver the person to a peace officer",
      "Hold the suspect until morning",
    ],
    answerIndex: 2,
    explanation:
      "s.494(3) states the arrester shall forthwith deliver the person to a peace officer. :contentReference[oaicite:28]{index=28}",
    subject: "Federal",
    topic: "s.494(3) – Delivery to Peace Officer",
    lecture: "Federal Law 5",
  },
  {
    id: "fed5_494_4_1",
    type: "single",
    prompt:
      "s.494(4) clarifies that a person authorized to arrest under s.494 is authorized by law for the purposes of which section?",
    choices: [
      "s.10 Charter",
      "s.25 Criminal Code",
      "s.27 Criminal Code",
      "s.34 Criminal Code",
    ],
    answerIndex: 1,
    explanation:
      "s.494(4) states an authorized arrester under this section is authorized by law for s.25 purposes. :contentReference[oaicite:29]{index=29}",
    subject: "Federal",
    topic: "s.494(4) & Use of Force",
    lecture: "Federal Law 5",
  },
  {
    id: "fed5_s25_link_1",
    type: "truefalse",
    prompt:
      "True or False: The slides include s.25(1) to connect lawful authority to using as much force as is necessary (if acting on reasonable grounds).",
    answer: true,
    explanation:
      "The deck shows s.25(1) wording to connect authority + RG + necessary force. :contentReference[oaicite:30]{index=30}",
    subject: "Federal",
    topic: "s.25 Connection",
    lecture: "Federal Law 5",
  },

  // -------------------------------
  // “Questions to Ask” framework (investigating citizen arrest)
  // -------------------------------
  {
    id: "fed5_qs_ask_1",
    type: "multi",
    prompt:
      "When assessing a citizen arrest, the slides suggest asking: (Select ALL that apply)",
    choices: [
      "What were the circumstances of the crime?",
      "What was the offence?",
      "Who witnessed the offence?",
      "Was the witness one of the authorized group of individuals?",
      "Did they effect the arrest?",
      "Did the citizen search the suspect and seize items?",
    ],
    answerIndices: [0, 1, 2, 3, 4],
    explanation:
      "The deck lists questions about circumstances, offence, witness, authorized group, and whether they effected the arrest. :contentReference[oaicite:31]{index=31}",
    subject: "Federal",
    topic: "Assessing Citizen Arrest",
    lecture: "Federal Law 5",
  },
  {
    id: "fed5_qs_ask_2",
    type: "multi",
    prompt:
      "The slides also suggest asking timing/location/delay questions like: (Select ALL that apply)",
    choices: [
      "When in relation to the offence was the arrest made?",
      "Where in relation to the offence was the arrest made?",
      "If there was a delay, why was there a delay and what were the circumstances?",
      "Were police called for the original commission of the offence?",
      "Was the suspect rude to the citizen?",
    ],
    answerIndices: [0, 1, 2, 3],
    explanation:
      "Timing, location, delay reasons, feasibility, and whether police were called are highlighted. :contentReference[oaicite:32]{index=32}",
    subject: "Federal",
    topic: "Assessing Citizen Arrest",
    lecture: "Federal Law 5",
  },

  // -------------------------------
  // Police obligations when citizen arrests
  // -------------------------------
  {
    id: "fed5_police_obligations_1",
    type: "multi",
    prompt:
      "According to the slides, when police are called after a citizen arrest, officers should: (Select ALL that apply)",
    choices: [
      "Listen carefully to ensure the citizen was acting under s.494",
      "Determine whether to continue the arrest or release",
      "Read Rights to Counsel regardless if you arrest or not (unless it is an unlawful arrest, then release immediately)",
      "Automatically charge the citizen for arresting someone",
    ],
    answerIndices: [0, 1, 2],
    explanation:
      "The slide lists these steps as police obligations when responding to citizen arrests. :contentReference[oaicite:33]{index=33}",
    subject: "Federal",
    topic: "Police Response to Citizen Arrest",
    lecture: "Federal Law 5",
  },

  // -------------------------------
  // Scenario Questions (from slides)
  // -------------------------------
  {
    id: "fed5_scn_store_1",
    type: "single",
    prompt:
      "SCENARIO (store security): Security believes a person stole a game but did NOT see them take it. They arrested the person outside and brought them back. Based on the slide’s emphasis, what is the BIGGEST legal concern for citizen arrest authority?",
    choices: [
      "Security lacked 'find committing' observation of the theft",
      "Security must always use handcuffs",
      "Security must search the suspect immediately",
      "Security must wait until police tell them to arrest",
    ],
    answerIndex: 0,
    explanation:
      "The deck emphasizes citizen arrest often requires find committing; not seeing the theft is a major issue to analyze under s.494. :contentReference[oaicite:34]{index=34}",
    subject: "Federal",
    topic: "Scenario Applications",
    lecture: "Federal Law 5",
  },
  {
    id: "fed5_scn_store_2",
    type: "truefalse",
    prompt:
      "SCENARIO (store security): If the suspect consents to a search after being arrested by security, that automatically fixes any issue with whether the original citizen arrest was lawful.",
    answer: false,
    explanation:
      "Consent doesn’t automatically cure an unlawful arrest; the first question is whether the citizen was acting under proper s.494 authority. :contentReference[oaicite:35]{index=35}",
    subject: "Federal",
    topic: "Scenario Applications",
    lecture: "Federal Law 5",
  },
  {
    id: "fed5_scn_homeowner_1",
    type: "single",
    prompt:
      "SCENARIO (homeowner + shed): The homeowner sees a male in the shed removing a chainsaw and detains him as he tries to leave. Which citizen arrest authority is most directly suggested by the slide?",
    choices: [
      "s.494(1)(a) find committing indictable clause OR s.494(2) owner clause",
      "s.494(1)(b) helper clause only",
      "No citizen arrest authority can ever apply on private property",
      "Only a warrant-based arrest is possible",
    ],
    answerIndex: 0,
    explanation:
      "The slide explicitly points to 494(1)(a) and/or 494(2) for the homeowner property scenario. :contentReference[oaicite:36]{index=36}",
    subject: "Federal",
    topic: "Scenario Applications",
    lecture: "Federal Law 5",
  },

  // -------------------------------
  // Quick exam-style definitions and “musts”
  // -------------------------------
  {
    id: "fed5_musts_1",
    type: "multi",
    prompt:
      "Which words/ideas in the slides signal mandatory requirements? (Select ALL that apply)",
    choices: [
      "SHALL forthwith deliver the person to a peace officer",
      "MAY arrest (owner clause wording)",
      "Forthwith (defined as within a reasonable time considering circumstances/object)",
      "Optional delivery to police at the citizen’s convenience",
    ],
    answerIndices: [0, 2],
    explanation:
      "s.494(3) uses SHALL (mandatory), and forthwith is defined with a reasonableness context. ",
    subject: "Federal",
    topic: "Exam Keywords",
    lecture: "Federal Law 5",
  },

  // -------------------------------
  // Dropdown classification-style (clause identification)
  // -------------------------------
  {
    id: "fed5_clause_dd_1",
    type: "dropdown",
    prompt:
      "Identify the clause: “Find committing an indictable offence” (s.494(1)(a))",
    options: [
      "Find Committing Clause",
      "Helper Clause",
      "Owner Clause",
      "Delivery Clause",
    ],
    answerValue: "Find Committing Clause",
    explanation:
      "s.494(1)(a) is labeled the find committing clause on the slides. :contentReference[oaicite:38]{index=38}",
    subject: "Federal",
    topic: "s.494 Clauses",
    lecture: "Federal Law 5",
  },
  {
    id: "fed5_clause_dd_2",
    type: "dropdown",
    prompt:
      "Identify the clause: “RG committed offence AND escaping from AND freshly pursued by persons with lawful authority” (s.494(1)(b))",
    options: [
      "Find Committing Clause",
      "Helper Clause",
      "Owner Clause",
      "Delivery Clause",
    ],
    answerValue: "Helper Clause",
    explanation:
      "s.494(1)(b) is labeled the helper clause on the slides. :contentReference[oaicite:39]{index=39}",
    subject: "Federal",
    topic: "s.494 Clauses",
    lecture: "Federal Law 5",
  },
  {
    id: "fed5_clause_dd_3",
    type: "dropdown",
    prompt:
      "Identify the clause: “Owner/lawful possessor/authorized person may arrest on or in relation to property; at the time OR within reasonable time + not feasible for peace officer” (s.494(2))",
    options: [
      "Find Committing Clause",
      "Helper Clause",
      "Owner Clause",
      "Delivery Clause",
    ],
    answerValue: "Owner Clause",
    explanation:
      "s.494(2) is presented as the owner clause in the slides. :contentReference[oaicite:40]{index=40}",
    subject: "Federal",
    topic: "s.494 Clauses",
    lecture: "Federal Law 5",
  },
  // -------------------------------
  // Licence as Privilege + Purpose
  // -------------------------------
  {
    id: "hta4_priv_1",
    type: "single",
    prompt: "In Ontario, a driver’s licence is best described as:",
    choices: [
      "A right",
      "A privilege",
      "A contract",
      "A constitutional guarantee",
    ],
    answerIndex: 1,
    explanation:
      "In Ontario, driving is a privilege (HTA s.31), meaning it can be granted, restricted, suspended, or revoked by the province.",
    subject: "Highway Traffic Act",
    topic: "Nature of a Driver’s Licence",
    lecture: "HTA4: Driver’s Licences 1",
  },
  {
    id: "hta4_purpose_1",
    type: "multi",
    prompt:
      "Which are purposes of Ontario’s driver’s licence system? (Select ALL that apply)",
    choices: [
      "Protect the public",
      "Maintain highway safety",
      "Identify and correct unsafe drivers",
      "Guarantee everyone the ability to drive",
    ],
    answerIndices: [0, 1, 2],
    explanation:
      "Ontario’s licensing system exists to protect the public, maintain safety, and identify/correct unsafe drivers.",
    subject: "Highway Traffic Act",
    topic: "Purpose of Licensing",
    lecture: "HTA4: Driver’s Licences 1",
  },
  {
    id: "hta4_methods_1",
    type: "multi",
    prompt:
      "Which methods are used to maintain safety in Ontario’s licensing system? (Select ALL that apply)",
    choices: [
      "Demerit point system",
      "Administrative penalties (suspensions/restrictions)",
      "Graduated licensing",
      "Unlimited warnings for repeat offenders",
    ],
    answerIndices: [0, 1, 2],
    explanation:
      "Ontario uses demerit points, admin penalties, and graduated licensing to promote safe driving and monitor behaviour.",
    subject: "Highway Traffic Act",
    topic: "Methods to Maintain Safety",
    lecture: "HTA4: Driver’s Licences 1",
  },
  {
    id: "hta4_novice_1",
    type: "single",
    prompt:
      "Novice/probationary drivers earn full driving privileges primarily by:",
    choices: [
      "Paying additional fees",
      "Gaining experience under controlled conditions over time",
      "Taking only one road test and no other steps",
      "Driving only at night for practice",
    ],
    answerIndex: 1,
    explanation:
      "Full privileges are earned over time through experience, safe habits, and controlled conditions.",
    subject: "Highway Traffic Act",
    topic: "Novice & Probationary Drivers",
    lecture: "HTA4: Driver’s Licences 1",
  },

  // -------------------------------
  // Age Identifier / Licence Card Facts
  // -------------------------------
  {
    id: "hta4_ageid_1",
    type: "single",
    prompt:
      "Ontario’s age identifier on driver’s licences/photo cards appears on cards issued:",
    choices: [
      "Before Jan 1, 2013 only",
      "On or after Jan 1, 2013 only",
      "Only for drivers over 25",
      "Only for commercial classes",
    ],
    answerIndex: 1,
    explanation:
      "Only driver’s licences and Ontario photo cards issued on or after Jan 1, 2013 include the age identifier.",
    subject: "Highway Traffic Act",
    topic: "Licence Card Features",
    lecture: "HTA4: Driver’s Licences 1",
  },
  {
    id: "hta4_ageid_2",
    type: "single",
    prompt:
      "The age identifier was introduced primarily to help with quick verification of legal age for:",
    choices: [
      "Driving tests",
      "Alcohol and tobacco purchases",
      "Court appearances",
      "Insurance rates",
    ],
    answerIndex: 1,
    explanation:
      "It helps officers/retailers quickly verify legal age for alcohol and tobacco without manual DOB calculations.",
    subject: "Highway Traffic Act",
    topic: "Licence Card Features",
    lecture: "HTA4: Driver’s Licences 1",
  },

  // -------------------------------
  // Improper Licence (HTA s.32)
  // -------------------------------
  {
    id: "hta4_improper_1",
    type: "single",
    prompt:
      "An “improper driver’s licence” offence generally occurs when someone:",
    choices: [
      "Drives a vehicle class they are not licensed/qualified to operate",
      "Has an expired vehicle permit",
      "Fails to renew insurance",
      "Drives with a cracked windshield",
    ],
    answerIndex: 0,
    explanation:
      "Improper licence refers to operating a class of vehicle the person is not authorized/qualified to drive (HTA s.32).",
    subject: "Highway Traffic Act",
    topic: "Improper Driver’s Licence",
    lecture: "HTA4: Driver’s Licences 1",
  },
  {
    id: "hta4_32_1",
    type: "truefalse",
    prompt:
      "True or False: If a driver holds the correct vehicle class, they can operate an air-brake vehicle even without an air brake endorsement.",
    answer: false,
    explanation:
      "HTA s.32(3) requires a proper air-brake endorsement even if the driver holds the correct class.",
    subject: "Highway Traffic Act",
    topic: "Improper Driver’s Licence",
    lecture: "HTA4: Driver’s Licences 1",
  },
  {
    id: "hta4_minister_1",
    type: "multi",
    prompt:
      "Under HTA s.32(5), the Minister may specify on a driver’s licence: (Select ALL that apply)",
    choices: [
      "Authorized vehicle class(es)",
      "Conditions/endorsements (e.g., air brakes, corrective lenses)",
      "Validity period",
      "The driver’s insurance premium",
    ],
    answerIndices: [0, 1, 2],
    explanation:
      "Minister may specify classes, conditions/endorsements, and validity period on the licence.",
    subject: "Highway Traffic Act",
    topic: "Minister’s Authority",
    lecture: "HTA4: Driver’s Licences 1",
  },

  // -------------------------------
  // Demand Licence (HTA s.33)
  // -------------------------------
  {
    id: "hta4_demand_1",
    type: "single",
    prompt:
      "Police authority to demand a driver’s licence from the driver of a motor vehicle or street car is found in:",
    choices: ["HTA s.31", "HTA s.32", "HTA s.33(1)", "HTA s.114"],
    answerIndex: 2,
    explanation:
      "HTA s.33(1) authorizes an officer to demand the driver’s licence for reasonable inspection.",
    subject: "Highway Traffic Act",
    topic: "Demanding a Driver’s Licence",
    lecture: "HTA4: Driver’s Licences 1",
  },
  {
    id: "hta4_carry_1",
    type: "truefalse",
    prompt:
      "True or False: A driver must carry their driver’s licence and surrender it for reasonable inspection upon demand.",
    answer: true,
    explanation:
      "Drivers must carry and surrender their licence for reasonable inspection when demanded (HTA s.33).",
    subject: "Highway Traffic Act",
    topic: "Demanding a Driver’s Licence",
    lecture: "HTA4: Driver’s Licences 1",
  },
  {
    id: "hta4_reasonableinspect_1",
    type: "single",
    prompt: "“Reasonable inspection” means an officer may:",
    choices: [
      "Only look at the licence from a distance",
      "Hold, feel, and examine it as a legal document",
      "Keep the licence permanently",
      "Photocopy the licence without reason",
    ],
    answerIndex: 1,
    explanation:
      "Reasonable inspection includes holding/feeling/examining the licence as a legal document; it must be surrendered physically.",
    subject: "Highway Traffic Act",
    topic: "Demanding a Driver’s Licence",
    lecture: "HTA4: Driver’s Licences 1",
  },
  {
    id: "hta4_upon_demand_1",
    type: "single",
    prompt:
      "If charging “Fail to Surrender Driver’s Licence,” the officer should be able to testify to:",
    choices: [
      "That they hinted at wanting the licence",
      "That they clearly demanded the licence and can describe the words/substance of the demand and the response",
      "That the driver looked nervous",
      "That the driver had tinted windows",
    ],
    answerIndex: 1,
    explanation:
      "“Upon the demand” requires a clear articulated demand; evidence should capture what was said and the driver’s response/non-compliance.",
    subject: "Highway Traffic Act",
    topic: "Demanding a Driver’s Licence",
    lecture: "HTA4: Driver’s Licences 1",
  },

  // -------------------------------
  // Key Definitions / Street Car Note
  // -------------------------------
  {
    id: "hta4_driver_def_1",
    type: "single",
    prompt: "Under HTA s.1(1), a “driver” is:",
    choices: [
      "Anyone in a vehicle",
      "A person who drives a vehicle on a highway",
      "Anyone who owns a vehicle",
      "A person who sits in the driver’s seat, engine off",
    ],
    answerIndex: 1,
    explanation:
      "HTA defines driver as a person who drives a vehicle on a highway.",
    subject: "Highway Traffic Act",
    topic: "Definitions",
    lecture: "HTA4: Driver’s Licences 1",
  },
  {
    id: "hta4_streetcar_1",
    type: "truefalse",
    prompt:
      "True or False: A street car is defined as a motor vehicle in the HTA.",
    answer: false,
    explanation:
      "A street car is not defined as a motor vehicle in the HTA, but is specifically included in certain sections (e.g., s.33; and “driver” includes street car operator in s.144(1)).",
    subject: "Highway Traffic Act",
    topic: "Street Cars",
    lecture: "HTA4: Driver’s Licences 1",
  },
  {
    id: "hta4_streetcar_2",
    type: "single",
    prompt:
      "Which statement is MOST accurate regarding street cars and licensing in the HTA?",
    choices: [
      "Street car operators never need to carry a driver’s licence",
      "Street cars are treated exactly the same as motorcycles",
      "HTA s.33 requires a street car operator to carry and surrender a driver’s licence",
      "Street cars are excluded from all HTA driver rules",
    ],
    answerIndex: 2,
    explanation:
      "HTA s.33 specifically includes street cars for the carry/surrender obligation.",
    subject: "Highway Traffic Act",
    topic: "Street Cars",
    lecture: "HTA4: Driver’s Licences 1",
  },

  // -------------------------------
  // Licence Classification Framework (O. Reg. 340/94)
  // -------------------------------
  {
    id: "hta4_reg340_1",
    type: "single",
    prompt:
      "Ontario’s driver’s licence classes and what each class can drive are primarily set out in:",
    choices: [
      "Criminal Code",
      "Ontario Regulation 340/94",
      "Ontario Regulation 628/00",
      "Highway Traffic Act s.175",
    ],
    answerIndex: 1,
    explanation:
      "Driver’s licence classifications are set out in Ontario Regulation 340/94 (table in s.1(1)).",
    subject: "Highway Traffic Act",
    topic: "Licence Classification",
    lecture: "HTA4: Driver’s Licences 1",
  },
  {
    id: "hta4_class_basis_1",
    type: "multi",
    prompt:
      "Ontario driver’s licence classifications are mainly based on: (Select THREE)",
    choices: [
      "Vehicle weight",
      "Number of passengers",
      "Motorcycle operation",
      "Vehicle colour",
    ],
    answerIndices: [0, 1, 2],
    explanation:
      "Licence classes are grouped by weight, passengers, and motorcycle operation.",
    subject: "Highway Traffic Act",
    topic: "Licence Classification",
    lecture: "HTA4: Driver’s Licences 1",
  },
  {
    id: "hta4_weight_classes_1",
    type: "multi",
    prompt:
      "Which licence classes are primarily weight-based? (Select ALL that apply)",
    choices: ["Class A", "Class D", "Class G", "Class B", "Class F"],
    answerIndices: [0, 1, 2],
    explanation:
      "Weight-based classes: A, D, and G (in this lesson’s grouping).",
    subject: "Highway Traffic Act",
    topic: "Licence Classification",
    lecture: "HTA4: Driver’s Licences 1",
  },
  {
    id: "hta4_passenger_classes_1",
    type: "multi",
    prompt:
      "Which licence classes are primarily passenger-based? (Select ALL that apply)",
    choices: ["Class B", "Class C", "Class E", "Class F", "Class A"],
    answerIndices: [0, 1, 2, 3],
    explanation: "Passenger-based classes: B, C, E, F (bus/ambulance related).",
    subject: "Highway Traffic Act",
    topic: "Licence Classification",
    lecture: "HTA4: Driver’s Licences 1",
  },
  {
    id: "hta4_motorcycle_class_1",
    type: "single",
    prompt: "The licence class specifically for motorcycles is:",
    choices: ["Class M", "Class G", "Class D", "Class F"],
    answerIndex: 0,
    explanation: "Motorcycle operation is a separate classification, Class M.",
    subject: "Highway Traffic Act",
    topic: "Licence Classification",
    lecture: "HTA4: Driver’s Licences 1",
  },

  // -------------------------------
  // Weight Terms: Gross Weight / GVW / RGW
  // -------------------------------
  {
    id: "hta4_grossweight_1",
    type: "single",
    prompt:
      "For driver’s licence enforcement, “gross weight” (HTA s.1(1)) means:",
    choices: [
      "Vehicle weight alone, no load",
      "Combined weight of the vehicle and its load",
      "Weight printed on the plate portion only",
      "Total passengers multiplied by 70 kg",
    ],
    answerIndex: 1,
    explanation:
      "For licensing, gross weight is the combined weight of the vehicle and its load (HTA s.1(1)).",
    subject: "Highway Traffic Act",
    topic: "Weight Definitions",
    lecture: "HTA4: Driver’s Licences 1",
  },
  {
    id: "hta4_gvw_1",
    type: "single",
    prompt: "“Gross vehicle weight (GVW)” is best described as:",
    choices: [
      "Total weight transmitted to the highway by the vehicle/combination and its load",
      "The weight printed on the driver’s licence card",
      "Only the trailer weight",
      "Only the empty vehicle weight",
    ],
    answerIndex: 0,
    explanation:
      "GVW refers to total weight transmitted to the highway by the vehicle/combination and load (the concept of “transmits” = weight transferred to highway surface).",
    subject: "Highway Traffic Act",
    topic: "Weight Definitions",
    lecture: "HTA4: Driver’s Licences 1",
  },
  {
    id: "hta4_rgw_1",
    type: "single",
    prompt: "Registered Gross Weight (RGW) is found on the:",
    choices: [
      "Vehicle portion of the permit",
      "Plate portion of the vehicle permit",
      "Insurance slip",
      "Driver’s licence back side",
    ],
    answerIndex: 1,
    explanation:
      "RGW is found on the plate portion of the vehicle permit and is used for registration/fees.",
    subject: "Highway Traffic Act",
    topic: "Weight Definitions",
    lecture: "HTA4: Driver’s Licences 1",
  },
  {
    id: "hta4_permit_weight_1",
    type: "single",
    prompt:
      "Where can an officer find the vehicle weight information used to determine licence class?",
    choices: [
      "On the vehicle portion of the permit",
      "On the driver’s health card",
      "On the insurance policy only",
      "On the offence notice",
    ],
    answerIndex: 0,
    explanation:
      "Vehicle weight is printed on the vehicle portion of the permit and is used for licence classification decisions.",
    subject: "Highway Traffic Act",
    topic: "Enforcement Tools",
    lecture: "HTA4: Driver’s Licences 1",
  },

  // -------------------------------
  // Class A / D / G (Weight-based)
  // -------------------------------
  {
    id: "hta4_classA_1",
    type: "single",
    prompt:
      "Class A generally allows operation of combinations where the towed vehicle/trailer exceeds:",
    choices: ["2,800 kg", "4,600 kg", "6,000 kg", "11,000 kg"],
    answerIndex: 1,
    explanation:
      "Class A covers combinations where the towed vehicle/trailer exceeds 4,600 kg (general rule in this lesson).",
    subject: "Highway Traffic Act",
    topic: "Licence Classes (Weight)",
    lecture: "HTA4: Driver’s Licences 1",
  },
  {
    id: "hta4_classA_bus_1",
    type: "truefalse",
    prompt:
      "True or False: A Class A licence permits operation of a bus while carrying passengers.",
    answer: false,
    explanation:
      "Class A does not permit operation of a bus while carrying passengers.",
    subject: "Highway Traffic Act",
    topic: "Licence Classes (Weight)",
    lecture: "HTA4: Driver’s Licences 1",
  },
  {
    id: "hta4_classD_1",
    type: "multi",
    prompt: "Class D allows operation of: (Select ALL that apply)",
    choices: [
      "A motor vehicle exceeding 11,000 kg in gross weight or registered gross weight",
      "A combination exceeding 11,000 kg where towed vehicles do not exceed 4,600 kg",
      "A bus carrying passengers",
      "Any motorcycle",
    ],
    answerIndices: [0, 1],
    explanation:
      "Class D covers heavy single vehicles and certain combinations, but not a bus carrying passengers.",
    subject: "Highway Traffic Act",
    topic: "Licence Classes (Weight)",
    lecture: "HTA4: Driver’s Licences 1",
  },
  {
    id: "hta4_classG_1",
    type: "multi",
    prompt: "Class G permits operation of: (Select ALL that apply)",
    choices: [
      "A motor vehicle not exceeding 11,000 kg (gross or registered gross weight)",
      "A combination not exceeding 11,000 kg where towed vehicles do not exceed 4,600 kg",
      "A bus carrying passengers",
      "A motorcycle",
      "An ambulance in the course of providing ambulance service",
    ],
    answerIndices: [0, 1],
    explanation:
      "Class G covers most standard vehicles up to 11,000 kg and certain trailers, but excludes motorcycle, bus carrying passengers, and ambulance in service.",
    subject: "Highway Traffic Act",
    topic: "Licence Classes (Weight)",
    lecture: "HTA4: Driver’s Licences 1",
  },
  {
    id: "hta4_adoug_1",
    type: "single",
    prompt:
      "In this lesson, the acronym ADOUG is used to help remember specifics related to:",
    choices: [
      "Bus definitions",
      "Weight-based licence classes and key thresholds/exclusions",
      "Only motorcycle restrictions",
      "Demerit point levels",
    ],
    answerIndex: 1,
    explanation:
      "ADOUG is presented as a memory aid for licence-class specifics (A/D/O/U/G style memory tool).",
    subject: "Highway Traffic Act",
    topic: "Memory Aids",
    lecture: "HTA4: Driver’s Licences 1",
  },

  // -------------------------------
  // Air Brakes / Z Endorsement
  // -------------------------------
  {
    id: "hta4_z_1",
    type: "single",
    prompt:
      "The air brake endorsement required to operate air-brake vehicles is known as:",
    choices: ["X", "Z", "R", "I"],
    answerIndex: 1,
    explanation:
      "The air brake endorsement is the “Z” endorsement and is required regardless of licence class.",
    subject: "Highway Traffic Act",
    topic: "Endorsements",
    lecture: "HTA4: Driver’s Licences 1",
  },
  {
    id: "hta4_z_2",
    type: "truefalse",
    prompt:
      "True or False: Some licence classes automatically include authority to operate air-brake vehicles.",
    answer: false,
    explanation:
      "No licence class automatically authorizes air brakes; the licence must bear the Z endorsement.",
    subject: "Highway Traffic Act",
    topic: "Endorsements",
    lecture: "HTA4: Driver’s Licences 1",
  },
  {
    id: "hta4_airbrake_offence_1",
    type: "single",
    prompt:
      "Driving a vehicle equipped with air brakes without the required endorsement is most accurately described as:",
    choices: [
      "A vehicle permit offence only",
      "An improper driver’s licence offence under HTA s.32(3)",
      "A Criminal Code offence",
      "A parking infraction",
    ],
    answerIndex: 1,
    explanation:
      "HTA s.32(3) makes it an improper licence offence to operate air-brake vehicles without proper endorsement.",
    subject: "Highway Traffic Act",
    topic: "Improper Driver’s Licence",
    lecture: "HTA4: Driver’s Licences 1",
  },

  // -------------------------------
  // Class A Restrictions (R, REST/COND G)
  // -------------------------------
  {
    id: "hta4_condR_1",
    type: "single",
    prompt: "A Class A licence with Condition R allows the holder to:",
    choices: [
      "Tow more than one trailer freely",
      "Operate a Class A combination but NOT tow more than one trailer or a trailer with air brakes",
      "Operate buses carrying passengers",
      "Operate motorcycles only",
    ],
    answerIndex: 1,
    explanation:
      "Condition R is a restricted Class A: no more than one trailer and no trailer with air brakes.",
    subject: "Highway Traffic Act",
    topic: "Restrictions",
    lecture: "HTA4: Driver’s Licences 1",
  },
  {
    id: "hta4_condG_1",
    type: "single",
    prompt:
      "REST/COND G (effective July 1, 2022) generally restricts A/AR drivers who tested in automatic transmission from operating:",
    choices: [
      "Class G vehicles",
      "Any vehicle at night",
      "Class A/AR vehicles with manual transmission",
      "Vehicles with air brakes",
    ],
    answerIndex: 2,
    explanation:
      "If the A/AR road test was completed in an automatic, the driver is restricted from operating A/AR vehicles with manual transmission (REST/COND G).",
    subject: "Highway Traffic Act",
    topic: "Restrictions",
    lecture: "HTA4: Driver’s Licences 1",
  },
  {
    id: "hta4_condG_2",
    type: "truefalse",
    prompt:
      "True or False: REST/COND G applies to lower classes like Class G or D.",
    answer: false,
    explanation:
      "REST/COND G applies only to Class A/AR, not to lower class vehicles like G/D.",
    subject: "Highway Traffic Act",
    topic: "Restrictions",
    lecture: "HTA4: Driver’s Licences 1",
  },

  // -------------------------------
  // Fifth-Wheel Class A Exemption (RV)
  // -------------------------------
  {
    id: "hta4_fifthwheel_1",
    type: "truefalse",
    prompt:
      "True or False: Ontario provides a fifth-wheel RV exemption where some combinations with a trailer over 4,600 kg can be treated as Class G if strict conditions are met.",
    answer: true,
    explanation:
      "Certain fifth-wheel RV combinations can be deemed Class G even if trailer gross weight exceeds 4,600 kg, provided strict conditions are met.",
    subject: "Highway Traffic Act",
    topic: "Exemptions",
    lecture: "HTA4: Driver’s Licences 1",
  },
  {
    id: "hta4_fifthwheel_req_1",
    type: "multi",
    prompt:
      "Which are core requirements for the fifth-wheel RV exemption? (Select ALL that apply)",
    choices: [
      "Trailer is a house trailer/RV",
      "Combination used for personal purposes only (no compensation)",
      "Pickup truck has no more than two axles",
      "Air brakes are permitted as long as driver has Z endorsement",
      "Combined weight of pickup + RV does not exceed 11,000 kg",
      "RV attached using a fifth-wheel assembly",
    ],
    answerIndices: [0, 1, 2, 4, 5],
    explanation:
      "Key requirements include RV/house trailer, personal/no compensation, <=2 axles pickup, combined <=11,000 kg, and fifth-wheel assembly; no air brakes on pickup or trailer.",
    subject: "Highway Traffic Act",
    topic: "Exemptions",
    lecture: "HTA4: Driver’s Licences 1",
  },
  {
    id: "hta4_fifthwheel_airbrake_1",
    type: "single",
    prompt:
      "For the fifth-wheel RV exemption, which statement about air brakes is correct?",
    choices: [
      "Air brakes are allowed if the driver has a Z endorsement",
      "Air brakes must NOT be on the pickup truck or the house trailer",
      "Only the trailer may have air brakes",
      "Only the pickup may have air brakes",
    ],
    answerIndex: 1,
    explanation:
      "One exemption condition is no air brakes on the pickup truck or the house trailer.",
    subject: "Highway Traffic Act",
    topic: "Exemptions",
    lecture: "HTA4: Driver’s Licences 1",
  },
  {
    id: "hta4_fifthwheel_compliance_1",
    type: "single",
    prompt:
      "A key compliance requirement for the fifth-wheel RV exemption is that the house trailer must:",
    choices: [
      "Have approved compliance labels / meet recognized standards",
      "Be less than 10 years old",
      "Be registered outside Ontario",
      "Have commercial insurance",
    ],
    answerIndex: 0,
    explanation:
      "The exemption requires approved compliance labels and meeting recognized safety standards (e.g., CSA/NFPA/ANSI standards).",
    subject: "Highway Traffic Act",
    topic: "Exemptions",
    lecture: "HTA4: Driver’s Licences 1",
  },
  {
    id: "hta4_house_trailer_def_1",
    type: "multi",
    prompt:
      "In this lesson, “house trailer” includes which of the following? (Select ALL that apply)",
    choices: [
      "Cabin trailer",
      "Collapsible cabin trailer",
      "Tent trailer",
      "Camping trailer",
      "Motorcycle trailer only",
    ],
    answerIndices: [0, 1, 2, 3],
    explanation:
      "House trailer includes cabin trailer, collapsible cabin trailer, tent trailer, and camping trailer.",
    subject: "Highway Traffic Act",
    topic: "Exemptions",
    lecture: "HTA4: Driver’s Licences 1",
  },
  {
    id: "hta4_pickup_def_1",
    type: "single",
    prompt:
      "For the exemption, a “pick-up truck” is described as a commercial motor vehicle with GVWR of:",
    choices: [
      "6,000 kg or less",
      "11,000 kg or less",
      "4,600 kg or less",
      "2,800 kg or less",
    ],
    answerIndex: 0,
    explanation:
      "Pick-up truck is described as a commercial motor vehicle with GVWR of 6,000 kg or less (with original/unmodified replacement box).",
    subject: "Highway Traffic Act",
    topic: "Exemptions",
    lecture: "HTA4: Driver’s Licences 1",
  },

  // -------------------------------
  // Bus / School Bus + Passenger Classes
  // -------------------------------
  {
    id: "hta4_bus_def_1",
    type: "single",
    prompt: "Under HTA s.1(1), a “bus” is designed to carry:",
    choices: [
      "8+ passengers",
      "9+ passengers",
      "10+ passengers",
      "12+ passengers",
    ],
    answerIndex: 2,
    explanation:
      "A bus is designed to carry 10 or more passengers (design capacity).",
    subject: "Highway Traffic Act",
    topic: "Bus Definitions",
    lecture: "HTA4: Driver’s Licences 1",
  },
  {
    id: "hta4_schoolbus_def_1",
    type: "multi",
    prompt:
      "Which features are part of the definition/identifiers of a school bus in this lesson? (Select ALL that apply)",
    choices: [
      "Painted chrome yellow",
      "Displays 'school bus' on the front and rear",
      "Displays 'do not pass when signals flashing' on the rear",
      "Always carries more than 24 passengers",
    ],
    answerIndices: [0, 1, 2],
    explanation:
      "School bus identifiers include chrome yellow paint and specific wording on front/rear, including 'do not pass when signals flashing' on rear.",
    subject: "Highway Traffic Act",
    topic: "Bus Definitions",
    lecture: "HTA4: Driver’s Licences 1",
  },
  {
    id: "hta4_classB_1",
    type: "single",
    prompt:
      "Class B is required for a school purposes bus with designed seating capacity:",
    choices: [
      "24 passengers or fewer",
      "More than 24 passengers",
      "10–15 passengers",
      "More than 10 passengers but not school purposes",
    ],
    answerIndex: 1,
    explanation:
      "Class B: school purposes bus with designed seating capacity of more than 24 passengers.",
    subject: "Highway Traffic Act",
    topic: "Passenger-Based Classes",
    lecture: "HTA4: Driver’s Licences 1",
  },
  {
    id: "hta4_classC_1",
    type: "single",
    prompt: "Class C is required for:",
    choices: [
      "Any bus designed for more than 24 passengers, excluding school purposes buses",
      "Any school bus regardless of passenger capacity",
      "Ambulances only",
      "Any bus designed for 24 passengers or fewer",
    ],
    answerIndex: 0,
    explanation:
      "Class C: any bus designed for more than 24 passengers, excluding school purposes buses (e.g., transit/coach).",
    subject: "Highway Traffic Act",
    topic: "Passenger-Based Classes",
    lecture: "HTA4: Driver’s Licences 1",
  },
  {
    id: "hta4_classE_1",
    type: "single",
    prompt:
      "Class E is required for a school purposes bus with designed seating capacity:",
    choices: [
      "More than 24 passengers",
      "Not more than 24 passengers",
      "10 or more passengers only",
      "11 passengers or fewer only",
    ],
    answerIndex: 1,
    explanation:
      "Class E: school purposes bus designed seating capacity of not more than 24 passengers.",
    subject: "Highway Traffic Act",
    topic: "Passenger-Based Classes",
    lecture: "HTA4: Driver’s Licences 1",
  },
  {
    id: "hta4_classF_1",
    type: "multi",
    prompt: "Class F is required for: (Select ALL that apply)",
    choices: [
      "Ambulances",
      "Any bus designed for 24 passengers or fewer (excluding school purposes buses)",
      "Any bus designed for more than 24 passengers",
      "School purposes buses of any size",
    ],
    answerIndices: [0, 1],
    explanation:
      "Class F: ambulances and any bus designed for not more than 24 passengers, excluding school purposes buses.",
    subject: "Highway Traffic Act",
    topic: "Passenger-Based Classes",
    lecture: "HTA4: Driver’s Licences 1",
  },
  {
    id: "hta4_bus_nopassengers_1",
    type: "single",
    prompt:
      "If a bus is NOT carrying passengers, the licence class is determined by:",
    choices: [
      "Passenger design capacity",
      "Vehicle weight",
      "Colour of the bus",
      "Whether it is a school bus",
    ],
    answerIndex: 1,
    explanation:
      "If a bus is not carrying passengers, licensing is determined by vehicle weight (A/D/G).",
    subject: "Highway Traffic Act",
    topic: "Passenger vs Weight Rules",
    lecture: "HTA4: Driver’s Licences 1",
  },
  {
    id: "hta4_classF_exemption_1",
    type: "truefalse",
    prompt:
      "True or False: Under O. Reg. 340/94 s.2(5), certain personal-use vehicles with seating capacity of 11 passengers or fewer (no compensation) are deemed Class G motor vehicles.",
    answer: true,
    explanation:
      "There is an exemption deeming certain <=11 passenger personal/no-compensation vehicles as Class G.",
    subject: "Highway Traffic Act",
    topic: "Exemptions",
    lecture: "HTA4: Driver’s Licences 1",
  },

  // -------------------------------
  // Restrictions & Endorsements list (January 2012)
  // -------------------------------
  {
    id: "hta4_endorsements_1",
    type: "multi",
    prompt:
      "Which of the following are Ontario driver’s licence restrictions/endorsements mentioned in this lesson? (Select ALL that apply)",
    choices: [
      "I – Ignition Interlock required",
      "X – Must have corrective lenses",
      "Z – Can drive a vehicle equipped with air brakes",
      "R – Class A restriction (trailer limits)",
      "P – Must carry a passport",
      "Q – Quiet vehicle exemption",
    ],
    answerIndices: [0, 1, 2, 3],
    explanation:
      "The lesson lists I, X, Z, and R among the restrictions/endorsements (along with others like L, M, etc.).",
    subject: "Highway Traffic Act",
    topic: "Restrictions & Endorsements",
    lecture: "HTA4: Driver’s Licences 1",
  },
  {
    id: "hta4_X_1",
    type: "single",
    prompt: "On an Ontario driver’s licence, the “X” restriction means:",
    choices: [
      "Ignition interlock required",
      "Corrective lenses required",
      "Air brakes endorsement",
      "Restricted motorcycle",
    ],
    answerIndex: 1,
    explanation: "X indicates the driver must have corrective lenses.",
    subject: "Highway Traffic Act",
    topic: "Restrictions & Endorsements",
    lecture: "HTA4: Driver’s Licences 1",
  },
  {
    id: "hta4_I_1",
    type: "single",
    prompt: "On an Ontario driver’s licence, the “I” restriction means:",
    choices: [
      "Ignition interlock required",
      "Hearing device required in the U.S.",
      "Commercial vehicle in Canada only",
      "Valid for rehab evaluation only",
    ],
    answerIndex: 0,
    explanation: "I indicates an ignition interlock is required.",
    subject: "Highway Traffic Act",
    topic: "Restrictions & Endorsements",
    lecture: "HTA4: Driver’s Licences 1",
  },

  // -------------------------------
  // Quick mixed enforcement-style questions
  // -------------------------------
  {
    id: "hta4_enf_1",
    type: "single",
    prompt:
      "A driver holds Class D but is operating a bus carrying passengers. What is the main issue?",
    choices: [
      "Class D never allows heavy vehicles",
      "Class D does not permit operating a bus carrying passengers",
      "Class D requires a motorcycle endorsement",
      "Bus rules don’t apply on highways",
    ],
    answerIndex: 1,
    explanation:
      "Class D is weight-based and does not permit a bus carrying passengers; passenger-based class may be required depending on design capacity.",
    subject: "Highway Traffic Act",
    topic: "Enforcement Scenarios",
    lecture: "HTA4: Driver’s Licences 1",
  },
  {
    id: "hta4_enf_2",
    type: "single",
    prompt:
      "A driver has the correct vehicle class but is missing the Z endorsement and is driving an air-brake vehicle. This is best classified as:",
    choices: [
      "A paperwork issue only; no offence",
      "Improper licence (air brakes endorsement missing)",
      "A demerit point warning only",
      "A Criminal Code offence",
    ],
    answerIndex: 1,
    explanation:
      "Air brakes require the Z endorsement regardless of class; missing it = improper licence offence.",
    subject: "Highway Traffic Act",
    topic: "Enforcement Scenarios",
    lecture: "HTA4: Driver’s Licences 1",
  },
];
