const showModal = ()=>{
        const modal = document.getElementById('modal');
        modal.classList.toggle("hidden");

        const skrim = document.getElementById('skrim');
        skrim.classList.toggle("hidden");
    
}

const submitContact = ()=>{
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const company = document.getElementById('company').value;

        const data = {
                name,
                email,
                company
        }

        const url = "https://api.hearty.xyz/contact-us";

        fetch(url, {
                method: "POST",
                headers: {
                        "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
        })
        .then(showModal());
}

const checkEligibility = (e)=>{
        e.preventDefault();
        document.getElementById('checking').style.display = "block";
        const li = document.getElementById('li');
        const value = li.value;

        function validateUrl(value) {
                const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                return re.test(String(value).toLowerCase());
        }

        const valid = validateUrl(value);

        if(!valid) {
                document.getElementById('checking').style.display = "none";
                document.getElementById('invalid').style.display = "block";
                setTimeout(() => {
                        document.getElementById('invalid').style.display = "none";
                }, 5000);

                return false;
        }

        setTimeout(() => {
                document.getElementById('checking').style.display = "none";
                document.getElementById('verified').style.display = "block";

                setTimeout(() => {
                        window.location.href=`https://app.behearty.co/secret/tunnel?email=${value}`
                }, 1500);
        }, 2000);
}