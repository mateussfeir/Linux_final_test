const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const questions = [
    {
        question: "1) A pipe allows you to…\n" +
                  "A) …type multiple commands at one prompt.\n" +
                  "B) …send the output of a command to a file.\n" +
                  "C) …send the same input to multiple commands.\n" +
                  "D) …send the output of one command to another.\n",
        answer: 'D'
    },
    {
        question: "2) Channel 2 is:\n" +
                  "A) STDOUT\n" +
                  "B) STDERR\n" +
                  "C) STDIN\n" +
                  "D) STDALL\n",
        answer: 'B'
    },
    {
        question: "3) The grep command:\n" +
                  "A) …will display the line numbers in a file that contain a specified Regular Expression.\n" +
                  "B) …will display all the lines in a file containing the specified Regular Expression.\n" +
                  "C) …will display all the lines that begin with the specified Regular Expression.\n" +
                  "D) …is not case sensitive.\n",
        answer: 'B'
    },
    {
        question: "4) Which of the following commands can be used to scroll through a text file? (choose two)\n" +
                  "A) more\n" +
                  "B) cat\n" +
                  "C) some\n" +
                  "D) less\n",
        answer: ['A', 'D']  // This allows for multiple correct answers
    },
    {
        question: "5) Which command can be used to print line numbers?\n" +
                  "A) num\n" +
                  "B) nl\n" +
                  "C) ln\n" +
                  "D) sort\n",
        answer: 'B'
    },
    {
        question: "6) Which are appropriate editors for writing shell scripts? (choose two)\n" +
                  "A) nano\n" +
                  "B) vi\n" +
                  "C) LibreOffice Writer\n" +
                  "D) Firefox\n" +
                  "E) /bin/bash\n",
        answer: ['A', 'B']  // Multiple correct answers
    },
    {
        question: "7) Which of the following are correct about for and while loops? (choose two)\n" +
                  "A) for loops require a variable over which to iterate\n" +
                  "B) for loops have a test each cycle to determine if it should run again\n" +
                  "C) while loops have a test each cycle to determine if it should run again\n" +
                  "D) for loops operate over a fixed list of items\n" +
                  "E) while loops operate over a fixed list of items\n",
        answer: ['C', 'D']  // Multiple correct answers
    },
    {
        question: "8) What is the correct way to assign the word 'Hello' to a variable?\n" +
                  "A) $A='Hello'\n" +
                  "B) echo 'Hello' > A\n" +
                  "C) A='Hello'\n" +
                  "D) A = 'Hello'\n" +
                  "E) echo $A 'Hello'\n",
        answer: 'C'
    },
    {
        question: "9) What is the correct way to save the current directory to a variable?\n" +
                  "A) pwd $A\n" +
                  "B) pwd | $A\n" +
                  "C) A=`pwd`\n" +
                  "D) A=pwd\n" +
                  "E) A=cwd\n",
        answer: 'C'
    },
    {
        question: "10) What is the meaning of $(( $i + 1)) ?\n" +
                  "A) This runs the command stored in variable i\n" +
                  "B) 1 will be added to the i variable\n" +
                  "C) If i is 0, the loop will stop\n" +
                  "D) This will return the value of the first argument to the script\n" +
                  "E) This will return the value of the next argument to the script\n",
        answer: 'B'
    },
    {
        question: "11) Which of the following are valid CPU types for Intel-based platforms? (choose two)\n" +
                  "A) 24-bit\n" +
                  "B) 32-bit\n" +
                  "C) 48-bit\n" +
                  "D) 64-bit\n",
        answer: ['B', 'D']
    },
    {
        question: "12) Choose all of the following statements that are true in regard to virtual RAM: (choose three)\n" +
                  "A) Virtual RAM is stored in the CPU\n" +
                  "B) Virtual RAM is also called swap space\n" +
                  "C) Virtual RAM is stored on a hard drive\n" +
                  "D) Virtual RAM is used when available physical RAM is low.\n",
        answer: ['B', 'C', 'D']
    },
    {
        question: "13) A division of a hard drive may be referred to as a _______.\n" +
                  "A) label\n" +
                  "B) portion\n" +
                  "C) partition\n" +
                  "D) block\n",
        answer: 'C'
    },
    {
        question: "14) The fdisk command is a tool used for working with the MBR partitioned disks. True or False?\n" +
                  "A) True\n" +
                  "B) False\n",
        answer: 'A'
    },
    {
        question: "15) Which of the following commands will display CPU information? (choose two)\n" +
                  "A) arch\n" +
                  "B) showcpu\n" +
                  "C) lspic\n" +
                  "D) cpuinfo\n" +
                  "E) lscpu\n",
        answer: ['A', 'E']
    },
    {
        question: "16) The Process ID (PID) of the init process is:\n" +
                  "A) varies\n" +
                  "B) 1\n" +
                  "C) 100\n" +
                  "D) 0\n",
        answer: 'B'
    },
    {
        question: "17) What directory typically contains log files?\n" +
                  "A) /usr/log\n" +
                  "B) /proc/loc\n" +
                  "C) /var/log\n" +
                  "D) /log\n",
        answer: 'C'
    },
    {
        question: "18) The /var directory has files that change over time. True or False?\n" +
                  "A) True\n" +
                  "B) False\n",
        answer: 'A'
    },
    {
        question: "19) Which of the following commands will allow you to view all processes on the system? (choose two)\n" +
                  "A) ps -A\n" +
                  "B) ps aux\n" +
                  "C) ps -eLf\n" +
                  "D) ps\n" +
                  "E) ps -ef\n",
        answer: ['A', 'B']
    },
    {
        question: "20) Which directory is the root of the filesystem?\n" +
                  "A) /\n" +
                  "B) /root\n" +
                  "C) /sys\n" +
                  "D) /home\n" +
                  "E) /var\n",
        answer: 'A'
    },
    {
        question: "21) A service is…\n" +
                  "A) …a file that contains configuration information.\n" +
                  "B) …a feature provided by one computer to another.\n" +
                  "C) …another name for a computer’s hostname.\n" +
                  "D) …like an IP address.\n",
        answer: 'B'
    },
    {
        question: "22) Only servers have hostnames. True or False?\n" +
                  "A) True\n" +
                  "B) False\n",
        answer: 'B'
    },
    {
        question: "23) Which of the following are valid IPv4 addresses? (choose two)\n" +
                  "A) 192.301.25.25\n" +
                  "B) 192.105.10.10.2\n" +
                  "C) 192.105.10.10\n" +
                  "D) 10.33.55.77\n",
        answer: ['C', 'D']
    },
    {
        question: "24) Which of the following commands will allow you to log into a remote machine?\n" +
                  "A) netstat\n" +
                  "B) dig\n" +
                  "C) route\n" +
                  "D) ssh\n",
        answer: 'D'
    },
    {
        question: "25) Which files contain user account information? (choose two)\n" +
                  "A) /etc/shadow\n" +
                  "B) /etc/passwords\n" +
                  "C) /etc/group\n" +
                  "D) /etc/passwd\n",
        answer: ['A', 'D']
    },
    {
        question: "26) Which command will display the UID, GID and groups your current user belongs to?\n" +
                  "A) id\n" +
                  "B) Who\n" +
                  "C) about\n" +
                  "D) whoami\n",
        answer: 'A'
    },
    {
        question: "27) Each user belongs to at least one group. True or False?\n" +
                  "A) True\n" +
                  "B) False\n",
        answer: 'A'
    },
    {
        question: "28) Which command will display the users that are currently logged in to the system?\n" +
                  "A) whoami\n" +
                  "B) about\n" +
                  "C) who\n" +
                  "D) id\n",
        answer: 'C'
    },
    {
        question: "29) Which command will display the groups that the root user belongs to?\n" +
                  "A) groups -a\n" +
                  "B) all -t\n" +
                  "C) all\n" +
                  "D) id root\n" +
                  "E) group -r\n",
        answer: 'D'
    },
    {
        question: "30) UIDs 1-499 are usually reserved for what kind of users?\n" +
                  "A) Are not used for user accounts, but for group accounts\n" +
                  "B) System accounts, such as server processes\n" +
                  "C) Log-in (human) users\n" +
                  "D) Remote log-in accounts\n",
        answer: 'B'
    },
    {
        question: "31) Which of the following options for the useradd command allows root to specify the UID to be associated with the account?\n" +
                  "A) -g\n" +
                  "B) -M\n" +
                  "C) -u\n" +
                  "D) -G\n",
        answer: 'C'
    },
    {
        question: "32) Which command can be used to determine a user’s most recent log in?\n" +
                  "A) shell\n" +
                  "B) login\n" +
                  "C) last\n" +
                  "D) history\n",
        answer: 'C'
    },
    {
        question: "33) Which of the following files contains encrypted user password information?\n" +
                  "A) /etc/passwd\n" +
                  "B) /etc/usr\n" +
                  "C) /etc/group\n" +
                  "D) /etc/shadow\n",
        answer: 'D'
    },
    {
        question: "34) Which of the following options for the useradd command allows you to use a different primary group than the default?\n" +
                  "A) -G\n" +
                  "B) -g\n" +
                  "C) -u\n" +
                  "D) -U\n",
        answer: 'B'
    },
    {
        question: "35) Which of the following commands can be used to modify a user?\n" +
                  "A) useradd\n" +
                  "B) moduser\n" +
                  "C) adduser\n" +
                  "D) usermod\n",
        answer: 'D'
    },
    {
        question: "36) Which of the following are methods for setting permissions using the chmod command? (choose two)\n" +
                  "A) primary\n" +
                  "B) symbolic\n" +
                  "C) letter\n" +
                  "D) octal\n",
        answer: ['B', 'D']
    },
    {
        question: "37) The chown command can be used to change the owner and group of a file. True or False?\n" +
                  "A) True\n" +
                  "B) False\n",
        answer: 'A'
    },
    {
        question: "38) The chmod command can be used on a file by:\n" +
                  "A) The file owner\n" +
                  "B) A user that belongs to the files current group\n" +
                  "C) The file owner and root\n" +
                  "D) Only root\n",
        answer: 'C'
    },
    {
        question: "39) The execute permission is never set on files by default. True or False?\n" +
                  "A) True\n" +
                  "B) False\n",
        answer: 'A'
    },
    {
        question: "40) The sticky bit permission…\n" +
                  "A) …changes the group ownership of existing files in a directory.\n" +
                  "B) …prevents others from removing files they don’t own from a common directory.\n" +
                  "C) …prevents others from overwriting files they don’t own in common directories.\n" +
                  "D) …sets the group ownership of any new file created in a directory.\n",
        answer: 'B'
    },
    {
        question: "41) The setuid permission…\n" +
                  "A) …reports the output of a script to the owner.\n" +
                  "B) …allows a command to be run as the file owner.\n" +
                  "C) …prevents the owner of a file from being changed.\n" +
                  "D) …allows files in a directory to be manipulated as by the directory owner.\n",
        answer: 'B'
    },
    {
        question: "42) The setgid permission… (choose two)\n" +
                  "A) …allows a command to be run as the group owner of the file.\n" +
                  "B) …prevents the group owner of a file from being changed.\n" +
                  "C) …allows files created in a directory to be owned by the group that owns the directory.\n" +
                  "D) …can only be set on files.\n",
        answer: ['A', 'C']
    },
    {
        question: "43) Which of the following ls commands, when executed, will only show information about the directory itself? (choose two)\n" +
                  "A) ls -h\n" +
                  "B) ls -d\n" +
                  "C) ls -ld\n" +
                  "D) ld -a\n",
        answer: ['B', 'C']
    }    

];

let score = 0;
let questionIndex = 0;

const askQuestion = () => {
    if (questionIndex < questions.length) {
        const currentQuestion = questions[questionIndex];
        rl.question("\n" + currentQuestion.question, (input) => {
            let userAnswers = input.toUpperCase().split(',').map(ans => ans.trim()).sort();
            let correctAnswers = Array.isArray(currentQuestion.answer) ? currentQuestion.answer.sort() : [currentQuestion.answer];
            if (JSON.stringify(userAnswers) === JSON.stringify(correctAnswers)) {
                console.log("\nCorrect!"); // Corrected from document.WriteLine to console.log
                score++;
            } else {
                console.log("\nIncorrect! Correct answer(s): " + correctAnswers.join(', ') + "\n");
            }
            questionIndex++;
            if (questionIndex < questions.length) {
                askQuestion(); // Ask the next question
            } else {
                const percentage = (score / questions.length) * 100;
                console.log(`Quiz complete! Your score: ${score}/${questions.length} (${percentage.toFixed(2)}%)`);
                rl.close();
            }
        });
    }
};

askQuestion();
