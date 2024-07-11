function greetingApp() {
    return {
        name: '',
        language: 'English',
        message: '',
        greet() {
            if (/[^a-zA-Z]/.test(this.name)) {
                this.message = 'Error: Name must contain only letters';
                return;
            }

            const greetings = {
                'English': 'Hello',
                'Spanish': 'Hola',
                'French': 'Bonjour'
            };

            this.message = `${greetings[this.language]}, ${this.name}`;
        },
        reset() {
            this.name = '';
            this.language = 'English';
            this.message = '';
        }
    };
};

function transportFeeApp() {
    return {
        shift: '',
        fee: '',
        calculateFee() {
            const lowerCaseShift = this.shift.toLowerCase();
            if(lowerCaseShift === 'morning') {
                this.fee = 'R20';
            } else if(lowerCaseShift === 'afternoon') {
                this.fee = 'R10';
            } else if(lowerCaseShift === 'nightshift') {
                this.fee = 'free';
            } else {
                this.fee = 'Invalid shift';
            }
        },
        reset() {
            this.shift = '';
            this.fee = '';
        }
    };
};

function airtimeCalculator() {
    return {
        usage: '',
        remainingAmount: '',
        result: '',
        calculateAirtime() {
            const usageArray = this.usage.split(",");
            const costCall = 1.88;
            const costBundles = 12;
            const costSms = 0.75;
            let costTotal = 0;
            for (let i = 0; i < usageArray.length; i++) {
                if (usageArray[i] === "sms") {
                    costTotal += costSms;
                } else if (usageArray[i] === "data") {
                    costTotal += costBundles;
                } else if (usageArray[i] === "call") {
                    costTotal += costCall;
                }
            }
            const currentBalance = this.remainingAmount - costTotal;
            this.result = currentBalance >= 0 ? "R" + currentBalance.toFixed(2) : "R0.00";
        },
        reset() {
            this.usage = '';
            this.remainingAmount = '';
            this.result = '';
        }
    };
};

function wordAnalysisApp() {
    return {
        sentence: '',
        results: {
            longest: '',
            shortest: '',
            totalLength: ''
        },
        analyzeWords() {
            this.results.longest = this.longestWord(this.sentence);
            this.results.shortest = this.shortestWord(this.sentence);
            this.results.totalLength = this.wordLengths(this.sentence);
        },
        reset() {
            this.sentence = '';
            this.results.longest = '';
            this.results.shortest = '';
            this.results.totalLength = '';
        },
        longestWord(sentence) {
            var words = sentence.split(" ");
            var longest = "";
            var longestLength = 0;
            for (var i = 0; i < words.length; i++) {
                var cleanWord = words[i].replace(/[^\w\s]/g, "");
                if (cleanWord.length >= longestLength) {
                    longest = cleanWord;
                    longestLength = cleanWord.length;
                }
            }
            return longest;
        },
        shortestWord(sentence) {
            var words = sentence.split(" ");
            var shortest = "";
            var shortestLength = Infinity;
            for (var i = 0; i < words.length; i++) {
                var cleanWord = words[i].replace(/[^\w\s]/g, "");
                if (cleanWord.length <= shortestLength && cleanWord.length > 0) {
                    shortest = cleanWord;
                    shortestLength = cleanWord.length;
                }
            }
            return shortest;
        },
        wordLengths(sentence) {
            var words = sentence.split(" ");
            var sumLengths = 0;
            for (var i = 0; i < words.length; i++) {
                var cleanWord = words[i].replace(/[^\w\s]/g, "");
                sumLengths += cleanWord.length;
            }
            return sumLengths;
        }
    };
};
