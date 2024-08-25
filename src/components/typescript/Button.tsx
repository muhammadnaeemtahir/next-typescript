type ButtonProps = {
    buttonText: string,
    classes: string,
    handleClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void
}

const Button = ({ buttonText, classes, handleClick }: ButtonProps) => <button onClick={event => handleClick(event, 1)} className={classes}>{buttonText}</button>

export default Button