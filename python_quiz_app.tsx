import React, { useState } from 'react';
import { CheckCircle, XCircle, Book, Trophy, RefreshCw } from 'lucide-react';

const QuizApp = () => {
  const questions = [
    // Chapter 6 - File Handling (All 14 MCQs)
    {
      chapter: 6,
      question: "The contents of names.txt is listed here:\nMoana\nCinderella\nTiana\nWhich of the following code blocks will print all of the names in names.txt?",
      options: [
        "I. names = open(\"names.txt\", \"r\")\nfor line in names:\nprint(names)",
        "II. names = open(\"names.txt\", \"r\")\nfor line in names:\nprint(line)",
        "III. names = open(\"names.txt\", \"r\")\nfor line in names:\nprint(\"line\")",
        "I & III both"
      ],
      correct: 1
    },
    {
      chapter: 6,
      question: "File is created if does not exist. If the file exists, file is truncated(past data is lost). Both reading and writing operation can take place. What is the text file mode?",
      options: ["'r'", "'w'", "'w+'", "'a+'"],
      correct: 2
    },
    {
      chapter: 6,
      question: "From following which statement reads some bytes from the file and returns it as a string?",
      options: ["readlines()", "read()", "readline()", "readpara()"],
      correct: 1
    },
    {
      chapter: 6,
      question: "From following which statement reads all the lines from the file and returns in the form of list?",
      options: ["readlines()", "read()", "readline()", "readpara()"],
      correct: 0
    },
    {
      chapter: 6,
      question: "From following which statement write a string in file?",
      options: ["write()", "writeline()", "writelines()", "writepara()"],
      correct: 0
    },
    {
      chapter: 6,
      question: "From following which statement writes a list in a file?",
      options: ["write()", "writeline()", "writelines()", "writepara()"],
      correct: 2
    },
    {
      chapter: 6,
      question: "What happens if no arguments are passed to the seek function?",
      options: ["file position is set to the start of file", "file position is set to the end of file", "file position remains unchanged", "error"],
      correct: 3
    },
    {
      chapter: 6,
      question: "To read 5th line from text file, which of the following statement is true?",
      options: [
        "dt=f.readline(4)\nprint(dt[4])",
        "dt=f.readlines()\nprint(dt[4])",
        "dt=f.read(5)\nprint(dt[3])",
        "dt=f.read(4)\nprint(dt[5])"
      ],
      correct: 1
    },
    {
      chapter: 6,
      question: "What will be the output of the following code snippet?\n\nwith open(\"hello.txt\", \"w\") as f:\n    f.write(\"Hello World how are you today\")\nwith open('hello.txt', 'r') as f:\n    data = f.readlines()\n    for line in data:\n        words = line.split()\n        print(words)",
      options: [
        "['Hello', 'World', 'how', 'are', 'you', 'today']",
        "Hello World how are you today",
        "Hello",
        "Error"
      ],
      correct: 0
    },
    {
      chapter: 6,
      question: "What is printed after executing this python code?\n\nf=open(\"abc.txt\",\"w\")\nx=[1,2,3]\nf.writelines(x)\nf.close()",
      options: ["\"1,2,3\"", "1,2,3", "1", "Error"],
      correct: 3
    },
    {
      chapter: 6,
      question: "Sanjeev has written a program for the file which already exists to read the content from the file. Indicate the line number if error exists in the given below code:\n\na=False #Line 1\nwhile not a: #Line 2\n    try: #Line 3\n        f_n = input(\"Enter file name\") #Line 4\n        i_f = open(f_n, 'r') #Line 5\n    except: #Line 6\n        print(\"Input file not found\") #Line 7",
      options: ["No error", "Line 1", "Line 2", "Line 3"],
      correct: 0
    },
    {
      chapter: 6,
      question: "What will be output of the following code?\n\nA=25\nB=40\ntry:\n    L=[]\n    for i in range(2):\n        L.append(A)\n    print(L[3])\n    L.append(C)\n    iff len(L)<5:\n        print(L)\n    C=34\nexcept IndexError:\n    print(\"Not in range\")\nexcept NameError:\n    print(\"Not defined\")\nexcept SyntaxError:\n    print(\"Write properly\")",
      options: ["Write properly", "Not in range", "Both A&B", "SyntaxError"],
      correct: 3
    },
    {
      chapter: 6,
      question: "What will be the output of the following code?\n\na = True\nb = False\nc = False\nif not a or b:\n    print(1)\nelif not a or not b and c:\n    print(2)\nelif not a or b or not b and a:\n    print(3)\nelse:\n    print(4)",
      options: ["1", "2", "3", "4"],
      correct: 2
    },
    {
      chapter: 6,
      question: "What will be the output of the following code?\n\ntry:\n    a=5\n    print(a)\n    print(b\nexcept:\n    print(\"This is python\")",
      options: ["SyntaxError: invalid syntax", "NameError", "This is python", "AttributeError"],
      correct: 0
    },
    
    // Chapter 7 - Modules (All 10 MCQs)
    {
      chapter: 7,
      question: "To use a module in another module, you must import it using an ________ statement",
      options: ["import", "include", "A AND B", "NONE OF THESE"],
      correct: 0
    },
    {
      chapter: 7,
      question: "Which statement is correct to import all modules from the package",
      options: ["from package import all", "from package import *", "from package include all", "from package include *"],
      correct: 1
    },
    {
      chapter: 7,
      question: "A Python module is a file with the _____ file extension that contains valid Python code.",
      options: [".pym", ".pymodule", ".module", ".py"],
      correct: 3
    },
    {
      chapter: 7,
      question: "Which of the following returns a string that represents the present working directory?",
      options: ["os.getcwd()", "os.cwd()", "os.getpwd()", "os.pwd()"],
      correct: 0
    },
    {
      chapter: 7,
      question: "Which of the following can be used to create a directory?",
      options: ["os.mkdir()", "os.creat_dir()", "os.create_dir()", "os.make_dir()"],
      correct: 0
    },
    {
      chapter: 7,
      question: "Which of the following can be used to remove a directory?",
      options: ["os.rmdir()", "os.rem_dir()", "os.create_dir()", "os.make_dir()"],
      correct: 0
    },
    {
      chapter: 7,
      question: "__________is used to get the list of all files and directories in the specified directory.",
      options: ["os.rmdir()", "os.chdir()", "os.listdir()", "os.make_dir()"],
      correct: 2
    },
    {
      chapter: 7,
      question: "_______method in Python used to change the current working directory to specified path",
      options: ["os.rmdir()", "os.chdir()", "os.listdir()", "os.make_dir()"],
      correct: 1
    },
    {
      chapter: 7,
      question: "How do you delete a file?",
      options: ["del(fp)", "fp.delete()", "os.remove('file')", "os.delete('file')"],
      correct: 2
    },
    {
      chapter: 7,
      question: "if mymod.py file has this code\nA=100\ndef add(a,b):\n    print(\"The Sum:\",a+b)\ndef product(a,b):\n    print(\"The Product:\",a*b)\n\nand if we import that module as follow then what will be output?\nfrom mymod import *\nprint(X)\nadd(10,20)\nproduct(10,20)",
      options: [
        "888\nThe Sum: 30",
        "888\nThe Sum: 30\nThe Product: 200",
        "error",
        "none"
      ],
      correct: 2
    },
    {
      chapter: 7,
      question: "#mod1.py\ndef change(a):\n    b=[x*2 for x in a]\n    print(b)\n\n#mod2.py\ndef change(a):\n    b=[x*x for x in a]\n    print(b)\n\nfrom mod1 import change\nfrom mod2 import change\n\n#main\ns=[1,2,3]\nchange(s)",
      options: ["[2,4,6]", "[2,4,6] [1,4,9]", "[1, 4, 9]", "[1, 2, 3]"],
      correct: 2
    },
    {
      chapter: 7,
      question: "if calc.py file has this code\ndef sum(a,b):\n    print(a+b)\ndef sub(a,b):\n    print(a-b)\ndef mul(a,b):\n    print(a*b)\ndef div(a,b):\n    print(a/b)\ndef power(a,b):\n    print(a**b)\n\nand if we import that module as follow then what will be output?\nimport calc\ncalc.power(5,3)\ncalc.sum(5,7)",
      options: ["15\n12", "243\n12", "125\n12", "Error"],
      correct: 1
    },
    
    // Chapter 8 - OOP (All 29 MCQs)
    {
      chapter: 8,
      question: "Which is not a feature of OOP in general definitions?",
      options: ["Efficient Code", "Code reusability", "Modularity", "Duplicate data"],
      correct: 3
    },
    {
      chapter: 8,
      question: "_____ represents an entity in the real world with its identity and behaviour.",
      options: ["A method", "An object", "A class", "An operator"],
      correct: 1
    },
    {
      chapter: 8,
      question: "What will be the output of the following Python code?\n\nclass test:\n    def __init__(self,a=\"Hello World\"):\n        self.a=a\n    def display(self):\n        print(self.a)\nobj=test()\nobj.display()",
      options: [
        "The program has an error because constructor can't have default arguments",
        "Nothing is displayed",
        "\"Hello World\" is displayed",
        "The program has an error display function doesn't have parameters"
      ],
      correct: 2
    },
    {
      chapter: 8,
      question: "What will be the output of the following Python code?\n\nclass test:\n    def __init__(self,a):\n        self.a=a\n    def display(self):\n        print(self.a)\nobj=test()\nobj.display()",
      options: [
        "Runs normally, doesn't display anything",
        "Displays 0, which is the automatic default value",
        "Error as one argument is required while creating the object",
        "Error as display function requires additional argument"
      ],
      correct: 2
    },
    {
      chapter: 8,
      question: "What is Instantiation in terms of OOP terminology?",
      options: ["Deleting an instance of class", "Modifying an instance of class", "Copying an instance of class", "Creating an instance of class"],
      correct: 3
    },
    {
      chapter: 8,
      question: "Which of the following Python code creates an empty class?",
      options: [
        "class A:\n    return",
        "class A:\n    pass",
        "class A:",
        "It is not possible to create an empty class"
      ],
      correct: 1
    },
    {
      chapter: 8,
      question: "Which of the following is False with respect Python code?\n\nclass Student:\n    def __init__(self,id,age):\n        self.id=id\n        self.age=age\nstd=Student(1,20)",
      options: [
        "\"std\" is the reference variable for object Student(1,20)",
        "id and age are called the parameters",
        "Every class must have a constructor",
        "None of the above"
      ],
      correct: 2
    },
    {
      chapter: 8,
      question: "What will be the output of below Python code?\n\nclass Student:\n    def __init__(self,name,id):\n        self.name=name\n        self.id=id\n        print(self.id)\nstd=Student(\"Simon\",1)\nstd.id=2\nprint(std.id)",
      options: ["1\n1", "1\n2", "2\n1", "2\n2"],
      correct: 1
    },
    {
      chapter: 8,
      question: "What will be the output of below Python code?\n\nclass A():\n    def __init__(self,count=100):\n        self.count=count\nobj1=A()\nobj2=A(102)\nprint(obj1.count)\nprint(obj2.count)",
      options: ["100\n100", "100\n102", "102\n102", "Error"],
      correct: 1
    },
    {
      chapter: 8,
      question: "Which of the following is correct?\n\nclass A:\n    def __init__(self):\n        self.count=5\n        self.count=count+1\na=A()\nprint(a.count)",
      options: ["5", "6", "0", "Error"],
      correct: 3
    },
    {
      chapter: 8,
      question: "What will be the output of below Python code?\n\nclass A:\n    def __init__(self,num):\n        num=3\n        self.num=num\n    def change(self):\n        self.num=7\na=A(5)\nprint(a.num)\na.change()\nprint(a.num)",
      options: ["5\n5", "5\n7", "3\n3", "3\n7"],
      correct: 3
    },
    {
      chapter: 8,
      question: "What will be the output of the following code?\n\nclass Point:\n    def __init__(self):\n        self.x = 0\n        self.y = 0\np = Point()\nq = Point()\nprint(\"Nothing seems to have happened with the points\")",
      options: [
        "p\nq\nNothing seems to have happened with the points",
        "Nothing seems to have happened with the points",
        "<__main__.Point object>\n<__main__.Point object>\nNothing seems to have happened with the points",
        "(0,0)\n(0,0)\nNothing seems to have happened with the points"
      ],
      correct: 1
    },
    {
      chapter: 8,
      question: "What will be the output of the following snippet?\n\nclass Point:\n    def __init__(self):\n        self.x = 0\n        self.y = 0\np = Point()\nq = Point()\nprint(p)\nprint(q)\nprint(p is q)",
      options: [
        "<__main__.Point object>\n<__main__.Point object>\nTrue",
        "FALSE",
        "<__main__.Point object>\n<__main__.Point object>\nFalse",
        "(0,0)\n(0,0)\nFalse"
      ],
      correct: 2
    },
    {
      chapter: 8,
      question: "Will this program will print last statement?\n\ntry:\n    items = ['a', 'b']\n    third = items[1]\n    print(\"This won't print\")\nexcept Exception:\n    print(\"got an error\")\nprint(\"continuing\")",
      options: [
        "This won't print\ngot an error\ncontinuing",
        "got an error\ncontinuing",
        "This won't print\ncontinuing",
        "continuing"
      ],
      correct: 2
    },
    {
      chapter: 8,
      question: "What will be the output of this following snippet?\n\ntry:\n    items = ['a', 'b']\n    third = items[2]\n    print(\"This won't print\")\nexcept Exception as e:\n    print(\"got an error\")\n    print(e)\nprint(\"continuing\")",
      options: [
        "This won't print\ngot an error\ncontinuing",
        "got an error\ncontinuing",
        "got an error\nlist index out of range\ncontinuing",
        "continuing"
      ],
      correct: 2
    },
    {
      chapter: 8,
      question: "When will the else part of try-except-else be executed?",
      options: ["always", "when an exception occurs", "when no exception occurs", "when an exception occurs in to except block"],
      correct: 2
    },
    {
      chapter: 8,
      question: "When is the finally block executed?",
      options: ["when there is no exception", "when there is an exception", "only if some condition that has been specified is satisfied", "always"],
      correct: 3
    },
    {
      chapter: 8,
      question: "What will be the output of the following Python code?\n\ndef foo():\n    try:\n        return 1\n    finally:\n        return 2\nk = foo()\nprint(k)",
      options: ["1", "2", "3", "Error, there is more than one return statement in a single try-finally block"],
      correct: 1
    },
    {
      chapter: 8,
      question: "What will be the output of the following Python code?\n\ndef foo():\n    try:\n        print(1)\n    finally:\n        print(2)\nk = foo()\nprint(k)",
      options: ["1\n2\nNone", "2\n2", "1 2", "2"],
      correct: 0
    },
    {
      chapter: 8,
      question: "What will be the output of the following Python code?\n\ndef getMonth(m):\n    if m<1 or m>12:\n        raise ValueError(\"Invalid\")\n    print(m)\ngetMonth(6)",
      options: ["ValueError", "Invalid", "6", "ValueError(\"Invalid\")"],
      correct: 2
    },
    {
      chapter: 8,
      question: "Which of the following blocks will be executed whether an exception is thrown or not?",
      options: ["except", "else", "finally", "assert"],
      correct: 2
    },
    {
      chapter: 8,
      question: "What will be the output of below Python code?\n\nf=open(\"sample2.txt\",'w')\nf.write(\"Hello World\")\nf.close()\ntry:\n    m=5\n    f=open(\"sample2.txt\")\n    print(m)\n    print(f.read())\n    L=[1,2,3]\n    L[100]\nexcept FileNotFoundError:\n    print(\"File not found\")\nexcept NameError:\n    print(\"Variable not found\")\nexcept Exception:\n    print(\"List index out of range\")",
      options: [
        "5\nHello World\nFile not found",
        "5\nhello world\nList out index of range",
        "5\nHello World\nList out index of range",
        "Hello World\n5\nList index out of range"
      ],
      correct: 2
    },
    {
      chapter: 8,
      question: "What will be the output of the following Python code?\n\nclass Employee:\n    empcount=0\n    def __init__(self,name):\n        self.name=name\n        Employee.empcount+=1\n    def display_count_emp(self):\n        print(\"There are\",Employee.empcount,\"employees\")\nemp1=Employee(\"s1\")\nemp2=Employee(\"h1\")\nemp3=Employee(\"s1\")\nemp2.display_count_emp()",
      options: [
        "There are 3 employees",
        "There are 2 employees",
        "There are 1 employees",
        "There are 0 employees"
      ],
      correct: 0
    },
    {
      chapter: 8,
      question: "What will be the output of the following Python code?\n\ndef simple():\n    for i in range(10):\n        if(i%2==0):\n            yield i\nfor i in simple():\n    print(i,end=\",\")",
      options: ["yield 0,2,4,6,8,", "0,2,4,6,8,", "10", "[0,2,4,6,8,]"],
      correct: 1
    },
    {
      chapter: 8,
      question: "What will be the output of the following code?\n\nclass A:\n    def one(self):\n        return self.two()\n    def two(self):\n        return 'A'\nclass B(A):\n    def two(self):\n        return 'B'\nobj1=A()\nobj2=B()\nprint(obj1.two(),obj2.two())",
      options: ["A A", "A B", "B B", "B A"],
      correct: 1
    },
    {
      chapter: 8,
      question: "What type of inheritance is illustrated in the following Python code?\n\nclass A():\n    pass\nclass B():\n    pass\nclass C(A,B):\n    pass",
      options: ["Multi-level inheritance", "Multiple inheritance", "Hierarchical inheritance", "Single-level inheritance"],
      correct: 1
    },
    {
      chapter: 8,
      question: "What type of inheritance is illustrated in the following Python code?\n\nclass A():\n    pass\nclass B(A):\n    pass\nclass C(B):\n    pass",
      options: ["Multi-level inheritance", "Multiple inheritance", "Hierarchical inheritance", "Single-level inheritance"],
      correct: 0
    },
    {
      chapter: 8,
      question: "What does single-level inheritance mean?",
      options: [
        "A subclass derives from a class which in turn derives from another class",
        "A single superclass inherits from multiple subclasses",
        "A single subclass derives from a single superclass",
        "Multiple base classes inherit a single derived class"
      ],
      correct: 2
    },
    {
      chapter: 8,
      question: "The child's __init__() function overrides the inheritance of the parent's __init__() function.",
      options: ["TRUE", "FALSE", "CAN BE TRUE OR FALSE", "CAN NOT SAY"],
      correct: 0
    }
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [answeredQuestions, setAnsweredQuestions] = useState([]);
  const [quizComplete, setQuizComplete] = useState(false);

  const handleAnswerClick = (index) => {
    if (selectedAnswer !== null) return;
    
    setSelectedAnswer(index);
    setShowResult(true);
    
    const isCorrect = index === questions[currentQuestion].correct;
    if (isCorrect) {
      setScore(score + 1);
    }
    
    setAnsweredQuestions([...answeredQuestions, {
      question: currentQuestion,
      selected: index,
      correct: questions[currentQuestion].correct,
      isCorrect
    }]);
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else {
      setQuizComplete(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setAnsweredQuestions([]);
    setQuizComplete(false);
  };

  if (quizComplete) {
    const percentage = ((score / questions.length) * 100).toFixed(1);
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-2xl p-8">
          <div className="text-center">
            <Trophy className="w-24 h-24 mx-auto text-yellow-500 mb-4" />
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Quiz Complete!</h1>
            <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-xl p-6 mb-6">
              <p className="text-6xl font-bold mb-2">{score}/{questions.length}</p>
              <p className="text-2xl">{percentage}% Score</p>
            </div>
            
            <div className="text-left mb-6 max-h-96 overflow-y-auto">
              <h3 className="text-xl font-semibold mb-4">Review Your Answers:</h3>
              {answeredQuestions.map((ans, idx) => (
                <div key={idx} className={`mb-4 p-4 rounded-lg ${ans.isCorrect ? 'bg-green-50 border-l-4 border-green-500' : 'bg-red-50 border-l-4 border-red-500'}`}>
                  <p className="font-semibold mb-2">Q{idx + 1} (Ch {questions[ans.question].chapter}): {questions[ans.question].question.substring(0, 80)}...</p>
                  <p className="text-sm">
                    Your answer: {questions[ans.question].options[ans.selected]}
                    {!ans.isCorrect && (
                      <span className="block text-green-600 mt-1 font-semibold">
                        ✓ Correct answer: {questions[ans.question].options[ans.correct]}
                      </span>
                    )}
                  </p>
                </div>
              ))}
            </div>
            
            <button
              onClick={handleRestart}
              className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-indigo-700 transition-all flex items-center gap-2 mx-auto"
            >
              <RefreshCw className="w-5 h-5" />
              Restart Quiz
            </button>
          </div>
        </div>
      </div>
    );
  }

  const currentQ = questions[currentQuestion];
  const isCorrect = selectedAnswer === currentQ.correct;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Book className="w-6 h-6" />
                <span className="font-semibold">Chapter {currentQ.chapter}</span>
              </div>
              <div className="text-sm font-medium">
                Score: {score}/{questions.length}
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">Question {currentQuestion + 1} of {questions.length}</span>
              <span className="text-sm">{Math.round(((currentQuestion + 1) / questions.length) * 100)}% Complete</span>
            </div>
            <div className="w-full bg-blue-400 rounded-full h-2 mt-2">
              <div
                className="bg-white rounded-full h-2 transition-all duration-300"
                style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
              />
            </div>
          </div>

          {/* Question */}
          <div className="p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 whitespace-pre-wrap">
              {currentQ.question}
            </h2>

            {/* Options */}
            <div className="space-y-4">
              {currentQ.options.map((option, index) => {
                let bgColor = 'bg-gray-50 hover:bg-gray-100';
                let borderColor = 'border-gray-200';
                let icon = null;

                if (showResult) {
                  if (index === currentQ.correct) {
                    bgColor = 'bg-green-50';
                    borderColor = 'border-green-500';
                    icon = <CheckCircle className="w-6 h-6 text-green-600" />;
                  } else if (index === selectedAnswer) {
                    bgColor = 'bg-red-50';
                    borderColor = 'border-red-500';
                    icon = <XCircle className="w-6 h-6 text-red-600" />;
                  }
                } else if (selectedAnswer === index) {
                  bgColor = 'bg-blue-50';
                  borderColor = 'border-blue-500';
                }

                return (
                  <button
                    key={index}
                    onClick={() => handleAnswerClick(index)}
                    disabled={selectedAnswer !== null}
                    className={`w-full p-4 text-left rounded-xl border-2 transition-all ${bgColor} ${borderColor} ${selectedAnswer === null ? 'cursor-pointer' : 'cursor-not-allowed'} flex items-center justify-between`}
                  >
                    <span className="whitespace-pre-wrap flex-1">{option}</span>
                    {icon && <span className="ml-4">{icon}</span>}
                  </button>
                );
              })}
            </div>

            {/* Result Message */}
            {showResult && (
              <div className={`mt-6 p-4 rounded-lg ${isCorrect ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                <p className="font-semibold">
                  {isCorrect ? '✓ Correct!' : '✗ Wrong!'}
                </p>
                {!isCorrect && (
                  <p className="text-sm mt-1">
                    The correct answer is: {currentQ.options[currentQ.correct]}
                  </p>
                )}
              </div>
            )}

            {/* Next Button */}
            {showResult && (
              <button
                onClick={handleNext}
                className="mt-6 w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-indigo-700 transition-all"
              >
                {currentQuestion < questions.length - 1 ? 'Next Question' : 'Finish Quiz'}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizApp;