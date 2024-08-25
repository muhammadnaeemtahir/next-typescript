"use client"
import { useEffect, useState } from "react";

// IMPORT COMPONENTS
import Greet from "@/components/typescript/Greet";
import NameObject from "@/components/typescript/NameObject";
import NamesList from "@/components/typescript/NamesList";
import Button from "@/components/typescript/Button";
import Status from "@/components/typescript/Status";
import ChildrenText from "@/components/typescript/ChildrenText";
import ChildrenComponent from "@/components/typescript/ChildrenComponent";
import Input from "@/components/typescript/Input";
import Container from "@/components/typescript/Container";

export default function Home() {
  const [status, setStatus] = useState<"loading" | "success" | "error">("loading")
  const [value, setValue] = useState("")


  const name = {
    fname: "Bruce",
    lname: "Wayne"
  }

  const namesList = [
    {
      id: 1,
      fname: "Bruce",
      lname: "Wayne"
    },
    {
      id: 2,
      fname: "Clark",
      lname: "Kent"
    },
    {
      id: 3,
      fname: "Peter",
      lname: "Parker"
    }
  ]

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>, id: number) => {
    event.preventDefault();
    console.log(id, event);
  }

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value)
    setValue(event.target.value)
  }


  useEffect(() => {
    const timer = setTimeout(() => setStatus("success"), 2000)

    return () => {
      clearTimeout(timer)
    }
  }, []);

  console.log('Home component rendered')

  return (
    <>
      <Greet name="Monty" messageCount={12} isLoggedIn={true} />
      <NameObject name={name} />
      <NamesList names={namesList} />

      <br />
      <Button buttonText="Click Me" handleClick={handleClick} classes="text-xl font-bold bg-indigo-500 rounded text-white py-1 px-2 hover:bg-indigo-400" />
      <br />

      <Status status={status} />
      <ChildrenText>
        Here's some children text.
      </ChildrenText>
      <ChildrenComponent>
        <ChildrenText>
          Here's some children component text.
        </ChildrenText>
      </ChildrenComponent>

      <Input value={value} changeHandler={changeHandler} placeholder="Input one" />

      <Container styles={{
        backgroundColor: 'red',
        padding: '10px',
        borderRadius: '5px',
        width: '200px',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }} />

    </>
  );
}
