export function LoginForm() {
    return (
        <>
        <section className="login">
            <div>
            <h3>Log In</h3>
            </div>
             <div>
                <form className="card">
                    <label htmlFor="username">Username</label>
                    <input className="form-control" id="username" type="text"/>
                    <label htmlFor="password">Password</label>
                    <input className="form-control" id="password" type="text"/>
                    <button className="btn btn-primary m-2">Submit</button>
                </form>
            </div>
    </section>
        </>
    )
}