import React from 'react'

export default function Login(props) {

    return (
        <div>
            <h1>Login</h1>
            <form onClick={props.handleSubmit}> 
                <input type="text" placeholder="username" name="username"/>
                <input type="submit" value="submit"/>

            </form>
        </div>
    )
}
