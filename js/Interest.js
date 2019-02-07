class Interest {
    constructor (amount, rate, rate_units, time, time_units) {
        this.amount = amount;
        this.rate = rate;
        this.rate_units = rate_units;
        this.time = time;
        this.time_units = time_units;
    }
    
    showResult () {
        const element = document.getElementById("main");
        element.classList.add("hidden");
        const element2 = document.getElementById("result");
        element2.classList.remove("hidden");

        const span = document.getElementById("interest");
        let sum = this.getCalc();
        span.textContent = sum;
    }

    getCalc () {
        if(this.rate_units == this.time_units) {
            this.rate = this.rate * this.time;
        }
        else if	(this.rate_units == "month" && this.time_units == "year")
        {
            this.rate = (this.rate * 12) * this.time;
        }
        else
        {
            this.rate = (this.rate / 12) * this.time;
        }

        return (this.amount * this.rate) / 100;
    }
}
