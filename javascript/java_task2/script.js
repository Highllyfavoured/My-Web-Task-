function getGrade() {
            let score = prompt("Enter your grade");

            if (score >= 100) {
                console.log("Score:", score," -> Outstanding! Grade: A+");
            } else if (score >= 90) {
                console.log("Score:", score," -> Grade: A");
            } else if (score >= 80) {
                console.log("Score:", score," -> Grade: B");
            } else if (score >= 70) {
                console.log("Score:", score," -> Grade: C");
            } else if (score >= 60) {
                console.log("Score:", score," -> Grade: D");
            } else {
                console.log("Score:", score," -> Grade: F");
            }
                }

        function calculatePrice() {
            let price = prompt("Enter the price of goods");
            let customerType = prompt("Are you a student, senior or employee");
            let isFirstPurchase = confirm("Is this your first purchase?");
            let discount = 0;

            if (customerType === "student") {
                discount = 0.10;
            } else if (customerType === "senior") {
                discount = 0.15;
            }else if (customerType === "employee") {
                discount = 0.20;
            }

            if (isFirstPurchase) {
                discount = 0.05;
            }

            let finalPrice = price * (1 - discount);
            return {
                originalPrice: price,
                discountpercent: discount * 100,
                finalPrice: finalPrice.toFixed(2)
            };

            let result = calculatePrice();
            console.log("Price calculation:");
            console.log(`Original: $${result.originalPrice}`);
            console.log(`Discount: ${result.discountPercent}%`);
            console.log(`Final price: $${finalPrice}`);

            console.log(calculatePrice())
                }

        function weatherAdvice() {
           let temperature = prompt("What is the temperature in your area");
            let isRaining = confirm("Is it raining?");

             if (temperature <= 32 && isRaining) {
                console.log("Freezing rain! Stay inside!");  
             } else if (temperature <= 32) {
                console.log("Very cold, wear a heavy coat.");  
             } else if (temperature >=32) {
                console.log("Chilly, bring a jacket.");
             } else if (temperature <= 60) {
                console.log("Nice weather!");
             } else if (temperature > 80) 
                console.log("It's hot, stay hydrated!")

            isRaining? "Bring an umbrella" : "No umbrella needed";
        }

        function atm() {
            let balance = Number(prompt("Enter your balance:"))
            let action = prompt("Do you want to withdraw or deposit?")
            let amount = prompt("Enter amount to withdraw or deposit:")

                if (action === "withdraw") {
                    if (amount > 500) {
                    console.log(`Withdrawal limit exceeded. You can only withdraw up to 500 at once.`);
                    }
                    if (amount > balance) {
                    console.log(`Insufficient funds. Your balance is ${balance}.`);
                    }
                    balance -= amount;
                    console.log(`Withdrawal successful. New balance: ${balance}`);
                    } 
        
            else if (action === "deposit") {
                balance += amount;
                console.log(`Deposit successful. New balance: ${balance}`);
            } 
            else {
                console.log(`Invalid action. Please choose "withdraw" or "deposit"`);
            }
            }

        function personalAssistant() {
            let time = prompt("Enter time in hours");
            let weather = prompt("Is it a sunny, cloudy or rainy day?")
            let dayType = prompt("is it a workday, weekend, holiday?")

            // if (time >=12noon)
        }