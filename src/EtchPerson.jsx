import './Frend.css'
function EtchPerson({frend}){
    const {name, email, phone, website} = frend
    return(
        <div className="box">
            <h1>Name:{name} </h1>
            <p>Email:{email} </p>
            <p>Phone:{phone} </p>
            <p>WebSite: {website}</p>
        </div>
    )
}

export default EtchPerson