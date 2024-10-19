export default function Friend({friend}){
    const {name, email, website} = friend;
    return(
        <div className="box">
            <h3>Name: {name}</h3>
            <p>Email: {email}</p>
            <p>Website: {website}</p>
        </div>
    )
}