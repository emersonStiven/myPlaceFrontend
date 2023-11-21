import React, {useState} from "react";

export const useForm = (initialForm, validateForm)=>{

    const[form, setForm] = useState(initialForm);
    const[loading, setLoading] = useState(false);
    const[error, setError] = useState({});
    const[response, setResponse] = useState(false);

    const handleChange = (e) =>{
        setForm({
            ...form,
            [e.target.name]:e.target.value
        })
    }
    const handleOnBlur = (e) =>{
        handleChange(e)
        setError(validateForm(form))
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        if(Object.keys(error).length === 0){
            let url = new URL("http://localhost:8082/register")
            let content = JSON.stringify(form);
            console.log(content)
             let h = new Headers();
            h.append("Accept", "application/json");
            h.append("Content-type", "application/json");
            // h.append("Accept-Language", "en-US");
            h.append("Content-Length", content.length);
            // h.append("Cache-Control","no-cache");
            // h.append("Access-Control-Allow-Origin","3bb1011f-5ae7-4a8a-8b17-4116907d12c5")
            //h.append("X-XSRF-TOKEN", localStorage.getItem("X-XSRF-TOKEN"))
     

            let request = new Request(url, {
                method:"POST",
                headers:h,
                body: content,
            })
            setLoading(true);
            fetch(request)
            .then(res =>{
                if(!res.ok){
                    console.log(res.status)
                    throw Error(res.statusText)
                }
                return res.json()
            })
            .then(res =>{
                localStorage.setItem("Authentication", res)
                console.log(res)
                setResponse(true);
                setLoading(false);
            })
            .catch(res => {
                setResponse(false);
            })

        }else{
            return
        }
    }

    return [handleChange, handleOnBlur, handleSubmit, loading, error, response, form]



}