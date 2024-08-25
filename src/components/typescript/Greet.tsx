type GreetProps = {
    name?: string,
    messageCount?: number,
    isLoggedIn?: boolean,
}

const Greet = ({ name, messageCount = 0, isLoggedIn }: GreetProps) => {

    if (!isLoggedIn) {
        return <h1 className="text-xl font-bold">Hello, Guest!</h1>
    }

    return (
        <>
            <center>
                <h1 className="text-xl font-bold">Hello {name}, you have {messageCount} new messages. </h1>
            </center>
        </>
    )
}

export default Greet