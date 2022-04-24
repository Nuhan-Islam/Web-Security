function getVal() {
    const val = document.querySelector('input').value;
     console.log(val);

    let result = '';
    
    let requestOptions = {
        method: 'GET',
        redirect: 'follow',
    };

    if (data) {
        document.getElementById('data').style.display = 'block';
    } 

    fetch(
        `https://data.similarweb.com/api/v1/data?domain=${val}`,
        requestOptions
    )
        .then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                throw document.getElementById('result').innerHTML = 'Malicious Site';
            }
        })
        .then((data) => {
            console.log(data);
            BounceRate = data.Engagments.BounceRate;
            PagePerVisit = data.Engagments.PagePerVisit;
            TimeOnSite = data.Engagments.TimeOnSite;
            Visits = data.Engagments.Visits;
                     
            if (BounceRate >= 0.15 && BounceRate <= 20 ){
                console.log('safe')

                if(PagePerVisit >= 1 && PagePerVisit <= 15){
                    console.log('safe')
            
                    if (TimeOnSite >= 30 && TimeOnSite <= 800){
                        console.log('safe')
            
                        if(Visits >= 999){
                            console.log('safe')
                            document.getElementById('result').innerHTML = 'This site is secured'
                        }
                        else{
                            console.log('Malicious Site')
                        }
                    }
                    else{
                        console.log('Malicious Site')
                    }
            
                }
                else{
                    console.log('Malicious Site')
                }
            }
            else {
                console.log("Malicious Site")
                document.getElementById('result').innerHTML = "Malicious Site"
            }
        })
        .catch((error) => console.log('FETCH ERROR:', error));
}