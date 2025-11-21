let questions = [
  {
    numb: 1,
    question: "What is pipelining in CPU design?",
    answer: "Multiple instruction phases executed in parallel",
    options: [
      "Slower clock speed",
      "Multiple instruction phases executed in parallel",
      "Single instruction at a time",
      "Only memory operations"
    ],
  },
  {
    numb: 2,
    question: "Which is NOT an advantage of RISC architecture?",
    answer: "Highly complex instructions",
    options: [
      "Highly complex instructions",
      "Simple instructions",
      "Fast execution",
      "Easy pipelining"
    ],
  },
  {
    numb: 3,
    question: "In CISC, instructions are typically:",
    answer: "Complex and may execute several operations",
    options: [
      "Simple with single operation",
      "Always fixed length",
      "Only load/store type",
      "Complex and may execute several operations",
    ],
  },
  {
    numb: 4,
    question: "A pipeline hazard that occurs when two instructions compete for the same resource is called:",
    answer: "Structural hazard",
    options: [
      "Data hazard",
      "Control hazard",
      "Structural hazard",
      "Resource hazard"
    ],
  },
  {
    numb: 5,
    question: "Which stage in the pipeline is responsible for executing the instruction?",
    answer: "Execute",
    options: [
      "Fetch",
      "Decode",
      "Execute",
      "Write Back"
    ],
  },
  {
    numb: 6,
    question: "The main purpose of the instruction 'NOP' in pipelines is?",
    answer: "Stall the pipeline without affecting computation",
    options: [
      "To reset the CPU",
      "Stall the pipeline without affecting computation",
      "To increase throughput",
      "To increment the instruction pointer"
    ],
  },
  {
    numb: 7,
    question: "Which is a feature of RISC processors?",
    answer: "Large number of registers",
    options: [
      "Large number of registers",
      "Complex instructions",
      "Variable instruction size",
      "Microcoded control unit"
    ],
  },
  {
    numb: 8,
    question: "An instruction in CISC architecture can often:",
    answer: "Perform several task in a single instruction",
    options: [
      "Use only registers",
      "Perform several task in a single instruction",
      "Be always one cycle",
      "Have fixed length"
    ],
  },
  {
    numb: 9,
    question: "Which pipeline hazard is caused by branch instructions?",
    answer: "Control hazard",
    options: [
      "Structural hazard",
      "Data hazard",
      "Resource hazard",
      "Control hazard",
    ],
  },
  {
    numb: 10,
    question: "In RISC, most instructions:",
    answer: "Execute in a single clock cycle",
    options: [
      "Require multiple cycles",
      "Always access memory",
      "Execute in a single clock cycle",
      "Are microcoded"
    ],
  },
  {
    numb: 11,
    question: "CISC stands for:",
    answer: "Complex Instruction Set Computer",
    options: [
      "Computer Integrated Simple Chip",
      "Central Instruction Set Circuit",
      "Complex Instruction Set Computer",
      "Compiled Instruction Signal Code"
    ],
  },
  {
    numb: 12,
    question: "A pipeline with five stages can have up to how many instructions at different stages concurrently?",
    answer: "Five",
    options: [
      "One",
      "Three",
      "Five",
      "Unlimited"
    ],
  },
  {
    numb: 13,
    question: "The 'decode' stage in pipeline performs:",
    answer: "Interpreting instruction and operands",
    options: [
      "Memory access",
      "Arithmetic operation",
      "Interpreting instruction and operands",
      "Result storing"
    ],
  },
  {
    numb: 14,
    question: "RISC processors typically have:",
    answer: "Simple addressing modes",
    options: [
      "Multiple complex addressing modes",
      "Simple addressing modes",
      "Only absolute addressing",
      "Variable size addressing"
    ],
  },
  {
    numb: 15,
    question: "Which type of pipeline hazard arises due to data dependencies?",
    answer: "Data hazard",
    options: [
      "Structural hazard",
      "Data hazard",
      "Control hazard",
      "Procedure hazard"
    ],
  },
  {
    numb: 16,
    question: "CISC instructions are typically:",
    answer: "Variable length",
    options: [
      "Fixed length",
      "Variable length",
      "Always 2 bytes",
      "Single cycle"
    ],
  },
  {
    numb: 17,
    question: "Which processor family is an example of CISC architecture?",
    answer: "Intel x86",
    options: [
      "MIPS",
      "ARM",
      "Intel x86",
      "SPARC"
    ],
  },
  {
    numb: 18,
    question: "When a pipeline is flushed, what happens?",
    answer: "All current instructions are cleared",
    options: [
      "CPU restarts",
      "All current instructions are cleared",
      "Registers are deleted",
      "ALU is disabled"
    ],
  },
  {
    numb: 19,
    question: "Which of the following best describes RISC?",
    answer: "Simpler instructions, higher speed",
    options: [
      "Complex instructions, lower speed",
      "Simpler instructions, higher speed",
      "Small number of registers",
      "Variable instruction length"
    ],
  },
  {
    numb: 20,
    question: "On encountering a control hazard, what does pipeline often use?",
    answer: "Branch prediction",
    options: [
      "Structural correction",
      "Micro-operation",
      "Branch prediction",
      "Stalled cycles"
    ],
  },
  {
    numb: 21,
    question: "Which is a disadvantage of pipelining?",
    answer: "Handling hazards increases complexity",
    options: [
      "Decreased processor speed",
      "Handling hazards increases complexity",
      "Cannot use registers",
      "Single stage execution"
    ],
  },
  {
    numb: 22,
    question: "Which of these describes CISC instruction decoding?",
    answer: "Complex hardware control unit",
    options: [
      "Software decoder",
      "Simple hardware decoder",
      "Complex hardware control unit",
      "No decoding is required"
    ],
  },
  {
    numb: 23,
    question: "A data hazard is most likely to occur when:",
    answer: "Two instructions use the same data",
    options: [
      "Branch instructions execute",
      "Two instructions use the same data",
      "Fetch and decode overlap",
      "When pipeline is empty"
    ],
  },
  {
    numb: 24,
    question: "Which architecture type uses more microprogramming?",
    answer: "CISC",
    options: [
      "RISC",
      "DSP",
      "ARM",
      "CISC"
    ],
  },
  {
    numb: 25,
    question: "Instruction throughput in a pipeline means:",
    answer: "Number of instructions completed per unit time",
    options: [
      "Number of registers in CPU",
      "Number of instructions completed per unit time",
      "Number of bytes transferred",
      "Size of instruction set"
    ],
  },
  {
    numb: 26,
    question: "In RISC, most memory operations are:",
    answer: "Restricted to load and store instructions",
    options: [
      "Allowed in every instruction",
      "Restricted to load and store instructions",
      "Impossible",
      "Always indirect"
    ],
  },
  {
    numb: 27,
    question: "Why are CISC processors more challenging for pipelined design?",
    answer: "Complex instructions may take variable cycles",
    options: [
      "Instructions are always simple",
      "Complex instructions may take variable cycles",
      "No hazards occur",
      "Registers are absent"
    ],
  },
  {
    numb: 28,
    question: "Which is a goal of RISC architectures?",
    answer: "Fast execution with simple instructions",
    options: [
      "More complex hardware",
      "Fast execution with simple instructions",
      "Variable length instructions",
      "Increased microcoding"
    ],
  },
  {
    numb: 29,
    question: "When does a pipeline stall?",
    answer: "When next stage cannot proceed",
    options: [
      "When clock speed decreases",
      "When next stage cannot proceed",
      "When instructions fully overlap",
      "When fetch is completed"
    ],
  },
  {
    numb: 30,
    question: "Which hazard is reduced by increasing number of CPU resources?",
    answer: "Structural hazard",
    options: [
      "Control hazard",
      "Data hazard",
      "Structural hazard",
      "Pipeline bubble"
    ],
  },
  {
    numb: 31,
    question: "What is usually the largest delay in a simple pipeline?",
    answer: "Memory access",
    options: [
      "Instruction fetch",
      "ALU operation",
      "Write back",
      "Memory access"
    ],
  },
  {
    numb: 32,
    question: "Which stage ensures write-back of instruction results in a pipeline?",
    answer: "Write Back",
    options: [
      "Fetch",
      "Decode",
      "Execute",
      "Write Back"
    ],
  },
  {
    numb: 33,
    question: "RISC processors typically avoid which type of instructions?",
    answer: "Complex memory access instructions",
    options: [
      "Register-register arithmetic",
      "Simple addition",
      "Complex memory access instructions",
      "Single-cycle instructions"
    ],
  },
  {
    numb: 34,
    question: "CISC processors often use:",
    answer: "Microcoded control units",
    options: [
      "Harvard architecture",
      "Microcoded control units",
      "Only hardware control",
      "Single addressing mode"
    ],
  },
  {
    numb: 35,
    question: "Why does pipelining improve throughput?",
    answer: "It overlaps execution of instructions",
    options: [
      "It slows down clock speed",
      "It overlaps execution of instructions",
      "It increases execution time per instruction",
      "It merges control and data hazards"
    ],
  },
  {
    numb: 36,
    question: "Which is NOT a stage in instruction pipeline?",
    answer: "Interrupt handling",
    options: [
      "Fetch",
      "Decode",
      "Execute",
      "Interrupt handling"
    ],
  },
  {
    numb: 37,
    question: "Which is generally smaller in RISC processors compared to CISC?",
    answer: "Instruction set",
    options: [
      "Registers",
      "Instruction set",
      "Clock speed",
      "Pipeline depth"
    ],
  },
  {
    numb: 38,
    question: "A control hazard occurs due to:",
    answer: "Branch instructions",
    options: [
      "ALU operations",
      "Load/store instructions",
      "Branch instructions",
      "Register updates"
    ],
  },
  {
    numb: 39,
    question: "Which processor type is most compatible for mobile devices?",
    answer: "RISC (like ARM)",
    options: [
      "CISC (like x86)",
      "RISC (like ARM)",
      "DSP",
      "Server-class"
    ],
  },
  {
    numb: 40,
    question: "When is a NOP (“No Operation”) used in pipelines?",
    answer: "To resolve pipeline hazards",
    options: [
      "To turn off processor",
      "To resolve pipeline hazards",
      "To skip register update",
      "To erase memory"
    ],
  },
  {
    numb: 41,
    question: "Which of the following speeds up branch handling in a pipeline?",
    answer: "Branch prediction",
    options: [
      "Memory segmentation",
      "Branch prediction",
      "Microcoding",
      "Instruction compression"
    ],
  },
  {
    numb: 42,
    question: "RISC processors are mostly designed with:",
    answer: "Hardwired control unit",
    options: [
      "Microcoded control unit",
      "Stack-based control unit",
      "Hardwired control unit",
      "Software-based control"
    ],
  },
  {
    numb: 43,
    question: "Which is a feature of pipeline processors?",
    answer: "Stages work simultaneously on different instructions",
    options: [
      "Sequential processing",
      "Stages work simultaneously on different instructions",
      "One instruction at a time",
      "No use of registers"
    ],
  },
  {
    numb: 44,
    question: "Variable length instruction is a feature of:",
    answer: "CISC",
    options: [
      "RISC",
      "CISC",
      "ARM",
      "Harvard architecture"
    ],
  },
  {
    numb: 45,
    question: "Hazards in a pipeline are usually resolved by:",
    answer: "Stalling, forwarding or flushing",
    options: [
      "Increasing pipeline depth",
      "Stalling, forwarding or flushing",
      "Reducing clock speed",
      "Disabling control unit"
    ],
  },
  {
    numb: 46,
    question: "Which technique is most commonly used to reduce data hazard?",
    answer: "Data forwarding",
    options: [
      "Writing NOPs",
      "Branch prediction",
      "Data forwarding",
      "Skipping decode"
    ],
  },
  {
    numb: 47,
    question: "In Instruction pipeline, dependencies between instructions cause:",
    answer: "Pipeline hazards",
    options: [
      "Increased efficiency",
      "Pipeline hazards",
      "Faster clock",
      "Reduced opcode"
    ],
  },
  {
    numb: 48,
    question: "Which does NOT belong to RISC philosophy?",
    answer: "Variable instruction length",
    options: [
      "Large number of registers",
      "Simple instruction set",
      "Single-cycle execution",
      "Variable instruction length"
    ],
  },
  {
    numb: 49,
    question: "Which stage of pipeline stores result back to register/memory?",
    answer: "Write Back",
    options: [
      "Decode",
      "Fetch",
      "Execute",
      "Write Back"
    ],
  },
  {
    numb: 50,
    question: "CISC processors are generally preferred when:",
    answer: "Code density and compatibility are important",
    options: [
      "Code density and compatibility are important",
      "Speed and simplicity are priority",
      "Power consumption is critical",
      "Fixed instruction timing needed"
    ],
  },
];
