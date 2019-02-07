calcular = () => {
    const interest = new Interest();
    interest.showResult();
}

urlParams = () => {
    const url_string = window.location.href;
    const url = new URL(url_string);
    const params = url.searchParams;

    let isValid = validateParams(params);
    
    if (isValid) {
        let interest = new Interest(params.get("amount"), params.get("rate"), params.get("rate_units"),
            params.get("time"), params.get("time_units"));
        interest.showResult();
    }
}

validateParams = (params) => {
    if (!params.get("amount") || !params.get("rate") || !params.get("rate_units") ||
        !params.get("time") || !params.get("time_units"))
        return false;
    
    return true;
}

document.addEventListener('DOMContentLoaded', urlParams, false);